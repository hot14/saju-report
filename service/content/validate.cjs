#!/usr/bin/env node
/**
 * SAJU(가칭) 해석 콘텐츠 검증 스크립트 — wayfinder 티켓 #12
 *
 * 검사 항목
 *  1. 필수 필드 존재 검사 (5개 파일 구조)
 *  2. 원문 인용 검사: 코퍼스 body와 생성 콘텐츠의 공백·개행 정규화 문자열을
 *     15자 창으로 대조해 연속 일치가 1건이라도 있으면 실패
 *  3. 용어 가드: 원전 배제 개념 용어가 콘텐츠에 등장하면 실패
 *  4. 근거 무결성: sources의 엔트리 id가 코퍼스에 존재하는지,
 *     미확인 엔트리 인용 개체에 unverified=true 표기가 있는지 검사
 *
 * 사용: node validate.cjs
 * 통과 출력: VALIDATION PASSED: N tables, 0 quotes >=15 chars, 0 banned terms
 */
const fs = require('fs');
const path = require('path');

const CONTENT_DIR = __dirname;
const ROOT = path.resolve(CONTENT_DIR, '..', '..');
const CORPUS_PATH = path.join(ROOT, 'source-namchon', 'namchon-corpus.json');

const fails = [];
const warn = [];
const fail = (m) => fails.push(m);

function loadJson(name) {
  try {
    return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, name), 'utf8'));
  } catch (e) {
    fail(`${name} 로드/파싱 실패: ${e.message}`);
    return null;
  }
}

const stems = loadJson('stems.json');
const relations = loadJson('relations.json');
const dynamics = loadJson('dynamics.json');
const regions = loadJson('regions.json');
const policy = loadJson('policy.json');

const norm = (s) => String(s == null ? '' : s).replace(/\s+/g, '');

// ---------- 1. 필수 필드 ----------
function needKeys(obj, keys, where) {
  if (!obj || typeof obj !== 'object') { fail(`${where}: 개체 없음`); return; }
  for (const k of keys) {
    if (obj[k] === undefined) fail(`${where}: 필수 필드 누락 "${k}"`);
  }
}
const TEN_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const FIVE_ELEMENTS = ['木', '火', '土', '金', '水'];

if (stems) {
  const arr = stems.stems;
  if (!Array.isArray(arr) || arr.length !== 10) fail(`stems.stems: 10개 필요, 현재 ${arr ? arr.length : '없음'}`);
  arr && arr.forEach((s, i) => {
    needKeys(s, ['stemHanja', 'stemHangul', 'element', 'yinyang', 'nature', 'metaphor', 'coreTraits', 'growthNeeds', 'careerDirections', 'dangers', 'sources'], `stems.stems[${i}](${s && s.stemHanja})`);
    if (s.dangers && (!s.dangers.excess || !s.dangers.deficit)) fail(`stems.stems[${i}]: dangers.excess/deficit 누락`);
    if (s.unverified === true && !Array.isArray(s.unverifiedSourceIds)) warn(`stems.stems[${i}]: unverified=true인데 unverifiedSourceIds 없음`);
  });
}
if (relations) {
  const e = relations.dayStemVsElements;
  const s2 = relations.dayStemVsStems;
  const ap = relations.ansimPatterns;
  if (!e) fail('relations.dayStemVsElements 없음');
  else {
    for (const st of TEN_STEMS) {
      if (!e[st]) { fail(`dayStemVsElements: ${st} 누락`); continue; }
      for (const el of FIVE_ELEMENTS) {
        const r = e[st][el];
        if (!r) { fail(`dayStemVsElements[${st}][${el}] 누락`); continue; }
        needKeys(r, ['role', 'tooMuch', 'tooLittle', 'balance', 'sources'], `dayStemVsElements[${st}][${el}]`);
      }
    }
  }
  if (!s2) fail('relations.dayStemVsStems 없음');
  else {
    let cnt = 0;
    for (const st of TEN_STEMS) {
      if (!s2[st]) { fail(`dayStemVsStems: ${st} 누락`); continue; }
      for (const ot of TEN_STEMS) {
        const r = s2[st][ot];
        if (!r) { fail(`dayStemVsStems[${st}][${ot}] 누락`); continue; }
        cnt++;
        needKeys(r, ['image', 'rule', 'sources'], `dayStemVsStems[${st}][${ot}]`);
      }
    }
    if (cnt !== 100) fail(`dayStemVsStems: 100관계 필요, 현재 ${cnt}`);
  }
  if (!Array.isArray(ap) || ap.length < 20) fail(`ansimPatterns: 최소 20패턴 필요, 현재 ${ap ? ap.length : '없음'}`);
  else ap.forEach((p, i) => needKeys(p, ['condition', 'mind', 'interpretation', 'sources'], `ansimPatterns[${i}]`));
}
if (dynamics) {
  const hc = dynamics.heavenlyStemCombos;
  if (!Array.isArray(hc) || hc.length !== 5) fail(`heavenlyStemCombos: 5쌍 필요, 현재 ${hc ? hc.length : '없음'}`);
  else {
    const expect = ['甲己', '乙庚', '丙辛', '丁壬', '戊癸'];
    hc.forEach((c, i) => {
      if (c.pairing !== expect[i]) fail(`heavenlyStemCombos[${i}]: pairing이 ${expect[i]}이어야 함(현재 ${c.pairing})`);
      needKeys(c, ['pairing', 'resultElement', 'nature', 'transformationRule', 'pullPrinciple', 'releaseRules', 'sources'], `heavenlyStemCombos[${i}]`);
      if (c.pullPrinciple && !c.pullPrinciple.rootRule) fail(`heavenlyStemCombos[${i}]: pullPrinciple.rootRule(뿌리 대원칙) 누락`);
    });
  }
  const cr = dynamics.comboRatioRules;
  if (!Array.isArray(cr) || cr.length < 5) fail(`comboRatioRules: 최소 5개 필요, 현재 ${cr ? cr.length : '없음'}`);
  const bd = dynamics.branchDynamics;
  if (!bd) fail('branchDynamics 없음');
  else {
    if (!Array.isArray(bd.chungs) || bd.chungs.length !== 3) fail(`branchDynamics.chungs: 3조 필요, 현재 ${bd.chungs ? bd.chungs.length : '없음'}`);
    if (!Array.isArray(bd.sanhabs) || bd.sanhabs.length !== 4) fail(`branchDynamics.sanhabs: 4조 필요, 현재 ${bd.sanhabs ? bd.sanhabs.length : '없음'}`);
    if (!Array.isArray(bd.banghabs) || bd.banghabs.length !== 4) fail(`branchDynamics.banghabs: 4조 필요, 현재 ${bd.banghabs ? bd.banghabs.length : '없음'}`);
    needKeys(bd, ['yukhabs', 'myojiRule', 'general'], 'branchDynamics');
  }
}
if (regions) {
  needKeys(regions, ['countryElements', 'oppositeSideRule', 'waterOverseasRule', 'pillarRoles'], 'regions');
  const ce = regions.countryElements;
  for (const c of ['日本', '中國', '美國']) {
    if (!ce || !ce[c]) fail(`countryElements: ${c} 누락`);
    else needKeys(ce[c], ['element', 'rule', 'sources'], `countryElements.${c}`);
  }
  if (!Array.isArray(regions.pillarRoles) || regions.pillarRoles.length !== 4) fail(`pillarRoles: 4개 필요, 현재 ${regions.pillarRoles ? regions.pillarRoles.length : '없음'}`);
  else regions.pillarRoles.forEach((p, i) => needKeys(p, ['pillar', 'years', 'domain', 'sources'], `pillarRoles[${i}]`));
}
if (policy) {
  needKeys(policy, ['dayBoundary', 'noHourMode', 'fateDisclaimer', 'unverifiedGuard'], 'policy');
  if (policy.dayBoundary && policy.dayBoundary.default !== 'midnight') fail('policy.dayBoundary.default는 midnight이어야 함');
  if (policy.dayBoundary && !policy.dayBoundary.note) fail('policy.dayBoundary.note 누락');
  if (policy.noHourMode) {
    if (!policy.noHourMode.rule) fail('policy.noHourMode.rule 누락');
    if (!policy.noHourMode.disclaimer) fail('policy.noHourMode.disclaimer 누락');
  }
}

// ---------- 용어 가드 + 15자 창 대조용 문자열 수집 ----------
const BANNED = ['지장간', '지장간', '십이운성', '왕상휴수사', '격국', '용신', '포태법', '원진', '귀문', '파해'];
const bannedHits = [];
const strings = [];
function collect(v, label) {
  if (typeof v === 'string') strings.push({ label, text: v });
  else if (Array.isArray(v)) v.forEach((x, i) => collect(x, `${label}[${i}]`));
  else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => collect(x, `${label}.${k}`));
}
const FILES = { 'stems.json': stems, 'relations.json': relations, 'dynamics.json': dynamics, 'regions.json': regions, 'policy.json': policy };
for (const [name, data] of Object.entries(FILES)) {
  if (data) collect(data, name);
}
for (const { label, text } of strings) {
  for (const t of BANNED) {
    if (text.includes(t)) bannedHits.push({ label, term: t });
  }
}

// ---------- 2. 원문 인용 검사 (15자 창) ----------
const QUOTE_LEN = 15;
let gramSet = null;
let gramOwner = null;
let corpusSize = 0;
try {
  const corpus = JSON.parse(fs.readFileSync(CORPUS_PATH, 'utf8'));
  corpusSize = corpus.length;
  gramSet = new Set();
  gramOwner = new Map();
  for (const e of corpus) {
    const b = norm(e.body);
    for (let i = 0; i + QUOTE_LEN <= b.length; i++) {
      const g = b.substr(i, QUOTE_LEN);
      if (!gramSet.has(g)) { gramSet.add(g); gramOwner.set(g, e.id); }
    }
  }
} catch (e) {
  fail(`코퍼스 로드 실패: ${e.message}`);
}
const quoteHits = [];
if (gramSet) {
  for (const { label, text } of strings) {
    const b = norm(text);
    for (let i = 0; i + QUOTE_LEN <= b.length; i++) {
      const g = b.substr(i, QUOTE_LEN);
      if (gramSet.has(g)) {
        quoteHits.push({ label, fragment: g, corpusEntry: gramOwner.get(g) });
        break; // 문자열당 1건만 보고
      }
    }
  }
}

// ---------- 4. 근거 무결성 ----------
let corpusById = null;
try {
  corpusById = new Map(JSON.parse(fs.readFileSync(CORPUS_PATH, 'utf8')).map((e) => [e.id, e]));
} catch (_) { /* 위에서 이미 실패 처리됨 */ }
const citedObjects = [];
function walkSources(v, label) {
  if (Array.isArray(v)) { v.forEach((x, i) => walkSources(x, `${label}[${i}]`)); return; }
  if (v && typeof v === 'object') {
    if (Array.isArray(v.sources)) citedObjects.push({ obj: v, label });
    Object.entries(v).forEach(([k, x]) => { if (k !== 'sources') walkSources(x, `${label}.${k}`); });
  }
}
for (const [name, data] of Object.entries(FILES)) if (data) walkSources(data, name);
let missingIds = 0;
for (const { obj, label } of citedObjects) {
  const unconfirmed = [];
  for (const id of obj.sources) {
    const e = corpusById && corpusById.get(id);
    if (!e) { fail(`${label}: 코퍼스에 없는 근거 id "${id}"`); missingIds++; continue; }
    if (e.source_status === '미확인') unconfirmed.push(id);
  }
  if (unconfirmed.length > 0 && obj.unverified !== true) {
    fail(`${label}: 미확인 근거 ${unconfirmed.join(',')} 인용인데 unverified=true 표기 없음`);
  }
  if (Array.isArray(obj.unverifiedSourceIds)) {
    for (const id of obj.unverifiedSourceIds) {
      const e = corpusById && corpusById.get(id);
      if (!e) fail(`${label}: unverifiedSourceIds의 "${id}"가 코퍼스에 없음`);
      else if (e.source_status !== '미확인') fail(`${label}: unverifiedSourceIds의 "${id}"는 미확인 엔트리가 아님`);
      else if (!obj.sources || !obj.sources.includes(id)) fail(`${label}: unverifiedSourceIds의 "${id}"가 sources에 없음`);
    }
  }
}

// ---------- 리포트 ----------
if (bannedHits.length > 0) {
  for (const h of bannedHits) fail(`용어 가드 위반: ${h.label}에서 "${h.term}" 발견`);
}
if (quoteHits.length > 0) {
  for (const q of quoteHits) fail(`원문 인용 위반(연속 ${QUOTE_LEN}자): ${q.label} — "${q.fragment}" (코퍼스 ${q.corpusEntry})`);
}

const tables = 10; // stems, dayStemVsElements, dayStemVsStems, ansimPatterns, heavenlyStemCombos, comboRatioRules, branchDynamics, countryElements, pillarRoles, policy

if (warn.length) for (const w of warn) console.log('WARN: ' + w);

if (fails.length > 0) {
  console.log(`VALIDATION FAILED: ${fails.length} problem(s)`);
  fails.forEach((f) => console.log('  - ' + f));
  process.exit(1);
}

console.log(`VALIDATION PASSED: ${tables} tables, 0 quotes >=${QUOTE_LEN} chars, 0 banned terms`);
console.log(`  corpus entries checked: ${corpusSize}, content strings: ${strings.length}, cited objects: ${citedObjects.length}`);
if (relations && Array.isArray(relations.ansimPatterns)) console.log(`  entries: stems ${stems.stems.length}, element-rules ${Object.keys(relations.dayStemVsElements).length * 5}, stem-rules ${Object.keys(relations.dayStemVsStems).length * 10}, ansim ${relations.ansimPatterns.length}, stem-combos ${dynamics.heavenlyStemCombos.length}, ratio-rules ${dynamics.comboRatioRules.length}, countries ${Object.keys(regions.countryElements).length}, pillars ${regions.pillarRoles.length}`);
