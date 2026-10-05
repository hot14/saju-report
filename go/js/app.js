/*
 * SajuRoot 첫 유입 실험 · chart.html UI 로직 (무료 차트 · 일반인 리딩 리라이트)
 * ---------------------------------------------------------------------------
 * 오너 피드백: "결과물인데 사용자 입장에서 도대체 무슨 이야기를 하는지 전혀
 * 모르겠다. 이해하기 쉽고 직관적이며 가독성이 좋게. 누락·오역·오류 없이
 * 프로세스상 일관되게 구조화돼야 한다."
 *
 * 섹션 구조(S1~S12 + FAQ, 순서 고정 · smoke.cjs가 스냅샷 검증):
 *   S1 헤더 카드(패턴 ID·일간 배지·캐치프레이즈·한 줄 소개)  S2 한눈 요약(자동 조합)
 *   S3 어떤 사람인가요?    S4 무엇이 많고, 무엇이 부족한가요?
 *   S5 어떤 일이 어울리나요?   S6 조심할 신호는?   S7 시간의 흐름은?(대운 서사 포함)
 *   S8 내 글자들은 서로 어떻게 작동하나요?   S9 마음은 어떤가요?(조건부)
 *   FAQ 자주 묻는 질문(닫힘 details 1개, S9 뒤)
 *   S10 다른 사람과 보기   S11 결과 받아두기   S12 details 2종(계산 과정·용어집)
 *
 * 절대 규칙: 해석 문장은 콘텐츠 JSON(stems/relations/dynamics/regions/policy)
 * 에 있는 문장만 사용한다. 새 해석 문장 창작 금지. 접두·접미 연결어는 중립
 * 문장만 허용(smoke.cjs 콘텐츠 대응 검사가 기계 검증).
 * 전문 세부(계산 근거 표·CR 규칙·역할 범례)는 details로 접는다(기본 닫힘).
 * 근거 코드(T07-119)는 섹션마다 한 줄로만 모아 표기한다.
 *
 * 1) 유입 경로 추적: URL 쿼리 src를 읽어 localStorage와 폼 숨은 필드에 기록
 * 2) 생년월일 폼 처리: 카피덱 v2-KR 문구로 검증 (성별은 선택, 대운 표시용)
 * 3) computeChart + CORE.view(원국 판정 순수 함수)로 전체 섹션 렌더
 * 4) 관계 읽기: 상대 생년월일 입력, 화면 안에서만 계산하고 저장하지 않음
 * 5) 결과 하단 이메일 수집: Google Form formResponse로 숨은 iframe POST(엔드포인트
 *    미설정 시 기존 mailto 폴백 안내 유지)
 *
 * 콘텐츠 출처: service/content/{stems,relations,dynamics,regions}.json(재구성 물상,
 * 검증 통과분), policy.json(고지문), docs/copy-deck-v2-kr.md(문구 톤).
 * 태극성취 근거는 docs/wayfinder/namchon-8geon-panjeong.md(확정, T08-001)를 따른다.
 * 남촌 원문 인용 없음. 문장형 카피, 가운뎃점 줄당 1개, em-dash 0.
 */
(function () {
  "use strict";

  var CORE = window.SajuRoot;
  var VIEW = CORE.view;
  var SRC_KEY = "sajuroot_src";
  var EMAIL_KEY = "sajuroot_email_ok";
  var VALID_SRC = ["seo", "community", "social", "direct"];
  var MAILTO = (window.SAJU_CONFIG && window.SAJU_CONFIG.mailto) || "sajuroot@example.com";
  /* Google Form formResponse 엔드포인트 (wayfinder #14 · P0-1 폼 연동).
     HTML의 action은 {{FORM_ENDPOINT}} 토큰을 유지하고(검증 모드), 실제 제출은
     이 주소로 숨은 iframe POST로 보낸다. 빈 값이면 mailto 폴백으로 전환한다. */
  var FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfGMuBH_ZPZ9jjJAUaVjBMusRdJJ8n4kEtkLZrpXut1LWf7xA/formResponse";
  var FORM_IFRAME = "sajuroot-post";
  /* Google Form 엔트리 매핑: 이메일 · src · page */
  var ENTRY = { email: "entry.1579324013", src: "entry.1312707957", page: "entry.221952772" };

  /* 배지명·영어명·한 줄: 카피덱 v2-KR §9 + docs/badge-naming-en.md (prototype과 동일) */
  var BADGE = {
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

  /* policy.json 고지문 (재구성 콘텐츠 쪽 출처 표기) */
  var POLICY = {
    noHourDisclaimer: "출생시각 미상 시 시주 관련 해석은 학파 원전에 근거가 없어 제공하지 않습니다",
    noHourExcluded: "제외: 시주 계산, 자녀 해석, 61~80세 노년 구간, 연하 배우자 상징",
    boundary: "이 서비스는 운세가 아니라 자기 이해 도구입니다. 결과는 미래를 예측하지 않습니다",
    jasi: "태어난 시각이 23시 전후입니다. 야자시 적용 시 결과가 달라질 수 있습니다.",
    unverified: "이 물상 요약에는 비검증(unverified) 근거가 포함되어 있습니다",
    theory: "본 서비스의 해석 원리는 남촌현대물상론 학파의 공개 강의와 출판물에서 공부한 물상 체계를 독자적으로 재구성한 것입니다",
    nonAffiliation: "남촌물상역학연구회와 제휴 관계가 없습니다"
  };

  /* 오행 상태 칩: 전문 용어(과다·조화·과소) 대신 일반 문구 */
  var STATUS_CHIP = { tooMuch: "많음", balance: "적당함", tooLittle: "없음" };

  /* 섹션 번호(Q01~Q09)와 질문 제목. smoke.cjs 섹션 구조 스냅샷이 이 순서를 검증한다. */
  var SEC = {
    summary: { num: "Q01", title: "한눈 요약" },
    persona: { num: "Q02", title: "어떤 사람인가요?" },
    balance: { num: "Q03", title: "무엇이 많고, 무엇이 부족한가요?" },
    career: { num: "Q04", title: "어떤 일이 어울리나요?" },
    danger: { num: "Q05", title: "조심할 신호는?" },
    time: { num: "Q06", title: "시간의 흐름은?" },
    dynamics: { num: "Q07", title: "내 글자들은 서로 어떻게 작동하나요?" },
    mind: { num: "Q08", title: "마음은 어떤가요?" },
    relation: { num: "Q09", title: "다른 사람과 보기" }
  };

  var KIND_LABEL = {
    chung: "충", sanhap: "삼합", banhap: "반합", gonghyeop: "공협", banghap: "방합", yukhap: "육합"
  };

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
    if (minutes < 60) return minutes + "분";
    if (minutes < 1440) return Math.floor(minutes / 60) + "시간 " + (minutes % 60) + "분";
    return (minutes / 1440).toFixed(1) + "일";
  }

  function kstPretty(kst) {
    return kst.replace("T", " ").replace("+09:00", " KST");
  }

  function emailDone() {
    try { return localStorage.getItem(EMAIL_KEY) === "1"; } catch (e) { return false; }
  }

  function emailDoneHTML() {
    return '<section class="cut"><p class="email-done">알림 신청이 접수되어 있습니다.</p>' +
      '<p class="helper">더 깊은 읽기는 준비 중입니다. 준비되면 신청한 주소로 안내합니다.</p></section>';
  }
  /* 근거 코드 집계: 섹션 안의 모든 근거를 한 줄로 모은다. unverified가 하나라도
     있으면 고지를 함께 표기한다(비검증 근거 포함 고지 유지). */
  function aggregateSrc(items) {
    var ids = [];
    var flagged = false;
    for (var i = 0; i < items.length; i++) {
      var it = items[i] || {};
      var list = it.sources || [];
      for (var j = 0; j < list.length; j++) {
        if (ids.indexOf(list[j]) === -1) ids.push(list[j]);
      }
      if (it.unverified && it.unverifiedSourceIds && it.unverifiedSourceIds.length) {
        flagged = true;
        for (var k = 0; k < it.unverifiedSourceIds.length; k++) {
          if (ids.indexOf(it.unverifiedSourceIds[k]) === -1) ids.push(it.unverifiedSourceIds[k]);
        }
      }
    }
    if (!ids.length) return "";
    var html = '<p class="src-line">근거 ' + esc(ids.join(", ")) + "</p>";
    if (flagged) html += '<p class="uv-flag">비검증 근거 포함</p>';
    return html;
  }

  function uvFlag(item) {
    if (!(item && item.unverified)) return "";
    return '<p class="uv-flag">비검증 근거 포함</p>';
  }

  function sectionOpen(sec) {
    return '<section class="sec"><p class="sec-label">' + esc(sec.num) + '</p><h2 class="sec-q">' + esc(sec.title) + "</h2>";
  }

  function listItems(arr) {
    var out = "";
    for (var i = 0; i < arr.length; i++) out += "<li>" + esc(arr[i]) + "</li>";
    return out;
  }

  // ---------------------------------------------------------------------------
  // 1) 유입 경로 추적: URL src → localStorage → direct
  // ---------------------------------------------------------------------------

  function storedSrc() {
    try {
      var v = localStorage.getItem(SRC_KEY);
      return VALID_SRC.indexOf(v) > -1 ? v : null;
    } catch (e) { return null; }
  }

  function resolveSrc() {
    var q = new URLSearchParams(location.search).get("src");
    var src = (q && VALID_SRC.indexOf(q) > -1) ? q : (storedSrc() || "direct");
    try { localStorage.setItem(SRC_KEY, src); } catch (e) {}
    return src;
  }

  var src = resolveSrc();

  /* 숨은 필드와 링크에 src 주입 (index.html과 같은 계약) */
  var slots = document.querySelectorAll("[data-src-slot]");
  for (var i = 0; i < slots.length; i++) {
    var slotEl = slots[i];
    if (slotEl.tagName === "A") slotEl.href = "chart.html?src=" + encodeURIComponent(src);
    else slotEl.value = src;
  }

  // ---------------------------------------------------------------------------
  // 2) 폼 처리
  // ---------------------------------------------------------------------------

  var form = document.getElementById("chart-form");
  var yearEl = document.getElementById("f-year");
  var monthEl = document.getElementById("f-month");
  var dayEl = document.getElementById("f-day");
  var timeEl = document.getElementById("f-time");
  var unknownEl = document.getElementById("f-unknown");
  var genderEl = document.getElementById("f-gender");
  var errDate = document.getElementById("err-date");
  var errTime = document.getElementById("err-time");
  var entrySec = document.getElementById("entry");
  var resultSec = document.getElementById("result");

  function syncTime() { timeEl.disabled = unknownEl.checked; }
  unknownEl.addEventListener("change", syncTime);
  syncTime();

  function showError(el, message, detail) {
    el.innerHTML = esc(message) + (detail ? ' <span class="error-detail">' + esc(detail) + "</span>" : "");
    el.hidden = false;
  }

  function clearErrors() {
    errDate.hidden = true; errDate.textContent = "";
    errTime.hidden = true; errTime.textContent = "";
  }

  /* 카피덱 v2-KR 화면 2 에러 문구 + prototype의 입력 검증 규칙 */
  function validate() {
    var year = yearEl.value.trim();
    var month = monthEl.value.trim();
    var day = dayEl.value.trim();
    var time = timeEl.value.trim();
    var unknown = unknownEl.checked;

    if (!/^\d{4}$/.test(year)) return { error: "date", message: "연도는 4자리로 입력해주세요." };
    if (Number(year) < 1900) return { error: "date", message: "1900년 이후로 입력해주세요." };
    if (!/^\d{1,2}$/.test(month) || !/^\d{1,2}$/.test(day)) {
      return { error: "date", message: "확인해주세요.", detail: "월과 일을 숫자로 입력해주세요." };
    }
    var m = Number(month);
    var d = Number(day);
    if (m < 1 || m > 12 || d < 1 || d > 31) {
      return { error: "date", message: "확인해주세요.", detail: "월과 일 범위를 벗어났습니다." };
    }
    if (!unknown) {
      if (!/^\d{2}:\d{2}$/.test(time) || Number(time.slice(0, 2)) > 23 || Number(time.slice(3, 5)) > 59) {
        return { error: "time", message: "시각을 선택하거나, 모르겠어요를 눌러주세요." };
      }
    }
    var dateISO = year + "-" + ("0" + m).slice(-2) + "-" + ("0" + d).slice(-2);
    var todayISO = new Date().toISOString().slice(0, 10);
    if (dateISO > todayISO) {
      return { error: "date", message: "확인해주세요.", detail: "미래 날짜는 입력할 수 없습니다." };
    }
    return { dateISO: dateISO, timeISO: unknown ? null : time };
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    clearErrors();
    var parsed = validate();
    if (parsed.error) {
      showError(parsed.error === "date" ? errDate : errTime, parsed.message, parsed.detail);
      return;
    }
    var chart;
    try {
      chart = CORE.computeChart({ dateISO: parsed.dateISO, timeISO: parsed.timeISO });
    } catch (err) {
      showError(errDate, "확인해주세요.", err && err.message ? err.message : "계산에 실패했습니다.");
      return;
    }
    render(chart, genderEl.value);
  });

  // ---------------------------------------------------------------------------
  // 3) 기본 카드 블록 (기둥 표 / 계산 과정 / 용어집)
  // ---------------------------------------------------------------------------

  /* 네 개의 기둥 표. 행 라벨은 일반 문장(위·아래 글자)으로 쓰고 전문 용어는 괄호로. */
  function pillarTable(chart) {
    var noHour = chart.mode === "noHour";
    var cols = [
      { label: "年", sub: "연", pillar: chart.pillars.year },
      { label: "月", sub: "월", pillar: chart.pillars.month },
      { label: "日", sub: "일", pillar: chart.pillars.day, you: true },
      { label: "時", sub: "시", pillar: chart.pillars.hour }
    ];
    var head = '<thead><tr><th class="rh" aria-label="구분"></th>';
    for (var i = 0; i < cols.length; i++) {
      var c = cols[i];
      var cls = c.you ? ' class="you-c you-h"' : "";
      var you = c.you ? '<span class="you">YOU</span>' : "";
      head += "<th" + cls + ">" + c.label + '<span class="col-sub">' + c.sub + "</span>" + you + "</th>";
    }
    head += "</tr></thead>";

    function row(rowLabel, part) {
      var out = "<tr><th class=\"rh\">" + rowLabel + "</th>";
      for (var j = 0; j < cols.length; j++) {
        var col = cols[j];
        if (noHour && !col.pillar) {
          out += '<td><span class="off">제외</span></td>';
          continue;
        }
        var cell = col.pillar[part];
        var dot = '<span class="edot" title="' + CORE.ELEMENT_HANJA[cell.element] + '" aria-hidden="true"></span>';
        var tdCls = col.you ? ' class="you-c"' : "";
        out += "<td" + tdCls + '><span class="glyph">' + esc(cell.hanja) + '</span><span class="ele">' + dot + esc(cell.element) + "</span></td>";
      }
      return out + "</tr>";
    }

    var cap = noHour ? "시각 미상으로 여섯 글자입니다." : "네 개의 기둥, 여덟 글자입니다.";
    return '<table class="pillars">' + head + "<tbody>" +
      row('<span class="rh-plain">위</span><span class="rh-term">(천간)</span>', "stem") +
      row('<span class="rh-plain">아래</span><span class="rh-term">(지지)</span>', "branch") +
      "</tbody></table>" +
      '<p class="slotcap">' + cap + "</p>";
  }

  /* 계산 과정 표(S12-①). 서머타임 적용분(dstApplied) 행을 포함한다. */
  function evidenceTable(chart) {
    var st = chart.solarTermInfo;
    var cb = chart.correctionBreakdown;
    var noHour = chart.mode === "noHour";
    var rows = [
      ["당시 절기", st.current.name + "(" + st.current.hanja + ") · 절입 후 " + humanDur(st.current.minutesSince)],
      ["다음 절입", st.next.name + "(" + st.next.hanja + ") · " + kstPretty(st.next.kst)]
    ];
    if (!noHour) {
      var sign = cb.totalCorrectionMinutes > 0 ? "+" : "";
      rows.push(["진태양시", chart.trueSolarTimeClock + " · 보정 " + sign + cb.totalCorrectionMinutes + "분"]);
      rows.push(["보정 재료", "경도 " + cb.longitudeMinutes + "분 · 균시차 " + cb.equationOfTimeMinutes + "분"]);
    } else {
      rows.push(["판정 가정", "당일 12:00 정오 가정 · 보정 후 " + chart.trueSolarTimeClock]);
    }
    if (cb.dstApplied) {
      rows.push(["서머타임", "60분 되돌림 · " + cb.dstInterval]);
    }
    rows.push(["출생지", "서울 기본값 · 북위 " + chart.input.latitude + ", 동경 " + chart.input.longitude]);
    /* 공망: 엔진(manseryeok 역법)이 계산한 비어 있는 지지 */
    rows.push(["공망 지지", chart.voidBranches.length ? chart.voidBranches.join(", ") + " (역법 라이브러리 계산)" : "해당 없음"]);

    var html = '<table class="registry"><caption>근거 표 · 진태양시 = 표준시 + (경도 - 135도) × 4분 + 균시차</caption><tbody>';
    for (var i = 0; i < rows.length; i++) {
      html += '<tr><th class="k">' + esc(rows[i][0]) + '</th><td class="v">' + esc(rows[i][1]) + "</td></tr>";
    }
    html += "</tbody></table>";
    for (var a = 0; a < chart.assumptions.length; a++) {
      html += '<p class="gov">' + esc(chart.assumptions[a]) + "</p>";
    }
    if (!noHour && chart.input.timeISO && chart.input.timeISO.slice(0, 2) === "23") {
      html += '<p class="gov">' + esc(POLICY.jasi) + "</p>";
    }
    return html;
  }

  /* 용어집 표(S12-②). 항목은 번들(entry.cjs GLOSSARY)에서 온다. */
  function glossaryTable() {
    var html = '<p class="lead-line">화면에 나오는 말 중 어려운 말만 골라 풀어 적었습니다.</p>';
    html += '<table class="registry glossary"><tbody>';
    for (var i = 0; i < VIEW.GLOSSARY.length; i++) {
      var g = VIEW.GLOSSARY[i];
      html += '<tr><th class="k gt">' + esc(g.term) + '</th><td class="v gm">' + esc(g.meaning) + "</td></tr>";
    }
    return html + "</tbody></table>";
  }

  // ---------------------------------------------------------------------------
  // 4) 결과 섹션 (S2~S9 · 일반인 리딩)
  // ---------------------------------------------------------------------------

  /* S2 한눈 요약: 자동 조합 요약. (a)일간 소개 (b)오행 집계 상태 문장
     (c)많은 오행 해석 (d)부족한 오행 해석 (e)첫 적성 소개.
     해석 문장(c·d)은 dayStemVsElements의 콘텐츠 문장을 그대로 쓴다. */
  function summarySection(chart, stem) {
    var states = VIEW.elementStates(chart);
    var n = chart.mode === "noHour" ? "여섯 글자" : "여덟 글자";
    var maxEl = states[0];
    var minEl = states[0];
    var absent = [];
    for (var i = 0; i < states.length; i++) {
      var s = states[i];
      if (s.count > maxEl.count) maxEl = s;
      if (s.count < minEl.count) minEl = s;
      if (s.count === 0) absent.push(s);
    }
    var absentNames = [];
    for (var j = 0; j < absent.length; j++) absentNames.push(absent[j].element);

    var html = sectionOpen(SEC.summary);
    html += '<p class="lead-line">가장 중요한 내용부터 문장으로 정리했습니다.</p>';
    html += '<div class="sum-list">';
    html += "<p>성질은 " + esc(stem.nature) + "입니다.</p>";
    if (absent.length) {
      html += "<p>" + n + " 중 " + esc(maxEl.element) + " 기운이 " + maxEl.count + "개로 가장 많고, " +
        esc(absentNames.join(", ")) + " 기운은 없습니다.</p>";
    } else {
      html += "<p>" + n + " 중 " + esc(maxEl.element) + " 기운이 " + maxEl.count + "개로 가장 많습니다.</p>";
    }
    html += "<p>" + esc(maxEl.text) + "</p>";
    html += "<p>" + esc((absent.length ? absent[0] : minEl).text) + "</p>";
    html += "<p>첫 번째 어울리는 일은 " + esc(stem.careerDirections[0]) + "입니다.</p>";
    html += "</div></section>";
    return html;
  }

  /* S3 어떤 사람인가요? 물상 성향(nature+metaphor+성향) + 성장 조건 */
  function personaSection(stem) {
    var html = sectionOpen(SEC.persona);
    html += '<div class="prose"><p>성질은 ' + esc(stem.nature) + "입니다.</p><p>" + esc(stem.metaphor) + "</p></div>";
    html += '<p class="sub-label">성향</p><ul class="traits">' + listItems(stem.coreTraits) + "</ul>";
    html += '<p class="sub-label">성장 조건</p><ul class="traits">' + listItems(stem.growthNeeds) + "</ul>";
    html += aggregateSrc([stem]);
    return html + "</section>";
  }

  /* S4 무엇이 많고, 무엇이 부족한가요? 오행 지형도.
     상태 칩은 많음·적당함·없음, 역할 라벨은 "재물·배우자의 기운(전통 용어: 재성)" 형식. */
  function balanceSection(chart) {
    var states = VIEW.elementStates(chart);
    var n = chart.mode === "noHour" ? "여섯 글자" : "여덟 글자";
    var html = sectionOpen(SEC.balance);
    html += '<p class="lead-line">' + n + "에 다섯 가지 기운이 몇 개씩 들었는지 세어본 지형도입니다. 짙을수록 그 기운이 강하게 작동합니다.</p>";
    html += '<div class="estate">';
    var srcItems = [];
    for (var i = 0; i < states.length; i++) {
      var s = states[i];
      var dots = "";
      var shown = Math.min(s.count, 5);
      for (var d = 0; d < shown; d++) dots += '<span class="edot on"></span>';
      if (s.count > 5) dots += '<span class="more-count">+' + (s.count - 5) + "</span>";
      if (!dots) dots = '<span class="none-count">0</span>';
      html += '<div class="estate-row">' +
        '<span class="estate-hanja">' + esc(s.hanja) + "</span>" +
        '<span class="estate-count" aria-label="' + esc(s.element) + " " + s.count + '개">' + dots + "</span>" +
        '<span class="state-chip state-' + s.status + '">' + esc(STATUS_CHIP[s.status]) + "</span>" +
        (s.isDayMaster ? '<span class="dm-chip">일간</span>' : "") +
        "</div>";
      html += '<p class="estate-role">' + esc(VIEW.ROLE_DISPLAY[s.role]) + "(전통 용어: " + esc(s.role) + ")</p>";
      html += '<p class="estate-text">' + esc(s.text) + "</p>" + uvFlag(s);
      srcItems.push(s);
    }
    html += "</div>";
    html += aggregateSrc(srcItems);
    return html + "</section>";
  }

  /* S5 어떤 일이 어울리나요? careerDirections */
  function careerSection(stem) {
    var html = sectionOpen(SEC.career);
    html += '<p class="lead-line">일간 성질이 자연스럽게 끌리는 일 방향입니다.</p>';
    html += '<ul class="traits">' + listItems(stem.careerDirections) + "</ul>";
    return html + "</section>";
  }

  /* S6 조심할 신호는? dangers(과할 때·모자랄 때) */
  function dangerSection(stem) {
    var html = sectionOpen(SEC.danger);
    html += '<p class="lead-line">성질이 너무 강할 때와 너무 약할 때 나타나기 쉬운 신호입니다.</p>';
    html += '<div class="danger-grid">' +
      '<div class="danger-col"><p class="danger-head">과할 때</p><ul class="traits">' +
      listItems(stem.dangers.excess) +
      '</ul></div><div class="danger-col"><p class="danger-head">모자랄 때</p><ul class="traits">' +
      listItems(stem.dangers.deficit) +
      "</ul></div></div>";
    return html + "</section>";
  }

  /* S7 시간의 흐름은? 기둥 시간축(간결 블록) + 대운 10구간(현재 강조 + 구간 서사 요약) */

  /* 대운 구간 서사 판정 (honbit UX 분석 5번 패턴).
     대운 천간·지지의 오행을 dayStemVsElements 역할 라벨로 판정해 2종 템플릿으로 문장을 만든다.
     - 일간을 살리는 오행(비동·인성): "이 10년은 [역할 문구]로 흐름이 밀어주는 편이에요."
     - 일간을 누르는 오행(재성·관성·식상): "이 10년은 [역할 문구]로 저절로 되기보다 품이 드는 시기예요."
     천간·지지 중 살림 오행이 하나라도 있으면 살림 문장을 쓴다(역할 문구는 살림 역할 우선). */
  var PUSH_ROLES = ["비동", "인성"];
  function luckNarrativeLine(dayMasterHanja, row) {
    var table = VIEW.ELEMENT_VS_DAY[dayMasterHanja];
    if (!table || !row.stemElement || !row.branchElement) return "";
    var stemHanja = CORE.ELEMENT_HANJA[row.stemElement];
    var branchHanja = CORE.ELEMENT_HANJA[row.branchElement];
    var roles = [table[stemHanja] && table[stemHanja].role,
      table[branchHanja] && table[branchHanja].role];
    var pushRole = null;
    var pressRole = null;
    for (var i = 0; i < roles.length; i++) {
      var role = roles[i];
      if (!role) continue;
      if (!pushRole && PUSH_ROLES.indexOf(role) > -1) pushRole = role;
      if (!pressRole && PUSH_ROLES.indexOf(role) === -1) pressRole = role;
    }
    var chosen = pushRole || pressRole;
    if (!chosen) return "";
    var phrase = pushRole ? "흐름이 밀어주는 편이에요." : "저절로 되기보다 품이 드는 시기예요.";
    /* ROLE_DISPLAY 문구가 "~의 기운"으로 끝나므로 조사는 "으로" 고정 */
    return "이 10년은 " + VIEW.ROLE_DISPLAY[chosen] + "으로 " + phrase;
  }

  function timeSection(chart, gender) {
    var noHour = chart.mode === "noHour";
    var html = sectionOpen(SEC.time);
    html += '<p class="lead-line">네 기둥은 인생의 시간표입니다. 앞 기둥일수록 이른 시기를 뜻합니다.</p>';
    html += pillarTable(chart);

    html += '<p class="sub-label">기둥별 읽기</p><div class="role-list">';
    var posMap = { "년주": "年 년주", "월주": "月 월주", "일주": "日 일주", "시주": "時 시주" };
    var roleSrc = [];
    for (var i = 0; i < VIEW.PILLAR_ROLES.length; i++) {
      var role = VIEW.PILLAR_ROLES[i];
      var off = noHour && role.pillar === "시주";
      html += '<div class="role-block' + (off ? " role-off" : "") + '">' +
        '<p class="role-head"><span class="role-pos">' + esc(posMap[role.pillar] || role.pillar) + "</span>" +
        '<span class="role-years">' + esc(role.years) + "</span>" +
        '<span class="role-years">' + esc(role.lifeStage) + "</span>" +
        (off ? '<span class="state-chip state-off">제외</span>' : "") + "</p>" +
        '<p class="role-line"><span class="role-k">무대</span><span class="role-v">' + esc(role.domain) + "</span>" +
        '<span class="role-k">인물</span><span class="role-v">' + esc(role.personType) + "</span></p>" +
        '<p class="role-text">' + esc(role.detail) + "</p>";
      if (off) {
        html += '<p class="gov">' + esc(VIEW.NO_HOUR_NOTE.rule) + "</p>";
        roleSrc.push(VIEW.NO_HOUR_NOTE);
      } else {
        roleSrc.push(role);
      }
      html += "</div>";
    }
    html += "</div>" + aggregateSrc(roleSrc);

    /* 대운 10구간 */
    var luck = VIEW.luckPillars(chart, gender);
    html += '<p class="sub-label">10년 단위 흐름(대운)</p>';
    if (!luck) {
      html += '<p class="lead-line">십 년 단위로 흐름의 무대가 바뀝니다. 성별을 알려주면 지금 몇 번째 무대인지 표시합니다.</p>';
      html += '<p class="neutral-note">성별을 알려주면 10년 흐름도 함께 볼 수 있어요. 입력 화면의 성별은 이 계산에만 쓰입니다.</p>';
      return html + "</section>";
    }
    if (luck.currentIndex > -1) {
      html += '<p class="lead-line">십 년 단위로 흐름의 무대가 바뀝니다. 지금은 ' + (luck.currentIndex + 1) + "구간입니다.</p>";
    } else {
      html += '<p class="lead-line">십 년 단위로 흐름의 무대가 바뀝니다. 첫 구간은 ' + luck.startAge + "세에 열립니다.</p>";
    }
    /* 구간별 한 줄 서사 (2종 템플릿 · 현재 구간은 지금 칩 표기) */
    html += '<div class="luck-narrs">';
    for (var n = 0; n < luck.rows.length; n++) {
      var narr = luckNarrativeLine(chart.dayMaster.hanja, luck.rows[n]);
      if (!narr) continue;
      html += '<p class="luck-narr"><span class="luck-narr-age">' + esc(luck.rows[n].korean) + "</span> " + esc(narr) +
        (n === luck.currentIndex ? '<span class="now-chip">지금</span>' : "") + "</p>";
    }
    html += "</div>";
    html += '<table class="registry luck-table"><caption>대운 10구간 · 나이는 만 나이 기준</caption><thead><tr>' +
      '<th class="k">구간</th><th class="k">나이</th><th class="k">간지</th></tr></thead><tbody>';
    for (var r = 0; r < luck.rows.length; r++) {
      var row = luck.rows[r];
      var now = r === luck.currentIndex;
      html += "<tr" + (now ? ' class="luck-now"' : "") + '><th class="k">' + (r + 1) + "구간</th>" +
        '<td class="v">' + row.fromAge + "세부터 " + row.toAge + "세까지</td>" +
        '<td class="v luck-ganji"><span>' + esc(row.korean) + "</span>" +
        (now ? '<span class="now-chip">지금</span>' : "") + "</td></tr>";
    }
    html += "</tbody></table>";
    var dirText = luck.forward ? "순행" : "역행";
    html += '<p class="gov">월주 ' + esc(luck.monthPillar) + " 기준 " + esc(dirText) +
      " · 대운수 = 출생에서 인접 절까지 일수 ÷ 3 (역법 라이브러리 manseryeok)</p>";
    if (noHour) {
      html += '<p class="gov">시각 미상은 정오 가정으로 계산되어 대운 시작 나이에 오차가 있을 수 있습니다.</p>';
    }
    return html + "</section>";
  }

  /* S8 내 글자들은 서로 어떻게 작동하나요? 천간 관계 3건 + 합·충 감지.
     CR01~07 전체 목록과 기술 규칙은 "변화 규칙 자세히" details로 접는다. */
  function dynamicsSection(chart) {
    var g = VIEW.BRANCH_DYN.general;
    var rels = VIEW.stemRelations(chart);
    var combos = VIEW.stemCombos(chart);
    var branches = VIEW.branchDynamics(chart);

    var html = sectionOpen(SEC.dynamics);
    html += '<p class="lead-line">일간을 기준으로 다른 위 글자들이 나에게 어떻게 작동하는지 읽습니다.</p>';
    html += '<div class="rel-list">';
    var relSrc = [];
    for (var i = 0; i < rels.length; i++) {
      var rel = rels[i];
      if (rel.excluded) {
        html += '<div class="rel-item rel-off"><p class="rel-pos">' + esc(rel.position) + "</p>" +
          '<p class="off-note">시각 미상으로 제외</p></div>';
        continue;
      }
      html += '<div class="rel-item"><p class="rel-pos">' + esc(rel.position) + " " +
        '<span class="rel-hanja">' + esc(rel.hanja) + "</span> " + esc(rel.hangul) + "</p>" +
        '<p class="rel-image">' + esc(rel.image) + "</p>" +
        '<p class="estate-text">' + esc(rel.rule) + "</p></div>";
      relSrc.push(rel);
    }
    html += "</div>" + aggregateSrc(relSrc);

    /* 묶임(합)과 충돌(충) 감지 결과 */
    var formed = [];
    for (var f = 0; f < combos.length; f++) {
      if (combos[f].status === "formed") formed.push(combos[f]);
    }
    html += '<p class="sub-label">묶임과 충돌 감지</p>';
    if (!formed.length && !branches.length) {
      html += '<p class="neutral-note">서로 묶이거나 부딪히는 글자 없이 안정적인 배열입니다.</p>';
    } else {
      html += '<div class="dyn-hot">';
      var dynSrc = [];
      for (var a = 0; a < formed.length; a++) {
        var c = formed[a].combo;
        html += '<div class="dyn-item"><p class="dyn-head"><span class="dyn-kind">합</span> ' +
          '<span class="dyn-pair">' + esc(c.pairing) + "</span> · 만들어지는 오행 " + esc(c.resultElement) +
          (formed[a].involvesDayMaster ? ' <span class="dm-chip">일간 묶임</span>' : "") + "</p>" +
          '<p class="estate-text">' + esc(c.nature) + "</p></div>";
        dynSrc.push(c);
      }
      for (var b = 0; b < branches.length; b++) {
        var d = branches[b];
        html += '<div class="dyn-item"><p class="dyn-head"><span class="dyn-kind">' + esc(KIND_LABEL[d.kind] || d.kind) +
          '</span> <span class="dyn-pair">' + esc(d.label) + "</span> " + esc(d.present.join("")) + "</p>" +
          '<p class="estate-text">' + esc(d.text) + "</p>" + uvFlag(d) + "</div>";
        dynSrc.push(d);
      }
      html += "</div>" + aggregateSrc(dynSrc);
    }

    /* 변화 규칙(열림): 천간합 원리·비율 규칙 CR01~07·충 발동 기준 — 이전 형식 상세를 하이브리드 노출 */
    html += '<details class="fold" open><summary>변화 규칙 자세히</summary><div class="fold-body">';
    html += "<p>" + esc(g.stemChungNote) + "</p>";
    html += '<p class="gov">충 발동 기준: ' + esc(g.triggerRule) + "</p>";
    html += '<p class="gov">육합 실사용 쌍 안내: ' + esc(VIEW.BRANCH_DYN.yukhabs.rule) + "</p>";
    if (formed.length) {
      html += '<p class="sub-label">천간합 원리</p>';
      var detailSrc = [];
      for (var w = 0; w < formed.length; w++) {
        var fc = formed[w].combo;
        html += '<p class="dyn-head"><span class="dyn-pair">' + esc(fc.pairing) + "</span> 합</p>" +
          '<p class="estate-text">변화 원리: ' + esc(fc.transformationRule) + "</p>" +
          '<p class="estate-text">끌어옴: ' + esc(fc.pull.core) + "</p>" +
          '<p class="gov">뿌리 조건: ' + esc(fc.pull.rootRule) + "</p>" +
          '<p class="gov">' + esc(fc.pull.weakPull) + "</p>" +
          '<p class="gov">합이 풀리는 길</p><ul class="traits small">' + listItems(fc.releaseRules) + "</ul>" +
          uvFlag(fc.pull);
        detailSrc.push(fc, fc.pull);
      }
      html += aggregateSrc(detailSrc);
    }
    var blocked = [];
    for (var x = 0; x < combos.length; x++) {
      if (combos[x].status === "blocked") blocked.push(combos[x]);
    }
    if (blocked.length) {
      html += '<p class="sub-label">비율 미성립(합 되지 않은 쌍)</p>';
      for (var y = 0; y < blocked.length; y++) {
        var cbk = blocked[y];
        var cr02 = null;
        for (var r = 0; r < VIEW.COMBO_RATIO_RULES.length; r++) {
          if (VIEW.COMBO_RATIO_RULES[r].id === "CR02") cr02 = VIEW.COMBO_RATIO_RULES[r];
        }
        html += '<p class="dyn-head"><span class="dyn-kind">비율 미성립</span> ' +
          '<span class="dyn-pair">' + esc(cbk.combo.pairing) + '</span> <span class="off-note">천간 비율 ' +
          esc(cbk.ratio) + "</span></p>" +
          '<p class="estate-text">' + esc(cr02.rule) + ". " + esc(cr02.detail) + "</p>";
      }
    }
    html += '<p class="sub-label">합 비율 규칙 전체</p><ul class="traits small">';
    for (var q = 0; q < VIEW.COMBO_RATIO_RULES.length; q++) {
      var cr = VIEW.COMBO_RATIO_RULES[q];
      html += "<li><span class=\"cr-id\">" + esc(cr.id) + "</span> <span>" + esc(cr.rule) + "</span> <span>" +
        esc(cr.detail) + "</span></li>";
    }
    html += "</ul></div></details>";
    return html + "</section>";
  }

  /* S9 마음은 어떤가요? 안심법(해당 패턴만). 매칭이 없으면 섹션 자체를 생략. */
  function ansimSection(chart) {    var matched = VIEW.matchAnsim(chart);
    if (!matched.length) return "";
    var html = sectionOpen(SEC.mind);
    html += '<p class="lead-line">글자 배치만으로 확정되는 조건에만 근거한 마음 읽기입니다.</p>';
    var srcItems = [];
    for (var i = 0; i < matched.length; i++) {
      var p = matched[i];
      html += '<div class="ansim-card"><p class="rel-image">' + esc(p.condition) + "</p>" +
        '<p class="ansim-mind">' + esc(p.mind) + "</p>" +
        '<p class="estate-text">' + esc(p.interpretation) + "</p>" + uvFlag(p) + "</div>";
      srcItems.push(p);
    }
    html += aggregateSrc(srcItems);
    return html + "</section>";
  }

  /* FAQ 섹션 (S9 뒤 · honbit UX 분석 6번 패턴 · SEO·AEO 겸용).
     닫힘 details 1개, 5문항. 답변은 policy.json 고지문과 기존 화면 문장만 재사용하고
     새 해석 주장은 없다(smoke.cjs TEMPLATES에 질문·답변 선언 등록). */
  function faqSection() {
    var html = '<section class="sec faq-sec"><p class="sec-label">FAQ</p>';
    html += '<details class="fold faq"><summary>자주 묻는 질문</summary><div class="fold-body">';
    html += '<p class="faq-q">일간이 뭐예요?</p>' +
      '<p class="faq-a">결과 카드 맨 위 굵은 글자가 일간입니다.<br>나를 나타내는 위 글자입니다.</p>';
    html += '<p class="faq-q">왜 계산 과정을 보여주나요?</p>' +
      '<p class="faq-a">결과를 만든 계산의 근거를 함께 보여드리기 위해서입니다.<br>위 리딩과 같은 계산에서 나온 전문 상세판입니다.<br>화면에 나오는 말 중 어려운 말만 골라 풀어 적었습니다.</p>';
    html += '<p class="faq-q">출생시각을 모르면?</p>' +
      '<p class="faq-a">' + esc(POLICY.noHourDisclaimer) + "<br>연, 월, 일 여섯 글자로 읽으며, 시주가 필요한 주제는 제외됩니다.</p>";
    html += '<p class="faq-q">서머타임은 어떻게 적용되나요?</p>' +
      '<p class="faq-a">태어난 기록 시각이 한국 서머타임 적용 구간이면 표준시로 60분 되돌려 계산합니다.<br>적용되면 결과 화면 상단에 서머타임 보정 고지가 함께 표시됩니다.</p>';
    html += '<p class="faq-q">이 결과는 운세인가요?</p>' +
      '<p class="faq-a">' + esc(POLICY.boundary) + "</p>";
    html += "</div></details></section>";
    return html;
  }

  // ---------------------------------------------------------------------------
  // 5) 관계 읽기 (실험 기능): 상대 생년월일 → 두 일간 합 · 관계 규칙 · 오행 보완
  // ---------------------------------------------------------------------------

  function relationSection() {
    var html = sectionOpen(SEC.relation);
    html += '<p class="exp-chip">실험 기능</p>';
    html += '<p class="lead-line">상대 생년월일을 넣으면 두 일간의 관계를 읽어줍니다. ' +
      "상대 생년월일은 화면에서만 쓰이며 저장하지 않습니다.</p>";
    html += '<form id="rel-form" class="form rel-form" novalidate>' +
      '<div class="date-row" role="group" aria-label="상대 생년월일">' +
      '<div class="date-cell"><label for="f-p-year">상대 연도</label>' +
      '<input id="f-p-year" type="text" inputmode="numeric" maxlength="4" placeholder="1990"></div>' +
      '<div class="date-cell"><label for="f-p-month">월</label>' +
      '<input id="f-p-month" type="text" inputmode="numeric" maxlength="2" placeholder="08"></div>' +
      '<div class="date-cell"><label for="f-p-day">일</label>' +
      '<input id="f-p-day" type="text" inputmode="numeric" maxlength="2" placeholder="15"></div>' +
      "</div>" +
      '<p class="error" id="rel-error" hidden></p>' +
      '<button type="submit" class="cta cta-ghost">상대와 읽기</button></form>' +
      '<div id="rel-result"></div>';
    return html + "</section>";
  }

  function wireRelationForm(chart) {
    var relForm = document.getElementById("rel-form");
    if (!relForm || typeof relForm.addEventListener !== "function") return;
    relForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var errEl = document.getElementById("rel-error");
      var outEl = document.getElementById("rel-result");
      errEl.hidden = true;
      var y = document.getElementById("f-p-year").value.trim();
      var m = document.getElementById("f-p-month").value.trim();
      var d = document.getElementById("f-p-day").value.trim();
      if (!/^\d{4}$/.test(y) || Number(y) < 1900) {
        showError(errEl, "상대 연도는 1900년 이후 4자리로 입력해주세요.");
        return;
      }
      var dateISO = y + "-" + ("0" + m).slice(-2) + "-" + ("0" + d).slice(-2);
      var partner;
      try {
        /* 상대 시각 미입력: 일간 판정은 당일 정오 가정으로 안정적이다 */
        partner = CORE.computeChart({ dateISO: dateISO, timeISO: null });
      } catch (err) {
        showError(errEl, "확인해주세요.", err && err.message ? err.message : "상대 생년월일 계산에 실패했습니다.");
        return;
      }
      outEl.innerHTML = relationResultHTML(chart, partner);
    });
  }

  function relationResultHTML(me, partner) {
    var myDm = me.dayMaster;
    var pDm = partner.dayMaster;
    var combo = VIEW.dayMasterCombo(myDm.hanja, pDm.hanja);
    var rel = VIEW.DAY_VS_STEMS[myDm.hanja][pDm.hanja];
    var fill = VIEW.fillCheck(VIEW.elementCounts(me), VIEW.elementCounts(partner));
    var html = "";

    /* 상대 일간 요약 */
    html += '<div class="partner-card"><p class="rel-pos">상대 일간</p>' +
      '<p class="partner-dm"><span class="rel-hanja">' + esc(pDm.hanja) + "</span> " +
      esc(pDm.hangul + pDm.element) + " · " + esc(BADGE[pDm.hanja].name) + "</p>" +
      '<p class="gov">상대 여섯 글자 <span>' + esc(partner.fourPillarsHanja) + "</span> <span>시각 미입력이라 정오 가정</span></p></div>";

    /* ① 두 일간 합 쌍 여부 */
    if (combo) {
      html += '<div class="rel-item"><p class="dyn-head"><span class="dyn-kind">일간 합</span> ' +
        '<span class="dyn-pair">' + esc(combo.pairing) + '</span> · 만들어지는 오행 ' + esc(combo.resultElement) + "</p>" +
        '<p class="estate-text">' + esc(combo.nature) + "</p></div>";
    } else {
      html += '<div class="rel-item"><p class="dyn-head"><span class="dyn-kind">일간 합</span> 해당 없음</p>' +
        '<p class="estate-text">두 일간 <span>' + esc(myDm.hanja) + '</span>, <span>' + esc(pDm.hanja) +
        "</span> 조합은 다섯 천간합 쌍에 해당하지 않습니다.</p></div>";
    }

    /* ② 내 일간 × 상대 일간 관계 규칙 */
    html += '<div class="rel-item"><p class="rel-image">' + esc(rel.image) + "</p>" +
      '<p class="estate-text">' + esc(rel.rule) + "</p></div>";

    /* ③ 오행 보완 (태극성취 구조 · 근거 T08-001, T08-002) */
    var fillText;
    if (!fill.absent.length) {
      fillText = "내 여덟 글자에 비어 있는 오행이 없어, 보완 판정 대상이 아닙니다.";
    } else if (fill.filled.length) {
      var parts = [];
      for (var i = 0; i < fill.filled.length; i++) {
        var kor = fill.filled[i];
        parts.push(CORE.ELEMENT_HANJA[kor] + "(" + kor + ")");
      }
      fillText = "내 패턴에 없는 " + parts.join(", ") +
        (fill.filled[fill.filled.length - 1] === "수" ? "를 " : "을 ") +
        "상대 여섯 글자가 채워줍니다. 서로의 빈 오행을 메우는 구조입니다.";
    } else {
      fillText = "내가 부족한 오행은 " + fill.absent.join(", ") +
        "이지만, 상대 여섯 글자에는 이 오행이 없습니다.";
    }
    html += '<div class="rel-item"><p class="dyn-head"><span class="dyn-kind">오행 보완</span> 태극성취 구조</p>' +
      '<p class="estate-text">' + esc(fillText) + "</p>" +
      '<p class="gov">근거 T08-001, T08-002 · 태극성취론을 필요한 오행을 채워가는 과정으로 정의한 판정 문서 기준</p></div>';

    return html;
  }

  // ---------------------------------------------------------------------------
  // 6) 고지 · 이메일 · 자세히 보기(details 2종)
  // ---------------------------------------------------------------------------

  function policyNotice() {
    return '<div class="notice"><p>' + esc(POLICY.boundary) + "</p>" +
      '<p class="gov">' + esc(POLICY.theory) + " " + esc(POLICY.nonAffiliation) + "</p></div>";
  }

  function emailBlock() {
    if (emailDone()) {
      return emailDoneHTML();
    }
    return '<section class="cut">' +
      '<p class="sec-label">결과 받아두기</p>' +
      '<h2>전체 리딩이 준비되면 가장 먼저 알려드립니다<span class="accent">.</span></h2>' +
      '<p class="lead">지금 화면을 닫아도, 이 이메일 하나로 다시 찾아올 수 있습니다.</p>' +
      '<p class="more-note">더 깊은 읽기는 준비 중입니다.</p>' +
      '<form data-email-form action="{{FORM_ENDPOINT}}" method="post" target="' + FORM_IFRAME + '">' +
      '<input type="hidden" name="' + ENTRY.src + '" value="' + esc(src) + '">' +
      '<input type="hidden" name="' + ENTRY.page + '" value="chart">' +
      '<div class="email-field"><label for="email-chart">이메일</label>' +
      '<input id="email-chart" name="' + ENTRY.email + '" type="email" autocomplete="email" required></div>' +
      '<button type="submit" class="cta">알림 받기</button></form>' +
      '<iframe id="' + FORM_IFRAME + '" name="' + FORM_IFRAME + '" title="제출 처리" class="post-frame" hidden></iframe>' +
      '<div class="form-fallback" id="chart-fallback" hidden>' +
      "<p>폼 연결 전입니다. 아래 주소로 알림 메일을 보내주시면 명단에 추가합니다.</p>" +
      '<p><a id="chart-mailto" href="mailto:' + esc(MAILTO) + '">메일 보내기</a></p></div>' +
      '<p class="helper">이메일은 안내 발송에만 쓰입니다.</p></section>';
  }

  /* 상세 리딩 파트: 이전 형식(전문 상세)을 열림 상태로 하이브리드 노출. */
  function referenceSection(chart) {
    return '<section class="sec refs"><div class="part-divider"><span class="part-k">상세 리딩</span><span class="part-v">위 리딩과 같은 계산에서 나온 전문 상세판입니다.</span></div>' +
      '<details class="fold" open><summary>계산 과정 · 근거 표 전체</summary><div class="fold-body">' +
      evidenceTable(chart) + "</div></details>" +
      '<details class="fold" open><summary>용어 자세히 보기 · 용어집</summary><div class="fold-body">' +
      glossaryTable() + "</div></details>" +
      "</section>";
  }

  // ---------------------------------------------------------------------------
  // 7) 렌더 (S1~S12 고정 순서)
  // ---------------------------------------------------------------------------

  function render(chart, gender) {
    var noHour = chart.mode === "noHour";
    var dm = chart.dayMaster;
    var badge = BADGE[dm.hanja];
    var stem = null;
    for (var i = 0; i < CORE.STEMS.length; i++) {
      if (CORE.STEMS[i].stemHanja === dm.hanja) { stem = CORE.STEMS[i]; break; }
    }
    var st = chart.solarTermInfo;
    var cb = chart.correctionBreakdown;
    var patternId = "P-" + chart.input.dateISO.replace(/-/g, "") +
      (chart.input.timeISO ? "-" + chart.input.timeISO.replace(":", "") : "");

    var html = '<span class="fig block-fig">도판 04 - 결과 카드</span>';

    if (st.nearSolarTermBoundary) {
      html += '<div class="warn"><p class="sec-label">절기 경계 주의</p><p>' + esc(st.riskNote) + "</p></div>";
    }
    if (cb.dstApplied) {
      /* 서머타임 보정은 계산값 자체를 바꾸는 사실이므로 최상단에 고지한다.
         문장은 엔진 assumptions의 콘텐츠 문장을 그대로 쓴다. */
      html += '<div class="notice"><p class="sec-label">서머타임 보정</p><p>' + esc(cb.dstNote) + "</p></div>";
    }
    if (noHour) {
      html += '<div class="notice"><p class="sec-label">시각 미상 모드</p>' +
        "<p>" + esc(POLICY.noHourDisclaimer) + "</p>" +
        "<p>연, 월, 일 여섯 글자로 읽으며, 시주가 필요한 주제는 제외됩니다.</p>" +
        '<p class="gov">' + esc(POLICY.noHourExcluded) + "</p></div>";
    }

    /* S1 헤더 카드(유지): 패턴 ID · 일간 배지 · 한 줄 소개 */
    html += '<article class="pattern-card">' +
      '<header class="pc-head"><span>' + esc(patternId) + '</span><span class="barcode" aria-hidden="true"></span><span>SajuRoot</span></header>' +
      '<div class="badge-row"><div class="badge-id"><span class="badge-hanja">' + esc(dm.hanja) + "</span>" +
      '<div><p class="badge-name">' + esc(dm.hangul + dm.element) + " · " + esc(badge.name) + "</p>" +
      '<p class="badge-en">' + esc(badge.en) + "</p></div></div>" +
      '<div class="edots" role="img" aria-label="오행 ' + esc(dm.element) + '">';
    for (var e = 0; e < CORE.ELEMENT_ORDER.length; e++) {
      var elHanja = CORE.ELEMENT_ORDER[e];
      var on = elHanja === CORE.ELEMENT_HANJA[dm.element];
      html += '<span class="edot' + (on ? " on" : "") + '" title="' + elHanja + '" aria-hidden="true"></span>';
    }
    html += "</div></div>" +
      '<p class="catchphrase">' + esc(stem.catchphrase) + "</p>" +
      '<h2 class="declaration">당신은 ' + esc(badge.name) + '입니다<span class="accent">.</span></h2>' +
      '<p class="one-liner">' + esc(badge.one) + "</p></article>";

    /* S2~S12 고정 순서 */
    html += summarySection(chart, stem);        /* S2 한눈 요약 */
    html += personaSection(stem);               /* S3 어떤 사람인가요? */
    html += balanceSection(chart);              /* S4 무엇이 많고, 무엇이 부족한가요? */
    html += careerSection(stem);                /* S5 어떤 일이 어울리나요? */
    html += dangerSection(stem);                /* S6 조심할 신호는? */
    html += timeSection(chart, gender);         /* S7 시간의 흐름은? */
    html += dynamicsSection(chart);             /* S8 내 글자들은 서로 어떻게 작동하나요? */
    html += ansimSection(chart);                /* S9 마음은 어떤가요?(조건부) */
    html += faqSection();                       /* FAQ 자주 묻는 질문(닫힘 details 1개) */
    html += relationSection();                  /* S10 다른 사람과 보기 */
    html += policyNotice();
    html += emailBlock();                       /* S11 결과 받아두기 */
    html += referenceSection(chart);            /* S12 details 2종 */
    html += '<nav class="foot-links" style="margin-top: 1.25rem;"><a href="chart.html">다시 입력하기</a><a href="index.html">처음으로</a></nav>';

    resultSec.innerHTML = html;
    entrySec.hidden = true;
    resultSec.hidden = false;
    resultSec.scrollIntoView({ behavior: "smooth", block: "start" });
    wireEmailForm(resultSec.querySelector("form[data-email-form]"));
    wireRelationForm(chart);
  }

  // ---------------------------------------------------------------------------
  // 8) 이메일 폼: Google Form formResponse로 숨은 iframe POST (미설정 시 mailto 폴백)
  // ----------------------------------------------------------------------------

  function emailSubmitSuccess(form2) {
    try { localStorage.setItem(EMAIL_KEY, "1"); } catch (e) {}
    var section = form2.closest ? form2.closest("section") : null;
    if (section && typeof section.outerHTML === "string") {
      section.outerHTML = emailDoneHTML();
    }
  }

  function wireEmailForm(form2) {
    if (!form2 || typeof form2.addEventListener !== "function") return;
    form2.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var action = form2.getAttribute("action") || "";
      /* action 토큰({{FORM_ENDPOINT}})이면 Google Form formResponse로 보낸다. 이미 치환돼 있으면 그 주소를 쓴다. */
      var realAction = action.indexOf("{{") !== -1 ? FORM_ACTION : action;
      if (!realAction) {
        /* 엔드포인트 미설정: 기존 mailto 폴백 유지 */
        var mail = resultSec.querySelector("#chart-mailto");
        if (mail) {
          mail.href = "mailto:" + MAILTO +
            "?subject=" + encodeURIComponent("SajuRoot 알림 신청") +
            "&body=" + encodeURIComponent("src: " + src);
        }
        var fb = resultSec.querySelector("#chart-fallback");
        if (fb) fb.hidden = false;
        form2.hidden = true;
        return;
      }
      /* 숨은 iframe POST: 페이지 이동 없이 제출하고, iframe 로드(응답 도착) 시 완료 문구 표시 */
      var frame = document.getElementById(FORM_IFRAME);
      if (!frame || typeof form2.setAttribute !== "function" || typeof form2.submit !== "function") return;
      if (form2.getAttribute("data-posting") === "1") return;
      form2.setAttribute("data-posting", "1");
      var finished = false;
      frame.addEventListener("load", function () {
        if (finished) return;
        finished = true;
        emailSubmitSuccess(form2);
      });
      form2.setAttribute("target", FORM_IFRAME);
      form2.setAttribute("action", realAction);
      form2.submit();
    });
  }
})();
