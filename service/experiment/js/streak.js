/*
 * SajuRoot 방문 스트릭 · 무캐릭터 게이미피케이션 최소판
 * ------------------------------------------------------
 * 혼빛 스트릭·뱃지(honbit-benchmark-service.md §리텐션)의 무캐릭터 변형.
 * 캐릭터·그림·보상·레벨 없이 "연속 N일째 · 총 M번" 한 줄만 노출한다(Swiss 모노 문체).
 *
 * - localStorage 키 하나(sajuroot_visits)에 방문 날짜 키(YYYY-MM-DD)만 저장한다.
 *   같은 날 재방문은 1회로만 기록(중복 없음), 최근 400일치만 보관한다.
 * - 날짜 키는 로컬 달력 날짜 그대로다(단순 날짜 키). 서머타임·타임존 보정 없음.
 * - 의존성 0. 브라우저에서는 window.SajuStreak, Node에서는 module.exports로
 *   노출한다(node streak.test.cjs 직접 유닛: 같은 날 재방문 · 연속 · 끊김 3케이스).
 *
 * 자동 기록: 이 파일을 포함한 페이지(랜딩 index.html · 차트 chart.html) 로드 시
 * 1회 기록한다. 배지는 ①자동 마운트(랜딩 히어로 · 차트 입력 화면)와
 * ②결과 카드(app.js render가 badgeHTML()을 삽입) 두 자리에 한 줄씩 나온다.
 * 스타일은 이 파일이 <style> 한 덩어리로 주입한다(style.css 미수정).
 */
(function (root) {
  "use strict";

  var KEY = "sajuroot_visits";
  var MAX_KEEP = 400;

  /* 로컬 달력 날짜 키. getFullYear·getMonth·getDate만 쓰므로 서머타임 영향이 없다. */
  function dateKey(d) {
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var day = d.getDate();
    return y + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (day < 10 ? "0" + day : "" + day);
  }

  /* 날짜 키 + n일. 지역 Date 생성자가 월·연 경계를 알아서 넘긴다. */
  function shiftKey(key, n) {
    var p = key.split("-");
    return dateKey(new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]) + Number(n)));
  }

  /* 이번 주의 월요일 키(주 시작은 월요일 기준). */
  function weekStartKey(key) {
    var p = key.split("-");
    var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    var back = (d.getDay() + 6) % 7; /* 일요일(0)이면 6일 뒤로 보정해 월요일 정렬 */
    return shiftKey(key, -back);
  }

  function safeStore(store) {
    if (store && typeof store.getItem === "function") return store;
    try {
      if (typeof localStorage !== "undefined" && localStorage) return localStorage;
    } catch (e) {}
    return null;
  }

  function loadDates(store) {
    var s = safeStore(store);
    if (!s) return [];
    try {
      var raw = s.getItem(KEY);
      var arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return [];
      var out = [];
      for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" && /^\d{4}-\d{2}-\d{2}$/.test(arr[i])) out.push(arr[i]);
      }
      return out;
    } catch (e) {
      return [];
    }
  }

  function saveDates(store, dates) {
    var s = safeStore(store);
    if (!s) return;
    try { s.setItem(KEY, JSON.stringify(dates)); } catch (e) {}
  }

  /* 순수 계산: 날짜 키 배열 + 오늘 키 → 총 방문 · 연속 일수 · 이번 주 방문.
     연속 앵커는 오늘(방문했으면), 아니면 어제(어제까지의 연속은 아직 살아 있다). */
  function computeStats(dates, todayKey) {
    var set = {};
    var uniq = [];
    for (var i = 0; i < dates.length; i++) {
      var k = dates[i];
      if (typeof k === "string" && /^\d{4}-\d{2}-\d{2}$/.test(k) && !set[k]) {
        set[k] = true;
        uniq.push(k);
      }
    }
    var yesterdayKey = shiftKey(todayKey, -1);
    var anchor = set[todayKey] ? todayKey : (set[yesterdayKey] ? yesterdayKey : null);
    var streak = 0;
    if (anchor) {
      var cur = anchor;
      while (set[cur]) { streak++; cur = shiftKey(cur, -1); }
    }
    var weekStart = weekStartKey(todayKey);
    var week = 0;
    for (var w = 0; w < 7; w++) { if (set[shiftKey(weekStart, w)]) week++; }
    return { total: uniq.length, streak: streak, week: week, today: !!set[todayKey] };
  }

  /* 오늘 방문 1회 기록(같은 날 재방문은 무시) 후 통계 반환. */
  function record(now, store) {
    var todayKey = dateKey(now instanceof Date ? now : new Date());
    var dates = loadDates(store);
    if (dates.indexOf(todayKey) === -1) {
      dates.push(todayKey);
      if (dates.length > MAX_KEEP) dates = dates.slice(dates.length - MAX_KEEP);
      saveDates(store, dates);
    }
    return computeStats(dates, todayKey);
  }

  /* 저장된 방문 기록 기준 통계. now·store는 테스트 주입용. */
  function stats(now, store) {
    var todayKey = dateKey(now instanceof Date ? now : new Date());
    return computeStats(loadDates(store), todayKey);
  }

  /* 결과 카드용 미니 배지 1줄. 방문 기록이 없으면 빈 문자열(레이아웃 영향 0). */
  function badgeHTML(now, store) {
    var s = stats(now, store);
    if (!s.total) return "";
    return '<p class="streak-line" data-streak-badge><span>연속 ' + s.streak + "일째</span>" +
      '<span class="streak-sep" aria-hidden="true"> · </span>' +
      "<span>총 " + s.total + "번</span></p>";
  }

  function injectStyle() {
    if (typeof document === "undefined" || !document.getElementById || !document.createElement) return;
    if (document.getElementById("sajuroot-streak-style")) return;
    var el = document.createElement("style");
    el.id = "sajuroot-streak-style";
    /* Swiss 모노 문체: 기존 .fig 토큰(모노 · 0.7rem · 자간 · 먹크기)과 같은 계열, 장식 없음 */
    el.textContent = ".streak-line{font-family:var(--font-mono,\"IBM Plex Mono\",monospace);" +
      "font-size:var(--text-label,0.7rem);letter-spacing:0.14em;" +
      "color:var(--color-ink-mute,#6F6A63);margin:0.9rem 0 0}" +
      ".streak-line .streak-sep{padding:0 0.15em}";
    var head = document.head || document.documentElement;
    if (head) head.appendChild(el);
  }

  /* 랜딩(index.html .hero)과 차트 입력 화면(chart.html #entry)에 자동 마운트.
     결과 카드는 app.js render가 담당하므로 여기서 만지지 않는다. */
  function mountAuto() {
    if (typeof document === "undefined" || !document.querySelector || !document.createElement) return;
    if (document.querySelector("[data-streak-badge]")) return;
    var html = badgeHTML();
    if (!html) return;
    var cap = document.querySelector("#entry .slotcap");
    var sub = cap ? null : document.querySelector(".hero .hero-sub");
    var anchor = cap || sub;
    if (!anchor || !anchor.parentNode) return;
    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    if (!wrap.firstChild) return;
    anchor.parentNode.insertBefore(wrap.firstChild, anchor.nextSibling);
  }

  function boot() {
    try { record(); } catch (e) {}
    try { injectStyle(); } catch (e) {}
    try { mountAuto(); } catch (e) {}
  }

  var API = {
    record: record,
    stats: stats,
    computeStats: computeStats,
    badgeHTML: badgeHTML,
    dateKey: dateKey,
    shiftKey: shiftKey,
    boot: boot
  };

  if (typeof module !== "undefined" && module.exports) module.exports = API;
  if (root) root.SajuStreak = API;

  /* 브라우저에서 로드 즉시 기록·마운트. Node(require) 환경에서는 자동 실행하지 않는다. */
  if (typeof document !== "undefined") {
    if (document.readyState === "loading" && document.addEventListener) {
      document.addEventListener("DOMContentLoaded", boot);
    } else {
      boot();
    }
  }
})(typeof window !== "undefined" ? window : globalThis);
