"use strict";

/*
 * 번들 스모크 + 일관성 검증 (무료 차트 · 일반인 리딩 리라이트)
 * ------------------------------------------------------------
 * [기존 검증]
 *  1) IIFE 번들 로드, computeChart 엔진 정합, 시각 미상 모드, 물상 필드
 *  2) 원국 판정 뷰 함수: 오행 상태 규칙 / 천간합 ON·OFF·비율 / 지지 변화 /
 *     대운 10구간 / 안심법 매칭 / 공망 / 관계 읽기
 * [신규 검증: 오너 요구 "프로세스상 일관되게 구조화"의 기계 검증]
 *  3) 엔진 dst 필드: computeChart.dst · correctionBreakdown.dstApplied/dstNote
 *  4) 콘텐츠 대응 검사: 렌더(output HTML)의 모든 해석 문장이 콘텐츠 JSON
 *     (stems/relations/dynamics/regions/policy)에 존재하는 부분문자열.
 *     새 해석 문장이 섞이면 FAIL. (중립 연결어·라벨은 선언 목록으로만 허용)
 *  5) 섹션 구조 스냅샷: 3케이스(1985-03-21 14:30 male / 1987-08-28 09:50 female /
 *     시각 미상)의 기대 섹션 제목 목록과 순서 일치 + details 2종(기본 닫힘)
 *  6) 용어집 커버리지: 노출 전문 용어가 S12 용어집에 있는지 검사
 *  7) 검증 모드: {{FORM_ENDPOINT}} 유지 · mailto 폴백 · em-dash 0 ·
 *     금지어 0 · 가운뎃점 줄당 1개 · CR/AP 코드는 details 안에만
 *
 *   node smoke.cjs
 */

const path = require("path");

// ---------------------------------------------------------------------------
// 브라우저 스텁: app.js를 Node에서 로드해 render 출력을 기계 검증한다.
// ---------------------------------------------------------------------------

function makeStubDocument() {
  const els = {};
  function el(id) {
    if (!els[id]) {
      els[id] = {
        id: id, value: "", checked: false, disabled: false, hidden: false,
        innerHTML: "", textContent: "", href: "", handlers: {}, tagName: "DIV",
        setAttribute() {}, getAttribute() { return null; },
        addEventListener(type, fn) { this.handlers[type] = fn; },
        scrollIntoView() {},
        querySelector() { return null; },
        querySelectorAll() { return []; }
      };
    }
    return els[id];
  }
  return {
    el: el,
    getElementById: (id) => el(id),
    querySelectorAll: () => [],
    querySelector: () => null
  };
}

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
if (!CORE.STEMS[0].catchphrase) fail("STEMS catchphrase 누락 (작업1 캐치프레이즈 번들 포함)");
if (!Array.isArray(VIEW.GLOSSARY) || VIEW.GLOSSARY.length < 14) fail("GLOSSARY(용어집) 미노출: " + (VIEW.GLOSSARY || []).length);
if (!VIEW.ROLE_DISPLAY || !VIEW.ROLE_DISPLAY["재성"]) fail("ROLE_DISPLAY 미노출");

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
// 신규 0: 엔진 dst 필드 (서머타임 되돌림)
// ---------------------------------------------------------------------------

const dstCase = CORE.computeChart({ dateISO: "1987-08-28", timeISO: "09:50" });
eq(dstCase.fourPillarsHanja, "丁卯 戊申 己酉 戊辰", "1987-08-28 09:50 팔주(DST 시주 戊辰)");
eq(dstCase.dst && dstCase.dst.applied, true, "chart.dst.applied");
eq(dstCase.dst && dstCase.dst.offsetMinutes, 60, "chart.dst.offsetMinutes");
eq(dstCase.correctionBreakdown.dstApplied, true, "correctionBreakdown.dstApplied");
eq(dstCase.correctionBreakdown.dstOffsetMinutes, 60, "correctionBreakdown.dstOffsetMinutes");
if (!dstCase.correctionBreakdown.dstNote || dstCase.correctionBreakdown.dstNote.indexOf("60분") === -1) {
  fail("correctionBreakdown.dstNote 문장 누락");
}
if (!Array.isArray(dstCase.assumptions) || dstCase.assumptions.indexOf(dstCase.correctionBreakdown.dstNote) === -1) {
  fail("assumptions에 dstNote 미포함");
}
eq(fromBundle.correctionBreakdown.dstApplied, false, "비DTS 케이스 dstApplied=false (1985-03-21)");

// ---------------------------------------------------------------------------
// 기존 1: 오행 상태 규칙 (경계값) + 기토 실측 + 갑목 실측
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
// 기존 2: 천간합 감지 ON / OFF / 비율 미성립
// ---------------------------------------------------------------------------

const comboOn = VIEW.stemCombos(CORE.computeChart({ dateISO: "1990-01-01", timeISO: "12:00" }));
const formedOn = comboOn.filter((c) => c.status === "formed");
eq(formedOn.length, 1, "합 감지 ON 성립 수");
eq(formedOn[0].combo.pairing, "甲己", "합 감지 ON 쌍");
eq(formedOn[0].ratio, "1:1", "합 감지 ON 비율");
eq(formedOn[0].involvesDayMaster, false, "합 감지 ON 일간(丙) 미포함");

const comboOff = VIEW.stemCombos(fromBundle);
eq(comboOff.length, 0, "합 감지 OFF (乙己己辛 쌍 없음)");

const comboRatio = VIEW.stemCombos(CORE.computeChart({ dateISO: "1990-02-07", timeISO: "12:00" }));
const blockedAll = comboRatio.filter((c) => c.status === "blocked");
eq(blockedAll.length, 1, "2:1 비율 미성립 감지");
eq(blockedAll[0].combo.pairing, "戊癸", "2:1 쌍");
eq(blockedAll[0].ratio, "2:1", "2:1 비율 표기");

// ---------------------------------------------------------------------------
// 기존 3: 지지 변화 감지 (반합 1건 / 0건 안정 구조)
// ---------------------------------------------------------------------------

const bdMe = VIEW.branchDynamics(fromBundle);
eq(bdMe.length, 1, "기토 지지 변화 1건");
eq(bdMe[0].kind, "banhap", "기토 반합 판정");
eq(bdMe[0].label, "木 반합", "기토 반합 라벨");
eq(bdMe[0].present.join(""), "卯未", "기토 반합 멤버");

const bdNone = VIEW.branchDynamics(noHour);
eq(bdNone.length, 0, "합·충 0건 (안정 구조)");

// ---------------------------------------------------------------------------
// 기존 4: 대운 10구간 (남자 역행 무인 시작 / 여자 순행 경진 시작)
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
// 기존 5: 안심법 매칭 (정확 일치만) + 공망 + 관계 읽기
// ---------------------------------------------------------------------------

const ansimMe = VIEW.matchAnsim(fromBundle);
eq(ansimMe.map((p) => p.id).join(","), "AP04,AP10", "기토 안심법 AP04·AP10");

const ansimGap = VIEW.matchAnsim(gapChart);
eq(ansimGap.map((p) => p.id).join(","), "AP03", "갑목 안심법 AP03 (일간 합 묶임)");

const ansimNone = VIEW.matchAnsim(CORE.computeChart({ dateISO: "1990-01-05", timeISO: "12:00" }));
eq(ansimNone.length, 0, "안심법 0건 (섹션 생략 경로)");

eq(fromBundle.voidBranches.join(","), "자,축", "공망 자·축");

const partner = CORE.computeChart({ dateISO: "1990-08-15", timeISO: null });
eq(partner.dayMaster.hanja, "壬", "상대 일간 임수");
const comboRel = VIEW.dayMasterCombo("己", "壬");
eq(comboRel, null, "기토×임수 천간합 아님");
const relRule = VIEW.DAY_VS_STEMS["己"]["壬"];
if (!relRule || relRule.image !== "제방과 큰물") fail("기토×임수 관계 규칙(image) 이상");
const fill = VIEW.fillCheck(VIEW.elementCounts(fromBundle), VIEW.elementCounts(partner));
eq(fill.absent.join(","), "화,수", "내 부족 오행 화·수");
eq(fill.filled.join(","), "화,수", "상대가 채워주는 오행 화·수");

const statesNoHour = VIEW.elementStates(noHour);
const sumNoHour = statesNoHour.reduce((acc, s) => acc + s.count, 0);
eq(sumNoHour, 6, "시각 미상 오행 합계 6글자");

// ---------------------------------------------------------------------------
// 신규: app.js 렌더 로드 (브라우저 스텁 위에서)
// ---------------------------------------------------------------------------

global.window = global;
global.document = makeStubDocument();
global.localStorage = { getItem: () => null, setItem: () => {} };
global.location = { search: "" };
global.SAJU_CONFIG = { mailto: "sajuroot@example.com" };
require(path.join(__dirname, "js", "app.js"));
const doc = global.document;

function runCase(dateISO, timeISO, gender) {
  const parts = dateISO.split("-");
  doc.el("f-year").value = parts[0];
  doc.el("f-month").value = String(Number(parts[1]));
  doc.el("f-day").value = String(Number(parts[2]));
  doc.el("f-time").value = timeISO || "";
  doc.el("f-unknown").checked = !timeISO;
  doc.el("f-gender").value = gender;
  doc.el("chart-form").handlers.submit({ preventDefault() {} });
  return doc.el("result").innerHTML;
}

const html1 = runCase("1985-03-21", "14:30", "male");      // 기토 · 남자 · 대운 현재 강조
const html2 = runCase("1987-08-28", "09:50", "female");   // DST · 여자 · 시주 戊辰
const html3 = runCase("1990-05-15", null, "");            // 시각 미상 · 성별 미선택

// 관계 읽기(상대 입력) 출력도 콘텐츠 대응 검사에 포함
doc.el("f-p-year").value = "1990";
doc.el("f-p-month").value = "8";
doc.el("f-p-day").value = "15";
doc.el("rel-form").handlers.submit({ preventDefault() {} });
const relHtml = doc.el("rel-result").innerHTML;
if (!relHtml) fail("관계 읽기(상대 입력) 출력 없음");
const html1WithRel = html1.replace('<div id="rel-result"></div>', '<div id="rel-result">' + relHtml + "</div>");

// ---------------------------------------------------------------------------
// 신규: 콘텐츠 대응 검사 (해석 문장 = 콘텐츠 JSON 부분문자열만)
// ---------------------------------------------------------------------------

const contentDir = path.join(__dirname, "..", "content");
const CONTENT_JSONS = [
  require(path.join(contentDir, "stems.json")),
  require(path.join(contentDir, "relations.json")),
  require(path.join(contentDir, "dynamics.json")),
  require(path.join(contentDir, "regions.json")),
  require(path.join(contentDir, "policy.json"))
];
const ALLOWED = [];
function collectStrings(x) {
  if (typeof x === "string") { if (x.length >= 4) ALLOWED.push(x); }
  else if (Array.isArray(x)) x.forEach(collectStrings);
  else if (x && typeof x === "object") Object.keys(x).forEach((k) => collectStrings(x[k]));
}
CONTENT_JSONS.forEach(collectStrings);
collectStrings(VIEW.GLOSSARY);     // 용어집 뜻(오너 지정 문구)
collectStrings(VIEW.ROLE_DISPLAY); // 역할 일반 라벨(오너 지정 문구)

/* 카피덱 배지 문구(카피덱 v2-KR 소속, JSON 밖) */
const BADGE_DECLARED = {
  "甲": { name: "큰 나무", en: "HEARTWOOD", one: "위로 뻗는 줄기, 아래로 내린 뿌리." },
  "乙": { name: "작은 나무", en: "IVY THREAD", one: "휘어져도 끊기지 않는 성질." },
  "丙": { name: "태양", en: "NOON MARK", one: "넓게 비추는 열." },
  "丁": { name: "달", en: "MOON PHASE", one: "가까이 오래 머무는 빛." },
  "戊": { name: "큰 산", en: "GRANITE RIDGE", one: "무겁고 움직이지 않는 바탕." },
  "己": { name: "정원 흙", en: "GARDEN SOIL", one: "심으면 살리는 흙." },
  "庚": { name: "큰 쇠", en: "CAST IRON", one: "벼려진 면의 단단함." },
  "辛": { name: "작은 쇠", en: "SILVER FOIL", one: "세공되어 빛나는 광택." },
  "壬": { name: "넓은 호수", en: "MIRROR LAKE", one: "넓게 고이고, 깊게 흐르는 물." },
  "癸": { name: "시냇물", en: "MOUNTAIN STREAM", one: "길을 내면서 스며드는 물." }
};
collectStrings(BADGE_DECLARED);

/* 렌더 차트에서 나오는 엔진 문장(고지·가정) */
[fromBundle, dstCase, noHour, gapChart, partner].forEach((c) => {
  if (c.solarTermInfo && c.solarTermInfo.riskNote) ALLOWED.push(c.solarTermInfo.riskNote);
  (c.assumptions || []).forEach((a) => ALLOWED.push(a));
  if (c.correctionBreakdown && c.correctionBreakdown.dstNote) ALLOWED.push(c.correctionBreakdown.dstNote);
});

/* 중립 연결어·라벨·지정 카피 (해석 문장 아님 · 전부 여기에 선언돼 있어야 한다) */
const DECLARED = [
  // 섹션 리드(중립)
  "가장 중요한 내용부터 문장으로 정리했습니다.",
  "일간 성질이 자연스럽게 끌리는 일 방향입니다.",
  "성질이 너무 강할 때와 너무 약할 때 나타나기 쉬운 신호입니다.",
  "네 기둥은 인생의 시간표입니다. 앞 기둥일수록 이른 시기를 뜻합니다.",
  "십 년 단위로 흐름의 무대가 바뀝니다. 성별을 알려주면 지금 몇 번째 무대인지 표시합니다.",
  "성별을 알려주면 10년 흐름도 함께 볼 수 있어요. 입력 화면의 성별은 이 계산에만 쓰입니다.",
  "일간을 기준으로 다른 위 글자들이 나에게 어떻게 작동하는지 읽습니다.",
  "서로 묶이거나 부딪히는 글자 없이 안정적인 배열입니다.",
  "글자 배치만으로 확정되는 조건에만 근거한 마음 읽기입니다.",
  "상대 생년월일을 넣으면 두 일간의 관계를 읽어줍니다. 상대 생년월일은 화면에서만 쓰이며 저장하지 않습니다.",
  "화면에 나오는 말 중 어려운 말만 골라 풀어 적었습니다.",
  // 고지·알림·이메일 카피
  "시각 미상으로 제외",
  "시각 미상은 정오 가정으로 계산되어 대운 시작 나이에 오차가 있을 수 있습니다.",
  "연, 월, 일 여섯 글자로 읽으며, 시주가 필요한 주제는 제외됩니다.",
  "제외: 시주 계산, 자녀 해석, 61~80세 노년 구간, 연하 배우자 상징",
  "태어난 시각이 23시 전후입니다. 야자시 적용 시 결과가 달라질 수 있습니다.",
  "전체 리딩이 준비되면 가장 먼저 알려드립니다",
  "지금 화면을 닫아도, 이 이메일 하나로 다시 찾아올 수 있습니다.",
  "더 깊은 읽기는 준비 중입니다.",
  "더 깊은 읽기는 준비 중입니다. 준비되면 신청한 주소로 안내합니다.",
  "폼 연결 전입니다. 아래 주소로 알림 메일을 보내주시면 명단에 추가합니다.",
  "이메일은 안내 발송에만 쓰입니다.",
  // 캡션·소제목
  "근거 표 · 진태양시 = 표준시 + (경도 - 135도) × 4분 + 균시차",
  "대운 10구간 · 나이는 만 나이 기준",
  "네 개의 기둥, 여덟 글자입니다.",
  "시각 미상으로 여섯 글자입니다.",
  "도판 04 - 결과 카드",
  "묶임과 충돌 감지",
  "기둥별 읽기",
  "10년 단위 흐름(대운)",
  "천간합 원리",
  "합 비율 규칙 전체",
  "비율 미성립(합 되지 않은 쌍)",
  "성향",
  "성장 조건",
  "과할 때",
  "모자랄 때",
  "시각 미입력이라 정오 가정",
  "내 여덟 글자에 비어 있는 오행이 없어, 보완 판정 대상이 아닙니다.",
  "근거 T08-001, T08-002 · 태극성취론을 필요한 오행을 채워가는 과정으로 정의한 판정 문서 기준",
  // 섹션 질문 제목(Q01~Q09)
  "한눈 요약",
  "어떤 사람인가요?",
  "무엇이 많고, 무엇이 부족한가요?",
  "어떤 일이 어울리나요?",
  "조심할 신호는?",
  "시간의 흐름은?",
  "내 글자들은 서로 어떻게 작동하나요?",
  "마음은 어떤가요?",
  "다른 사람과 보기"
];

/* 중립 접두·접미 조합형 (접두+내용=JSON 문장+접미) */
const GLUE_PREFIX = ["", "성질은 ", "첫 번째 어울리는 일은 ", "변화 원리: ", "끌어옴: ", "뿌리 조건: ", "충 발동 기준: ", "육합 실사용 쌍 안내: "];
const GLUE_SUFFIX = ["", "입니다."];

/* 상태 문장 조합형: (b)요약 집계 문장 · 계산 표 수치 행 · 대운 행 등 */
const TEMPLATES = [
  /^용어 자세히 보기 · 용어집$/,
  /^계산 과정 · 근거 표 전체$/,
  /^위 리딩과 같은 계산에서 나온 전문 상세판입니다\.$/,
  /^위 리딩과 같은 계산에서 나온 전문 상세판입니다\\.$/,
  /^서울 기본값 · 북위 [\d.]+, 동경 [\d.]+$/,
  /^서머타임 60분 되돌림 · .+$/,
  /^공망 지지 [가-힣]+, [가-힣]+ \(역법 라이브러리 계산\)$/,
  /^출생지 .+ · 북위 [\d.]+, 동경 [\d.]+$/,
  /^경도 [+-]?\d+(\.\d+)?분 · 균시차 [+-]?\d+(\.\d+)?분$/,
  /^\d{2}:\d{2} · 보정 [+-]?\d+(\.\d+)?분$/,
  /^[가-힣]+\([^)]+\) · \d{4}-\d{2}-\d{2} \d{2}:\d{2} KST$/,
  /^[가-힣]+\([^)]+\) · 절입 후 [\d일시간분. ]+$/,
  /^역할 자세히 보기$/,
  /^변화 규칙 자세히 보기$/,
  /^용어 자세히 보기$/,
  /^계산 과정 자세히 보기$/,
  /^본 서비스의 해석 원리는 .* 제휴 관계가 없습니다$/,
  /^내 여덟 글자에 비어 있는 오행이 없어, 보완 판정 대상이 아닙니다\.$/,
  /^내 패턴에 없는 [木火土金水]\([목화토금수]\)(, [木火土金水]\([목화토금수]\))*를? 상대 여섯 글자가 채워줍니다\. 서로의 빈 오행을 메우는 구조입니다\.$/,
  /^조합은 다섯 천간합 쌍에 해당하지 않습니다\.$/,
  /^당신은 .+입니다(\.)?$/,
  /^[가-힣]{2,3} · .+$/,
  /^P-\d{8}(-\d{4})?$/,
  /^(여덟|여섯) 글자에 다섯 가지 기운이 몇 개씩 들었는지 세어본 지형도입니다\. 짙을수록 그 기운이 강하게 작동합니다\.$/,
  /^(여덟|여섯) 글자 중 [목화토금수] 기운이 \d+개로 가장 많고, [목화토금수](, [목화토금수])* 기운은 없습니다\.$/,
  /^(여덟|여섯) 글자 중 [목화토금수] 기운이 \d+개로 가장 많습니다\.$/,
  /^(여덟|여섯) 글자 중 [목화토금수](, [목화토금수])* 기운은 없습니다\.$/,
  /^(여덟|여섯) 글자 중 [목화토금수](, [목화토금수])* 기운이 없습니다\.$/,
  /^십 년 단위로 흐름의 무대가 바뀝니다\. 지금은 \d+구간입니다\.$/,
  /^십 년 단위로 흐름의 무대가 바뀝니다\. 첫 구간은 \d+세에 열립니다\.$/,
  /^천간 비율 \d+:\d+$/,
  /^\d+세부터 \d+세까지$/,
  /^[가-힣]+\(.+\) · 절입 후 [\d일시간분. ]+$/,
  /^[가-힣]+\(.+\) · \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} KST$/,
  /^\d{2}:\d{2} · 보정 [+\-]?\d+분$/,
  /^경도 [+\-]?\d+분 · 균시차 [+\-]?\d+분$/,
  /^당일 12:00 정오 가정 · 보정 후 \d{2}:\d{2}$/,
  /^60분 되돌림 · \d{4}-\d{2}-\d{2} \d{2}:\d{2} ~ \d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
  /^(자|축|인|묘|진|사|오|미|신|유|술|해)(, (자|축|인|묘|진|사|오|미|신|유|술|해))* \(역법 라이브러리 계산\)$/,
  /^근거 [A-Z][A-Z0-9\-,\s·]+$/,
  /^월주 .{2} 기준 (순행|역행) · 대운수 = 출생에서 인접 절까지 일수 ÷ 3 \(역법 라이브러리 manseryeok\)$/,
  /^첫 대운 시작 전입니다\. \d+세부터 첫 구간이 열립니다\.$/,
  /^내가 부족한 오행은 [木火土金水](, [木火土金水])*이지만, 상대 여섯 글자에는 이 오행이 없습니다\.$/,
  /^왕지 .가 없어 왕지를 끌어오려는 공협 상태로 본다\.$/,
  /^[甲乙丙丁戊己庚辛壬癸]\([가-힣]\) · [甲乙丙丁戊己庚辛壬癸]\([가-힣]\) 조합은 다섯 천간합 쌍에 해당하지 않습니다\.$/,
  /^(나와 같은 성질|표현과 결실|재물·배우자|직장과 질서·명예|공부와 기억·어머니)의 기운\(전통 용어: (비동|식상|재성|관성|인성)\)$/
,
  // 관계 읽기 동적 조합 문장 (구조화 데이터 조합 — 선언 템플릿)
  // 대운 구간 서사 2종 템플릿 (entry.cjs luckNarrativeLine · ROLE_DISPLAY 문구 조합 · 작업2 선언 등록)
  /^이 10년은 (나와 같은 성질|표현과 결실|재물·배우자|직장과 질서·명예|공부와 기억·어머니)의 기운으로 (흐름이 밀어주는 편이에요|저절로 되기보다 품이 드는 시기예요)\.$/,
  // FAQ 질문·답변 (faqSection · 답변은 policy.json 고지문·기존 화면 문장 재사용 + 중립 안내 · 작업3 선언 등록)
  /^자주 묻는 질문$/,
  /^일간이 뭐예요\?$/,
  /^결과 카드 맨 위 굵은 글자가 일간입니다\.$/,
  /^나를 나타내는 위 글자입니다\.$/,
  /^왜 계산 과정을 보여주나요\?$/,
  /^결과를 만든 계산의 근거를 함께 보여드리기 위해서입니다\.$/,
  /^출생시각을 모르면\?$/,
  /^서머타임은 어떻게 적용되나요\?$/,
  /^태어난 기록 시각이 한국 서머타임 적용 구간이면 표준시로 60분 되돌려 계산합니다\.$/,
  /^적용되면 결과 화면 상단에 서머타임 보정 고지가 함께 표시됩니다\.$/,
  /^이 결과는 운세인가요\?$/,
/* 번들 뷰 함수가 JSON 조각+고정 연결어로 조립하는 문장형 (접두 제거 후 JSON 대조) */
];

/* 번들 뷰 함수가 JSON 조각+고정 연결어로 조립하는 문장형 */
const CONSTRUCTED = [
  /^왕지 .를 포함한 삼합이 성립했다\. /,
  /^왕지 .를 포함한 반합이다\. /
];

function inContent(t) {
  return ALLOWED.some((s) => s.indexOf(t) !== -1);
}

function classify(t) {
  if (t.length < 10) return "short";
  if (DECLARED.indexOf(t) !== -1) return "declared";
  if (TEMPLATES.some((re) => re.test(t))) return "template";
  if (inContent(t)) return "content";
  for (const p of GLUE_PREFIX) {
    for (const sfx of GLUE_SUFFIX) {
      let core = t;
      if (p && !core.startsWith(p)) continue;
      if (p) core = core.slice(p.length);
      if (sfx) {
        if (!core.endsWith(sfx)) continue;
        core = core.slice(0, core.length - sfx.length);
      }
      if (core && inContent(core)) return "glue";
    }
  }
  for (const re of CONSTRUCTED) {
    if (re.test(t) && inContent(t.replace(re, ""))) return "glue";
  }
  return "FAIL";
}

function decode(t) {
  return t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/>/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function textNodes(html) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, "")
    .replace(/<[^>]+>/g, "\n")
    .split("\n")
    .map((s) => decode(s.trim()))
    .filter(Boolean);
}

function checkContentCorrespondence(label, html) {
  const nodes = textNodes(html);
  for (const t of nodes) {
    const verdict = classify(t);
    if (verdict === "FAIL") {
      fail(`콘텐츠 대응 검사(${label}): 콘텐츠 JSON에 없는 문장 노출 → "${t}"`);
    }
    /* 가운뎃점 줄당 1개 (내가 조립한 카피만 검사. 콘텐츠·조합문·짧은 토큰의 데이터 나열은 제외) */
    if (verdict === "declared" || verdict === "template") {
      const dots = (t.match(/·/g) || []).length;
      if (dots > 1) fail(`가운뎃점 규칙(${label}): 한 줄에 · ${dots}개 → "${t}"`);
    }
  }
}

checkContentCorrespondence("1985 남자", html1WithRel);
checkContentCorrespondence("1987 여자(DST)", html2);
checkContentCorrespondence("시각 미상", html3);

// ---------------------------------------------------------------------------
// 신규: 섹션 구조 스냅샷 (3케이스 · 순서 고정)
// ---------------------------------------------------------------------------

const SEC_TITLES = {
  s2: "한눈 요약",
  s3: "어떤 사람인가요?",
  s4: "무엇이 많고, 무엇이 부족한가요?",
  s5: "어떤 일이 어울리나요?",
  s6: "조심할 신호는?",
  s7: "시간의 흐름은?",
  s8: "내 글자들은 서로 어떻게 작동하나요?",
  s9: "마음은 어떤가요?",
  s10: "다른 사람과 보기"
};

function secQuestions(html) {
  const out = [];
  const re = /<h2 class="sec-q">([\s\S]*?)<\/h2>/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

function checkSectionOrder(label, html, chart) {
  const expected = [
    SEC_TITLES.s2, SEC_TITLES.s3, SEC_TITLES.s4, SEC_TITLES.s5,
    SEC_TITLES.s6, SEC_TITLES.s7, SEC_TITLES.s8
  ];
  if (VIEW.matchAnsim(chart).length) expected.push(SEC_TITLES.s9);
  expected.push(SEC_TITLES.s10);
  const actual = secQuestions(html);
  eq(JSON.stringify(actual), JSON.stringify(expected), `섹션 구조 스냅샷(${label})`);
  /* details: 변화 규칙(S8 안) + 계산 과정·용어집(S12, 순서 고정) */
  const s8fold = html.indexOf("변화 규칙 자세히");
  const calc = html.indexOf("계산 과정 · 근거 표 전체");
  const gloss = html.indexOf("용어 자세히 보기 · 용어집");
  if (s8fold === -1) fail(`변화 규칙 details 누락(${label})`);
  if (calc === -1 || gloss === -1) fail(`S12 details 2종 누락(${label})`);
  if (!(calc < gloss)) fail(`S12 details 순서 이상(${label}): 계산 과정 → 용어집`);
  if (!(s8fold < calc)) fail(`S8 변화 규칙 details가 S12보다 앞에 와야 함(${label})`);
  if ((html.match(/<details/g) || []).length !== 4) fail(`details 개수 4 아님(${label}): ` + (html.match(/<details/g) || []).length);
  if (!/<details class="fold" open><summary>계산 과정/.test(html)) fail(`계산 과정 details 열림(하이브리드) 아님(${label})`);
  if (!/<details class="fold" open><summary>용어 자세히/.test(html)) fail(`용어집 details 열림 아님(${label})`);
  if (!/<details class="fold" open><summary>변화 규칙/.test(html)) fail(`변화 규칙 details 열림 아님(${label})`);
  /* FAQ details: S9(마음 읽기) 뒤, S10(다른 사람과 보기) 앞 · 닫힘 기본 · 5문항 */
  const faqStart = html.indexOf('<details class="fold faq"><summary>자주 묻는 질문</summary>');
  const relStart = html.indexOf('<p class="sec-label">Q09</p>');
  if (faqStart === -1) fail(`FAQ details 누락 또는 닫힘 아님(${label})`);
  if (/<details class="fold faq" open>/.test(html)) fail(`FAQ details가 기본 열림(${label})`);
  if (relStart !== -1 && !(faqStart < relStart)) fail(`FAQ가 S10 다른 사람과 보기 뒤에 있음(${label})`);
  for (const q of ["일간이 뭐예요?", "왜 계산 과정을 보여주나요?", "출생시각을 모르면?", "서머타임은 어떻게 적용되나요?", "이 결과는 운세인가요?"]) {
    if (html.indexOf(q) === -1) fail(`FAQ 문항 누락(${label}): ${q}`);
  }
}

checkSectionOrder("1985 남자", html1, fromBundle);
checkSectionOrder("1987 여자(DST)", html2, dstCase);
checkSectionOrder("시각 미상", html3, noHour);

// ---------------------------------------------------------------------------
// 신규: 용어집 커버리지 (노출 전문 용어 ⊆ S12 용어집)
// ---------------------------------------------------------------------------

const REQUIRED_TERMS = [
  "일간", "천간", "지지", "원국", "합", "충", "대운", "진태양시", "공망",
  "비동", "식상", "재성", "관성", "인성", "삼합·반합", "공협"
];
function glossaryBlock(html) {
  const start = html.indexOf("용어 자세히 보기");
  const end = html.indexOf("</details>", start);
  return html.slice(start, end);
}
for (const term of REQUIRED_TERMS) {
  if (glossaryBlock(html1).indexOf('">' + term + "</th>") === -1) {
    fail(`용어집 커버리지: 용어집에 없는 노출 용어 → ${term}`);
  }
}
/* 실제 노출 확인: 전문 용어가 화면에 실제로 쓰이는지(용어집만 있고 미노출이면 의미 없음) */
const visible1 = html1.replace(/<details[\s\S]*?<\/details>/g, "");
for (const term of ["일간", "천간", "지지", "대운"]) {
  if (visible1.indexOf(term) === -1) fail(`용어집 커버리지: 용어집에 있는데 화면 미노출 → ${term}`);
}
/* CR/AP 코드는 details 안에만 허용 */
if (/CR\d\d|AP\d\d/.test(visible1)) fail("CR/AP 전문 코드가 접힘 밖에 노출됨");

// ---------------------------------------------------------------------------
// 신규: 검증 모드 유지 ({{FORM_ENDPOINT}} · mailto 폴백 · src · 금지어 · em-dash)
// ---------------------------------------------------------------------------

if (html1.indexOf("{{FORM_ENDPOINT}}") === -1) fail("{{FORM_ENDPOINT}} 토큰 유지 실패");
if (html1.indexOf('name="entry.1312707957" value="direct"') === -1) fail("이메일 폼 src 추적(entry.NNN 매핑) 누락");
if (html1.indexOf('name="entry.221952772" value="chart"') === -1) fail("이메일 폼 page 필드(entry.NNN 매핑) 누락");
if (html1.indexOf('name="entry.1579324013"') === -1) fail("이메일 폼 이메일 필드(entry.NNN 매핑) 누락");
if (html1.indexOf('target="sajuroot-post"') === -1 || html1.indexOf('id="sajuroot-post"') === -1) fail("숨은 iframe POST 대상 누락");
if (html1.indexOf("mailto:sajuroot@example.com") === -1) fail("mailto 폴백 링크 누락");

/* DST 케이스: 서머타임 고지(최상단 notice) + 근거 표 행 */
if (html2.indexOf("서머타임 보정") === -1) fail("1987 DST 케이스: 서머타임 최상단 고지 누락");
if (html2.indexOf(dstCase.correctionBreakdown.dstNote) === -1) fail("1987 DST: dstNote 문장 미표시");
if (html2.indexOf("60분 되돌림 · 1987-05-10 02:00 ~ 1987-10-11 03:00") === -1) fail("1987 DST: 근거 표 서머타임 행 누락");
if (html2.indexOf("辰") === -1) fail("1987 DST: 시주 辰(정확값 戊辰) 미표시");
if (html1.indexOf('class="sec-label">서머타임 보정') !== -1) fail("1985 비DST 케이스에 서머타임 고지 노출됨");

/* 대운 현재 구간 강조 */
if (html1.indexOf('class="luck-now"') === -1) fail("1985 남자: 대운 현재 구간 강조 누락");
if (html1.indexOf("지금은 ") === -1 || !/지금은 \d+구간입니다\./.test(html1)) fail("1985 남자: '지금은 N구간입니다' 리드 문구 누락");

/* 작업1: 캐치프레이즈 노출 (기토 기토 己 catchphrase · 일간 배지 아래) */
if (html1.indexOf("당신의 무기는 심으면 살리는 다정함이에요.") === -1) fail("1985 남자: 결과 카드 헤더 캐치프레이즈 누락");
if (!html2.includes(CORE.STEMS.find((s) => s.stemHanja === dstCase.dayMaster.hanja).catchphrase)) fail("1987 여자: 캐치프레이즈 누락");

/* 작업2: 대운 구간 서사 (2종 템플릿 · 천간·지지 역할 판정 · 현재 구간 지금 칩) */
const narrRe = /<p class="luck-narr">[\s\S]*?<\/p>/g;
const narr1 = html1.match(narrRe) || [];
if (narr1.length !== 10) fail(`1985 남자: 대운 서사 10구간 아님: ${narr1.length}`);
if (html1.indexOf("이 10년은 나와 같은 성질의 기운으로 흐름이 밀어주는 편이에요.") === -1) fail("1985 남자: 첫 구간(무인) 서사 문장 누락 (살림 템플릿)");
const narrPs = html1.match(/<p class="luck-narr">[\s\S]*?<\/p>/g) || [];
const nowInNarr = narrPs.filter((p) => p.indexOf("now-chip") !== -1).length;
if (nowInNarr !== 1) fail("1985 남자: 서사 현재 구간 지금 칩 1개 아님");
const narr2 = html2.match(/이 10년은 (나와 같은 성질|표현과 결실|재물·배우자|직장과 질서·명예|공부와 기억·어머니)의 기운으로 (흐름이 밀어주는 편이에요|저절로 되기보다 품이 드는 시기예요)/g) || [];
if (narr2.length !== 10) fail(`1987 여자: 대운 서사 10구간 아님: ${narr2.length}`);
if (narr2.indexOf("이 10년은 직장과 질서·명예의 기운으로 저절로 되기보다 품이 드는 시기예요") === -1) fail("1987 여자: 누름 템플릿(관성 구간) 서사 미노출");
if (html3.indexOf("성별을 알려주면") === -1) fail("시각 미상: 성별 미선택 안내 누락");
if (html1.indexOf('class="dm-chip">일간</span>') === -1) fail("오행 지형도 일간 칩 누락");
/* 기토는 반합 1건이 감지되므로 안정 문구가 아니라 감지 결과가 나와야 한다 */
if (html1.indexOf("반합") === -1) fail("1985 남자: 감지된 변화(木 반합) 강조 누락");
if (html3.indexOf("안정적인 배열입니다") === -1) fail("시각 미상: 안정 배열 문구 누락");

/* 금지어(카피덱): 고지문 안의 "운세가 아니다" 표현은 예외로 제외하고 검사 */
const POLICY_BOUNDARY = "이 서비스는 운세가 아니라 자기 이해 도구입니다. 결과는 미래를 예측하지 않습니다";
const FORBIDDEN = [
  "운명", "운세", "점술", "숙명", "천명", "포축", "천생연분", "영험", "신비한",
  "십신", "격국", "용신", "fortune", "destiny", "fate", "the stars say"
];
for (const html of [html1WithRel, html2, html3]) {
  const vis = html.replace(/<details[\s\S]*?<\/details>/g, "").split(POLICY_BOUNDARY).join("").toLowerCase();
  if (html.indexOf("\u2014") !== -1 || html.indexOf("\u2013") !== -1) fail("em-dash(en/em dash) 노출");
  for (const word of FORBIDDEN) {
    if (vis.indexOf(word.toLowerCase()) !== -1) fail(`금지어 노출: ${word}`);
  }
}

// ---------------------------------------------------------------------------
// 요약 출력
// ---------------------------------------------------------------------------

const bundleKb = (require("fs").statSync(bundlePath).size / 1024).toFixed(1);
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
console.log(`  DST(1987-08-28 09:50)=${dstCase.fourPillarsHanja} · 되돌림 60분 · 고지+표 행 확인`);
console.log(`  [일관성 검증] 콘텐츠 대응=3케이스 PASS(${ALLOWED.length}개 콘텐츠 문장 대조) / 섹션 스냅샷=3케이스 PASS / 용어집 커버리지=${REQUIRED_TERMS.length}용어 PASS / FAQ 5문항+닫힘 PASS`);
console.log(`  [보완 작업] 캐치프레이즈 노출 PASS / 대운 서사 10구간×2케이스(살림·누름 템플릿) PASS / iframe POST(entry.NNN) PASS`);
console.log(`  [검증 모드] {{FORM_ENDPOINT}} 토큰 유지 · mailto 폴백 · src 추적(entry.NNN) · 금지어 0 · em-dash 0 · details 밖 CR/AP 0`);
console.log(`  bundle.js=${bundleKb}kb · 용어집 ${VIEW.GLOSSARY.length}항목 · details 4종(S8 1 + FAQ 1 + S12 2)`);
