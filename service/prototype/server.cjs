"use strict";

/*
 * SAJU(가칭) 무료 코어 첫 화면 프로토타입 · wayfinder #13
 * ------------------------------------------------------
 * Node 내장 http 전용. 의존성 없음. 포트 4173.
 *
 *   GET  /           입력 폼 (도판 02)
 *   POST /result     결과 카드 (도판 03 계산 -> 도판 04 카드)
 *   GET  /result     같은 처리 (쿼리 파라미터, curl 검증용)
 *   GET  /style.css  정적 스타일 (Swiss Ledger KO, 토큰 v1.0)
 *
 * 출처
 *   디자인: design-ssot/05-handoff/tokens.css v1.0 + HANDOFF.md
 *   카피:   docs/copy-deck-v2-kr.md ({{BRAND}}, {{PRICE}} 토큰 유지)
 *   엔진:   service/engine/src/engine.cjs (반환 키는 실측으로 확인)
 *   콘텐츠: service/content/stems.json + policy.json
 *
 * 하드 룰: 오컬트 심벌 0, 운세 계열 어휘 0(policy 고지문 제외), em-dash 0,
 *          다크 배경 0. 남촌 원문 인용 없음(stems.json 재구성 콘텐츠만 사용).
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const { computeChart } = require(path.join(__dirname, "..", "engine", "src", "engine.cjs"));

const CONTENT_DIR = path.join(__dirname, "..", "content");
const STEMS = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, "stems.json"), "utf8")).stems;
const POLICY = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, "policy.json"), "utf8"));
const PORT = 4173;

// ---------------------------------------------------------------------------
// 화면 문안 뷰 레이어 (티켓 13 산출물)
// 배지명·한 줄은 카피덱 v2-KR §9, 영어명은 docs/badge-naming-en.md 신규 영어명.
// 성향 요약과 성장 조건은 stems.json coreTraits·growthNeeds를 문장형으로 재서술했다.
// ---------------------------------------------------------------------------

const BADGE = {
  "甲": { name: "큰 나무", en: "Heartwood", one: "위로 뻗는 줄기, 아래로 내린 뿌리." },
  "乙": { name: "작은 나무", en: "Ivy Thread", one: "휘어져도 끊기지 않는 성질." },
  "丙": { name: "태양", en: "Noon Mark", one: "넓게 비추는 열." },
  "丁": { name: "달", en: "Moon Phase", one: "가까이 오래 머무는 빛." },
  "戊": { name: "큰 산", en: "Granite Ridge", one: "무겁고 움직이지 않는 바탕." },
  "己": { name: "정원 흙", en: "Garden Soil", one: "심으면 살리는 흙." },
  "庚": { name: "큰 쇠", en: "Cast Iron", one: "벼려진 면의 단단함." },
  "辛": { name: "작은 쇠", en: "Silver Foil", one: "세공되어 빛나는 광택." },
  "壬": { name: "넓은 호수", en: "Mirror Lake", one: "넓게 고이고, 깊게 흐르는 물." },
  "癸": { name: "시냇물", en: "Mountain Stream", one: "길을 내면서 스며드는 물." },
};

const NARRATIVE = {
  "甲": {
    summary: [
      "위로 곧게 뻗는 개척 의식이 성격의 축입니다.",
      "새로운 것을 좇는 창의성과, 미래를 먼저 설계하는 기획형 사고가 함께 작동합니다.",
      "사람을 모으고 키우는 어진 리더 기질이 있어, 당신 곁에는 자연스럽게 사람이 모입니다.",
      "한번 뿌리내린 곳을 잘 옮기지 않는 고집과 자존심도 함께 있습니다.",
      "방향이 분명할 때 당신의 성장 속도는 가장 빨라집니다.",
    ],
    growth: "자라려면 뿌리내릴 넓은 땅과 충분한 물, 그리고 다듬어줄 기준이 필요합니다. 햇빛에 해당하는 무대가 생기면 그동안 키운 힘이 한꺼번에 드러납니다.",
  },
  "乙": {
    summary: [
      "부드럽지만 쉽게 끊기지 않는 생명력이 당신의 바탕입니다.",
      "밟혀도 다시 피는 강인함과 위로 뻗는 상승 욕구를 함께 지녔습니다.",
      "곁을 보좌하며 함께 자라는 참모 기질이 있어, 협력하는 자리에서 힘이 납니다.",
      "소중한 공간과 가정을 지키는 온기가 성격의 중심에 있습니다.",
    ],
    growth: "기댈 큰 나무와 울타리 있는 자기 땅이 있을 때 크게 성장합니다. 다듬어주는 기준이 생기면 잡초가 아니라 꽃으로 남습니다.",
  },
  "丙": {
    summary: [
      "매일 새로 뜨는 태양처럼, 당신의 에너지는 밖으로 넓게 발산됩니다.",
      "활발한 추진력과 밝은 웃음으로 사람을 모으며, 현실을 다루는 판단력도 갖추고 있습니다.",
      "질서와 예를 중시하는 명예감각이 있어, 대표로 서는 자리에서 힘이 납니다.",
      "자존심이 세고 화려함을 추구하는 면도 있어, 빛을 관리하는 법을 알 때 더 좋아집니다.",
    ],
    growth: "빛을 받아 꽃 피울 상대와 맑은 무대가 있을 때 가장 밝아집니다. 지나친 열을 식혀줄 물이 곁에 있으면 오래 타오립니다.",
  },
  "丁": {
    summary: [
      "가까이 오래 머무는 빛이 당신의 방식입니다.",
      "이상을 좇는 섬세한 열정과, 스스로 타서 주변을 밝히는 헌신이 함께 있습니다.",
      "자애롭고 관대한 베풂이 있어, 보이지 않는 곳에서 길을 밝혀주는 역할에 어울립니다.",
      "질서와 예의를 지키는 성실함이 성격의 바닥에 깔려 있습니다.",
    ],
    growth: "빛을 드러낼 무대와 빛을 받아줄 상대가 있을 때 제 빛을 냅니다. 큰 빛 옆에서는 이상과 현실 사이의 거리를 스스로 조절할 필요가 있습니다.",
  },
  "戊": {
    summary: [
      "무엇이든 담아 길러내는 넓은 바탕이 당신입니다.",
      "포용하고 키우는 중심의 마음과 강한 믿음이 있어, 공동체의 기둥 역할에 어울립니다.",
      "신중하고 안정적인 판단이 기본이며, 자원을 모아 저장하는 경영 감각이 있습니다.",
      "안정을 좇다 개혁의 타이밍을 놓치지 않도록, 속도를 스스로 점검하는 습관이 도움이 됩니다.",
    ],
    growth: "심을 나무에 해당하는 목표가 있을 때 넓은 땅이 비로소 의미를 갖습니다. 적절한 수분과 거둘 쇠가 갖춰지면 키운 만큼 돌아옵니다.",
  },
  "己": {
    summary: [
      "심으면 살리는 정원의 흙이 당신의 바탕입니다.",
      "받아 길러내는 너그러움과 가정 중심의 온기가 성격의 중심에 있습니다.",
      "작은 것을 정성스레 다듬는 꼼꼼함이 있어, 손이 가는 일에서 실력이 납니다.",
      "겉으로는 신중하고 안정적인 처세를 택하며, 속으로는 큰 명예를 부르고 싶은 마음이 있습니다.",
    ],
    growth: "감당 범위 안의 목표와 어울리는 작은 나무가 있을 때 정원이 가장 아름답습니다. 알맞은 빛과 물이 갖춰지면 심은 것 전부를 살립니다.",
  },
  "庚": {
    summary: [
      "벼려진 큰 칼의 단단함이 당신의 방식입니다.",
      "냉철한 결단력과 정리 능력이 있어, 복잡한 상황에서 방향을 자릅니다.",
      "규범과 규칙을 지키는 책임감, 옳고 그름을 가르는 정의감이 강합니다.",
      "의리와 소속감이 두터워, 권한과 명분이 주어지는 자리에서 힘이 납니다.",
    ],
    growth: "잡을 칼자루에 해당하는 재물과 명분이 있을 때 실력이 제대로 벼려집니다. 담금질할 맑은 물과 기회가 있으면 녹슬지 않습니다.",
  },
  "辛": {
    summary: [
      "세공되어 빛나는 작은 칼의 정밀함이 당신의 방식입니다.",
      "예리한 집중력이 있어, 손끝의 정확함이 필요한 일에 강합니다.",
      "냉철한 판단과 긴장감 있는 규범 준수, 굳은 의리를 함께 지녔습니다.",
      "빛나는 자리를 갈구하는 명예욕이 있지만, 속내는 잘 드러내지 않는 예민함이 있습니다.",
    ],
    growth: "알맞은 크기의 칼자루와 담글 물이 갖춰지면 광택이 살아납니다. 함께 힘을 보태줄 동료가 옆에 있을 때 혼자 베다 상처 입는 일이 줄어듭니다.",
  },
  "壬": {
    summary: [
      "넓게 고이고 깊게 흐르는 큰 물이 당신의 바탕입니다.",
      "모든 것을 품는 인내와 침묵이 있어, 흔들리는 상황에서도 중심을 유지합니다.",
      "막힌 곳을 찾아 흐르는 친화력과, 장애를 헤치는 유연한 지혜를 지녔습니다.",
      "기억을 오래 저장하는 두뇌가 있어, 지나간 일을 정리해 두는 습관이 있습니다.",
    ],
    growth: "흐름을 가둘 제방과 수량을 지켜줄 원천이 있을 때 수력이 됩니다. 수면 위에 뜰 빛, 그리고 명예의 무대가 생기면 깊이가 세상에 드러납니다.",
  },
  "癸": {
    summary: [
      "길을 내면서 스며드는 작은 물이 당신의 방식입니다.",
      "조용히 스며드는 인내력이 있어, 오래 걸리는 일도 끝까지 적셔 둡니다.",
      "낮은 곳으로 흐르는 겸손과, 장애물을 돌아가는 유연함을 함께 지녔습니다.",
      "모든 것을 기억하는 침묵의 두뇌가 있어, 꾀가 필요한 순간에도 앞서갑니다.",
    ],
    growth: "감당 가능한 크기의 제방과 마르지 않는 원천이 있을 때 생명을 기릅니다. 작은 온기가 곁에 있으면 작은 물도 꽃을 피웁니다.",
  },
};

const ELEMENT_HANJA = { 목: "木", 화: "火", 토: "土", 금: "金", 수: "水" };
const ELEMENT_ORDER = ["木", "火", "土", "金", "水"];

// ---------------------------------------------------------------------------
// 유틸
// ---------------------------------------------------------------------------

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function humanDur(minutes) {
  if (minutes < 60) return `${minutes}분`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)}시간 ${minutes % 60}분`;
  return `${(minutes / 1440).toFixed(1)}일`;
}

function kstPretty(kst) {
  // '1985-04-05T05:14+09:00' -> '1985-04-05 05:14 KST'
  return kst.replace("T", " ").replace("+09:00", " KST");
}

function head(title) {
  return `<!doctype html>
<html lang="ko"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">
<script>document.documentElement.className="js";</script>
</head>`;
}

// ---------------------------------------------------------------------------
// 도판 02 · 입력 폼
// ---------------------------------------------------------------------------

function slotStripForm() {
  const groups = ["年", "月", "日", "時"];
  return `<div class="slotstrip" aria-hidden="true">${groups
    .map(
      (g) =>
        `<div class="slotgroup"><span class="slotlabel">${g}</span><div class="slots"><span class="slot"></span><span class="slot"></span></div></div>`
    )
    .join("")}</div>
<p class="slotcap">여덟 글자가 이 자리에 채워집니다.</p>`;
}

function formPage(state) {
  const v = state.values || {};
  const err = state.error || null;
  const errDate = err && err.field === "date" ? `<p class="error">${esc(err.message)}${err.detail ? ` <span class="error-detail">${esc(err.detail)}</span>` : ""}</p>` : "";
  const errTime = err && err.field === "time" ? `<p class="error">${esc(err.message)}</p>` : "";
  return `${head("{{BRAND}} · 나는 무엇으로 이루어져 있는가")}
<body><main class="page">
<header class="topbar"><span class="fig">도판 02 - 입력</span><span class="wordmark">{{BRAND}}</span></header>

<section class="hero">
  <p class="eyebrow">열 개의 물상</p>
  <h1 class="hero-line">나는 무엇으로<br>이루어져 있는가<span class="accent">?</span></h1>
  <p class="hero-sub">질문의 답은 생년월일에서 시작합니다.</p>
</section>

${slotStripForm()}

<form method="post" action="/result" class="form" novalidate>
  <div class="field-block">
    <span class="field-label" id="dob-label">생년월일</span>
    <p class="helper">양력 기준입니다.</p>
    <div class="date-row" role="group" aria-labelledby="dob-label">
      <div class="date-cell">
        <label for="f-year">연도</label>
        <input id="f-year" name="year" type="text" inputmode="numeric" maxlength="4" placeholder="1985" value="${esc(v.year || "")}">
      </div>
      <div class="date-cell">
        <label for="f-month">월</label>
        <input id="f-month" name="month" type="text" inputmode="numeric" maxlength="2" placeholder="03" value="${esc(v.month || "")}">
      </div>
      <div class="date-cell">
        <label for="f-day">일</label>
        <input id="f-day" name="day" type="text" inputmode="numeric" maxlength="2" placeholder="21" value="${esc(v.day || "")}">
      </div>
    </div>
    ${errDate}
  </div>

  <div class="field-block">
    <span class="field-label" id="time-label">출생 시각</span>
    <p class="helper">가까울수록 정확해집니다.</p>
    <input id="time" name="time" type="time" aria-labelledby="time-label" value="${esc(v.time || "")}">
    <label class="check"><input type="checkbox" id="unknown" name="unknown" value="1"${v.unknown ? " checked" : ""}> 시각을 모르겠어요</label>
    <p class="helper small">몰라도 결과를 받을 수 있습니다. 다루는 주제가 줄어듭니다.</p>
    ${errTime}
  </div>

  <p class="privacy">입력값은 판정에만 쓰입니다. 별도 동의 없이 저장하지 않습니다.</p>
  <button type="submit" class="cta">내 패턴 읽기<span class="accent">.</span></button>
</form>

<footer class="footer">
  <p class="attribution">{{BRAND}}는 자기이해를 위한 읽기 도구입니다. 의료, 법률, 금융 조언이 아닙니다.</p>
  <nav class="foot-links"><a href="#" aria-disabled="true">개인정보 처리방침</a><a href="#" aria-disabled="true">이용약관</a></nav>
</footer>
</main>
<script>
(function(){
  var u=document.getElementById('unknown'), t=document.getElementById('time');
  function sync(){ t.disabled=u.checked; }
  u.addEventListener('change', sync); sync();
})();
</script>
</body></html>`;
}

// ---------------------------------------------------------------------------
// 도판 03 · 계산 -> 도판 04 · 결과 카드
// ---------------------------------------------------------------------------

function slotStripChart(chart) {
  const noHour = chart.mode === "noHour";
  const cols = [
    { label: "年", pillar: chart.pillars.year },
    { label: "月", pillar: chart.pillars.month },
    { label: "日", pillar: chart.pillars.day },
    { label: "時", pillar: chart.pillars.hour },
  ];
  return `<div class="slotstrip" aria-hidden="true">${cols
    .map((c) => {
      if (noHour && !c.pillar) {
        return `<div class="slotgroup"><span class="slotlabel">${c.label}</span><div class="slots"><span class="slot off">제외</span><span class="slot off">제외</span></div></div>`;
      }
      const [s, b] = c.pillar.hanja.split("");
      return `<div class="slotgroup"><span class="slotlabel">${c.label}</span><div class="slots"><span class="slot" data-glyph="${s}"></span><span class="slot" data-glyph="${b}"></span></div></div>`;
    })
    .join("")}</div>`;
}

function pillarTable(chart) {
  const noHour = chart.mode === "noHour";
  const cols = [
    { label: "年", sub: "연", pillar: chart.pillars.year },
    { label: "月", sub: "월", pillar: chart.pillars.month },
    { label: "日", sub: "일", pillar: chart.pillars.day, you: true },
    { label: "時", sub: "시", pillar: chart.pillars.hour },
  ];
  const headRow = cols
    .map((c) => {
      const you = c.you ? ' class="you-c you-h"' : "";
      const tag = c.you ? '<span class="you">YOU</span>' : "";
      return `<th${you}>${c.label}<span class="col-sub">${c.sub}</span>${tag}</th>`;
    })
    .join("");
  const stemRow =
    `<tr><th class="rh">천간</th>` +
    cols
      .map((c) => {
        if (noHour && !c.pillar) return `<td><span class="off">제외</span></td>`;
        const hanja = c.pillar.stem.hanja;
        const ele = c.pillar.stem.element;
        const isDayMaster = c.you;
        const dot = `<span class="${isDayMaster ? "edot on" : "edot"}" title="${ELEMENT_HANJA[ele]}" aria-hidden="true"></span>`;
        const cls = c.you ? ' class="you-c"' : "";
        return `<td${cls}><span class="glyph">${hanja}</span><span class="ele">${dot}${ele}</span></td>`;
      })
      .join("") +
    `</tr>`;
  const branchRow =
    `<tr><th class="rh">지지</th>` +
    cols
      .map((c) => {
        if (noHour && !c.pillar) return `<td><span class="off">제외</span></td>`;
        const hanja = c.pillar.branch.hanja;
        const ele = c.pillar.branch.element;
        const dot = `<span class="edot" title="${ELEMENT_HANJA[ele]}" aria-hidden="true"></span>`;
        const cls = c.you ? ' class="you-c"' : "";
        return `<td${cls}><span class="glyph">${hanja}</span><span class="ele">${dot}${ele}</span></td>`;
      })
      .join("") +
    `</tr>`;
  return `<table class="pillars">
<thead><tr><th class="rh" aria-label="구분"></th>${headRow}</tr></thead>
<tbody>${stemRow}${branchRow}</tbody>
</table>
<p class="slotcap">${noHour ? "시각 미상으로 여섯 글자입니다." : "네 개의 기둥, 여덟 글자입니다."}</p>`;
}

function evidenceTable(chart) {
  const st = chart.solarTermInfo;
  const cb = chart.correctionBreakdown;
  const noHour = chart.mode === "noHour";
  const rows = [];
  rows.push(["당시 절기", `${st.current.name}(${st.current.hanja}) · 절입 후 ${humanDur(st.current.minutesSince)}`]);
  rows.push(["다음 절입", `${st.next.name}(${st.next.hanja}) · ${kstPretty(st.next.kst)}`]);
  if (!noHour) {
    rows.push(["진태양시", `${chart.trueSolarTimeClock} · 보정 ${cb.totalCorrectionMinutes > 0 ? "+" : ""}${cb.totalCorrectionMinutes}분`]);
    rows.push(["보정 재료", `경도 ${cb.longitudeMinutes}분 · 균시차 ${cb.equationOfTimeMinutes}분`]);
  } else {
    rows.push(["판정 가정", `당일 12:00 정오 가정 · 보정 후 ${chart.trueSolarTimeClock}`]);
  }
  const input = chart.input;
  rows.push(["출생지", `서울 기본값 · 북위 ${input.latitude}, 동경 ${input.longitude}`]);
  const rowsHtml = rows
    .map(([k, v]) => `<tr><th class="k">${k}</th><td class="v">${esc(v)}</td></tr>`)
    .join("");
  const assumptionNote = noHour ? `<p class="gov">${esc(chart.assumptions[0])}</p>` : "";
  const hour23 = !noHour && chart.input.timeISO && chart.input.timeISO.slice(0, 2) === "23";
  const jasiNote = hour23 ? `<p class="gov">태어난 시각이 23시 전후입니다. ${esc(POLICY.dayBoundary.uiNotice)}</p>` : "";
  return `<table class="registry">
<caption>근거 표 · 진태양시 = 표준시 + (경도 - 135도) × 4분 + 균시차</caption>
<tbody>${rowsHtml}</tbody>
</table>${assumptionNote}${jasiNote}`;
}

function elementDots(dayMaster) {
  const on = ELEMENT_HANJA[dayMaster.element];
  return `<div class="edots" role="img" aria-label="오행 ${dayMaster.element}">${ELEMENT_ORDER.map(
    (e) => `<span class="edot${e === on ? " on" : ""}" title="${e}" aria-hidden="true"></span>`
  ).join("")}</div>`;
}

function resultPage(chart) {
  const noHour = chart.mode === "noHour";
  const dm = chart.dayMaster;
  const badge = BADGE[dm.hanja];
  const narr = NARRATIVE[dm.hanja];
  const stemMeta = STEMS.find((s) => s.stemHanja === dm.hanja);
  const st = chart.solarTermInfo;
  const patternId = `P-${chart.input.dateISO.replace(/-/g, "")}${chart.input.timeISO ? "-" + chart.input.timeISO.replace(":", "") : ""}`;

  const boundaryWarn = st.nearSolarTermBoundary
    ? `<div class="warn"><p class="sec-label">절기 경계 주의</p><p>${esc(st.riskNote)}</p></div>`
    : "";
  const noHourNotice = noHour
    ? `<div class="notice"><p class="sec-label">시각 미상 모드</p>
       <p>${esc(POLICY.noHourMode.disclaimer)}</p>
       <p>연·월·일 여섯 글자로 읽으며, 시주가 필요한 주제는 제외됩니다.</p>
       <p class="gov">제외: 시주 계산, 자녀 해석, 61~80세 노년 구간, 연하 배우자 상징</p></div>`
    : "";

  const steps = noHour
    ? [
        { value: `${st.current.name} 절입 후 ${humanDur(st.current.minutesSince)}` },
        { value: `정오 가정 · 보정 후 ${chart.trueSolarTimeClock}` },
        { value: "여섯 자리 배치" },
      ]
    : [
        { value: `${st.current.name} 절입 후 ${humanDur(st.current.minutesSince)}` },
        { value: `보정 후 ${chart.trueSolarTimeClock}` },
        { value: "여덟 자리 배치" },
      ];
  const fillPlan = noHour ? [4, 0, 2] : [4, 0, 4];
  const done = noHour ? "시각 없이 날까지의 글자로 읽습니다." : "여덟 글자가 정해졌습니다.";
  const flowData = { steps, fillPlan, done };

  const summaryHtml = narr.summary.map((s) => `<p>${esc(s)}</p>`).join("");
  const govTag = stemMeta && stemMeta.unverified
    ? `<p class="gov">이 물상 요약에는 비검증(unverified) 근거가 포함되어 있습니다</p>`
    : "";

  return `${head("{{BRAND}} · 결과 카드")}
<body><main class="page">
<header class="topbar"><span class="fig">도판 03 - 계산</span><span class="wordmark">{{BRAND}}</span></header>

<section id="analyzing" class="analyzing">
  <p class="cap">${noHour ? "시각 없이 날까지의 글자를 맞추고 있습니다." : "여덟 글자를 맞추고 있습니다."}</p>
  ${slotStripChart(chart)}
  <ol class="steps">
    <li class="step"><span class="step-label">절기 확인</span><span class="step-value"></span></li>
    <li class="step"><span class="step-label">진태양시 보정</span><span class="step-value"></span></li>
    <li class="step"><span class="step-label">팔주 배치</span><span class="step-value"></span></li>
  </ol>
  <p id="done-line" class="done-line" aria-live="polite"></p>
  <p class="fixed-cap">같은 생년월일은 항상 같은 결과를 만듭니다.</p>
  <button type="button" id="skip" class="skip">건너뛰기</button>
</section>

<section id="card" class="result">
  <span class="fig block-fig">도판 04 - 결과 카드</span>
  ${boundaryWarn}
  ${noHourNotice}

  <article class="pattern-card">
    <header class="pc-head"><span>${patternId}</span><span class="barcode" aria-hidden="true"></span><span>{{BRAND}}</span></header>
    <div class="badge-row">
      <div class="badge-id">
        <span class="badge-hanja">${dm.hanja}</span>
        <div>
          <p class="badge-name">${dm.hangul}${dm.element} · ${badge.name}</p>
          <p class="badge-en">${badge.en}</p>
        </div>
      </div>
      ${elementDots(dm)}
    </div>
    <h2 class="declaration">당신은 ${badge.name}입니다<span class="accent">.</span></h2>
    <p class="one-liner">${badge.one}</p>
  </article>

  <section class="sec">
    <p class="sec-label">네 개의 기둥</p>
    ${pillarTable(chart)}
  </section>

  <section class="sec">
    <p class="sec-label">계산 근거</p>
    ${evidenceTable(chart)}
  </section>

  <section class="sec">
    <p class="sec-label">물상 성향</p>
    <div class="prose">${summaryHtml}</div>
    ${govTag}
  </section>

  <section class="sec growth">
    <p class="sec-label">성장 조건</p>
    <p>${esc(narr.growth)}</p>
  </section>

  <section class="cut">
    <h2>여기까지가 진단입니다<span class="accent">.</span></h2>
    <p class="lead">다음부터는 처방입니다.</p>
    <ul class="locked">
      <li>강한 국면, 약한 국면<span class="lock">잠김</span></li>
      <li>관계에서 반복되는 패턴<span class="lock">잠김</span></li>
      <li>언제 달라지는가<span class="lock">잠김</span></li>
    </ul>
    <a class="cta-line" href="#" aria-disabled="true">내 패턴 읽기 · {{PRICE}}</a>
    <p class="helper">1회 결제로 7개 주제 전체를 읽을 수 있습니다.</p>
  </section>

  <footer class="footer">
    <p class="disclaimer">${esc(POLICY.fateDisclaimer)}</p>
    <p class="attribution">${esc(POLICY.attribution.theoryNote)} ${esc(POLICY.attribution.nonAffiliation)}</p>
    <nav class="foot-links"><a href="/">다시 입력하기</a><a href="#" aria-disabled="true">개인정보 처리방침</a><a href="#" aria-disabled="true">이용약관</a></nav>
  </footer>
</section>
</main>
<script id="flow-data" type="application/json">${JSON.stringify(flowData)}</script>
<script>
(function(){
  var data=JSON.parse(document.getElementById('flow-data').textContent);
  var steps=[].slice.call(document.querySelectorAll('.step'));
  var slots=[].slice.call(document.querySelectorAll('.slot[data-glyph]'));
  var doneEl=document.getElementById('done-line');
  var ana=document.getElementById('analyzing');
  var card=document.getElementById('card');
  var filled=0, timer=null;

  function fillNext(n){
    for(var i=0;i<n;i++){
      var s=slots[filled++];
      if(!s) break;
      s.textContent=s.getAttribute('data-glyph');
      s.classList.add('filled');
    }
  }
  function stepGo(idx){
    steps.forEach(function(el,i){
      el.classList.toggle('active', i===idx);
      el.classList.toggle('done', i<idx);
    });
    if(steps[idx]) steps[idx].querySelector('.step-value').textContent=data.steps[idx].value;
    fillNext(data.fillPlan[idx]);
  }
  function finish(){
    if(timer) clearInterval(timer);
    steps.forEach(function(el){ el.classList.remove('active'); el.classList.add('done'); });
    doneEl.textContent=data.done;
    ana.setAttribute('hidden','');
    card.classList.add('revealed');
    card.scrollIntoView({behavior:'smooth', block:'start'});
  }
  var i=0;
  stepGo(0);
  timer=setInterval(function(){ i++; if(i<data.steps.length){ stepGo(i); } else { finish(); } }, 520);
  document.getElementById('skip').addEventListener('click', finish);
})();
</script>
</body></html>`;
}

// ---------------------------------------------------------------------------
// 입력 검증
// ---------------------------------------------------------------------------

function parseInput(params) {
  const year = (params.get("year") || "").trim();
  const month = (params.get("month") || "").trim();
  const day = (params.get("day") || "").trim();
  const time = (params.get("time") || "").trim();
  const unknown = params.get("unknown") === "1";

  if (!/^\d{4}$/.test(year)) return { error: { field: "date", message: "연도는 4자리로 입력해주세요." } };
  if (Number(year) < 1900) return { error: { field: "date", message: "1900년 이후로 입력해주세요." } };
  if (!/^\d{1,2}$/.test(month) || !/^\d{1,2}$/.test(day)) {
    return { error: { field: "date", message: "확인해주세요.", detail: "월과 일을 숫자로 입력해주세요." } };
  }
  const m = Number(month);
  const d = Number(day);
  if (m < 1 || m > 12 || d < 1 || d > 31) {
    return { error: { field: "date", message: "확인해주세요.", detail: "월과 일 범위를 벗어났습니다." } };
  }
  if (!unknown) {
    if (!/^\d{2}:\d{2}$/.test(time)) {
      return { error: { field: "time", message: "시각을 선택하거나, 모르겠어요를 눌러주세요." } };
    }
    if (Number(time.slice(0, 2)) > 23 || Number(time.slice(3, 5)) > 59) {
      return { error: { field: "time", message: "시각을 선택하거나, 모르겠어요를 눌러주세요." } };
    }
  }
  const dateISO = `${year}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const todayISO = new Date().toISOString().slice(0, 10);
  if (dateISO > todayISO) {
    return { error: { field: "date", message: "확인해주세요.", detail: "미래 날짜는 입력할 수 없습니다." } };
  }
  return { values: { dateISO, timeISO: unknown ? null : time, unknown } };
}

// ---------------------------------------------------------------------------
// 라우팅
// ---------------------------------------------------------------------------

function sendHtml(res, status, html) {
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
  res.end(html);
}

function readBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10000) req.destroy();
    });
    req.on("end", () => resolve(new URLSearchParams(body)));
  });
}

async function route(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (req.method === "GET" && url.pathname === "/style.css") {
    const css = fs.readFileSync(path.join(__dirname, "style.css"));
    res.writeHead(200, { "Content-Type": "text/css; charset=utf-8", "Cache-Control": "no-store" });
    res.end(css);
    return;
  }

  if (req.method === "GET" && url.pathname === "/") {
    sendHtml(res, 200, formPage({}));
    return;
  }

  if (url.pathname === "/result" && (req.method === "POST" || req.method === "GET")) {
    const params = req.method === "POST" ? await readBody(req) : url.searchParams;
    const parsed = parseInput(params);
    if (parsed.error) {
      sendHtml(res, 400, formPage(parsed));
      return;
    }
    let chart;
    try {
      chart = computeChart({ dateISO: parsed.values.dateISO, timeISO: parsed.values.timeISO });
    } catch (err) {
      if (err && err.name === "EngineError") {
        sendHtml(res, 400, formPage({ values: parsed.values, error: { field: "date", message: "확인해주세요.", detail: err.message } }));
        return;
      }
      throw err;
    }
    sendHtml(res, 200, resultPage(chart));
    return;
  }

  sendHtml(res, 404, `${head("404")}<body><main class="page"><h1 class="hero-line">404</h1><p class="hero-sub"><a href="/">처음으로 돌아가기</a></p></main></body></html>`);
}

const server = http.createServer((req, res) => {
  route(req, res).catch((err) => {
    console.error("[SAJU prototype] 서버 오류:", err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("서버 오류");
  });
});

server.listen(PORT, () => {
  console.log(`[SAJU prototype] http://localhost:${PORT} · wayfinder #13 무료 코어 첫 화면`);
});
