"use strict";

/*
 * streak.js 로직 유닛 (node streak.test.cjs)
 * -------------------------------------------
 * 필수 3케이스: 같은 날 재방문 · 연속 · 끊김
 * 경계 보너스: 월 넘김 연속 · 연 넘김 연속 · 이번 주(월요일 시작) 집계
 * 날짜·저장소는 주입식이라 서머타임·실행 시점과 무관하게 재현된다.
 */

const path = require("path");
const SajuStreak = require(path.join(__dirname, "js", "streak.js"));

let failed = 0;
function eq(a, b, label) {
  if (a !== b) {
    failed++;
    console.error("FAIL " + label + ": 기대(" + JSON.stringify(b) + ") 실측(" + JSON.stringify(a) + ")");
  } else {
    console.log("PASS " + label);
  }
}

/* 정오 고정 Date(서머타임 무관 단순 날짜 키 확인용) + 격리 스텁 저장소 */
const D = (y, m, d) => new Date(y, m - 1, d, 12, 0, 0);
const fakeStore = () => {
  let v = null;
  return { getItem: () => v, setItem: (k, x) => { v = String(x); } };
};

// 1) 같은 날 재방문: 아침·밤 두 번 기록해도 총 1회 · 연속 1
{
  const st = fakeStore();
  const s1 = SajuStreak.record(D(2026, 10, 10, 9), st);
  const s2 = SajuStreak.record(D(2026, 10, 10, 23), st);
  eq(s1.total, 1, "케이스1 같은 날 첫 기록 total=1");
  eq(s1.streak, 1, "케이스1 첫 기록 streak=1");
  eq(s2.total, 1, "케이스1 같은 날 재방문 total 중복 없음(=1)");
  eq(s2.streak, 1, "케이스1 같은 날 재방문 streak=1");
}

// 2) 연속: 어제 + 오늘 → 연속 2 · 총 2 · 이번 주 2(10/9 금 · 10/10 토, 주 시작 10/5 월)
{
  const st = fakeStore();
  SajuStreak.record(D(2026, 10, 9), st);
  const s = SajuStreak.record(D(2026, 10, 10), st);
  eq(s.total, 2, "케이스2 연속 total=2");
  eq(s.streak, 2, "케이스2 연속 streak=2");
  eq(s.week, 2, "케이스2 이번 주=2");
}

// 3) 끊김: 3일 공백(10/7 → 10/10) → 연속은 오늘부터 재시작 1 · 총 2
{
  const st = fakeStore();
  SajuStreak.record(D(2026, 10, 7), st);
  const s = SajuStreak.record(D(2026, 10, 10), st);
  eq(s.total, 2, "케이스3 끊김 total=2");
  eq(s.streak, 1, "케이스3 끊김 streak 재시작=1");
}

// 보너스 경계: 월 넘김 연속(10/31 토 → 11/1 일), 연 넘김 연속(2026/12/31 → 2027/1/1)
{
  const st1 = fakeStore();
  SajuStreak.record(D(2026, 10, 31), st1);
  const s1 = SajuStreak.record(D(2026, 11, 1), st1);
  eq(s1.streak, 2, "보너스 월 넘김 연속 streak=2");

  const st2 = fakeStore();
  SajuStreak.record(D(2026, 12, 31), st2);
  const s2 = SajuStreak.record(D(2027, 1, 1), st2);
  eq(s2.streak, 2, "보너스 연 넘김 연속 streak=2");
}

// 보너스: 어제까지만 방문(오늘 미방문) → 어제 앵커 연속 유지 + 배지 문장 형식
{
  const st = fakeStore();
  SajuStreak.record(D(2026, 10, 9), st);
  const s = SajuStreak.stats(D(2026, 10, 10), st);
  eq(s.streak, 1, "보너스 오늘 미방문 시 어제 앵커 streak=1");
  eq(s.today, false, "보너스 오늘 미방문 today=false");
  const badge = SajuStreak.badgeHTML(D(2026, 10, 10), st);
  if (badge.indexOf("연속 1일째") === -1 || badge.indexOf("총 1번") === -1) {
    failed++;
    console.error("FAIL 보너스 배지 문장: " + badge);
  } else {
    console.log("PASS 보너스 배지 문장 형식(연속 N일째 · 총 M번)");
  }
}

if (failed) {
  console.error("STREAK_TEST_FAIL (" + failed + "건)");
  process.exit(1);
}
console.log("STREAK_TEST_OK");
