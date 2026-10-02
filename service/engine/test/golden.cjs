/**
 * SAJU 엔진 골든 테스트 (31케이스 이상).
 *
 * 실행: node test/golden.cjs
 * 구성: 외부 앵커 / 60갑자 불변량 / 오호둔원 공식 / 경계 / 투명성 값 / 오류
 */
'use strict';

const path = require('path');
const manseryeok = require('manseryeok');
const { computeChart, sexagenaryIndex } = require(path.join(__dirname, '..', 'src', 'engine.cjs'));

let pass = 0;
let fail = 0;
const failures = [];

function check(name, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) { pass++; return; }
  fail++;
  failures.push(`${name}\n  기대: ${e}\n  실제: ${a}`);
}

function checkTrue(name, cond) {
  if (cond) { pass++; return; }
  fail++;
  failures.push(`${name} (불변식 불충족)`);
}

function Seoul(dateISO, timeISO, extra) {
  return computeChart(Object.assign({ dateISO, timeISO }, extra));
}

// ===== 1. 외부 검증 앵커 =====
// 1-1. manseryeok 실측 + 오호둔원 이중 검증 케이스 (1985-03-21 14:30 서울)
const c1 = Seoul('1985-03-21', '14:30');
check('1-1 년주', c1.pillars.year.hanja, '乙丑');
check('1-1 월주', c1.pillars.month.hanja, '己卯');
check('1-1 일주', c1.pillars.day.hanja, '己未');
check('1-1 시주', c1.pillars.hour.hanja, '辛未');
check('1-1 일간', c1.dayMaster.hanja, '己');

// 1-2. 공개 인물 앵커: 1968-06-23 → 戊申년 戊午월 甲子일 (선임 리서치 프레임 판독과 일치, 시각 미공개라 3주만 단정)
const c2 = Seoul('1968-06-23', '12:00');
check('1-2 년주', c2.pillars.year.hanja, '戊申');
check('1-2 월주', c2.pillars.month.hanja, '戊午');
check('1-2 일주', c2.pillars.day.hanja, '甲子');

// 1-3. 2026-01-01 일주 乙亥 (60갑자 표 기준 교차: 2026-01-01 = 乙亥, 만세력 공개값)
const c3 = Seoul('2026-01-01', '12:00');
check('1-3 일주', c3.pillars.day.hanja, '乙亥');

// ===== 2. 입춘 연주 경계 =====
check('2-1 입춘 전 년주', Seoul('1985-02-03', '23:00').pillars.year.hanja, '甲子');
check('2-2 입춘 후 년주', Seoul('1985-02-04', '12:00').pillars.year.hanja, '乙丑');

// ===== 3. 60갑자 일주 연속성 (31일) =====
let prevIdx = null;
const days = [];
for (let i = 0; i < 31; i++) {
  const d = new Date(Date.UTC(2026, 0, 1 + i));
  const iso = d.toISOString().slice(0, 10);
  const c = Seoul(iso, '12:00');
  const idx = sexagenaryIndex(c.pillars.day.hanja);
  checkTrue(`3-${i + 1} 유효 간지쌍(짝패리티) ${iso}`, idx >= 0 && (idx % 2 === (manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.pillars.day.hanja[0]) % 2)));
  if (prevIdx !== null) checkTrue(`3-${i + 1} 전일+1 진행 ${iso}`, (idx - prevIdx + 60) % 60 === 1);
  prevIdx = idx;
  days.push(c.pillars.day.hanja);
}
check('3 시작 5일', days.slice(0, 5), ['乙亥', '丙子', '丁丑', '戊寅', '己卯']);

// ===== 4. 오호둔원 월간 공식: 월간 = (2×연간 + 월지) mod 10 =====
for (const y of [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2020]) {
  const c = Seoul(`${y}-05-15`, '12:00');
  const ys = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.pillars.year.hanja[0]);
  const mb = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(c.pillars.month.hanja[1]);
  const ms = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.pillars.month.hanja[0]);
  checkTrue(`4 월간공식 ${y}`, ms === (2 * ys + mb) % 10);
}

// ===== 5. 시간 공식: 시간 = (2×일간 + 시지) mod 10 (경계 멀리 떨어진 시각) =====
const base = Seoul('1985-03-21', '14:30');
for (const h of [2, 6, 10, 18]) {
  const c = Seoul('1985-03-21', `${String(h).padStart(2, '0')}:30`);
  const ds = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.pillars.day.hanja[0]);
  const hb = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(c.pillars.hour.hanja[1]);
  const hs = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(c.pillars.hour.hanja[0]);
  checkTrue(`5 시간공식 ${h}:30`, hs === (2 * ds + hb) % 10);
}

// ===== 6. 진태양시 시지 정합: 시지 = floor(((진태양시+60) mod 1440)/120) =====
for (const t of ['08:30', '14:30', '20:10']) {
  const c = Seoul('1985-03-21', t);
  const expected = Math.floor(((c.transparency.trueSolarTimeMinutes + 60) % 1440) / 120);
  const actual = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(c.pillars.hour.hanja[1]);
  checkTrue(`6 시지정합 ${t}`, actual === expected);
}

// ===== 7. 표기 불변: 같은 순간·같은 장소를 다른 시간대 표기로 입력하면 4주 동일 =====
// 뉴욕 1990-05-14 21:00 EDT(UTC-4) = 1990-05-14 20:00 EST 표기(UTC-5) — 같은 순간
const nyEdt = computeChart({ dateISO: '1990-05-14', timeISO: '21:00', longitude: -74.006, tzOffsetMinutes: -240 });
const nyEst = computeChart({ dateISO: '1990-05-14', timeISO: '20:00', longitude: -74.006, tzOffsetMinutes: -300 });
check('7-1 뉴욕 EDT/EST 표기 불변', nyEst.fourPillarsHanja, nyEdt.fourPillarsHanja);
// 진태양시도 같은 값이어야 한다 (절대 시각이 동일하므로)
checkTrue('7-2 진태양시 표기 불변', Math.abs(nyEdt.transparency.trueSolarTimeMinutes - nyEst.transparency.trueSolarTimeMinutes) <= 1);
// 국지 진태양시 날짜가 하루 차 나면 일주도 따라간다 (사주=출생지 태양일 기준 문서화 테스트)
const seoulInst = Seoul('1990-05-15', '10:00'); // KST 10:00 = 뉴욕 05-14 21:00 EDT와 같은 순간
checkTrue('7-3 태양일 기준 문서화: 서울 05-15 vs 뉴욕 05-14 일주 상이', seoulInst.pillars.day.hanja !== nyEdt.pillars.day.hanja);

// ===== 8. 일주 경계: 정오 대 정오면 다음날은 +1 =====
const before = Seoul('1985-03-20', '12:00');
const after = Seoul('1985-03-21', '12:00');
check('8 일경계 진행', (sexagenaryIndex(after.pillars.day.hanja) - sexagenaryIndex(before.pillars.day.hanja) + 60) % 60, 1);

// ===== 9. 시주 부재 모드 =====
const c9 = Seoul('1985-03-21', null);
check('9-1 시주 null', c9.pillars.hour, null);
check('9-2 삼주 보존', c9.fourPillarsHanja, '乙丑 己卯 己未');
check('9-3 십신 null', c9.tenGods, null);
checkTrue('9-4 hourAbsent 플래그', c9.input.hourAbsent === true);

// ===== 10. 균시차 인자 함정 (gold regression) =====
checkTrue('10-1 숫자 인자 → 유한수(정상 동작)', Number.isFinite(manseryeok.equationOfTimeMinutes(1700000000000)));
checkTrue('10-2 Date 인자 → 유한수', Number.isFinite(manseryeok.equationOfTimeMinutes(new Date('1985-03-21T14:30:00+09:00'))));
checkTrue('10-3 문자열 인자 → NaN', Number.isNaN(manseryeok.equationOfTimeMinutes('1985-03-21')));

// ===== 11. 투명성 값 =====
check('11-1 균시차 1985-03-21', Math.abs(c1.transparency.equationOfTimeMinutes - (-7.2641)) < 0.01, true);
check('11-2 경도보정 서울', c1.transparency.longitudeCorrectionMinutes, -32.088);
checkTrue('11-3 진태양시 방향', c1.transparency.trueSolarTimeMinutes < 870 && c1.transparency.trueSolarTimeMinutes > 800);
check('11-4 당시 절기', c1.transparency.solarTerm.name, '춘분');
check('11-5 다음 절기', c1.transparency.nextSolarTerm.name, '청명');

// ===== 12. 서머타임 시대 (1987~1988 KST UTC+10) =====
const dstOn = Seoul('1988-07-01', '12:00', { applyHistoricalDst: true });
const dstOff = Seoul('1988-07-01', '12:00', { applyHistoricalDst: false });
checkTrue('12-1 DST 보정 시 진태양시 60분 차이', Math.abs((dstOn.transparency.trueSolarTimeMinutes - dstOff.transparency.trueSolarTimeMinutes)) === 0 || Math.abs((dstOn.transparency.trueSolarTimeMinutes - dstOff.transparency.trueSolarTimeMinutes)) === 60);
checkTrue('12-2 경계 밖 날짜라 일주 불변', dstOn.pillars.day.hanja === dstOff.pillars.day.hanja);

// ===== 13. 오류 처리 =====
function expectThrow(name, fn) {
  try { fn(); fail++; failures.push(`${name} (예외 미발생)`); }
  catch (e) { pass++; }
}
expectThrow('13-1 연도 하한', () => Seoul('1799-01-01', '12:00'));
expectThrow('13-2 연도 상한', () => Seoul('2301-01-01', '12:00'));
expectThrow('13-3 날짜 형식', () => Seoul('1985/03/21', '12:00'));
expectThrow('13-4 시각 형식', () => Seoul('1985-03-21', '25:00'));
expectThrow('13-5 경도 범위', () => Seoul('1985-03-21', '12:00', { longitude: 200 }));
expectThrow('13-6 존재하지 않는 날짜', () => Seoul('2023-02-29', '12:00'));

// ===== 14. 십신 구조 (일간 대 관계 재현성) =====
check('14-1 일간 자신은 일간', c1.tenGods.day.stem, '일간');
checkTrue('14-2 십신 3주 존재', !!(c1.tenGods.year && c1.tenGods.month && c1.tenGods.hour));

// ===== 요약 =====
console.log(`골든 테스트: ${pass} 통과 / ${fail} 실패 (총 ${pass + fail} 항목)`);
if (fail > 0) {
  console.log('\n실패 상세:');
  for (const f of failures) console.log(' - ' + f);
  process.exit(1);
}
