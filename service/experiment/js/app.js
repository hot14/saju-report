/*
 * SajuRoot 첫 유입 실험 · chart.html UI 로직 (무료 차트 · 일반인 리딩 리라이트)
 * ---------------------------------------------------------------------------
 * 오너 피드백: "결과물인데 사용자 입장에서 도대체 무슨 이야기를 하는지 전혀
 * 모르겠다. 이해하기 쉽고 직관적이며 가독성이 좋게. 누락·오역·오류 없이
 * 프로세스상 일관되게 구조화돼야 한다."
 *
 * 섹션 구조(S1~S12 + FAQ, 순서 고정 · smoke.cjs가 스냅샷 검증):
 *   S1 헤더 카드(패턴 ID·일간 배지·캐치프레이즈·한 줄 소개)  S2 한눈 요약(자동 조합)
 *   S2+ 슬롯 리딩(Q02 · slots.json B 갈래 트리 · 최대 2가지, wayfinder slot-system-design §4)
 *   S3 어떤 사람인가요?    S4 무엇이 많고, 무엇이 부족한가요?
 *   S5 어떤 일이 어울리나요?   S6 조심할 신호는?   S7 시간의 흐름은?(대운 서사 포함)
 *   S8 내 글자들은 서로 어떻게 작동하나요?   S9 마음은 어떤가요?(조건부)
 *   FAQ 자주 묻는 질문(닫힘 details 1개, S9 뒤)
 *   S10 다른 사람과 보기   S11 결과 받아두기   S12 details 2종(계산 과정·용어집)
 *
 * 사용자 경계 개선 2종(축3 concern 프리텍스트 · 축5 아코디언 리딩 뷰):
 *   - 고민 한 줄(선택 300자) 입력 시 결과 카드 상단에 "이 리딩은 '고민'을 기준으로
 *     읽었습니다" 배너로 상기 표시(세션 내 전달만 · 저장 없음 · 섹션 강조 없음)
 *   - Q02 이후 긴 섹션(Q03·Q04·Q05·Q07·Q08·조건부 Q09)은 details 아코디언(기본 닫힘).
 *     한눈 요약(Q01)·조심할 신호(Q06)는 열린 채 유지, 기존 details 3종(변화 규칙·
 *     계산 과정·용어집)은 fold 하이브리드 그대로. smoke.cjs 섹션 스냅샷이 검증.
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

  /* 섹션 번호(Q01~Q10)와 질문 제목. smoke.cjs 섹션 구조 스냅샷이 이 순서를 검증한다.
     Q02 슬롯 리딩은 slots.json B 갈래 트리(wayfinder slot-system-design §4)의 출력이다. */
  var SEC = {
    summary: { key: "summary", num: "Q01", title: "한눈 요약" },
    slot: { key: "slot", num: "Q02", title: "슬롯 리딩" },
    persona: { key: "persona", num: "Q03", title: "어떤 사람인가요?" },
    balance: { key: "balance", num: "Q04", title: "무엇이 많고, 무엇이 부족한가요?" },
    career: { key: "career", num: "Q05", title: "어떤 일이 어울리나요?" },
    danger: { key: "danger", num: "Q06", title: "조심할 신호는?" },
    time: { key: "time", num: "Q07", title: "시간의 흐름은?" },
    dynamics: { key: "dynamics", num: "Q08", title: "내 글자들은 서로 어떻게 작동하나요?" },
    mind: { key: "mind", num: "Q09", title: "마음은 어떤가요?" },
    relation: { key: "relation", num: "Q10", title: "다른 사람과 보기" }
  };

  /* 타겟 프로파일 상수(master-strategy §2-4 최소안). S1이 기본이고, 강조가 없으면
     기본 순서와 같다. CORE.view 등록이 이 선언보다 늦게 실행되지 않도록 상단에 둔다. */
  var DEFAULT_PROFILE_ID = "s1";
  var ACTIVE_PROFILE = null;   /* sectionAcc의 기본 펼침 판정에 쓰는 현재 프로파일 */
  var DEFAULT_SECTION_ORDER = ["summary", "slot", "persona", "balance", "career", "danger", "time", "dynamics", "mind", "faq", "relation"];

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

  /* 목적어 조사 고정: 받침 있으면 을, 없으면 를. 한글 밖 문자는 를 기본. */
  function objParticle(word) {
    var ch = String(word).slice(-1).charCodeAt(0);
    return (ch >= 0xac00 && ch <= 0xd7a3 && (ch - 0xac00) % 28 !== 0) ? "을" : "를";
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

  /* 아코디언 섹션 헤더(축5 채택 · 아코디언 리딩 뷰): Q02 이후 긴 섹션을 details로
     접어 스크롤 폭포를 막는다. 기본 닫힘. Q01·Q06·Q02와 기존 fold details 3종은 그대로. */
  function sectionAcc(sec) {
    /* 타겟 프로파일(master-strategy §2-4)의 emphasis 섹션은 아코디언을 기본 펼침으로 둔다.
       기본 프로파일 S1은 emphasis가 비어 있어 기존 렌더(전부 닫힘)와 같다. */
    var open = !!(ACTIVE_PROFILE && ACTIVE_PROFILE.emphasis && ACTIVE_PROFILE.emphasis.indexOf(sec.key) !== -1);
    return '<details class="sec acc"' + (open ? " open" : "") + '><summary class="acc-head"><span class="sec-label">' + esc(sec.num) +
      '</span><h2 class="sec-q">' + esc(sec.title) + "</h2></summary>";
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
  var concernEl = document.getElementById("f-concern");
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
    render(chart, genderEl.value, (concernEl.value || "").trim().slice(0, 300));
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

  /* ------------------------------------------------------------------
   * Q02 슬롯 리딩 엔진 (slots.json B 갈래 · wayfinder slot-system-design §4)
   * 해석표(오행 집계 · 천간 · 지지 · 성립 천간합)로 각 B 가지의 자연어 조건을
   * 판정하고, 선택 규칙 우선순위로 정렬해 최대 2가지만 돌려준다.
   * 하드 룰: 매핑 불가 조건은 추측하지 않고 미적용으로 제외한다.
   * ------------------------------------------------------------------ */
  var SLOTS = window.SAJU_SLOTS || null;

  /* 조건 문구의 물상 이름 → 천간 판정 단위. 전체 이름은 slots.json
     rules.translation.chars의 원문 전사와 같고, 축약형은 원문 조건에 쓰인 형태만 등록했다. */
  var SLOT_STEM_WORD = {
    "큰 나무": "甲", "푸른 덩굴": "乙", "덩굴": "乙",
    "태양": "丙",
    "세상을 밝히는 등불": "丁", "등불": "丁",
    "거대한 산맥": "戊", "산맥": "戊", "큰 땅": "戊",
    "작은 땅": "己", "정원": "己",
    "커다란 금맥": "庚", "금맥": "庚", "큰 칼": "庚",
    "세공된 보석": "辛", "보석": "辛", "작은 칼": "辛",
    "넓고 고요한 호수": "壬", "호수": "壬", "큰물": "壬", "넓은 호수": "壬",
    "맑고 청아한 시냇물": "癸", "시냇물": "癸", "작은 물": "癸"
  };
  /* 오행 통칭(물·땅·불·금·나무·둑) → 한국어 오행. 8글자 오행 집계로 판정한다.
     물 있음/없음 = 수 1개 이상/0개, 과다(많음·셈·지나침) = 3개 이상. */
  var SLOT_ELEMENT_WORD = { "나무": "목", "땅": "토", "흙": "토", "물": "수", "불": "화", "금": "금", "둑": "토" };
  /* 같은 오행의 다른 천간("작은 땅만 있음" = 己 있고 戊 없음 판정용) */
  var SLOT_SIBLING = { "甲": "乙", "乙": "甲", "丙": "丁", "丁": "丙", "戊": "己", "己": "戊", "庚": "辛", "辛": "庚", "壬": "癸", "癸": "壬" };
  /* 천간 → 오행("태양이 셈"처럼 물상이 세다는 조건의 오행 환산용) */
  var SLOT_STEM_ELEMENT = { "甲": "목", "乙": "목", "丙": "화", "丁": "화", "戊": "토", "己": "토", "庚": "금", "辛": "금", "壬": "수", "癸": "수" };
  /* 괄호 안 설명 중 순수 동의어·부연만 벗긴다. 판정을 바꾸는 괄호는 통째로 미적용 처리한다. */
  var SLOT_PAREN_OK = ["커다란 금맥", "세공된 보석", "시냇물", "큰물", "숲", "메마른 땅", "알맞음", "가림", "재물의 판", "공통", "+금맥"];
  /* 이 문구가 있으면 원국 단독으로 확정할 수 없어 미적용으로 본다(추측 금지).
     운 조건(C 갈래 영역) · 형태 판정 체인 · 끌어옴 · 성별 · 지지 위치 감각(한낮·밤 등). */
  var SLOT_UNMAPPABLE_MARKERS = ["운에서", "10년 운", "형태가", "끌어옴", "여성", "앞 기둥", "약함", "흐려", "맑음"];

  /** 해석표: 8글자(시각 미상 6글자) 오행 집계 · 천간·지지 목록 · 성립 천간합. §4-1. */
  function slotTable(chart) {
    var stems = [];
    var branches = [];
    var stemEl = {};
    var branchEl = {};
    var keys = ["year", "month", "day", "hour"];
    for (var i = 0; i < keys.length; i++) {
      var p = chart.pillars[keys[i]];
      if (!p) continue;
      stems.push(p.stem.hanja);
      branches.push(p.branch.hanja);
      stemEl[p.stem.element] = (stemEl[p.stem.element] || 0) + 1;
      branchEl[p.branch.element] = (branchEl[p.branch.element] || 0) + 1;
    }
    var counts = VIEW.elementCounts(chart);
    var formed = VIEW.stemCombos(chart).filter(function (c) { return c.status === "formed"; });
    var countIn = function (list, hanja) {
      var n = 0;
      for (var j = 0; j < list.length; j++) if (list[j] === hanja) n++;
      return n;
    };
    return {
      counts: counts,
      stems: stems,
      branches: branches,
      stemCount: function (hanja) { return countIn(stems, hanja); },
      branchCount: function (hanja) { return countIn(branches, hanja); },
      hasAnyBranch: function (hanjas) {
        for (var j = 0; j < hanjas.length; j++) if (branches.indexOf(hanjas[j]) !== -1) return true;
        return false;
      },
      element: function (kor) { return counts[kor] || 0; },
      elementIn: function (kor, where) {
        if (where === "stem") return stemEl[kor] || 0;
        if (where === "branch") return branchEl[kor] || 0;
        return counts[kor] || 0;
      },
      combos: formed,
      hasCombo: function (a, b) {
        for (var j = 0; j < formed.length; j++) {
          var s = formed[j].combo.stems;
          if ((s[0] === a && s[1] === b) || (s[0] === b && s[1] === a)) return true;
        }
        return false;
      },
      hasDayCombo: function (hanja) {
        for (var j = 0; j < formed.length; j++) {
          if (formed[j].involvesDayMaster && formed[j].combo.stems.indexOf(hanja) !== -1) return true;
        }
        return false;
      }
    };
  }

  /** 물상 이름을 판정 단위로 푼다. 등록되지 않은 이름은 null(미적용). */
  function slotResolveWord(word) {
    if (SLOT_STEM_WORD[word]) return { type: "stem", hanja: SLOT_STEM_WORD[word] };
    if (SLOT_ELEMENT_WORD[word]) return { type: "element", kor: SLOT_ELEMENT_WORD[word] };
    if (word === "신·진") return { type: "branchAny", hanjas: ["申", "辰"] };
    return null;
  }

  /** 판정 단위의 개수. position: null(8글자) | "stem" | "branch". 위치가 어긋나면 null. */
  function slotUnitCount(table, unit, position) {
    if (unit.type === "stem") {
      if (position === "branch") return null;   /* 천간 글자는 지지에 나오지 않는다 */
      return table.stemCount(unit.hanja);
    }
    if (unit.type === "element") return table.elementIn(unit.kor, position);
    if (position !== "branch") return null;     /* 신·진 같은 지지 이름은 지지에서만 본다 */
    return table.hasAnyBranch(unit.hanjas) ? 1 : 0;
  }

  /** 원자 조건 하나("물 없음", "작은 물만 있음", "큰 나무와 묶임" 등) 판정.
   *  반환: true/false(판정 성립 여부) | null(매핑 불가) | { ref: true }(앞 가지 참조). */
  function slotEvalAtom(table, chart, atom) {
    var a = atom.trim();
    var m;
    if (a === "위 가지") return { ref: true };
    if (a === "항상") return true;
    /* "A가 B와 묶임" / "A와 B가 묶여 있음": 두 물상 사이의 성립 천간합.
       단일형("X와 묶임")보다 먼저 검사한다. 단일형이 "A가 B와 묶임"을 선점해 버리기 때문. */
    m = a.match(/^(.+?)(가|와|과|이) (.+?)(가|와|과|이) (묶임|묶여 있음)$/);
    if (m) {
      var w1 = slotResolveWord(m[1]);
      var w2 = slotResolveWord(m[3]);
      if (!w1 || !w2 || w1.type !== "stem" || w2.type !== "stem") return null;
      return table.hasCombo(w1.hanja, w2.hanja);
    }
    /* "X와 묶임" / "X과 묶임" / "X와 합": 일간이 끼인 성립 천간합 */
    m = a.match(/^(.+?)(와|과) (묶임|합)$/);
    if (m) {
      var w = slotResolveWord(m[1]);
      if (!w || w.type !== "stem") return null;
      return table.hasDayCombo(w.hanja);
    }
    /* "X(이|가) 태어난 해에 (있음)": 년간 위치 조건 */
    m = a.match(/^(.+?)(이|가) 태어난 해에( 있음)?$/);
    if (m) {
      var wy = slotResolveWord(m[1]);
      if (!wy || wy.type !== "stem" || !chart.pillars.year) return null;
      return chart.pillars.year.stem.hanja === wy.hanja;
    }
    /* "X(이|가) 아래 글자에만 있음": 천간에는 없고 지지에만 있는 오행 */
    m = a.match(/^(.+?)(이|가) 아래 글자에만 있음$/);
    if (m) {
      var wb = slotResolveWord(m[1]);
      if (!wb || wb.type !== "element") return null;
      return table.elementIn(wb.kor, "stem") === 0 && table.elementIn(wb.kor, "branch") >= 1;
    }
    /* "태양이 셈" / "불이 너무 셈": 오행 과다(3개 이상) */
    m = a.match(/^(.+?)(이|가) (너무 )?셈$/);
    if (m) {
      var ws = slotResolveWord(m[1]);
      var wsKor = ws && ws.type === "element" ? ws.kor : (ws && ws.type === "stem" ? SLOT_STEM_ELEMENT[ws.hanja] : null);
      if (!wsKor) return null;
      return table.element(wsKor) >= 3;
    }
    /* "불과 흙이 지나침": 두 오행 모두 과다 */
    m = a.match(/^(.+?)과 (.+?)(이|가) 지나침$/);
    if (m) {
      var wj1 = slotResolveWord(m[1]);
      var wj2 = slotResolveWord(m[2]);
      if (!wj1 || !wj2 || wj1.type !== "element" || wj2.type !== "element") return null;
      return table.element(wj1.kor) >= 3 && table.element(wj2.kor) >= 3;
    }
    /* "A와 B(이) 함께( 있음)": 두 물상 공존 */
    m = a.match(/^(.+?)(가|와|과|이) (.+?)(가|와|과|이)? 함께( 있음)?$/);
    if (m) {
      var wa = slotResolveWord(m[1]);
      var wb2 = slotResolveWord(m[3]);
      if (!wa || !wb2) return null;
      var na = slotUnitCount(table, wa, null);
      var nb2 = slotUnitCount(table, wb2, null);
      if (na === null || nb2 === null) return null;
      return na >= 1 && nb2 >= 1;
    }
    /* "X 함께( 있음)": 물상 하나 + 함께 (나머지 원자가 앞 물상을 이미 검사한다) */
    m = a.match(/^(.+?)(이|가)? 함께( 있음)?$/);
    if (m) {
      var wf = slotResolveWord(m[1]);
      if (!wf) return null;
      var nf = slotUnitCount(table, wf, null);
      return nf === null ? null : nf >= 1;
    }
    /* 위치 접두: "아래 글자에|아래에" → 지지, "위에|천간에" → 천간, "원국에" → 전체 */
    var position = null;
    var rest = a;
    m = rest.match(/^(아래 글자에|아래에) (.+)$/);
    if (m) { position = "branch"; rest = m[2]; }
    else {
      m = rest.match(/^(위에|천간에) (.+)$/);
      if (m) { position = "stem"; rest = m[2]; }
      else {
        m = rest.match(/^원국에 (.+)$/);
        if (m) { position = "all"; rest = m[1]; }
      }
    }
    /* "나무 뿌리" 같은 지지 뿌리 표현은 같은 오행의 지지 개수로 본다 */
    rest = rest.replace(/ 뿌리/g, "");
    /* "X만 있음" / "X만": 같은 오행 짝 천간은 없어야 한다 */
    m = rest.match(/^(.+?)만( 있음)?$/);
    if (m) {
      var uo = slotResolveWord(m[1]);
      if (!uo || uo.type !== "stem") return null;
      return table.stemCount(uo.hanja) >= 1 && table.stemCount(SLOT_SIBLING[uo.hanja]) === 0;
    }
    /* "X 하나": 존재(1개 이상) */
    m = rest.match(/^(.+?) 하나$/);
    if (m) {
      var uh = slotResolveWord(m[1]);
      if (!uh) return null;
      var nh = slotUnitCount(table, uh, position === "all" ? null : position);
      return nh === null ? null : nh >= 1;
    }
    /* "X 둘|둘 이상|셋 이상": 같은 천간 반복(겹침) */
    m = rest.match(/^(.+?) (둘 이상|둘|셋 이상)$/);
    if (m) {
      var ur = slotResolveWord(m[1]);
      if (!ur || ur.type !== "stem") return null;
      return table.stemCount(ur.hanja) >= (m[2] === "셋 이상" ? 3 : 2);
    }
    /* "X 많음": 오행 과다(3개 이상) */
    m = rest.match(/^(.+?) 많음$/);
    if (m) {
      var um = slotResolveWord(m[1]);
      if (!um || um.type !== "element") return null;
      return table.element(um.kor) >= 3;
    }
    /* "X 있음|없음" */
    m = rest.match(/^(.+?) (있음|없음)$/);
    if (m) {
      var up = slotResolveWord(m[1]);
      if (!up) return null;
      var np = slotUnitCount(table, up, position === "all" ? null : position);
      if (np === null) return null;
      return m[2] === "있음" ? np >= 1 : np === 0;
    }
    /* 물상 이름만 단독으로 쓰인 원자("큰 나무", "덩골 + 작은 땅 + 시냇물" 등) */
    var bare = slotResolveWord(rest);
    if (bare) {
      var nb = slotUnitCount(table, bare, position === "all" ? null : position);
      return nb === null ? null : nb >= 1;
    }
    return null;
  }

  /** 조건 문구 전체 판정. 반환 { applied, matched }.
   *  applied=false는 매핑 불가(미적용)다. AND(+·많고)와 OR(또는·/)를 나눠 판정하고,
   *  하나의 OR 갈래라도 못 풀면 추측을 피하려고 조건 전체를 미적용 처리한다. */
  function slotConditionEval(condition, table, chart) {
    var raw = String(condition || "");
    for (var i = 0; i < SLOT_UNMAPPABLE_MARKERS.length; i++) {
      if (raw.indexOf(SLOT_UNMAPPABLE_MARKERS[i]) !== -1) return { applied: false, matched: false };
    }
    var cond = raw.replace(/^가려 줄 /, "").replace(/^위 가지인데 /, "위 가지 + ");
    /* 괄호는 순수 동의어·부연만 허용한다. 나머지 괄호가 있으면 미적용. */
    var parens = cond.match(/\(([^)]*)\)/g) || [];
    for (var j = 0; j < parens.length; j++) {
      var inner = parens[j].slice(1, -1).trim();
      if (SLOT_PAREN_OK.indexOf(inner) === -1) return { applied: false, matched: false };
    }
    cond = cond.replace(/\([^)]*\)/g, "");
    if (cond === "항상") return { applied: true, matched: true };
    var groups = cond.split(/ \/ |, 또는 | 또는 /);
    var anyApplied = false;
    for (var g = 0; g < groups.length; g++) {
      var atoms = groups[g].trim().split(/ \+ | 많고 /);
      var groupOk = true;
      var groupVal = true;
      for (var t = 0; t < atoms.length; t++) {
        if (!atoms[t].trim()) continue;
        var v = slotEvalAtom(table, chart, atoms[t]);
        if (v && v.ref) {
          /* "위 가지": 바로 앞 가지 판정을 이어받는다. 앞이 미적용이면 이것도 미적용. */
          var prev = table.prevResult;
          if (!prev || !prev.applied) { groupOk = false; break; }
          v = prev.matched;
        }
        if (v === null) { groupOk = false; break; }
        if (!v) groupVal = false;
      }
      if (!groupOk) continue;
      anyApplied = true;
      if (groupVal) return { applied: true, matched: true };
    }
    if (!anyApplied) return { applied: false, matched: false };
    return { applied: true, matched: false };
  }

  /** 선택 규칙(0-5) 우선순위. 슬롯스 설계서 order의 1~8번째 항목에 대응시킨 키워드 판정이며,
   *  어느 항목에도 해당하지 않으면 99(최후순위)로 밀어낸다. */
  function slotPriority(branch) {
    var text = String(branch.condition || "") + " " + String(branch.stageName || "");
    if (branch.stage === 1 && text.indexOf("없음") !== -1) return 1;   /* 성립조건 1단계의 결핍 */
    if (text.indexOf("묶임") !== -1 || text.indexOf("묶여") !== -1 || text.indexOf("와 합") !== -1 || text.indexOf("과 합") !== -1) return 2;  /* 묶임 */
    if (text.indexOf("가림") !== -1) return 3;
    if (text.indexOf("흐려") !== -1 || text.indexOf("탁수") !== -1) return 4;
    if (text.indexOf("둘") !== -1 || text.indexOf("셋") !== -1) return 5;  /* 같은 글자 겹침 */
    if (text.indexOf("많음") !== -1 || text.indexOf("많고") !== -1 || text.indexOf("셈") !== -1 || text.indexOf("지나침") !== -1) return 6;  /* 과다 */
    if (text.indexOf("아래 글자") !== -1) return 7;   /* 지지의 움직임 */
    return 99;
  }

  /** { } 자리 치환: 엔진 값만 채운다. B 문장에는 현재 자리가 없어 사실상 no-op이며,
   *  모르는 자리 토큰은 화면에 중괄호가 노출되지 않도록 제거한다. */
  function slotFill(text, chart) {
    return String(text || "")
      .replace(/\{일간\}/g, chart.dayMaster.hangul)
      .replace(/\{[^}]*\}/g, "");
  }

  /** 처방 문장 검사: 원문 전사에서 빈 처방("—", "자료 없음 — …")은 화면에 내보내지 않는다. */
  function slotPrescriptionText(text, chart) {
    if (!text) return null;
    if (text.indexOf("\u2014") !== -1 || text.indexOf("\u2013") !== -1) return null;
    return slotFill(text, chart);
  }

  /** 슬롯 리딩 엔진 본체. 선택된 가지(최대 2)의 표시 행을 돌려준다. */
  function slotEngine(chart) {
    if (!SLOTS || !SLOTS.stems || !SLOTS.stems[chart.dayMaster.hanja]) return [];
    var list = SLOTS.stems[chart.dayMaster.hanja].B || [];
    var table = slotTable(chart);
    var evald = [];
    for (var i = 0; i < list.length; i++) {
      table.prevResult = evald[i - 1] || null;   /* "위 가지" 참조용 */
      var verdict = slotConditionEval(list[i].condition, table, chart);
      evald.push(verdict);
    }
    /* 판정 전용 가지(slots 비어 있음)는 표시 후보가 아니다. 단, 코드가 ′로 끝나는
       조정 규칙(갑1-바′ 등)이 성립하면 원본 가지(′를 뗀 코드)를 후보에서 뺀다. */
    var suppressed = {};
    for (var s = 0; s < list.length; s++) {
      if (list[s].slots.length === 0 && evald[s].applied && evald[s].matched && /′$/.test(list[s].code)) {
        suppressed[list[s].code.slice(0, -1)] = true;
      }
    }
    var candidates = [];
    for (var c = 0; c < list.length; c++) {
      var b = list[c];
      if (!evald[c].applied || !evald[c].matched) continue;
      if (b.slots.length === 0) continue;                       /* 판정 전용 · 조정 규칙 */
      if (String(b.stageName || "").indexOf("특성") !== -1) continue;  /* 끝 슬롯 후보: 이 섹션 미출력 */
      if (suppressed[b.code]) continue;
      candidates.push({ branch: b, rank: slotPriority(b), yiji: String(b.condition).indexOf("아래 글자") !== -1 ? 1 : 0, index: c });
    }
    candidates.sort(function (x, y) {
      if (x.rank !== y.rank) return x.rank - y.rank;
      if (x.yiji !== y.yiji) return x.yiji - y.yiji;   /* 같은 순위면 천간 가지가 지지 가지보다 앞선다 */
      return x.index - y.index;
    });
    var rows = [];
    for (var r = 0; r < candidates.length && rows.length < 2; r++) {
      var b2 = candidates[r].branch;
      rows.push({
        code: b2.code,
        stage: b2.stage,
        stageName: b2.stageName,
        condition: b2.condition,
        slots: b2.slots.slice(),
        diagnosis: slotFill(b2.diagnosis, chart),
        prescription: slotPrescriptionText(b2.prescription, chart),
        sources: b2.source.slice()
      });
    }
    return rows;
  }

  /* 슬롯 리딩 섹션(Q02): 선택 가지 라벨 + 진단 + 처방 + 근거. 선택 0개면 안내 한 줄. */
  function slotReadingSection(chart, preset) {
    var rows = preset || slotEngine(chart);
    var html = sectionOpen(SEC.slot);
    if (!rows.length) {
      html += '<p class="lead-line">이 명조는 설계된 갈래에 해당하지 않는 구성입니다.</p></section>';
      return html;
    }
    html += '<p class="lead-line">설계된 물상 갈래 중 이 명조에 해당하는 가지를 최대 두 개까지 읽습니다.</p>';
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      html += '<div class="slot-branch"><p class="sub-label">' + esc(r.stage + "단계 " + r.stageName + " · " + r.condition) + "</p>";
      html += '<p><span class="slot-k">진단</span> ' + esc(r.diagnosis) + "</p>";
      if (r.prescription) html += '<p><span class="slot-k">처방</span> ' + esc(r.prescription) + "</p>";
      html += '<p class="gov">근거 ' + esc(r.sources.join(", ")) + "</p></div>";
    }
    return html + "</section>";
  }

  /* smoke.cjs 직접 검증용: 원국 판정 순수 함수를 뷰 레지스트리에 등록 */
  CORE.view.slotTable = slotTable;
  CORE.view.slotConditionEval = slotConditionEval;
  CORE.view.slotEngine = slotEngine;
  CORE.view.slotReadingSection = slotReadingSection;
  CORE.view.resolveProfile = resolveProfile;
  CORE.view.orderedSections = orderedSections;
  CORE.view.DEFAULT_SECTION_ORDER = DEFAULT_SECTION_ORDER;

  /* S3 어떤 사람인가요? 물상 성향(nature+metaphor+성향) + 성장 조건 */
  function personaSection(stem) {
    var html = sectionAcc(SEC.persona);
    html += '<div class="prose"><p>성질은 ' + esc(stem.nature) + "입니다.</p><p>" + esc(stem.metaphor) + "</p></div>";
    html += '<p class="sub-label">성향</p><ul class="traits">' + listItems(stem.coreTraits) + "</ul>";
    html += '<p class="sub-label">성장 조건</p><ul class="traits">' + listItems(stem.growthNeeds) + "</ul>";
    html += aggregateSrc([stem]);
    return html + "</details>";
  }

  /* S4 무엇이 많고, 무엇이 부족한가요? 오행 지형도.
     상태 칩은 많음·적당함·없음, 역할 라벨은 "재물·배우자의 기운(전통 용어: 재성)" 형식. */
  function balanceSection(chart) {
    var states = VIEW.elementStates(chart);
    var n = chart.mode === "noHour" ? "여섯 글자" : "여덟 글자";
    var html = sectionAcc(SEC.balance);
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
    return html + "</details>";
  }

  /* S5 어떤 일이 어울리나요? careerDirections */
  function careerSection(stem) {
    var html = sectionAcc(SEC.career);
    html += '<p class="lead-line">일간 성질이 자연스럽게 끌리는 일 방향입니다.</p>';
    html += '<ul class="traits">' + listItems(stem.careerDirections) + "</ul>";
    return html + "</details>";
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
    var html = sectionAcc(SEC.time);
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
      return html + "</details>";
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
    return html + "</details>";
  }

  /* S8 내 글자들은 서로 어떻게 작동하나요? 천간 관계 3건 + 합·충 감지.
     CR01~07 전체 목록과 기술 규칙은 "변화 규칙 자세히" details로 접는다. */
  function dynamicsSection(chart) {
    var g = VIEW.BRANCH_DYN.general;
    var rels = VIEW.stemRelations(chart);
    var combos = VIEW.stemCombos(chart);
    var branches = VIEW.branchDynamics(chart);

    var html = sectionAcc(SEC.dynamics);
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
    return html + "</details>";
  }

  /* S9 마음은 어떤가요? 안심법(해당 패턴만). 매칭이 없으면 섹션 자체를 생략. */
  function ansimSection(chart) {    var matched = VIEW.matchAnsim(chart);
    if (!matched.length) return "";
    var html = sectionAcc(SEC.mind);
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
    return html + "</details>";
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
  // 7) 렌더 (프로파일 순서 · 기본 S1 = 기존 고정 순서)
  // ---------------------------------------------------------------------------

  /* 타겟 프로파일(master-strategy §2-4 최소안): 엔진 로직 수정 없이 룩업과 정렬만 추가한다.
     ?p= 파라미터로 slots.json targetProfiles의 id를 받고, 없거나 모르는 id면 기본 S1.
     S1은 강조 섹션이 없어(기본 프로파일) 파라미터가 없으면 렌더 출력이 기존과 같다.
     상수(DEFAULT_PROFILE_ID·ACTIVE_PROFILE·DEFAULT_SECTION_ORDER)는 SEC 옆에 선언했다. */

  function resolveProfileId() {
    var pid = "";
    try { pid = new URLSearchParams(location.search).get("p") || ""; } catch (e) {}
    var profiles = (SLOTS && SLOTS.targetProfiles) || {};
    return (pid && profiles[pid]) ? pid : DEFAULT_PROFILE_ID;
  }

  function resolveProfile() {
    var profiles = (SLOTS && SLOTS.targetProfiles) || {};
    return profiles[resolveProfileId()] || null;
  }

  /* 강조 섹션 재배치: profile.sectionOrder 순으로 정렬하고, 목록에 없는 섹션은 기본
     순서대로 뒤에 붙인다. FAQ와 공유·고지·이메일·상세 리딩은 말미 고정이다. */
  function orderedSections(pairs, profile) {
    var order = (profile && profile.sectionOrder) || DEFAULT_SECTION_ORDER;
    var byKey = {};
    for (var i = 0; i < pairs.length; i++) byKey[pairs[i].key] = pairs[i];
    var out = [];
    for (var j = 0; j < order.length; j++) {
      if (byKey[order[j]]) { out.push(byKey[order[j]]); byKey[order[j]] = null; }
    }
    for (var k = 0; k < DEFAULT_SECTION_ORDER.length; k++) {
      if (byKey[DEFAULT_SECTION_ORDER[k]]) out.push(byKey[DEFAULT_SECTION_ORDER[k]]);
    }
    return out;
  }

  /* 공유 카드(share-card.html) 주소 조립: 카드가 검증하는 파라미터만 넣는다.
     d=생년월일 t=시각(미상은 빈 값) s=일간 한자 p=네 기둥 한자 j=절기 src=유입 경로.
     표시값 자체를 넘기지 않으므로 카드 문구는 BADGE 표(카피덱 v2-KR)로 고정된다.
     인쇄 발동은 카드 페이지의 저장 버튼(사용자 제스처)이 담당한다. */
  function buildShareCardUrl(chart, dm, st, srcValue) {
    var parts = [
      ['d', chart.input.dateISO],
      ['t', chart.input.timeISO || ''],
      ['s', dm.hanja],
      ['p', chart.fourPillarsHanja || ''],
      ['j', st && st.current && st.current.name ? st.current.name : ''],
      ['src', srcValue || '']
    ];
    var qs = [];
    for (var i = 0; i < parts.length; i++) {
      if (parts[i][1] !== '') qs.push(parts[i][0] + '=' + encodeURIComponent(parts[i][1]));
    }
    return 'share-card.html?' + qs.join('&');
  }

  function render(chart, gender, concern) {
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
    if (concern) {
      /* 고민 프리텍스트 배너(축3 변형 채택): 입력폼 고민 한 줄을 리딩 기준으로 상기.
         표시 로직만 적용(섹션 강조 없음). 세션 내 전달만이고 저장하지 않는다. */
      html += '<div class="notice concern-note"><p class="sec-label">고민 기준</p><p>이 리딩은 ‘' + esc(concern) + '’' +
        objParticle(concern) + " 기준으로 읽었습니다.</p></div>";
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

    /* Q01~Q10 리딩 섹션: 타겟 프로파일의 sectionOrder로 재배치한다(master-strategy §2-4).
       S1(기본)은 기본 순서와 같아 출력이 변하지 않고, ?p=s3·s4에서 강조 섹션이 앞으로 온다. */
    ACTIVE_PROFILE = resolveProfile();
    var secPairs = [
      { key: "summary", html: summarySection(chart, stem) },   /* Q01 한눈 요약 */
      { key: "slot", html: slotReadingSection(chart) },        /* Q02 슬롯 리딩(slots.json B 갈래 · 최대 2) */
      { key: "persona", html: personaSection(stem) },          /* Q03 어떤 사람인가요? */
      { key: "balance", html: balanceSection(chart) },         /* Q04 무엇이 많고, 무엇이 부족한가요? */
      { key: "career", html: careerSection(stem) },            /* Q05 어떤 일이 어울리나요? */
      { key: "danger", html: dangerSection(stem) },            /* Q06 조심할 신호는? */
      { key: "time", html: timeSection(chart, gender) },       /* Q07 시간의 흐름은? */
      { key: "dynamics", html: dynamicsSection(chart) },       /* Q08 내 글자들은 서로 어떻게 작동하나요? */
      { key: "mind", html: ansimSection(chart) },              /* Q09 마음은 어떤가요?(조건부) */
      { key: "faq", html: faqSection() },                      /* FAQ 자주 묻는 질문(닫힘 details 1개) */
      { key: "relation", html: relationSection() }             /* Q10 다른 사람과 보기 */
    ];
    var ordered = orderedSections(secPairs, ACTIVE_PROFILE);
    for (var oi = 0; oi < ordered.length; oi++) html += ordered[oi].html;
    /* 공유 2버튼(master-strategy P1-9): 카드 저장은 공유 카드(share-card.html 4:5)를
       새 창으로 열어 window.print로 PDF 저장하는 경로(canvas 캡처는 라이브러리
       의존이 있어 채택하지 않음), 링크 복사는 기존대로(Web Share API 있으면 네이티브 공유).
       og.png(1200×630)는 링크 미리보기용으로 유지하고 저장용 카드는 별도다. */
    var shareCardUrl = buildShareCardUrl(chart, dm, st, src);
    html += '<section class="sec share"><div class="part-divider"><span class="part-k">공유</span><span class="part-v">이 페이지 링크로 같은 리딩을 다시 볼 수 있습니다.</span></div>' +
      '<div class="share-actions">' +
      '<button type="button" class="cta share-btn" id="share-card-btn">카드 저장</button>' +
      '<button type="button" class="cta cta-ghost share-btn" id="share-link-btn">링크 복사</button>' +
      '</div>' +
      '<p class="helper" id="card-msg" hidden>카드 저장 화면을 새 창으로 열었습니다. 화면의 저장 버튼으로 PDF 파일을 만들 수 있습니다.</p>' +
      '<p class="helper" id="card-msg-blocked" hidden>브라우저가 새 창을 막았습니다. 팝업 허용 후 다시 시도해주세요.</p>' +
      '<p class="helper" id="share-msg" hidden>링크가 복사되었습니다.</p></section>';
    html += policyNotice();
    html += emailBlock();                       /* S11 결과 받아두기 */
    html += referenceSection(chart);            /* S12 details 2종 */
    html += '<nav class="foot-links" style="margin-top: 1.25rem;"><a href="chart.html">다시 입력하기</a><a href="index.html">처음으로</a></nav>';

    resultSec.innerHTML = html;
    var shareBtn = resultSec.querySelector('#share-link-btn');
    if (shareBtn) shareBtn.addEventListener('click', function() {
      var url = location.href;
      var done = function() { var m = resultSec.querySelector('#share-msg'); if (m) m.hidden = false; };
      /* Web Share 거절(데스크톱 브라우저 공통)이면 클립보드 복사로 폴백한다.
         폴백까지 조용히 죽으면 사용자는 복사 성공 여부를 알 수 없다. */
      var copyFallback = function() {
        var ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta); done();
      };
      if (navigator.share) { navigator.share({ title: document.title, url: url }).catch(copyFallback); }
      else if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(done).catch(copyFallback); }
      else { copyFallback(); }
    });
    var cardBtn = resultSec.querySelector('#share-card-btn');
    if (cardBtn) cardBtn.addEventListener('click', function() {
      var win = window.open(shareCardUrl, '_blank');
      var msg = resultSec.querySelector(win ? '#card-msg' : '#card-msg-blocked');
      if (msg) msg.hidden = false;
    });
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
