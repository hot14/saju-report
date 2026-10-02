"use strict";

/*
 * 번들 스모크 테스트 (wayfinder #14)
 * ---------------------------------
 * IIFE로 빌드된 js/bundle.js가 Node에서도 require로 로드되는지,
 * globalThis.SajuRoot.computeChart가 실제로 계산하는지 1회 호출로 확인한다.
 * 엔진 원본(service/engine)의 같은 입력 결과와 한 글자도 다르면 실패다.
 *
 *   node smoke.cjs
 */

const path = require("path");

const bundlePath = path.join(__dirname, "js", "bundle.js");
require(bundlePath);

const CORE = globalThis.SajuRoot;
const fail = (message) => {
  console.error("SMOKE_FAIL: " + message);
  process.exit(1);
};

if (!CORE || typeof CORE.computeChart !== "function") fail("globalThis.SajuRoot.computeChart 없음");
if (!Array.isArray(CORE.STEMS) || CORE.STEMS.length !== 10) fail("STEMS 10개 아님: " + (CORE.STEMS || []).length);

const input = { dateISO: "1985-03-21", timeISO: "14:30" };
const fromBundle = CORE.computeChart(input);

// 엔진 원본과의 정합 확인 (번들이 계산 경로를 훼손하지 않았다는 근거)
const { computeChart } = require("../engine/src/engine.cjs");
const fromEngine = computeChart(input);

if (fromBundle.fourPillarsHanja !== fromEngine.fourPillarsHanja) {
  fail(`팔주 불일치: bundle=${fromBundle.fourPillarsHanja} engine=${fromEngine.fourPillarsHanja}`);
}
if (fromBundle.dayMaster.hanja !== fromEngine.dayMaster.hanja) fail("일간 불일치");
if (fromBundle.trueSolarTimeClock !== fromEngine.trueSolarTimeClock) fail("진태양시 불일치");

// 시각 미상 모드도 1회 (chart.html의 모름 체크 경로)
const noHour = CORE.computeChart({ dateISO: "1990-05-15", timeISO: null });
if (noHour.mode !== "noHour" || noHour.hourPillar !== null) fail("시각 미상 모드 이상");

const badge = CORE.STEMS.find((s) => s.stemHanja === fromBundle.dayMaster.hanja);
if (!badge || !badge.nature || !Array.isArray(badge.coreTraits)) fail("일간 물상 필드 누락");

console.log("SMOKE_OK");
console.log(`  bundle=${fromBundle.fourPillarsHanja} engine=${fromEngine.fourPillarsHanja}`);
console.log(`  dayMaster=${fromBundle.dayMaster.hangul}(${fromBundle.dayMaster.hanja}) 물상=${badge.nature}`);
console.log(`  진태양시=${fromBundle.trueSolarTimeClock} mode(noHour)=${noHour.mode}`);
