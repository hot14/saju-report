"use strict";

/*
 * 번들 스모크 테스트 (wayfinder #14, 무료 차트 전체 자산판)
 * ---------------------------------------------------------
 * 1) 기존: IIFE 번들 로드, computeChart 엔진 정합, 시각 미상 모드, 물상 필드
 * 2) 신규: 원국 판정 뷰 함수 8종 검증
 *    - 오행 상태 규칙(경계값) + 기토 실측(과다/과소) + 갑목 실측(과다/과소)
 *    - 천간합 감지 ON(1:1 성립) / OFF(쌍 없음) / 비율 미성립(2:1 → CR02)
 *    - 지지 변화 감지(반합 1건) / 합·충 0건(안정 구조 문구 경로)
 *    - 대운 10구간(남 역행 무인 시작 / 여 순행 경진 시작) + 현재 나이
 *    - 안심법 매칭(기토 AP04·AP10 / 갑목 0건 → 섹션 생략 경로)
 *    - 공망 전달 / 관계 읽기(합 아님 + 관계 규칙 + 오행 보완)
 *
 *   node smoke.cjs
 */

const path = require("path");

const bundlePath = path.join(__dirname, "js", "bundle.js");
require(bundlePath);

const CORE = globalThis.SajuRoot;
const VIEW = CORE && CORE.view;
const fail = (message) => {
  console.error("SMOKE_FAIL: " + message);
  process.exit(1);
};
const eq = (a, b, label) => {
  if (a !== b) fail(`${label}: 기대(${JSON.stringify(b)}) 실측(${JSON.stringify(a)})`);
};

if (!CORE || typeof CORE.computeChart !== "function") fail("globalThis.SajuRoot.computeChart 없음");
if (!VIEW || typeof VIEW.elementStates !== "function") fail("globalThis.SajuRoot.view 없음");
if (!Array.isArray(CORE.STEMS) || CORE.STEMS.length !== 10) fail("STEMS 10개 아님: " + (CORE.STEMS || []).length);
if (!CORE.STEMS[0].careerDirections || !CORE.STEMS[0].dangers) fail("STEMS careerDirections·dangers 누락");

// ---------------------------------------------------------------------------
// 기존 케이스: 엔진 정합 + 시각 미상 + 물상 필드
// ---------------------------------------------------------------------------

const input = { dateISO: "1985-03-21", timeISO: "14:30" };
const fromBundle = CORE.computeChart(input);
const { computeChart } = require("../engine/src/engine.cjs");
const fromEngine = computeChart(input);

if (fromBundle.fourPillarsHanja !== fromEngine.fourPillarsHanja) {
  fail(`팔주 불일치: bundle=${fromBundle.fourPillarsHanja} engine=${fromEngine.fourPillarsHanja}`);
}
if (fromBundle.dayMaster.hanja !== fromEngine.dayMaster.hanja) fail("일간 불일치");
if (fromBundle.trueSolarTimeClock !== fromEngine.trueSolarTimeClock) fail("진태양시 불일치");

const noHour = CORE.computeChart({ dateISO: "1990-05-15", timeISO: null });
if (noHour.mode !== "noHour" || noHour.hourPillar !== null) fail("시각 미상 모드 이상");

const badge = CORE.STEMS.find((s) => s.stemHanja === fromBundle.dayMaster.hanja);
if (!badge || !badge.nature || !Array.isArray(badge.coreTraits)) fail("일간 물상 필드 누락");

// ---------------------------------------------------------------------------
// 신규 1: 오행 상태 규칙 (경계값) + 기토 실측 + 갑목 실측
// ---------------------------------------------------------------------------

eq(VIEW.elementStatus(0), "tooLittle", "오행 상태 규칙 0개");
eq(VIEW.elementStatus(1), "balance", "오행 상태 규칙 1개");
eq(VIEW.elementStatus(2), "balance", "오행 상태 규칙 2개");
eq(VIEW.elementStatus(3), "tooMuch", "오행 상태 규칙 3개");
eq(VIEW.elementStatus(5), "tooMuch", "오행 상태 규칙 5개");

// 기토(1985-03-21 14:30 = 乙丑 己卯 己未 辛未): 토5 과다, 화·수 0 과소, 목2·금1 조화
const me = VIEW.elementStates(fromBundle);
const stOf = (kor) => me.find((s) => s.element === kor);
eq(fromBundle.fourPillarsHanja, "乙丑 己卯 己未 辛未", "기토 팔주");
eq(stOf("토").count + stOf("목").count + stOf("금").count + stOf("화").count + stOf("수").count, 8, "오행 합계 8글자");
eq(stOf("토").status, "tooMuch", "기토 토(비동) 과다");
eq(stOf("토").text.length > 10, true, "기토 토 과다 문장 존재");
eq(stOf("화").status, "tooLittle", "기토 화(인성) 과소");
eq(stOf("수").status, "tooLittle", "기토 수(재성) 과소");
eq(stOf("목").status, "balance", "기토 목(관성) 조화");
eq(stOf("금").status, "balance", "기토 금(식상) 조화");

// 갑목(1990-01-09 12:00 = 己巳 丁丑 甲戌 庚午): 토(재성)3 과다, 수(인성)0 과소
const gapChart = CORE.computeChart({ dateISO: "1990-01-09", timeISO: "12:00" });
eq(gapChart.dayMaster.hanja, "甲", "갑목 일간 케이스");
const gapStates = VIEW.elementStates(gapChart);
const gapSt = (kor) => gapStates.find((s) => s.element === kor);
eq(gapChart.fourPillarsHanja, "己巳 丁丑 甲戌 庚午", "갑목 팔주");
eq(gapSt("토").status, "tooMuch", "갑목 토(재성) 과다");
eq(gapSt("토").role, "재성", "갑목 토 역할=재성");
eq(gapSt("수").status, "tooLittle", "갑목 수(인성) 과소");
eq(gapSt("수").role, "인성", "갑목 수 역할=인성");
eq(gapSt("수").text.length > 10, true, "갑목 수 과소 문장 존재");

// ---------------------------------------------------------------------------
// 신규 2: 천간합 감지 ON / OFF / 비율 미성립
// ---------------------------------------------------------------------------

// ON: 1990-01-01 12:00 = 己巳 丙子 丙寅 甲午 → 甲己 1:1 성립
const comboOn = VIEW.stemCombos(CORE.computeChart({ dateISO: "1990-01-01", timeISO: "12:00" }));
const formedOn = comboOn.filter((c) => c.status === "formed");
eq(formedOn.length, 1, "합 감지 ON 성립 수");
eq(formedOn[0].combo.pairing, "甲己", "합 감지 ON 쌍");
eq(formedOn[0].ratio, "1:1", "합 감지 ON 비율");
eq(formedOn[0].involvesDayMaster, false, "합 감지 ON 일간(丙) 미포함");

// OFF: 1985-03-21 14:30 = 乙己己辛 → 쌍 없음
const comboOff = VIEW.stemCombos(fromBundle);
eq(comboOff.length, 0, "합 감지 OFF (乙己己辛 쌍 없음)");

// 비율 미성립: 1990-02-07 12:00 = 庚午 戊寅 癸卯 戊午 → 戊癸 2:1 → CR02 차단
const comboRatio = VIEW.stemCombos(CORE.computeChart({ dateISO: "1990-02-07", timeISO: "12:00" }));
const blocked = comboRatio.filter((c) => c.status === "blocked");
eq(blocked.length, 1, "2:1 비율 미성립 감지");
eq(blocked[0].combo.pairing, "戊癸", "2:1 쌍");
eq(blocked[0].ratio, "2:1", "2:1 비율 표기");

// ---------------------------------------------------------------------------
// 신규 3: 지지 변화 감지 (반합 1건 / 0건 안정 구조)
// ---------------------------------------------------------------------------

// 기토 지지 丑卯未未 → 해묘미 목국의 卯未 반합(왕지 卯 포함) 1건, 충 0건
const bdMe = VIEW.branchDynamics(fromBundle);
eq(bdMe.length, 1, "기토 지지 변화 1건");
eq(bdMe[0].kind, "banhap", "기토 반합 판정");
eq(bdMe[0].label, "木 반합", "기토 반합 라벨");
eq(bdMe[0].present.join(""), "卯未", "기토 반합 멤버");

// 1990-05-15 시각 미상 지지 午巳辰 → 합·충 0건 (화면 안정 구조 문구 경로)
const bdNone = VIEW.branchDynamics(noHour);
eq(bdNone.length, 0, "합·충 0건 (안정 구조)");

// ---------------------------------------------------------------------------
// 신규 4: 대운 10구간 (남자 역행 무인 시작 / 여자 순행 경진 시작)
// ---------------------------------------------------------------------------

if (typeof CORE.getLuckPillars !== "function") fail("getLuckPillars 번들 노출 누락");

const luckM = VIEW.luckPillars(fromBundle, "male");
eq(luckM.rows.length, 10, "대운 남자 10구간");
eq(luckM.forward, false, "대운 남자 역행 (기묘월 기토, 음년생 남자)");
eq(luckM.rows[0].korean, "무인", "대운 남자 첫 구간 무인");
eq(luckM.rows[0].fromAge, 5, "대운 남자 시작 나이 5세");
eq(luckM.rows[9].korean, "기사", "대운 남자 10번째 구간 기사");
if (typeof luckM.currentAge !== "number" || luckM.currentAge < 41 || luckM.currentAge > 45) {
  fail("현재 만 나이 이상: " + luckM.currentAge);
}

const luckF = VIEW.luckPillars(fromBundle, "female");
eq(luckF.forward, true, "대운 여자 순행");
eq(luckF.rows[0].korean, "경진", "대운 여자 첫 구간 경진");

eq(VIEW.luckPillars(fromBundle, null), null, "성별 미선택 → null (안내 문구 경로)");

// ---------------------------------------------------------------------------
// 신규 5: 안심법 매칭 (정확 일치만) + 공망 + 관계 읽기
// ---------------------------------------------------------------------------

// 기토(1985-03-21): 월간 己=비견(AP04), 년간 乙 존재(AP10)
const ansimMe = VIEW.matchAnsim(fromBundle);
eq(ansimMe.map((p) => p.id).join(","), "AP04,AP10", "기토 안심법 AP04·AP10");

// 갑목(1990-01-09, 천간 己丁甲庚): 甲己 1:1이 성립하고 일간 甲이 묶임 → AP03 정확 일치
const ansimGap = VIEW.matchAnsim(gapChart);
eq(ansimGap.map((p) => p.id).join(","), "AP03", "갑목 안심법 AP03 (일간 합 묶임)");

// 1990-01-05(천간 己丙庚壬, 일간 庚, 비견·앵커 쌍 모두 부재) → 0건 → 섹션 생략 경로
const ansimNone = VIEW.matchAnsim(CORE.computeChart({ dateISO: "1990-01-05", timeISO: "12:00" }));
eq(ansimNone.length, 0, "안심법 0건 (섹션 생략 경로)");

// 공망: 1985-03-21 → 자·축 (근거 표 전달값)
eq(fromBundle.voidBranches.join(","), "자,축", "공망 자·축");

// 관계 읽기: 내 1985-03-21(기토) vs 상대 1990-08-15(임수)
const partner = CORE.computeChart({ dateISO: "1990-08-15", timeISO: null });
eq(partner.dayMaster.hanja, "壬", "상대 일간 임수");
const comboRel = VIEW.dayMasterCombo("己", "壬");
eq(comboRel, null, "기토×임수 천간합 아님");
const relRule = VIEW.DAY_VS_STEMS["己"]["壬"];
if (!relRule || relRule.image !== "제방과 큰물") fail("기토×임수 관계 규칙(image) 이상");
const fill = VIEW.fillCheck(VIEW.elementCounts(fromBundle), VIEW.elementCounts(partner));
eq(fill.absent.join(","), "화,수", "내 부족 오행 화·수");
eq(fill.filled.join(","), "화,수", "상대가 채워주는 오행 화·수");

// 시각 미상 모드에서도 뷰 함수 전체가 안전하게 도는지 1회
const statesNoHour = VIEW.elementStates(noHour);
const sumNoHour = statesNoHour.reduce((acc, s) => acc + s.count, 0);
eq(sumNoHour, 6, "시각 미상 오행 합계 6글자");

console.log("SMOKE_OK");
console.log(`  bundle=${fromBundle.fourPillarsHanja} engine=${fromEngine.fourPillarsHanja}`);
console.log(`  dayMaster=${fromBundle.dayMaster.hangul}(${fromBundle.dayMaster.hanja}) 물상=${badge.nature}`);
console.log(`  진태양시=${fromBundle.trueSolarTimeClock} mode(noHour)=${noHour.mode}`);
console.log(`  오행판정(기토)=토과다·화수과소 / (갑목)=토과다·수과소`);
console.log(`  천간합=ON(甲己 1:1) OFF(乙己己辛 0건) 비율차단(戊癸 2:1)`);
console.log(`  지지변화(기토)=木 반합 1건 / (午巳辰)=0건 안정구조`);
console.log(`  대운 남=역행 ${luckM.rows[0].fromAge}세 ${luckM.rows[0].korean} 시작 10구간, 현재 만 ${luckM.currentAge}세`);
console.log(`  안심법(기토)=${ansimMe.map((p) => p.id).join("+")} / (갑목)=${ansimGap.map((p) => p.id).join("+")} / (庚辛 noHour)=0건`);
console.log(`  공망=${fromBundle.voidBranches.join("·")} / 관계(기토×임수)=합없음·제방과큰물·보완${fill.filled.join("/")}`);
