'use strict';
/*
 * topicSections 블록 생성기 (일회성 · slots.json 주입)
 * ------------------------------------------------
 * relations.json dayStemVsElements 문장을 주제 각도로 "선별·재배치"만 한다.
 * 새 해석 문장은 한 글자도 만들지 않는다(문장 = dayStemVsElements 부분문자열).
 *   돈   = 재성 기운 문장
 *   직업 = 식상·관성 기운 문장
 *   이성 = 관성·재성 기운 문장
 * 상태(tooMuch/tooLittle/balance) 문장은 대상 오행 원문 그대로(복수 역할은 원문 나열).
 * 근거는 사용한 dayStemVsElements 항목의 sources 합집합, 비검증 깃발도 승계.
 */
const fs = require('fs');
const path = require('path');

const relations = require('./relations.json');
const slotsPath = path.join(__dirname, 'slots.json');
const slots = JSON.parse(fs.readFileSync(slotsPath, 'utf8'));

if (slots.topicSections) { console.error('topicSections 이미 존재 — 중단'); process.exit(1); }

const DAY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const TOPIC_ROLES = {
  '돈': ['재성'],
  '직업': ['식상', '관성'],
  '이성': ['관성', '재성'],
};
const STATE_KEYS = ['tooMuch', 'tooLittle', 'balance'];

function elementForRole(table, role) {
  for (const [hanja, entry] of Object.entries(table)) {
    if (entry.role === role) return { hanja: hanja, entry: entry };
  }
  throw new Error('역할 오행 미발견: ' + role);
}

function joinSources(entries) {
  const out = [];
  for (const e of entries) {
    for (const s of e.sources || []) if (out.indexOf(s) === -1) out.push(s);
  }
  return out;
}

function joinUnverified(entries) {
  const ids = [];
  let flagged = false;
  for (const e of entries) {
    if (e.unverified === true) flagged = true;
    for (const s of e.unverifiedSourceIds || []) if (ids.indexOf(s) === -1) ids.push(s);
  }
  return { unverified: flagged, unverifiedSourceIds: ids };
}

const items = [];
for (const stem of DAY_STEMS) {
  const table = relations.dayStemVsElements[stem];
  if (!table) throw new Error('일간 표 미발견: ' + stem);
  for (const topic of Object.keys(TOPIC_ROLES)) {
    const roles = TOPIC_ROLES[topic];
    const picked = roles.map((role) => elementForRole(table, role));
    const states = {};
    for (const key of STATE_KEYS) {
      states[key] = picked.map((p) => p.entry[key]).join(' ');
    }
    const entries = picked.map((p) => p.entry);
    const uv = joinUnverified(entries);
    items.push({
      topic: topic,
      dayStem: stem,
      roles: roles.slice(),
      stateElements: picked.map((p) => p.hanja),
      states: states,
      sources: joinSources(entries),
      unverified: uv.unverified,
      unverifiedSourceIds: uv.unverifiedSourceIds,
    });
  }
}

if (items.length !== 30) throw new Error('30항목 아님: ' + items.length);
/* 원문 보장 검증: 모든 상태 문장은 dayStemVsElements 원문과 정확히 일등가(나열은 원문의 " + " 결합) */
for (const it of items) {
  const table = relations.dayStemVsElements[it.dayStem];
  const entries = it.roles.map((role) => elementForRole(table, role).entry);
  for (const key of STATE_KEYS) {
    const expected = entries.map((e) => e[key]).join(' ');
    if (it.states[key] !== expected) throw new Error('원문 불일치: ' + it.dayStem + '/' + it.topic + '/' + key);
  }
}

const block = {
  note: 'relations.json dayStemVsElements 문장의 주제별 선별·재배치. 돈=재성, 직업=식상·관성, 이성=관성·재성. 상태 문장은 원문 그대로이며 새 해석 문장은 없다. 상태 판정(과다/과소/조화)은 화면에서 대상 오행 개수 합계로 한다(3 이상 과다, 0 과소, 나머지 조화).',
  items: items,
};

/* 문자 수술 삽입: "stems" 키 앞에 주입(기존 1스페이스 들여쓰기 유지) +
 * 각 targetProfiles.sectionOrder의 "slot" 뒤에 "topics" 삽입 */
const raw = fs.readFileSync(slotsPath, 'utf8');
const anchor = raw.indexOf('"stems"');
if (anchor === -1) throw new Error('stems 키 미발견');
const indent = ' ';
const blockText = indent + '"topicSections": ' + JSON.stringify(block, null, 1).replace(/\n/g, '\n' + indent) + ',\n';
const SLOT_LINE = '"slot", ';
const slotCount = raw.split(SLOT_LINE).length - 1;
if (slotCount !== 3) throw new Error('sectionOrder slot 라인 3개 아님: ' + slotCount);
let next = raw.slice(0, anchor) + blockText + raw.slice(anchor);
next = next.split(SLOT_LINE).join(SLOT_LINE + '"topics", ');
fs.writeFileSync(slotsPath, next);

/* 재검증: 파싱 + 개수 */
const check = JSON.parse(fs.readFileSync(slotsPath, 'utf8'));
console.log('topicSections 삽입 완료:', check.topicSections.items.length, '항목');
console.log('샘플(甲/돈):', JSON.stringify(check.topicSections.items[0], null, 1));
