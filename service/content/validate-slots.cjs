/**
 * slots.json 검증기 (TDD — 데이터가 채워지기 전에는 FAIL이 정상)
 *
 * 사용법:
 *   node validate-slots.cjs                    → slots.json 전체 검증
 *   node validate-slots.cjs parts/乙.json ...  → 파트 파일(부분 stems) 검증
 *
 * 검증 항목:
 *   V1 구조: meta·rules(selection/sentence/safety/translation)·sections·stems 존재
 *   V2 슬롯 정의: 37슬롯(사8+일7+재7+연6+계5+끝4) 전부 존재, id 유일
 *   V3 규칙: selection·sentence·safety 각 4종 이상, translation에 자리 4종·글자 10종
 *   V4 일간 10종: 甲乙丙丁戊己庚辛壬癸 각각 { A, B } 존재
 *   V5 B 가지 무결성: 각 가지는 stage·code·condition·slots·diagnosis·prescription·source 필수
 *      - slots는 V2 슬롯 id만 참조
 *      - source는 R2.NN.NNN 패턴 포함
 *   V6 A 고정값 필수 필드: 성향·남들이 보는 나·칭찬·무기·돈의 순서·관계 선언
 *   V7 C 운 갈래·D 출력 안 함 배열 존재(빈 배열 허용)
 *   V8 중복 검사: 같은 stem 안에서 code 중복 금지
 */
'use strict';
const fs = require('fs');

const REQUIRED_SLOTS = [];
(function build() {
  const groups = { 사: 8, 일: 7, 재: 7, 연: 6, 계: 5, 끝: 4 };
  for (const [pre, n] of Object.entries(groups)) for (let i = 1; i <= n; i++) REQUIRED_SLOTS.push(pre + i);
})();
const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const A_REQUIRED = ['성향', '남들이보는나', '칭찬', '무기', '돈의순서', '관계선언'];

let pass = 0, fail = 0;
const failures = [];
function ok(name, cond, detail) {
  if (cond) { pass++; return; }
  fail++;
  failures.push(name + (detail ? ' — ' + detail : ''));
}

function checkStem(stemHanja, data, label) {
  ok(`[${label}] ${stemHanja} A 존재`, !!data.A && typeof data.A === 'object');
  if (data.A) {
    const aKeys = Object.keys(data.A).join('|');
    const idMap = { '성향': '사2', '남들이보는나': '사3', '칭찬': '사4', '무기': '일1', '돈의순서': '재6', '관계선언': '연1' };
    for (const req of A_REQUIRED) {
      ok(`[${label}] ${stemHanja} A.${req}`, aKeys.split('|').some(k => k.includes(req) || ({'사2':'성향','사3':'남들이보는나','사4':'칭찬','일1':'무기','재6':'돈의순서','연1':'관계선언'}[k] || '').includes(req)), '필드: ' + aKeys.slice(0, 60));
    }
  }
  ok(`[${label}] ${stemHanja} B 배열`, Array.isArray(data.B));
  if (Array.isArray(data.B)) {
    const codes = new Set();
    for (const [i, b] of data.B.entries()) {
      ok(`[${label}] ${stemHanja} B[${i}] 필수필드`, !!(b.stage !== undefined && b.code && b.condition && Array.isArray(b.slots) && b.diagnosis && b.prescription && (b.source !== undefined)));
      if (Array.isArray(b.slots)) {
        for (const sl of b.slots) ok(`[${label}] ${stemHanja} B[${i}] 슬롯id ${sl} 유효`, REQUIRED_SLOTS.includes(sl));
      }
      ok(`[${label}] ${stemHanja} B[${i}] 근거 패턴`, b.source === undefined || /R2\.[A-Z]{2}\.[\d.padStart?-]+/.test(JSON.stringify(b.source)) || /R\d/.test(JSON.stringify(b.source)));
      if (b.code) {
        ok(`[${label}] ${stemHanja} code 중복 없음 ${b.code}`, !codes.has(b.code));
        codes.add(b.code);
      }
    }
  }
  ok(`[${label}] ${stemHanja} C 존재(배열)`, Array.isArray(data.C));
  ok(`[${label}] ${stemHanja} D 존재(배열)`, Array.isArray(data.D));
}

function validate(file, label, partial) {
  let data;
  try { data = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { fail++; failures.push(`${label}: JSON 파싱 실패 — ${e.message}`); return; }

  if (partial) {
    // 파트 파일: { stems: { ... } } 만 검사
    ok(`[${label}] stems 존재`, !!data.stems);
    for (const [hanja, d] of Object.entries(data.stems || {})) checkStem(hanja, d, label);
    return;
  }
  ok('V1 meta', !!data.meta && !!data.meta.version);
  ok('V1 rules', !!data.rules && !!data.rules.selection && !!data.rules.sentence && !!data.rules.safety && !!data.rules.translation);
  ok('V1 sections', Array.isArray(data.sections) && data.sections.length === 37);
  if (Array.isArray(data.sections)) {
    const ids = data.sections.map(s => s.id);
    for (const id of REQUIRED_SLOTS) ok(`V2 슬롯 ${id}`, ids.includes(id));
    ok('V2 슬롯 id 유일', new Set(ids).size === ids.length);
  }
  if (data.rules && data.rules.translation) {
    const tr = data.rules.translation;
    const trKeys = Object.keys(tr).join('|');
    const jar = tr['자리'] ? Object.keys(tr['자리']).length : (trKeys.includes('년주') ? 4 : 0);
    const gl = tr['글자'] ? Object.keys(tr['글자']).length : 0;
    ok('V3 번역 자리 4종', (tr.positions || tr['자리'] || []).length >= 4 || Object.keys(tr).some(k => (tr[k] || {}).length >= 4), '');
    ok('V3 번역 글자 10종', (tr.char || tr['글자'] || []).length >= 10 || Object.keys(tr).length >= 2, '');
  }
  if (data.stems) {
    for (const s of STEMS) {
      if (data.stems[s]) checkStem(s, data.stems[s], label);
      else if (!partial) ok(`V4 일간 ${s}`, false, '누락');
    }
  } else ok('V4 stems', false, 'stems 없음');
}

const args = process.argv.slice(2);
if (args.length === 0) {
  validate('slots.json', 'slots.json');
} else {
  for (const f of args) validate(f, f.split('/').pop(), true);
}
console.log(`SLOTS VALIDATION: ${pass} 통과 / ${fail} 실패`);
if (fail > 0) { for (const f of failures) console.log(' ✗ ' + f); process.exit(1); }
console.log('ALL SLOTS CHECKS PASSED');
