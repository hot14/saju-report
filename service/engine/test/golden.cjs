/**
 * SAJU 엔진 골든 테스트
 * =====================
 * 실행: npm test  (또는 node test/golden.cjs)
 *
 * 케이스 구성과 출처 원칙:
 *  - §1 외부 검증 앵커: 공개 인물 3건(생일은 위키백과/인물DB, 간지 구조는
 *    공개 만세력·사주 칼럼과 대조) + manseryeok README 예제 + 수학 유도 앵커.
 *  - §2~§5 절기/경도/서머타임/시각미상 경계. 기대값은 (a) 천문 상수로 손계산
 *    검증한 것(주석에 산식) 또는 (b) 라이브러리 실측 후 동결한 것.
 *    (b)는 회귀 방지용이며 주석에 "동결"로 표시한다.
 *  - §6~§8 결정론 불변식(오호둔원·60갑자·시간 공식)과 투명성 중간값, 함정 회귀.
 *  - §9 오류 처리.
 *
 * manseryeok v2.0.0 (npm), KASI 정본 데이터 기반. 실행 로그는 통과 수와 함께
 * 최종 요약으로 출력된다.
 */
'use strict';

const path = require('path');
const manseryeok = require('manseryeok');
const { computeChart, sexagenaryIndex, EngineError } = require(
  path.join(__dirname, '..', 'src', 'engine.cjs')
);

let pass = 0;
let fail = 0;
const failures = [];

function check(name, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) { pass++; return; }
  fail++;
  failures.push(`${name}\n      기대: ${e}\n      실제: ${a}`);
}

function checkTrue(name, cond, detail) {
  if (cond) { pass++; return; }
  fail++;
  failures.push(`${name}${detail ? ': ' + detail : ''}`);
}

function checkApproxEq(name, actual, expected, tol) {
  if (typeof actual === 'number' && Math.abs(actual - expected) <= tol) { pass++; return; }
  fail++;
  failures.push(`${name}: 기대 ${expected}±${tol}, 실제 ${actual}`);
}

function checkThrow(name, fn) {
  try {
    fn();
    fail++;
    failures.push(`${name}: 예외가 발생하지 않음`);
  } catch (e) {
    if (e instanceof EngineError || e instanceof RangeError || e instanceof TypeError) pass++;
    else { fail++; failures.push(`${name}: 예상 밖 예외: ${e}`); }
  }
}

/** 서울 기본 입력 헬퍼 (기본값: lat 37.5665, lon 126.978, KST+540). */
function Seoul(dateISO, timeISO, extra) {
  return computeChart(Object.assign({ dateISO, timeISO }, extra));
}

// ===========================================================================
// §1. 외부 검증 앵커
// ===========================================================================

// 1-1. 이재용(삼성전자 회장): 1968-06-23 양력, 출생 시각 비공개.
//   생일: 한국인물정보 (koreawho.com/idxno=6118) "born on June 23, 1968, in Seoul".
//   간지 구조 戊申년 戊午월 甲子일: 공개 만세력 다수 일치
//   (starminkyung.tistory.com/30 "무신년 무오월 갑자일",
//    60saju.tistory.com/100, naver fortunewaves 포스트,
//    프로젝트 사전 리서치 확인분과도 일치). 시각 비공개라 시주는 단정 불가 → noHour 모드.
const c11 = Seoul('1968-06-23', null);
check('1-1a 이재용 년주 戊申', c11.yearPillar.hanja, '戊申');
check('1-1b 이재용 월주 戊午', c11.monthPillar.hanja, '戊午');
check('1-1c 이재용 일주 甲子', c11.dayPillar.hanja, '甲子');
check('1-1d 이재용 시주 null (시각 비공개)', c11.hourPillar, null);
check('1-1e 이재용 mode noHour', c11.mode, 'noHour');

// 1-2. 문재인(제19대 대통령): 1953-01-24 양력, 시각 비공개.
//   출처: 시사저널 2018-10-18 한가경 칼럼 "임진(壬辰)년 계축(癸丑)월 을해(乙亥)일
//   사주… 1953년 1월 24일(양력)".
//   입춘(1953-02-04) 전 출생이므로 년주가 1952년의 壬辰으로 보정되는지가 핵심.
const c12 = Seoul('1953-01-24', null);
check('1-2a 문재인 년주 壬辰 (입춘 전 보정)', c12.yearPillar.hanja, '壬辰');
check('1-2b 문재인 월주 癸丑', c12.monthPillar.hanja, '癸丑');
check('1-2c 문재인 일주 乙亥', c12.dayPillar.hanja, '乙亥');

// 1-3. 박근혜(제18대 대통령): 1952-02-02 양력, 인시(04:00대) 출생.
//   생일: 위키백과 "1952년 2월 2일". 간지: Sunday Journal USA 2012-12-16 대선특집
//   "1952년 2월 2일 인시생, 신묘년 신축월 무인일 갑인시".
//   입춘(1952-02-05) 3일 전이라 년주가 辛卯(1951)로 보정되는 경계 케이스.
//   시간 천간 검산: 일간 戊(idx 4) → (4%5)*2 + 寅(idx 2) = 甲 → 甲寅 일치.
const c13 = Seoul('1952-02-02', '04:00');
check('1-3a 박근혜 년주 辛卯 (입춘 전 보정)', c13.yearPillar.hanja, '辛卯');
check('1-3b 박근혜 월주 辛丑', c13.monthPillar.hanja, '辛丑');
check('1-3c 박근혜 일주 戊寅', c13.dayPillar.hanja, '戊寅');
check('1-3d 박근혜 시주 甲寅', c13.hourPillar.hanja, '甲寅');

// 1-4. 일주 수학 유도 앵커: 1949-10-01 (중화인민공화국 선포일).
//   1968-06-23 = 甲子일이 외부 검증됐고(1-1), 두 날짜의 일수 차이는 정확히
//   6840일 = 114 × 60주기. 따라서 1949-10-01도 반드시 甲子일이어야 한다.
//   (역으로 유명한 "1949-10-01 甲子일" 설과도 부합: 유도 근거는 이 산식.)
const diffDays = (Date.UTC(1968, 5, 23) - Date.UTC(1949, 9, 1)) / 86400000;
check('1-4a 두 앵커 일수 차 6840', diffDays, 6840);
checkTrue('1-4b 6840은 60의 배수', diffDays % 60 === 0);
const c14 = Seoul('1949-10-01', '12:00');
check('1-4c 1949-10-01 일주 甲子 (유도값)', c14.dayPillar.hanja, '甲子');

// 1-5. manseryeok README 기본 예제: 1992-10-24 05:30 (진태양시 보정 끔).
//   README: "임신연주, 경술월주, 계유일주, 을묘시주".
const c15 = Seoul('1992-10-24', '05:30', { trueSolarTime: false });
check('1-5 README 예제 4주', c15.fourPillarsHanja, '壬申 庚戌 癸酉 乙卯');

// 1-6. manseryeok README 진태양시 예제: 1990-05-15 07:05 서울(126.978).
//   README: "07:05 KST → 서울 진태양시 약 06:33 → 진시가 아닌 묘시".
//   동결값: 진태양시 06:36 (README의 "약 06:33"은 근사치, 3분 내 일치).
const c16 = Seoul('1990-05-15', '07:05', { longitude: 126.978 });
check('1-6a 진태양시 적용 시지 묘', c16.hourPillar.branch.hanja, '卯');
check('1-6b 진태양시 시계', c16.trueSolarTimeClock, '06:36');
check('1-6c 보정 미적용 시와 시지 다름(진시 방지)', c16.hourPillar.branch.hanja === '辰', false);

// 1-7~1-9. manseryeok README 야자시 관법 예제: 2024-03-10 23:30 (보정 끔).
//   README: midnight → 계유일 임자시 / jasi → 갑술일 갑자시 / splitJasi → 계유일 갑자시.
const c17 = Seoul('2024-03-10', '23:30', { trueSolarTime: false });
check('1-7 midnight: 癸酉日 壬子時', c17.fourPillarsHanja, '甲辰 丁卯 癸酉 壬子');
const c18 = Seoul('2024-03-10', '23:30', { trueSolarTime: false, dayBoundary: 'jasi' });
check('1-8 jasi: 甲戌日 甲子時', c18.fourPillarsHanja, '甲辰 丁卯 甲戌 甲子');
const c19 = Seoul('2024-03-10', '23:30', { trueSolarTime: false, dayBoundary: 'splitJasi' });
check('1-9 splitJasi: 癸酉日 甲子時', c19.fourPillarsHanja, '甲辰 丁卯 癸酉 甲子');

// ===========================================================================
// §2. 절기 경계
// ===========================================================================

// 2-1. 입춘 2024 절입: 2024-02-04 17:27 KST (라이브러리 절입표, KASI 분 단위 일치).
//   17:00 → 癸卯년 乙丑월 / 18:00 → 甲辰년 丙寅월 (년주·월주 동시 전환).
check('2-1a 입춘 17:00 (전)', Seoul('2024-02-04', '17:00').fourPillarsHanja, '癸卯 乙丑 戊戌 庚申');
check('2-1b 입춘 18:00 (후)', Seoul('2024-02-04', '18:00').fourPillarsHanja, '甲辰 丙寅 戊戌 辛酉');

// 2-2. 입춘 당일 + 시각 미상 → 정오 가정(입춘 17:27 전)이라 전년 간지 유지 + 경계 경고.
const c22 = Seoul('2024-02-04', null);
check('2-2a 시각미상 입춘당일 3주', c22.fourPillarsHanja, '癸卯 乙丑 戊戌');
checkTrue('2-2b 절기 경계 플래그', c22.solarTermInfo.nearSolarTermBoundary === true);
checkTrue('2-2c 위험 노트에 연주 경고 포함', /연주/.test(c22.solarTermInfo.riskNote));
check('2-2d 다음 절기 = 입춘', c22.solarTermInfo.next.name, '입춘');
check('2-2e 입춘까지 327분', c22.solarTermInfo.next.minutesUntil, 327);

// 2-3. 망종 2024 절입: 2024-06-05 13:10 KST. 12:00 → 己巳월, 14:00 → 庚午월 (월지+월간 전환).
check('2-3a 망종 12:00 (전)', Seoul('2024-06-05', '12:00').monthPillar.hanja, '己巳');
check('2-3b 망종 14:00 (후)', Seoul('2024-06-05', '14:00').monthPillar.hanja, '庚午');

// 2-4. 기준 케이스(1985-03-21 14:30)의 절기 정보: 춘분 소속, 다음 전환일 청명.
const c24 = Seoul('1985-03-21', '14:30');
check('2-4a 당시 절기', c24.solarTermInfo.current.name, '춘분');
check('2-4b 다음 절기(전환일)', c24.solarTermInfo.next.name, '청명');
check('2-4c 청명 절입 KST', c24.solarTermInfo.next.kst, '1985-04-05T05:14+09:00');
check('2-4d 기준 케이스는 경계 아님', c24.solarTermInfo.nearSolarTermBoundary, false);

// 2-5. 1985 입춘(1985-02-04 05:19 KST 전후) 연주 경계.
check('2-5a 입춘 전야 1985-02-03 23:00 → 甲子년', Seoul('1985-02-03', '23:00').yearPillar.hanja, '甲子');
check('2-5b 입춘 다음날 1985-02-05 12:00 → 乙丑년', Seoul('1985-02-05', '12:00').yearPillar.hanja, '乙丑');

// ===========================================================================
// §3. 경도별·시간대
// ===========================================================================

// 3-1~3-4. 같은 벽시시각(1985-03-21 14:30 KST, 즉 UTC 05:30), 경도만 변경.
//   진태양시 = UTC + 경도×4분 + 균시차(-7.26분, 1985-03-21 실측):
//     서울 126.978  → 05:30 + 8:27.9 - 0:07.3 = 13:50.6 → 미시(13-15) → 辛未
//     뉴욕 -74.006  → 05:30 - 4:56.0 - 0:07.3 = 00:26.7 → 자시(23-01) → 甲子
//     시드니 151.209 → 05:30 +10:04.8 - 0:07.3 = 15:27.5 → 신시(15-17) → 壬申
//     런던 -0.127   → 05:30 - 0:00.5 - 0:07.3 = 05:22.2 → 묘시(05-07) → 丁卯
//   시간 천간은 일간 己(idx5) → (5%5)*2 + 시지 → 각각 검산 일치.
check('3-1 서울(126.978) 시주 辛未', Seoul('1985-03-21', '14:30', { longitude: 126.978 }).hourPillar.hanja, '辛未');
check('3-2 뉴욕(-74.006) 시주 甲子', Seoul('1985-03-21', '14:30', { longitude: -74.006 }).hourPillar.hanja, '甲子');
check('3-3 시드니(151.209) 시주 壬申', Seoul('1985-03-21', '14:30', { longitude: 151.209 }).hourPillar.hanja, '壬申');
check('3-4 런던(-0.127) 시주 丁卯', Seoul('1985-03-21', '14:30', { longitude: -0.127 }).hourPillar.hanja, '丁卯');
// 년·월주는 절기(절대 순간) 판정이라 경도와 무관: 4개 경도 모두 동일해야 함.
for (const [city, lon] of [['서울', 126.978], ['뉴욕', -74.006], ['시드니', 151.209], ['런던', -0.127]]) {
  const c = Seoul('1985-03-21', '14:30', { longitude: lon });
  check(`3-x 경도 무관 연월일주 불변 (${city})`, `${c.yearPillar.hanja} ${c.monthPillar.hanja} ${c.dayPillar.hanja}`, '乙丑 己卯 己未');
}

// 3-5~3-7. 동일 순간(1990-05-15T01:00Z), 다른 민간시 표기.
//   서울 10:00 KST(+540) = 뉴욕 5/14 21:00 EDT(-240) = 런던 5/15 02:00 BST(+60).
//   년·월주는 동일해야 하고, 일·시주는 지방 진태양시 날짜가 달라질 수 있다
//   (뉴욕은 진태양시 5/14 20:07 → 전날 일주 己卯, 서울·런던은 5/15 → 庚辰).
const s35 = Seoul('1990-05-15', '10:00', { longitude: 126.978 });
const s36 = computeChart({ dateISO: '1990-05-14', timeISO: '21:00', latitude: 40.7128, longitude: -74.006, tzOffsetMinutes: -240 });
const s37 = computeChart({ dateISO: '1990-05-15', timeISO: '02:00', latitude: 51.5074, longitude: -0.127, tzOffsetMinutes: 60 });
check('3-5a 서울 instant', s35.instantUTC, '1990-05-15T01:00:00.000Z');
check('3-5b 뉴욕 instant 동일', s36.instantUTC, s35.instantUTC);
check('3-5c 런던 instant 동일', s37.instantUTC, s35.instantUTC);
check('3-6 연월주 3개 경로 불변', [s35, s36, s37].map((c) => `${c.yearPillar.hanja} ${c.monthPillar.hanja}`), ['庚午 辛巳', '庚午 辛巳', '庚午 辛巳']);
check('3-7a 일주: 서울 庚辰 / 뉴욕 己卯(지방날짜 전날)', [s35.dayPillar.hanja, s36.dayPillar.hanja], ['庚辰', '己卯']);
check('3-7b 시주: 서울 辛巳(사시) / 뉴욕 甲戌(술시)', [s35.hourPillar.hanja, s36.hourPillar.hanja], ['辛巳', '甲戌']);

// 3-8. 동일 순간 + 동일 경도, 다른 벽시시각·오프셋 표현 → 4주 완전 동일.
//   10:00 KST(+540) = 11:00 UTC+11(+600), 둘 다 UTC 01:00.
const s38a = Seoul('1990-05-15', '10:00', { tzOffsetMinutes: 540 });
const s38b = Seoul('1990-05-15', '11:00', { tzOffsetMinutes: 600 });
check('3-8 오프셋 표현 불변', s38b.fourPillarsHanja, s38a.fourPillarsHanja);

// 3-9. 런던 02:00 BST: 진태양시 01:03, 날짜 이동 없음(자정 통과 없음).
const s39 = computeChart({ dateISO: '1990-05-15', timeISO: '02:00', longitude: -0.127, tzOffsetMinutes: 60 });
check('3-9a 런던 진태양시', s39.trueSolarTimeClock, '01:03');
check('3-9b 날짜 이동 없음', s39.trueSolarDayShift, 0);

// ===========================================================================
// §4. 서머타임 (명시적 오프셋 계약)
// ===========================================================================

// 4-1. 한국 서머타임 1988 (1988-05-08 02:00 ~ 10-09 03:00, IANA Asia/Seoul).
//   1988-07-01 12:00은 KDT(UTC+10)가 유효 → 민간시 기록이면 tz=600이 정확한 해석.
const c41 = Seoul('1988-07-01', '12:00', { tzOffsetMinutes: 600 });
check('4-1a KDT(+600) 해석 instant', c41.instantUTC, '1988-07-01T02:00:00.000Z');
check('4-1b KDT 해석 4주', c41.fourPillarsHanja, '戊辰 戊午 丁巳 乙巳');

// 4-2. 1988-07-01 12:00은 한국 서머타임 구간이다: 기록된 시계 시각을 엔진이 자동으로
//   표준시로 되돌려 계산한다(순간 02:00Z). 명시적으로 +600을 넣은 c41과 동일 순간이어야 하고,
//   옵션을 끄면 구동작(KST 해석)으로 돌아간다.
const c42 = Seoul('1988-07-01', '12:00', { tzOffsetMinutes: 540 });
check('4-2a 서머타임 자동 적용 instant', c42.instantUTC, '1988-07-01T02:00:00.000Z');
check('4-2b 자동 적용 시주', c42.hourPillar.hanja, c41.hourPillar.hanja);
checkTrue('4-2c 명시 오프셋(+600)과 동일 순간',
  (new Date(c42.instantUTC) - new Date(c41.instantUTC)) === 0);
checkTrue('4-2d dstApplied 기록', c42.dst.applied === true && c42.dst.offsetMinutes === 60);
checkTrue('4-2e 옵션 off 시 구동작(순간 03:00Z)',
  Seoul('1988-07-01', '12:00', { tzOffsetMinutes: 540, applyHistoricalDst: false }).instantUTC === '1988-07-01T03:00:00.000Z');

// 4-3. 뉴욕 2024 서머타임 시작일(2024-03-10 02:00 EST → 03:00 EDT, 02:xx대 없음).
//   01:30은 EST(-300)가 유효.
const c43 = computeChart({ dateISO: '2024-03-10', timeISO: '01:30', latitude: 40.7128, longitude: -74.006, tzOffsetMinutes: -300 });
check('4-3 01:30 EST instant', c43.instantUTC, '2024-03-10T06:30:00.000Z');

// 4-4. 03:00은 EDT(-240)가 유효 (전환 직후).
const c44 = computeChart({ dateISO: '2024-03-10', timeISO: '03:00', latitude: 40.7128, longitude: -74.006, tzOffsetMinutes: -240 });
check('4-4a 03:00 EDT instant', c44.instantUTC, '2024-03-10T07:00:00.000Z');
check('4-4b 전환 직후 두 출생의 시지 축시 유지', [c43.hourPillar.branch.hanja, c44.hourPillar.branch.hanja], ['丑', '丑']);

// ===========================================================================
// §5. 시각 미상 모드 (시주 부재)
// ===========================================================================

// 5-1. 기본 noHour 케이스.
const c51 = Seoul('1985-03-21', null);
check('5-1a hourPillar null', c51.hourPillar, null);
check('5-1b pillars.hour null', c51.pillars.hour, null);
check('5-1c 삼주 보존', c51.fourPillarsHanja, '乙丑 己卯 己未');
check('5-1d mode', c51.mode, 'noHour');
checkTrue('5-1e 가정 명시 2건', c51.assumptions.length === 2);
check('5-1f 십신 null', c51.tenGods, null);
checkTrue('5-1g 공망은 일주 기반으로 제공', Array.isArray(c51.voidBranches) && c51.voidBranches.length === 2);

// 5-2. noHour에서도 진태양시 보정은 정오 기준으로 계산됨 (분 단위 존재).
checkTrue('5-2 noHour trueSolarTimeMinutes 범위', c51.trueSolarTimeMinutes >= 0 && c51.trueSolarTimeMinutes < 1440);

// 5-3. noHour + 외국 경도도 정상 동작 (시드니, 시각 미상).
const c53 = Seoul('1985-03-21', null, { longitude: 151.209 });
check('5-3 noHour 시드니 삼주', c53.fourPillarsHanja, '乙丑 己卯 己未');

// ===========================================================================
// §6. 결정론 불변식
// ===========================================================================

// 6-1. 일주 60갑자 연속성: 2026-01-01 = 乙亥(외부 공개 만세력 값)부터 31일.
let prevIdx = null;
const days = [];
for (let i = 0; i < 31; i++) {
  const iso = new Date(Date.UTC(2026, 0, 1 + i)).toISOString().slice(0, 10);
  const c = Seoul(iso, '12:00');
  const idx = sexagenaryIndex(c.dayPillar.hanja);
  checkTrue(`6-1 유효 간지쌍 ${iso}`, idx >= 0);
  if (prevIdx !== null) checkTrue(`6-1 전일+1 ${iso}`, (idx - prevIdx + 60) % 60 === 1);
  prevIdx = idx;
  days.push(c.dayPillar.hanja);
}
check('6-1 시작 5일 (2026-01-01=乙亥 앵커)', days.slice(0, 5), ['乙亥', '丙子', '丁丑', '戊寅', '己卯']);

// 6-2. 오호둔원 월간 공식: 월간 = (2×연간 + 월지) mod 10. 10년 샘플.
for (const y of [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2024]) {
  const c = Seoul(`${y}-05-15`, '12:00');
  const ys = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.yearPillar.hanja[0]);
  const mb = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(c.monthPillar.hanja[1]);
  const ms = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.monthPillar.hanja[0]);
  checkTrue(`6-2 오호둔원 ${y}`, ms === (2 * ys + mb) % 10);
}

// 6-3. 시간(時干) 공식: 시간 = (2×일간 + 시지) mod 10. 경계에서 먼 4개 시각.
for (const h of [2, 6, 10, 18]) {
  const c = Seoul('1985-03-21', `${String(h).padStart(2, '0')}:30`);
  const ds = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.dayPillar.hanja[0]);
  const hb = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(c.hourPillar.hanja[1]);
  const hs = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.hourPillar.hanja[0]);
  checkTrue(`6-3 시간공식 ${h}:30`, hs === (2 * ds + hb) % 10);
}

// 6-4. 시지 = floor(((진태양시 분값 + 60) mod 1440) / 120). 반환 중간값과 상호 정합.
for (const t of ['08:30', '14:30', '20:10']) {
  const c = Seoul('1985-03-21', t);
  const expected = Math.floor(((c.trueSolarTimeMinutes + 60) % 1440) / 120);
  const actual = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(c.hourPillar.hanja[1]);
  checkTrue(`6-4 시지-진태양시 정합 ${t}`, actual === expected);
}

// 6-5. 균시차 천문 극단: 11월 초 +16분대, 2월 중순 -14분대 (Meeus 이론값 ±16/-14).
const nov = Seoul('1984-11-03', '09:00');
const feb = Seoul('1984-02-16', '09:00');
checkApproxEq('6-5a EoT 1984-11-03', nov.correctionBreakdown.equationOfTimeMinutes, 16.46, 0.05);
checkApproxEq('6-5b EoT 1984-02-16', feb.correctionBreakdown.equationOfTimeMinutes, -14.21, 0.05);

// ===========================================================================
// §7. 투명성 중간값 (계산 투명성 UI 재료)
// ===========================================================================

const c71 = Seoul('1985-03-21', '14:30');
checkApproxEq('7-1a 균시차', c71.correctionBreakdown.equationOfTimeMinutes, -7.26, 0.01);
check('7-1b 경도 보정', c71.correctionBreakdown.longitudeMinutes, -32.09);
check('7-1c 총 보정', c71.correctionBreakdown.totalCorrectionMinutes, -39.35);
check('7-1d UTC 순간', c71.instantUTC, '1985-03-21T05:30:00.000Z');
check('7-1e 진태양시 시계', c71.trueSolarTimeClock, '13:50');
check('7-1f 진태양시 분값', c71.trueSolarTimeMinutes, 831);
check('7-1g 날짜 이동 없음', c71.trueSolarDayShift, 0);

// 7-2. 반환 스키마: 스펙 필드 전부 존재 + 주 구조(한자·한글·오행·음양).
checkTrue('7-2a 스펙 필드 존재',
  c71.input && c71.yearPillar && c71.monthPillar && c71.dayPillar && c71.hourPillar &&
  c71.solarTermInfo && c71.pillars && c71.trueSolarTimeMinutes !== undefined);
check('7-2b 주 직렬화 구조', c71.yearPillar, {
  hangul: '을축', hanja: '乙丑',
  stem: { hangul: '을', hanja: '乙', index: 1, element: '목', yinYang: '음' },
  branch: { hangul: '축', hanja: '丑', index: 1, element: '토', yinYang: '음' },
  element: { stem: '목', branch: '토' },
  yinYang: { stem: '음', branch: '음' },
});
check('7-2c input echo (위도 포함)', [c71.input.dateISO, c71.input.timeISO, c71.input.latitude, c71.input.longitude, c71.input.tzOffsetMinutes],
  ['1985-03-21', '14:30', 37.5665, 126.978, 540]);
checkTrue('7-2d 일간/공망 제공', c71.dayMaster.hanja === '己' && c71.voidBranches.length === 2);
checkTrue('7-2e 십신 차트 제공', !!(c71.tenGods.year && c71.tenGods.month && c71.tenGods.hour));
check('7-2f 일간 자신은 일간', c71.tenGods.day.stem, '일간');

// 7-3. 보정 끔 모드: 모든 보정 0, 시계 = 벽시시각.
const c73 = Seoul('1985-03-21', '14:30', { trueSolarTime: false });
check('7-3a 보정 끔 총보정', c73.correctionBreakdown.totalCorrectionMinutes, 0);
check('7-3b 보정 끔 시계=벽시', c73.trueSolarTimeClock, '14:30');
check('7-3c 보정 끔에도 절기 정보 유지', c73.solarTermInfo.current.name, '춘분');

// 7-4. 자정 근처 진태양시 날짜 이동 플래그: 서울 00:10 → 진태양시 전날 23시대.
const c74 = Seoul('2024-06-05', '00:10');
checkTrue('7-4 전날 이동 감지', c74.trueSolarDayShift === -1 && c74.trueSolarTimeClock.startsWith('23:'));

// ===========================================================================
// §8. manseryeok 균시차 인자 함정 (회귀 방지)
// ===========================================================================
// 실측(manseryeok 2.0.0): epoch-ms 숫자/Date → 정상. '초' 단위 숫자 → 예외 없이
// 1970년으로 해석한 엉뚱한 값(조용한 오답). 문자열 → NaN.
// 엔진 내부는 Date.getTime() 경유만 사용하므로 함정 경로가 없다(§6-5가 간접 검증).
checkTrue('8-1 epoch-ms 숫자 → 유한수', Number.isFinite(manseryeok.equationOfTimeMinutes(1700000000000)));
checkTrue('8-2 Date 객체 → 유한수', Number.isFinite(manseryeok.equationOfTimeMinutes(new Date('1985-03-21T14:30:00+09:00'))));
checkTrue('8-3 초 단위 숫자 → 유한하지만 엉뮈한 값(함정)',
  Number.isFinite(manseryeok.equationOfTimeMinutes(1700000000)) &&
  Math.abs(manseryeok.equationOfTimeMinutes(1700000000) - manseryeok.equationOfTimeMinutes(1700000000000)) > 1);
checkTrue('8-4 문자열 → NaN', Number.isNaN(manseryeok.equationOfTimeMinutes('1985-03-21')));
checkApproxEq('8-5 1985-03-21 EoT 값 고정', manseryeok.equationOfTimeMinutes(new Date(Date.UTC(1985, 2, 21, 5, 30))), -7.26, 0.01);

// ===========================================================================
// §9. 오류 처리 (결정적 실패)
// ===========================================================================
checkThrow('9-1 날짜 형식', () => Seoul('1985/03/21', '12:00'));
checkThrow('9-2 존재하지 않는 날짜', () => Seoul('2023-02-29', '12:00'));
checkThrow('9-3 연도 하한', () => Seoul('1799-01-01', '12:00'));
checkThrow('9-4 연도 상한', () => Seoul('2301-01-01', '12:00'));
checkThrow('9-5 시각 형식', () => Seoul('1985-03-21', '14시30분'));
checkThrow('9-6 시각 범위', () => Seoul('1985-03-21', '25:00'));
checkThrow('9-7 경도 범위', () => Seoul('1985-03-21', '12:00', { longitude: 200 }));
checkThrow('9-8 위도 범위', () => Seoul('1985-03-21', '12:00', { latitude: 91 }));
checkThrow('9-9 tzOffset 비정수', () => Seoul('1985-03-21', '12:00', { tzOffsetMinutes: 540.5 }));
checkThrow('9-10 dayBoundary 잘못된 값', () => Seoul('1985-03-21', '12:00', { dayBoundary: 'hasi' }));
checkThrow('9-11 입력 비객체', () => computeChart('1985-03-21'));
checkThrow('9-12 NaN 경도', () => Seoul('1985-03-21', '12:00', { longitude: NaN }));

// ===========================================================================
// 요약
// ===========================================================================
const total = pass + fail;
console.log('──────────────────────────────────────────────');
console.log(`골든 테스트 결과: ${pass}/${total} 통과, ${fail} 실패`);
console.log(`  §1 외부 검증 앵커  : 공개 인물 3건 + README 4건 + 수학 유도 1건`);
console.log(`  §2~§5 경계        : 절기·경도·서머타임·시각미상`);
console.log(`  §6~§8 불변식·투명성: 오호둔원·60갑자·EoT 함정 회귀`);
console.log(`  §9 오류 처리      : 12건 결정적 실패 확인`);
console.log('──────────────────────────────────────────────');
if (fail > 0) {
  console.log('\n실패 상세:');
  for (const f of failures) console.log(' ✗ ' + f);
  process.exit(1);
}
console.log('ALL GOLDEN TESTS PASSED');
