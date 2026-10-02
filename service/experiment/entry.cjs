"use strict";

/*
 * SajuRoot 첫 유입 실험 · 브라우저 번들 진입점 (wayfinder #14)
 * ----------------------------------------------------------
 * service/engine/src/engine.cjs의 computeChart와 service/content/stems.json의
 * 필수 필드만 골라 브라우저 전역 window.SajuRoot에 올린다.
 *
 *   esbuild entry.cjs --bundle --format=iife --outfile=js/bundle.js
 *
 * IIFE라 module.exports가 없으므로, Node에서도 require로 로드해 스모크
 * 테스트를 돌릴 수 있게 globalThis.SajuRoot에 명시적으로 할당한다.
 * (smoke.cjs가 같은 경로로 검증한다.)
 *
 * stems.json은 전체가 아니라 결과 카드 렌더에 쓰는 필드만 남긴다.
 * sources·unverifiedSourceIds 등 연구 메타데이터는 번들에서 뺀다.
 * 단 unverified 깃발은 policy.json의 unverifiedGuard 고지에 필요해 남긴다.
 */

const { computeChart } = require("../engine/src/engine.cjs");

const STEMS_SOURCE = require("../content/stems.json").stems;

const KEEP_FIELDS = [
  "stemHanja",
  "stemHangul",
  "element",
  "yinyang",
  "nature",
  "metaphor",
  "coreTraits",
  "growthNeeds",
  "unverified",
];

const STEMS = STEMS_SOURCE.map((stem) => {
  const slim = {};
  for (const field of KEEP_FIELDS) slim[field] = stem[field];
  return slim;
});

/** 오소리(柱) 한자 → 5도트용 오행 한자. 뷰 레이어 계산을 줄이기 위해 번들에서 제공. */
const ELEMENT_HANJA = { 목: "木", 화: "火", 토: "土", 금: "金", 수: "水" };
const ELEMENT_ORDER = ["木", "火", "土", "金", "水"];

globalThis.SajuRoot = {
  version: "0.1.0",
  computeChart,
  STEMS,
  ELEMENT_HANJA,
  ELEMENT_ORDER,
};
