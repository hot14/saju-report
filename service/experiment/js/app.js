/*
 * SajuRoot 첫 유입 실험 · chart.html UI 로직 (wayfinder #14, 무료 차트 전체 자산판)
 * ---------------------------------------------------------------------------------
 * 1) 유입 경로 추적: URL 쿼리 src를 읽어 localStorage와 폼 숨은 필드에 기록
 * 2) 생년월일 폼 처리: 카피덱 v2-KR 문구로 검증 (성별은 선택, 대운 표시용)
 * 3) computeChart + CORE.view(원국 판정 순수 함수)로 전체 섹션 렌더
 *    오행 지형도 / 천간 관계 / 원국 변화 감지 / 기둥 시간축 / 대운 / 안심법 / 관계 읽기
 * 4) 관계 읽기: 상대 생년월일 입력, 화면 안에서만 계산하고 저장하지 않음
 * 5) 결과 하단 이메일 수집: {{FORM_ENDPOINT}} 미설정 시 mailto 폴백 안내
 *
 * 콘텐츠 출처: service/content/{stems,relations,dynamics,regions}.json(재구성 물상,
 * 검증 통과분), policy.json(고지문), docs/copy-deck-v2-kr.md(문구 톤).
 * 태극성취 근거는 docs/wayfinder/namchon-8geon-panjeong.md(확정, T08-001)를 따른다.
 * 남촌 원문 인용 없음.
 */
(function () {
  "use strict";

  var CORE = window.SajuRoot;
  var VIEW = CORE.view;
  var SRC_KEY = "sajuroot_src";
  var EMAIL_KEY = "sajuroot_email_ok";
  var VALID_SRC = ["seo", "community", "social", "direct"];
  var MAILTO = (window.SAJU_CONFIG && window.SAJU_CONFIG.mailto) || "sajuroot@example.com";

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

  var STATUS_LABEL = { tooMuch: "과다", tooLittle: "과소", balance: "조화" };

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

  /* 근거(source id) 한 줄. unverified 깃발이 있으면 고지를 붙인다. */
  function srcLine(sources, unverified, unverifiedSourceIds) {
    var ids = (sources || []).slice();
    if (unverified && unverifiedSourceIds && unverifiedSourceIds.length) {
      for (var i = 0; i < unverifiedSourceIds.length; i++) {
        if (ids.indexOf(unverifiedSourceIds[i]) === -1) ids.push(unverifiedSourceIds[i]);
      }
    }
    var html = '<p class="src-line">근거 ' + esc(ids.join(", ")) + "</p>";
    if (unverified) html += '<p class="uv-flag">비검증 근거 포함</p>';
    return html;
  }

  function secOpen(label) {
    return '<section class="sec"><p class="sec-label">' + esc(label) + "</p>";
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
  // 3) 기본 카드 · 기존 섹션 (네 개의 기둥 / 계산 근거 / 성향 / 성장)
  // ---------------------------------------------------------------------------

  function slotStrip(chart) {
    var noHour = chart.mode === "noHour";
    var cols = [
      { label: "年", pillar: chart.pillars.year },
      { label: "月", pillar: chart.pillars.month },
      { label: "日", pillar: chart.pillars.day },
      { label: "時", pillar: chart.pillars.hour }
    ];
    var html = '<div class="slotstrip" aria-hidden="true">';
    for (var i = 0; i < cols.length; i++) {
      var c = cols[i];
      html += '<div class="slotgroup"><span class="slotlabel">' + c.label + '</span><div class="slots">';
      if (noHour && !c.pillar) {
        html += '<span class="slot off">제외</span><span class="slot off">제외</span>';
      } else {
        var glyphs = c.pillar.hanja.split("");
        html += '<span class="slot filled">' + esc(glyphs[0]) + '</span><span class="slot filled">' + esc(glyphs[1]) + "</span>";
      }
      html += "</div></div>";
    }
    return html + "</div>";
  }

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
    return '<table class="pillars">' + head + "<tbody>" + row("천간", "stem") + row("지지", "branch") + "</tbody></table>" +
      '<p class="slotcap">' + cap + "</p>";
  }

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
    rows.push(["출생지", "서울 기본값 · 북위 " + chart.input.latitude + ", 동경 " + chart.input.longitude]);
    /* 공망: 엔진(manseryeok 역법)이 계산한 비어 있는 지지. 근거 표에 추가 */
    rows.push(["공망 지지", chart.voidBranches.length ? chart.voidBranches.join(", ") + " (역법 라이브러리 계산)" : "해당 없음"]);

    var html = '<table class="registry"><caption>근거 표 · 진태양시 = 표준시 + (경도 - 135도) × 4분 + 균시차</caption><tbody>';
    for (var i = 0; i < rows.length; i++) {
      html += '<tr><th class="k">' + esc(rows[i][0]) + '</th><td class="v">' + esc(rows[i][1]) + "</td></tr>";
    }
    html += "</tbody></table>";
    if (noHour) html += '<p class="gov">' + esc(chart.assumptions[0]) + "</p>";
    if (!noHour && chart.input.timeISO && chart.input.timeISO.slice(0, 2) === "23") {
      html += '<p class="gov">' + esc(POLICY.jasi) + "</p>";
    }
    return html;
  }

  /* 성향 섹션 확장: nature + metaphor + coreTraits + careerDirections + dangers(과잉·부족) */
  function traitsSection(stem) {
    var html = '<div class="prose"><p>성질은 ' + esc(stem.nature) + "입니다.</p><p>" + esc(stem.metaphor) + "</p></div>";
    html += '<ul class="traits">';
    for (var i = 0; i < stem.coreTraits.length; i++) {
      html += "<li>" + esc(stem.coreTraits[i]) + "</li>";
    }
    html += "</ul>";
    html += '<p class="sub-label">이 일 방향이 어울립니다</p><ul class="traits">';
    for (var j = 0; j < stem.careerDirections.length; j++) {
      html += "<li>" + esc(stem.careerDirections[j]) + "</li>";
    }
    html += "</ul>";
    html += '<p class="sub-label">주의 신호</p>' +
      '<div class="danger-grid">' +
      '<div class="danger-col"><p class="danger-head">과할 때</p><ul class="traits">' +
      dangersList(stem.dangers.excess) +
      '</ul></div><div class="danger-col"><p class="danger-head">모자랄 때</p><ul class="traits">' +
      dangersList(stem.dangers.deficit) +
      "</ul></div></div>";
    html += srcLine(stem.sources, stem.unverified, stem.unverifiedSourceIds);
    return html;
  }

  function dangersList(items) {
    var out = "";
    for (var i = 0; i < items.length; i++) out += "<li>" + esc(items[i]) + "</li>";
    return out;
  }

  function growthSection(stem) {
    var html = '<ul class="traits">';
    for (var i = 0; i < stem.growthNeeds.length; i++) {
      html += "<li>" + esc(stem.growthNeeds[i]) + "</li>";
    }
    return html + "</ul>" + srcLine(stem.sources, stem.unverified, stem.unverifiedSourceIds);
  }

  // ---------------------------------------------------------------------------
  // 4) 확장 섹션 (오행 지형도 / 천간 관계 / 변화 감지 / 시간축 / 대운 / 안심법)
  // ---------------------------------------------------------------------------

  /* ① 오행 지형도: 8글자 집계, 일간 대비 상태 판정, dayStemVsElements 문장 */
  function elementTerrainSection(chart) {
    var states = VIEW.elementStates(chart);
    var html = secOpen("오행 지형도");
    html += '<p class="lead-line">여덟 글자를 오행별로 세어 ' + esc(BADGE[chart.dayMaster.hanja].name) +
      "(" + esc(chart.dayMaster.hanja) + ")을 기준으로 판정합니다. " +
      "세 글자 이상이면 과다, 없으면 과소로 봅니다.</p>";
    html += '<div class="estate">';
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
        '<span class="state-chip state-' + s.status + '">' + esc(STATUS_LABEL[s.status]) + "</span>" +
        (s.isDayMaster ? '<span class="dm-chip">일간</span>' : "") +
        "</div>";
      html += '<p class="estate-role">' + esc(s.role) + " · " + esc(s.roleText) + "</p>";
      html += '<p class="estate-text">' + esc(s.text) + "</p>";
      html += srcLine(s.sources, s.unverified, s.unverifiedSourceIds);
    }
    html += "</div>";
    html += '<p class="gov">역할 범례 · ' +
      esc("비동=" + VIEW.ROLE_VOCAB["비동"]) + " / " + esc("식상=" + VIEW.ROLE_VOCAB["식상"]) + " / " +
      esc("재성=" + VIEW.ROLE_VOCAB["재성"]) + " / " + esc("관성=" + VIEW.ROLE_VOCAB["관성"]) + " / " +
      esc("인성=" + VIEW.ROLE_VOCAB["인성"]) + "</p>";
    return html + "</section>";
  }

  /* ② 내 천간들과의 관계: 년간·월간·시간 × 일간 (일지 지지는 천간 관계가 아님) */
  function stemRelationsSection(chart) {
    var rels = VIEW.stemRelations(chart);
    var html = secOpen("내 천간들과의 관계");
    html += '<p class="lead-line">일간 ' + esc(chart.dayMaster.hanja) + "(" + esc(chart.dayMaster.hangul) +
      ")을 기준으로, 나머지 세 기둥의 천간이 어떻게 작동하는지 읽습니다. " +
      "일지 지지는 천간 관계가 아니어서 여기서 다루지 않습니다.</p>";
    html += '<div class="rel-list">';
    for (var i = 0; i < rels.length; i++) {
      var r = rels[i];
      if (r.excluded) {
        html += '<div class="rel-item rel-off"><p class="rel-pos">' + esc(r.position) + "</p>" +
          '<p class="off-note">시각 미상으로 제외</p></div>';
        continue;
      }
      html += '<div class="rel-item"><p class="rel-pos">' + esc(r.position) + " " +
        '<span class="rel-hanja">' + esc(r.hanja) + "</span> " + esc(r.hangul) + "</p>" +
        '<p class="rel-image">' + esc(r.image) + "</p>" +
        '<p class="estate-text">' + esc(r.rule) + "</p>" +
        srcLine(r.sources, false, null) +
        "</div>";
    }
    return html + "</div></section>";
  }

  /* ③ 원국 변화 감지: 천간 5쌍 합 + 지지 충·삼합·방합·육합 */
  function dynamicsSection(chart) {
    var g = VIEW.BRANCH_DYN.general;
    var combos = VIEW.stemCombos(chart);
    var branches = VIEW.branchDynamics(chart);
    var html = secOpen("원국 변화 감지");
    html += '<div class="dyn-intro"><p>' + esc(g.stemChungNote) + "</p>" +
      '<p class="gov">' + esc("충 발동 기준: " + g.triggerRule) + "</p>" +
      srcLine(g.sources, false, null) + "</div>";

    html += '<p class="sub-label">천간 합</p>';
    var formed = [];
    var blocked = [];
    for (var i = 0; i < combos.length; i++) (combos[i].status === "formed" ? formed : blocked).push(combos[i]);
    if (!combos.length) {
      html += '<p class="neutral-note">네 천간 가운데 합 쌍이 없습니다.</p>';
    }
    for (var f = 0; f < formed.length; f++) {
      var c = formed[f].combo;
      html += '<div class="dyn-item"><p class="dyn-head"><span class="dyn-kind">합 성립</span> ' +
        esc(c.pairing) + " 합 · 만들어지는 오행 " + esc(c.resultElement) +
        (formed[f].involvesDayMaster ? ' <span class="dm-chip">일간 묶임</span>' : "") + "</p>" +
        '<p class="estate-text">' + esc(c.nature) + "</p>" +
        '<p class="estate-text">' + esc("변화 원리: " + c.transformationRule) + "</p>" +
        '<p class="estate-text">' + esc("끌어옴: " + c.pull.core) + "</p>" +
        '<p class="gov">' + esc("뿌리 조건: " + c.pull.rootRule) + "</p>" +
        '<p class="gov">' + esc(c.pull.weakPull) + "</p>" +
        '<ul class="traits small"><li>' + esc("합이 풀리는 길: " + c.releaseRules.join(" / ")) + "</li></ul>" +
        srcLine(c.sources, c.pull.unverified, c.pull.unverifiedSourceIds) + "</div>";
    }
    for (var b = 0; b < blocked.length; b++) {
      var cb = blocked[b];
      var cr02 = null;
      for (var r = 0; r < VIEW.COMBO_RATIO_RULES.length; r++) {
        if (VIEW.COMBO_RATIO_RULES[r].id === "CR02") cr02 = VIEW.COMBO_RATIO_RULES[r];
      }
      html += '<div class="dyn-item dyn-blocked"><p class="dyn-head"><span class="dyn-kind">비율 미성립</span> ' +
        esc(cb.combo.pairing) + " · 천간 비율 " + esc(cb.ratio) + "</p>" +
        '<p class="estate-text">' + esc(cr02 ? cr02.rule + ". " + cr02.detail : "원국에서는 1:1로만 합이 성립합니다.") + "</p>" +
        (cr02 ? srcLine(cr02.sources, false, null) : "") + "</div>";
    }

    html += '<p class="sub-label">지지 변화</p>';
    if (!branches.length) {
      html += '<p class="neutral-note">이 명조는 원국에서 합과 충 없이 안정 구조입니다.</p>';
    }
    for (var k = 0; k < branches.length; k++) {
      var d = branches[k];
      html += '<div class="dyn-item"><p class="dyn-head"><span class="dyn-kind">' +
        esc(KIND_LABEL[d.kind] || d.kind) + "</span> " + esc(d.label) +
        " · " + esc(d.present.join("")) + "</p>" +
        '<p class="estate-text">' + esc(d.text) + "</p>" +
        srcLine(d.sources, d.unverified, d.unverifiedSourceIds) + "</div>";
    }
    html += '<p class="gov">' + esc("육합 실사용 쌍 안내: " + VIEW.BRANCH_DYN.yukhabs.rule) + "</p>";

    html += '<p class="sub-label">합 비율 규칙 (운 상호작용 포함)</p><ul class="traits small">';
    for (var q = 0; q < VIEW.COMBO_RATIO_RULES.length; q++) {
      var cr = VIEW.COMBO_RATIO_RULES[q];
      html += "<li>" + esc(cr.id + " " + cr.rule + ". " + cr.detail) + " " +
        '<span class="src-inline">근거 ' + esc(cr.sources.join(", ")) + "</span></li>";
    }
    return html + "</ul></section>";
  }

  var KIND_LABEL = {
    chung: "충", sanhap: "삼합", banhap: "반합", gonghyeop: "공협", banghap: "방합", yukhap: "육합"
  };

  /* ④ 기둥 시간축: pillarRoles (근거 regions.json) */
  function pillarRolesSection(chart) {
    var noHour = chart.mode === "noHour";
    var roles = VIEW.PILLAR_ROLES;
    var html = secOpen("기둥 시간축");
    html += '<p class="lead-line">네 기둥은 각각 인생 구간을 나타냅니다. 앞 기둥일수록 이른 시기입니다.</p>';
    html += '<div class="role-list">';
    var posMap = { "년주": "年 연간", "월주": "月 월간", "일주": "日 일주·일지", "시주": "時 시주" };
    for (var i = 0; i < roles.length; i++) {
      var role = roles[i];
      var off = noHour && role.pillar === "시주";
      html += '<div class="role-block' + (off ? " role-off" : "") + '">' +
        '<p class="role-head">' + esc(posMap[role.pillar] || role.pillar) +
        '<span class="role-years">' + esc(role.years + " " + role.lifeStage) + "</span>" +
        (off ? '<span class="state-chip state-off">제외</span>' : "") + "</p>" +
        '<p class="role-line"><span class="role-k">무대</span>' + esc(role.domain) + "</p>" +
        '<p class="role-line"><span class="role-k">인물</span>' + esc(role.personType) + "</p>" +
        '<p class="role-text">' + esc(role.detail) + "</p>" +
        (off
          ? '<p class="gov">' + esc(VIEW.NO_HOUR_NOTE.rule) + "</p>" + srcLine(VIEW.NO_HOUR_NOTE.sources, false, null)
          : srcLine(role.sources, false, null)) +
        "</div>";
    }
    return html + "</div></section>";
  }

  /* ⑤ 대운 타임라인: 성별 선택 시 10구간 표 + 현재 구간 강조 */
  function luckSection(chart, gender) {
    var html = secOpen("10년 흐름");
    var luck = VIEW.luckPillars(chart, gender);
    if (!luck) {
      html += '<p class="neutral-note">성별을 알려주면 10년 흐름도 함께 볼 수 있어요. ' +
        "입력 화면의 성별은 이 계산에만 쓰입니다.</p>";
      return html + "</section>";
    }
    var dirText = luck.forward ? "순행" : "역행";
    html += '<p class="lead-line">월주 ' + esc(luck.monthPillar) + "에서 시작하는 " + esc(dirText) +
      " 대운입니다. " + esc(luck.startAge) + "세부터 열 구간이 열립니다.</p>";
    html += '<table class="registry luck-table"><caption>대운 10구간 · 나이는 만 나이 기준</caption><thead><tr>' +
      '<th class="k">구간</th><th class="k">나이</th><th class="k">간지</th></tr></thead><tbody>';
    for (var i = 0; i < luck.rows.length; i++) {
      var row = luck.rows[i];
      var now = i === luck.currentIndex;
      html += "<tr" + (now ? ' class="luck-now"' : "") + "><th class=\"k\">" + (i + 1) + "구간</th>" +
        '<td class="v">' + row.fromAge + "세부터 " + row.toAge + "세까지</td>" +
        '<td class="v luck-ganji">' + esc(row.korean) + (now ? " · 지금" : "") + "</td></tr>";
    }
    html += "</tbody></table>";
    if (luck.currentIndex === -1) {
      html += '<p class="gov">첫 대운 시작 전입니다. ' + luck.startAge + "세부터 첫 구간이 열립니다.</p>";
    }
    html += '<p class="src-line">근거: 월주 기준 순행/역행 전개 · 대운수 = 출생에서 인접 절까지 일수 ÷ 3 (역법 라이브러리 manseryeok)</p>';
    if (chart.mode === "noHour") {
      html += '<p class="gov">시각 미상은 정오 가정으로 계산되어 대운 시작 나이에 오차가 있을 수 있습니다.</p>';
    }
    return html + "</section>";
  }

  /* ⑦ 안심법 마음 읽기: 정확 일치 조건만 */
  function ansimSection(chart) {
    var matched = VIEW.matchAnsim(chart);
    if (!matched.length) return "";
    var html = secOpen("마음 읽기");
    html += '<p class="lead-line">명조 구성으로 확정되는 조건에만 근거한 읽기입니다. ' +
      "두 사람 조건과 운 국면 조건은 제외합니다.</p>";
    for (var i = 0; i < matched.length; i++) {
      var p = matched[i];
      html += '<div class="ansim-card"><p class="dyn-head"><span class="dyn-kind">' + esc(p.id) +
        '</span> ' + esc(p.condition) + "</p>" +
        '<p class="ansim-mind">' + esc(p.mind) + "</p>" +
        '<p class="estate-text">' + esc(p.interpretation) + "</p>" +
        srcLine(p.sources, p.unverified, p.unverifiedSourceIds) + "</div>";
    }
    return html + "</section>";
  }

  // ---------------------------------------------------------------------------
  // 5) 관계 읽기 (실험 기능): 상대 생년월일 → 두 일간 합 · 관계 규칙 · 오행 보완
  // ---------------------------------------------------------------------------

  function relationSection() {
    var html = secOpen("관계 읽기");
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
    if (!relForm) return;
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
      '<p class="gov">상대 여섯 글자 ' + esc(partner.fourPillarsHanja) +
      " · 시각 미입력이라 정오 가정</p></div>";

    /* ① 두 일간 합 쌍 여부 */
    if (combo) {
      html += '<div class="rel-item"><p class="dyn-head"><span class="dyn-kind">일간 합</span> ' +
        esc(combo.pairing) + " · 만들어지는 오행 " + esc(combo.resultElement) + "</p>" +
        '<p class="estate-text">' + esc(combo.nature) + "</p>" +
        srcLine(combo.sources, false, null) + "</div>";
    } else {
      html += '<div class="rel-item"><p class="dyn-head"><span class="dyn-kind">일간 합</span> 해당 없음</p>' +
        '<p class="estate-text">두 일간 ' + esc(myDm.hanja + ", " + pDm.hanja) +
        "은(는) 다섯 천간합 쌍에 해당하지 않습니다.</p></div>";
    }

    /* ② 내 일간 × 상대 일간 관계 규칙 */
    html += '<div class="rel-item"><p class="rel-image">' + esc(rel.image) + "</p>" +
      '<p class="estate-text">' + esc(rel.rule) + "</p>" +
      srcLine(rel.sources, false, null) + "</div>";

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
      fillText = "내 패턴에 없는 " + parts.join(", ") + "을 상대 여섯 글자가 채워줍니다. " +
        "서로의 빈 오행을 메우는 구조입니다.";
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
  // 6) 고지 · 이메일 (유료 컷 제거, {{PRICE}} 토큰 이 화면에서 제거)
  // ---------------------------------------------------------------------------

  function policyNotice() {
    return '<div class="notice"><p>' + esc(POLICY.boundary) + "</p>" +
      '<p class="gov">' + esc(POLICY.theory) + " " + esc(POLICY.nonAffiliation) + "</p></div>";
  }

  function emailBlock() {
    if (emailDone()) {
      return '<section class="cut"><p class="email-done">알림 신청이 접수되어 있습니다.</p>' +
        '<p class="helper">더 깊은 읽기는 준비 중입니다. 준비되면 신청한 주소로 안내합니다.</p></section>';
    }
    return '<section class="cut">' +
      '<p class="sec-label">결과 받아두기</p>' +
      '<h2>전체 리딩이 준비되면 가장 먼저 알려드립니다<span class="accent">.</span></h2>' +
      '<p class="lead">지금 화면을 닫아도, 이 이메일 하나로 다시 찾아올 수 있습니다.</p>' +
      '<p class="more-note">더 깊은 읽기는 준비 중입니다.</p>' +
      '<form data-email-form action="{{FORM_ENDPOINT}}" method="post">' +
      '<input type="hidden" name="src" value="' + esc(src) + '">' +
      '<input type="hidden" name="page" value="chart">' +
      '<div class="email-field"><label for="email-chart">이메일</label>' +
      '<input id="email-chart" name="email" type="email" autocomplete="email" required></div>' +
      '<button type="submit" class="cta">알림 받기</button></form>' +
      '<div class="form-fallback" id="chart-fallback" hidden>' +
      "<p>폼 연결 전입니다. 아래 주소로 알림 메일을 보내주시면 명단에 추가합니다.</p>" +
      '<p><a id="chart-mailto" href="mailto:' + esc(MAILTO) + '">메일 보내기</a></p></div>' +
      '<p class="helper">이메일은 안내 발송에만 쓰입니다.</p></section>';
  }

  // ---------------------------------------------------------------------------
  // 7) 렌더
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
    var patternId = "P-" + chart.input.dateISO.replace(/-/g, "") +
      (chart.input.timeISO ? "-" + chart.input.timeISO.replace(":", "") : "");

    var html = '<span class="fig block-fig">도판 04 - 결과 카드</span>';

    if (st.nearSolarTermBoundary) {
      html += '<div class="warn"><p class="sec-label">절기 경계 주의</p><p>' + esc(st.riskNote) + "</p></div>";
    }
    if (noHour) {
      html += '<div class="notice"><p class="sec-label">시각 미상 모드</p>' +
        "<p>" + esc(POLICY.noHourDisclaimer) + "</p>" +
        "<p>연, 월, 일 여섯 글자로 읽으며, 시주가 필요한 주제는 제외됩니다.</p>" +
        '<p class="gov">' + esc(POLICY.noHourExcluded) + "</p></div>";
    }

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
      '<h2 class="declaration">당신은 ' + esc(badge.name) + '입니다<span class="accent">.</span></h2>' +
      '<p class="one-liner">' + esc(badge.one) + "</p></article>";

    html += '<section class="sec"><p class="sec-label">네 개의 기둥</p>' + slotStrip(chart) + pillarTable(chart) + "</section>";
    html += '<section class="sec"><p class="sec-label">계산 근거</p>' + evidenceTable(chart) + "</section>";
    html += '<section class="sec"><p class="sec-label">물상 성향</p>' + traitsSection(stem) + "</section>";
    html += '<section class="sec growth"><p class="sec-label">성장 조건</p>' + growthSection(stem) + "</section>";
    html += elementTerrainSection(chart);
    html += stemRelationsSection(chart);
    html += dynamicsSection(chart);
    html += pillarRolesSection(chart);
    html += luckSection(chart, gender);
    html += ansimSection(chart);
    html += relationSection();
    html += policyNotice();
    html += emailBlock();
    html += '<nav class="foot-links" style="margin-top: 1.25rem;"><a href="chart.html">다시 입력하기</a><a href="index.html">처음으로</a></nav>';

    resultSec.innerHTML = html;
    entrySec.hidden = true;
    resultSec.hidden = false;
    resultSec.scrollIntoView({ behavior: "smooth", block: "start" });
    wireEmailForm(resultSec.querySelector("form[data-email-form]"));
    wireRelationForm(chart);
  }

  // ---------------------------------------------------------------------------
  // 8) 이메일 폼: {{FORM_ENDPOINT}} 미설정 시 mailto 폴백
  // ---------------------------------------------------------------------------

  function wireEmailForm(form2) {
    if (!form2) return;
    form2.addEventListener("submit", function (ev) {
      var action = form2.getAttribute("action") || "";
      if (action.indexOf("{{") !== -1) {
        ev.preventDefault();
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
      try { localStorage.setItem(EMAIL_KEY, "1"); } catch (e) {}
    });
  }
})();
