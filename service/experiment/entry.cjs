"use strict";

/*
 * SajuRoot 첫 유입 실험 · 브라우저 번들 진입점 (wayfinder #14, 무료 차트 전체 자산판)
 * -----------------------------------------------------------------------------------
 * 오너 지시: "무료이더라도 많은 정보와 연관 읽기가 모두 작동하게. 사용자별 권한
 * 제어는 전 기능 검증 완료 후로 미룬다."
 *
 * 번들에 올리는 것:
 *   1. computeChart        (service/engine/src/engine.cjs · 공망·십신 포함)
 *   2. getLuckPillars      (manseryeok · 대운 10구간)
 *   3. STEMS               (stems.json · careerDirections·dangers까지 전 필드)
 *   4. relations.json      (dayStemVsElements / dayStemVsStems / ansimPatterns / roleVocabulary)
 *   5. dynamics.json       (heavenlyStemCombos / comboRatioRules / branchDynamics)
 *   6. regions.json        (pillarRoles / noHourNote)
 *   7. slots.json          (B 갈래 트리 슬림 · globalThis.SAJU_SLOTS · wayfinder slot-system-design §4)
 *   8. view.*              (원국 판정 순수 함수 · smoke.cjs가 직접 검증)
 *
 * 메타(method·panjeong 등 연구 서술)는 화면에 쓰지 않아 뺀다. sources와 unverified
 * 깃발은 섹션별 근거 표기와 "비검증 근거 포함" 고지에 필요해 남긴다.
 *
 *   npm run build   (= esbuild entry.cjs --bundle --format=iife --outfile=js/bundle.js)
 */

const { computeChart } = require("../engine/src/engine.cjs");
const { getLuckPillars } = require("manseryeok");

const STEMS_SOURCE = require("../content/stems.json").stems;
const RELATIONS = require("../content/relations.json");
const DYNAMICS = require("../content/dynamics.json");
const REGIONS_SOURCE = require("../content/regions.json");
const SLOTS_SOURCE = require("../content/slots.json");

const KEEP_FIELDS = [
  "stemHanja",
  "stemHangul",
  "element",
  "yinyang",
  "catchphrase",
  "nature",
  "metaphor",
  "coreTraits",
  "growthNeeds",
  "careerDirections",
  "dangers",
  "unverified",
  "unverifiedSourceIds",
  "sources",
];

const STEMS = STEMS_SOURCE.map((stem) => {
  const slim = {};
  for (const field of KEEP_FIELDS) slim[field] = stem[field];
  return slim;
});

/** 오소리(柱) 오행 한국어 ↔ 한자. 뷰 레이어 계산을 줄이기 위해 번들에서 제공. */
const ELEMENT_HANJA = { 목: "木", 화: "火", 토: "土", 금: "金", 수: "水" };
const ELEMENT_KOR = { "木": "목", "火": "화", "土": "토", "金": "금", "水": "수" };
const ELEMENT_ORDER = ["木", "火", "土", "金", "水"];

/** 한글 천간·지지 → 오행(한국어). 대운 구간의 천간·지지 오행 판정에 쓴다(manseryeok 반환값은 한글 간지). */
const STEM_KOR_ELEMENT = { 갑: "목", 을: "목", 병: "화", 정: "화", 무: "토", 기: "토", 경: "금", 신: "금", 임: "수", 계: "수" };
const BRANCH_KOR_ELEMENT = { 자: "수", 축: "토", 인: "목", 묘: "목", 진: "토", 사: "화", 오: "화", 미: "토", 신: "금", 유: "금", 술: "토", 해: "수" };

// ---------------------------------------------------------------------------
// relations.json 슬림
// ---------------------------------------------------------------------------

/** 일간 × 오행 5종 × 3상태(tooMuch/tooLittle/balance). 10 × 5 구조를 통째로 사용. */
const ELEMENT_VS_DAY = RELATIONS.dayStemVsElements;
/** 일간 × 천간 10종 관계(100쌍). */
const DAY_VS_STEMS = RELATIONS.dayStemVsStems;
/** 안심법 24조. 매칭과 렌더에 쓰는 필드만 남긴다. */
const ANSIM_PATTERNS = RELATIONS.ansimPatterns.map((p) => ({
  id: p.id,
  condition: p.condition,
  mind: p.mind,
  interpretation: p.interpretation,
  unverified: p.unverified === true,
  unverifiedSourceIds: p.unverifiedSourceIds || [],
  sources: p.sources || [],
}));
/** 오행 역할 어휘(비동·식상·재성·관성·인성) 범례용. */
const ROLE_VOCAB = RELATIONS.meta.roleVocabulary;
/** 일반인용 역할 라벨. 화면 표기는 "재물·배우자의 기운(전통 용어: 재성)" 형식으로 조립한다. */
const ROLE_DISPLAY = {
  "비동": "나와 같은 성질의 기운",
  "식상": "표현과 결실의 기운",
  "재성": "재물·배우자의 기운",
  "관성": "직장과 질서·명예의 기운",
  "인성": "공부와 기억·어머니의 기운",
};
/** 화면 용어집(S12-②). 뜻은 오너 지정 문구 + roleVocabulary 전문 문장. */
const GLOSSARY = [
  { term: "일간", meaning: "나를 나타내는 위 글자" },
  { term: "천간", meaning: "위 글자(시간·목표)" },
  { term: "지지", meaning: "아래 글자(공간·무대)" },
  { term: "원국", meaning: "태어난 순간의 여덟 글자" },
  { term: "합", meaning: "두 글자가 묶여 성질이 바뀌는 변화" },
  { term: "충", meaning: "방향이 정면으로 부딪히는 변화" },
  { term: "대운", meaning: "10년 단위 흐름" },
  { term: "진태양시", meaning: "햇양 위치 기준 실제 시각" },
  { term: "공망", meaning: "비어 있는 글자 자리" },
  { term: "비동", meaning: ROLE_VOCAB["비동"] },
  { term: "식상", meaning: ROLE_VOCAB["식상"] },
  { term: "재성", meaning: ROLE_VOCAB["재성"] },
  { term: "관성", meaning: ROLE_VOCAB["관성"] },
  { term: "인성", meaning: ROLE_VOCAB["인성"] },
  { term: "삼합·반합", meaning: "세 글자가 모여(두 글자면 반) 한 오행으로 힘이 모이는 변화" },
  { term: "공협", meaning: "중심 글자가 없어 그 글자를 끌어오려는 대기 상태" },
];

// ---------------------------------------------------------------------------
// dynamics.json 슬림
// ---------------------------------------------------------------------------

const STEM_COMBOS = DYNAMICS.heavenlyStemCombos.map((c) => ({
  pairing: c.pairing,
  stems: c.stems.slice(),
  resultElement: c.resultElement,
  nature: c.nature,
  transformationRule: c.transformationRule,
  pull: {
    core: c.pullPrinciple.core,
    rootRule: c.pullPrinciple.rootRule,
    weakPull: c.pullPrinciple.weakPull,
    unverified: c.pullPrinciple.unverified === true,
    unverifiedSourceIds: c.pullPrinciple.unverifiedSourceIds || [],
  },
  releaseRules: c.releaseRules.slice(),
  sources: c.sources.slice(),
}));

const COMBO_RATIO_RULES = DYNAMICS.comboRatioRules.map((r) => ({
  id: r.id,
  rule: r.rule,
  detail: r.detail,
  sources: r.sources.slice(),
}));

const BD_SOURCE = DYNAMICS.branchDynamics;
const BRANCH_DYN = {
  general: {
    stemChungNote: BD_SOURCE.general.stemChungNote,
    chungMeaning: BD_SOURCE.general.chungMeaning,
    triggerRule: BD_SOURCE.general.triggerRule,
    sources: BD_SOURCE.general.sources.slice(),
  },
  chungs: BD_SOURCE.chungs.map((c) => ({
    group: c.group,
    members: c.group.split(""),
    label: c.label,
    meaning: c.meaning,
    unverified: c.unverified === true,
    unverifiedSourceIds: c.unverifiedSourceIds || [],
    sources: c.sources.slice(),
  })),
  sanhabs: BD_SOURCE.sanhabs.map((s) => ({
    element: s.element,
    members: s.members.slice(),
    core: s.core,
    note: s.note,
    sources: s.sources.slice(),
  })),
  banghabs: BD_SOURCE.banghabs.map((b) => ({
    direction: b.direction,
    season: b.season,
    element: b.element,
    members: b.members.slice(),
    core: b.core,
    sources: b.sources.slice(),
  })),
  yukhabs: {
    rule: BD_SOURCE.yukhabs.rule,
    excluded: BD_SOURCE.yukhabs.excluded.slice(),
    unverified: BD_SOURCE.yukhabs.unverified === true,
    unverifiedSourceIds: BD_SOURCE.yukhabs.unverifiedSourceIds || [],
    sources: BD_SOURCE.yukhabs.sources.slice(),
    /** rule 문장이 명시하는 실사용 쌍: 寅亥는 나무, 辰酉는 쇠. */
    pairs: [
      { a: "寅", b: "亥", element: "木" },
      { a: "辰", b: "酉", element: "金" },
    ],
  },
};

// ---------------------------------------------------------------------------
// regions.json 슬림
// ---------------------------------------------------------------------------

const PILLAR_ROLES = REGIONS_SOURCE.pillarRoles.map((r) => ({
  pillar: r.pillar,
  years: r.years,
  lifeStage: r.lifeStage,
  domain: r.domain,
  area: r.area,
  personType: r.personType,
  detail: r.detail,
  sources: r.sources.slice(),
}));
const NO_HOUR_NOTE = {
  rule: REGIONS_SOURCE.noHourNote.rule,
  sources: REGIONS_SOURCE.noHourNote.sources.slice(),
};

// ---------------------------------------------------------------------------
// slots.json 슬림 (슬롯 리딩 엔진 · B 갈래 트리만)
// ---------------------------------------------------------------------------

/** 엔진이 쓰는 것만 번들에 올린다: 선택 규칙 우선순위 + 일간별 B 갈래(단계·조건·
 *  슬롯·진단·처방·근거). C(운 갈래)는 이번 단계 미구현, D(출력 안 함)는 문장으로
 *  내보내지 않는다(0-6 안전)는 설계라 번들 자체에서 뺀다. */
const SELECTION_ORDER_SOURCE = SLOTS_SOURCE.rules.selection.items.find(
  (item) => item && item.rule === "우선순위(기본값)"
);
const SAJU_SLOTS = {
  version: SLOTS_SOURCE.meta.version,
  source: SLOTS_SOURCE.meta.source,
  selectionOrder: SELECTION_ORDER_SOURCE ? SELECTION_ORDER_SOURCE.order.slice() : [],
  stems: {},
};
Object.keys(SLOTS_SOURCE.stems).forEach((hanja) => {
  const data = SLOTS_SOURCE.stems[hanja];
  SAJU_SLOTS.stems[hanja] = {
    name: data.name,
    B: (data.B || []).map((b) => ({
      stage: b.stage,
      stageName: b.stageName,
      code: b.code,
      condition: b.condition,
      slots: b.slots.slice(),
      diagnosis: b.diagnosis,
      prescription: b.prescription,
      source: b.source.slice(),
    })),
  };
});
globalThis.SAJU_SLOTS = SAJU_SLOTS;

// ---------------------------------------------------------------------------
// 뷰 계산 순수 함수 (app.js 렌더 입력 · smoke.cjs 검증 대상)
// ---------------------------------------------------------------------------

/** 오행 상태 규칙: 여덟(또는 여섯) 글자 중 3개 이상이면 과다, 0개면 과소, 나머지는 조화.
 *  8글자를 5오행에 나눈 균등 몫(1.6)의 약 2배를 과다 기준으로 삼는 단순 판정이다. */
const EXCESS_MIN = 3;
function elementStatus(count) {
  if (count >= EXCESS_MIN) return "tooMuch";
  if (count === 0) return "tooLittle";
  return "balance";
}

/** 8글자(시각 미상 6글자) 오행 집계. 키는 한국어 오행명(목화토금수). */
function elementCounts(chart) {
  const counts = {};
  for (const k of ["year", "month", "day", "hour"]) {
    const p = chart.pillars[k];
    if (!p) continue;
    counts[p.stem.element] = (counts[p.stem.element] || 0) + 1;
    counts[p.branch.element] = (counts[p.branch.element] || 0) + 1;
  }
  return counts;
}

/** 일간 대비 오행 5종 상태 판정 + dayStemVsElements 문장 선택. */
function elementStates(chart) {
  const counts = elementCounts(chart);
  const table = ELEMENT_VS_DAY[chart.dayMaster.hanja];
  const out = [];
  for (const hanja of ELEMENT_ORDER) {
    const kor = ELEMENT_KOR[hanja];
    const count = counts[kor] || 0;
    const status = elementStatus(count);
    const entry = table[hanja];
    out.push({
      element: kor,
      hanja: hanja,
      count: count,
      status: status,
      role: entry.role,
      roleText: ROLE_VOCAB[entry.role] || "",
      text: entry[status],
      isDayMaster: entry.role === "비동",
      unverified: entry.unverified === true,
      unverifiedSourceIds: entry.unverifiedSourceIds || [],
      sources: entry.sources.slice(),
    });
  }
  return out;
}

/** 년·월·일·시 천간 나열(시각 미상 3개). */
function stemList(chart) {
  const out = [];
  for (const k of ["year", "month", "day", "hour"]) {
    const p = chart.pillars[k];
    if (p) out.push(p.stem.hanja);
  }
  return out;
}

/** 원국 천간합 감지. CR01(원국 1:1만 합)·CR02(2:1 미성립) 비율 규칙을 그대로 적용한다. */
function stemCombos(chart) {
  const stems = stemList(chart);
  const dm = chart.dayMaster.hanja;
  const count = {};
  for (const s of stems) count[s] = (count[s] || 0) + 1;
  const out = [];
  for (const combo of STEM_COMBOS) {
    const a = combo.stems[0];
    const b = combo.stems[1];
    const ca = count[a] || 0;
    const cb = count[b] || 0;
    if (ca === 0 || cb === 0) continue;
    const formed = ca === 1 && cb === 1;
    out.push({
      status: formed ? "formed" : "blocked",
      combo: combo,
      ratio: ca + ":" + cb,
      involvesDayMaster: a === dm || b === dm,
    });
  }
  return out;
}

/** 원국 지지 변화 감지: 충(한 그룹의 네 글자 중 셋 이상) · 삼합/반합/공협 · 방합 · 육합. */
function branchDynamics(chart) {
  const branches = [];
  for (const k of ["year", "month", "day", "hour"]) {
    const p = chart.pillars[k];
    if (p) branches.push(p.branch.hanja);
  }
  const has = (b) => branches.indexOf(b) > -1;
  const out = [];

  for (const ch of BRANCH_DYN.chungs) {
    const present = ch.members.filter(has);
    if (present.length >= 3) {
      out.push({
        kind: "chung",
        label: ch.label + "(" + ch.group + ")",
        present: present.slice(),
        text: ch.meaning,
        unverified: ch.unverified,
        unverifiedSourceIds: ch.unverifiedSourceIds.slice(),
        sources: ch.sources.slice(),
      });
    }
  }

  for (const sh of BRANCH_DYN.sanhabs) {
    const present = sh.members.filter(has);
    if (present.length === 3) {
      out.push({
        kind: "sanhap",
        label: sh.element + " 삼합",
        present: present.slice(),
        text: "왕지 " + sh.core + "를 포함한 삼합이 성립했다. " + sh.note,
        unverified: false,
        unverifiedSourceIds: [],
        sources: sh.sources.slice(),
      });
    } else if (present.length === 2) {
      const withCore = present.indexOf(sh.core) > -1;
      out.push({
        kind: withCore ? "banhap" : "gonghyeop",
        label: withCore ? sh.element + " 반합" : sh.element + " 공협",
        present: present.slice(),
        text: withCore
          ? "왕지 " + sh.core + "를 포함한 반합이다. " + sh.note
          : "왕지 " + sh.core + "가 없어 왕지를 끌어오려는 공협 상태로 본다.",
        unverified: false,
        unverifiedSourceIds: [],
        sources: sh.sources.slice(),
      });
    }
  }

  for (const bh of BRANCH_DYN.banghabs) {
    const present = bh.members.filter(has);
    if (present.length === 3) {
      out.push({
        kind: "banghap",
        label: bh.element + " 방합(" + bh.direction + ")",
        present: present.slice(),
        text: bh.season + " 방향의 세 지지가 모여 " + bh.element + " 방합이 성립했다.",
        unverified: false,
        unverifiedSourceIds: [],
        sources: bh.sources.slice(),
      });
    }
  }

  for (const pair of BRANCH_DYN.yukhabs.pairs) {
    if (has(pair.a) && has(pair.b)) {
      out.push({
        kind: "yukhap",
        label: pair.element + " 육합",
        present: [pair.a, pair.b],
        text: BRANCH_DYN.yukhabs.rule,
        unverified: BRANCH_DYN.yukhabs.unverified,
        unverifiedSourceIds: BRANCH_DYN.yukhabs.unverifiedSourceIds.slice(),
        sources: BRANCH_DYN.yukhabs.sources.slice(),
      });
    }
  }
  return out;
}

/*
 * 안심법 매칭 규칙 (정확 일치 전용 · 모호 매칭 금지)
 * ------------------------------------------------
 * 이 명조 안에서 구조로 확정되는 조건만 적용한다.
 *   - 일간 앵커 조건(AP01~02, 04~12): 일간과 나머지 기둥 천간(년·월·시)의 유무로
 *     판정한다. AP04(비견 공존)는 다른 기둥 천간 중 일간과 같은 글자가 있는지로 확정.
 *   - 합 성립 조건(AP03, 19~21): stemCombos의 1:1 성립 결과를 재사용한다.
 *     AP03만 일간이 합에 묶인 경우로 한정한다.
 *   - 부재 조건(AP05, 07, 09): 나머지 천간(05, 07) 또는 8글자 전체(09 관=木)에서
 *     개수 0으로 확정한다.
 * 제외 조건(매칭하지 않음):
 *   - AP13~16: 두 사람과 성별이 필요한 궁합 조건이라 단독 명조에 적용할 수 없다.
 *   - AP17~18, 22~23: 일간 앵커가 없는 짝이나 운 국면 조건이라 원국 단독으로 확정할 수 없다.
 *   - AP24: 성별과 "약한 제방" 강도 판정이 필요해 확정할 수 없다.
 */
function matchAnsim(chart) {
  const dm = chart.dayMaster.hanja;
  const others = [];
  for (const k of ["year", "month", "hour"]) {
    const p = chart.pillars[k];
    if (p) others.push(p.stem.hanja);
  }
  const hasS = (h) => others.indexOf(h) > -1;
  const formedPairs = stemCombos(chart).filter((c) => c.status === "formed");
  const counts = elementCounts(chart);
  const byId = {
    AP01: dm === "丁" && hasS("戊"),
    AP02: dm === "丁" && hasS("己"),
    AP03: formedPairs.some((c) => c.involvesDayMaster),
    AP04: hasS(dm),
    AP05: dm === "辛" && !hasS("乙"),
    AP06: dm === "庚" && hasS("甲"),
    AP07: dm === "壬" && !hasS("戊"),
    AP08: dm === "癸" && hasS("己"),
    AP09: dm === "戊" && (counts["목"] || 0) === 0,
    AP10: dm === "己" && hasS("乙"),
    AP11: dm === "甲" && hasS("丙"),
    AP12: dm === "丙" && hasS("壬"),
    AP19: formedPairs.some((c) => c.combo.pairing === "丁壬"),
    AP20: formedPairs.some((c) => c.combo.pairing === "丙辛"),
    AP21: formedPairs.some((c) => c.combo.pairing === "戊癸"),
  };
  return ANSIM_PATTERNS.filter((p) => byId[p.id] === true);
}

/** 일간 × 나머지 천간(년·월·시) 관계 규칙. 일지 지지는 천간 관계가 아니므로 다루지 않는다. */
function stemRelations(chart) {
  const table = DAY_VS_STEMS[chart.dayMaster.hanja];
  const out = [];
  const positions = [["year", "년간"], ["month", "월간"], ["hour", "시간"]];
  for (const pair of positions) {
    const p = chart.pillars[pair[0]];
    if (!p) {
      out.push({ position: pair[1], excluded: true });
      continue;
    }
    const rel = table[p.stem.hanja];
    out.push({
      position: pair[1],
      excluded: false,
      hanja: p.stem.hanja,
      hangul: p.stem.hangul,
      image: rel.image,
      rule: rel.rule,
      sources: rel.sources.slice(),
    });
  }
  return out;
}

/** 대운 10구간. 성별 미선택이면 null(화면에서 안내 문구로 대체). */
function luckPillars(chart, gender) {
  if (gender !== "male" && gender !== "female") return null;
  const res = getLuckPillars({
    instantUTCms: Date.parse(chart.instantUTC),
    birthYear: Number(chart.input.dateISO.slice(0, 4)),
    monthPillar: {
      heavenlyStem: chart.monthPillar.stem.hangul,
      earthlyBranch: chart.monthPillar.branch.hangul,
    },
    sajuYearStemIndex: chart.yearPillar.stem.index,
    gender: gender,
    count: 10,
  });
  const rows = res.pillars.map((p) => ({
    fromAge: p.age,
    toAge: p.age + 9,
    korean: p.korean,
    stemElement: STEM_KOR_ELEMENT[p.pillar.heavenlyStem] || null,
    branchElement: BRANCH_KOR_ELEMENT[p.pillar.earthlyBranch] || null,
  }));
  const birthMs = Date.parse(chart.input.dateISO + "T00:00:00Z");
  const currentAge = Math.floor((Date.now() - birthMs) / 31556952000);
  let currentIndex = -1;
  for (let i = 0; i < rows.length; i++) {
    if (currentAge >= rows[i].fromAge && currentAge <= rows[i].toAge) {
      currentIndex = i;
      break;
    }
  }
  return {
    forward: res.forward,
    startAge: res.startAge,
    startText: res.startYears + "년 " + res.startMonths + "개월",
    monthPillar: chart.monthPillar.hanja,
    rows: rows,
    currentAge: currentAge,
    currentIndex: currentIndex,
  };
}

/** 두 명조 오행 보완: 내 부족(0개) 오행 중 상대가 가진 것. 태극성취 구조 적용(T08-001). */
function fillCheck(myCounts, partnerCounts) {
  const absent = [];
  const filled = [];
  for (const kor of ["목", "화", "토", "금", "수"]) {
    if ((myCounts[kor] || 0) === 0) {
      absent.push(kor);
      if ((partnerCounts[kor] || 0) > 0) filled.push(kor);
    }
  }
  return { absent: absent, filled: filled };
}

/** 두 일간이 천간합 쌍인지 확인하고 해당 조합을 돌려준다. */
function dayMasterCombo(myHanja, partnerHanja) {
  for (const combo of STEM_COMBOS) {
    const a = combo.stems[0];
    const b = combo.stems[1];
    if ((a === myHanja && b === partnerHanja) || (a === partnerHanja && b === myHanja)) {
      return combo;
    }
  }
  return null;
}

globalThis.SajuRoot = {
  version: "0.3.1",
  computeChart: computeChart,
  getLuckPillars: getLuckPillars,
  STEMS: STEMS,
  ELEMENT_HANJA: ELEMENT_HANJA,
  ELEMENT_KOR: ELEMENT_KOR,
  ELEMENT_ORDER: ELEMENT_ORDER,
  STEM_KOR_ELEMENT: STEM_KOR_ELEMENT,
  BRANCH_KOR_ELEMENT: BRANCH_KOR_ELEMENT,
  view: {
    EXCESS_MIN: EXCESS_MIN,
    elementStatus: elementStatus,
    elementCounts: elementCounts,
    elementStates: elementStates,
    stemCombos: stemCombos,
    branchDynamics: branchDynamics,
    matchAnsim: matchAnsim,
    stemRelations: stemRelations,
    luckPillars: luckPillars,
    fillCheck: fillCheck,
    dayMasterCombo: dayMasterCombo,
    STEM_COMBOS: STEM_COMBOS,
    COMBO_RATIO_RULES: COMBO_RATIO_RULES,
    BRANCH_DYN: BRANCH_DYN,
    PILLAR_ROLES: PILLAR_ROLES,
    NO_HOUR_NOTE: NO_HOUR_NOTE,
    ANSIM_PATTERNS: ANSIM_PATTERNS,
    ROLE_VOCAB: ROLE_VOCAB,
    ROLE_DISPLAY: ROLE_DISPLAY,
    GLOSSARY: GLOSSARY,
    DAY_VS_STEMS: DAY_VS_STEMS,
    ELEMENT_VS_DAY: ELEMENT_VS_DAY,
  },
};
