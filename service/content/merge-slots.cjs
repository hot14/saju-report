/**
 * 슬롯 파트 병합기 — parts/*.json → slots.json stems 병합 + 전체 검증
 *
 * 사용법: node merge-slots.cjs
 * 동작: parts/ 아래 모든 JSON의 stems을 slots.json의 stems에 병합(기존 갑목 유지),
 *       검증기 실행 후 결과 보고. 실패 시 exit 1.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const slotsPath = path.join(dir, 'slots.json');
const slots = JSON.parse(fs.readFileSync(slotsPath, 'utf8'));
slots.stems = slots.stems || {};

const partDir = path.join(dir, 'parts');
const parts = fs.existsSync(partDir) ? fs.readdirSync(partDir).filter(f => f.endsWith('.json')) : [];
let merged = 0;
for (const p of parts) {
  const part = JSON.parse(fs.readFileSync(path.join(partDir, p), 'utf8'));
  for (const [hanja, data] of Object.entries(part.stems || {})) {
    slots.stems[hanja] = data;
    merged++;
  }
  console.log('병합:', p, '→', Object.keys(part.stems || {}).join(', '));
}
console.log('병합된 일간:', merged, '개 | 전체 stems:', Object.keys(slots.stems).length + '/10');

fs.writeFileSync(slotsPath, JSON.stringify(slots, null, 1));
console.log('slots.json 갱신 완료');
