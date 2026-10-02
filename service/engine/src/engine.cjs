/**
 * SAJU deterministic saju calculation engine.
 *
 * 계산은 전부 manseryeok(결정론 역법 라이브러리)로 수행한다. 이 엔진은
 * 입력 정규화, 진태양시·절기 중간값 노출(계산 투명성 UI 재료), 시주 부재
 * 모드, 명확한 오류 메시지를 담당한다. LLM이 계산에 개입하는 경로는 없다.
 *
 * manseryeok 함정 (gold test로 고정):
 *  - equationOfTimeMinutes()는 문자열 등 Date 아닌 인자에 NaN을 반환한다.
 *    Date 객체를 넣어야 한다.
 *  - 벽시시각 → KST 변환 책임은 호출자에게 있다. manseryeok은 벽시시각을
 *    한국표준시(UTC+9)로 해석하고 경도 보정(λ-135)×4만 적용하는 표준
 *    만세력 관례를 따른다. 본 엔진은 tzOffsetMinutes(출생지 민간시의 UTC
 *    오프셋, 서머타임 포함)를 받아 KST로 사전 변환한 뒤 라이브러리에 넘
 *    기므로, 전 세계 출생 입력을 올바르게 처리한다.
 */
'use strict';

const manseryeok = require('manseryeok');

const DEFAULT_LONGITUDE = 126.978; // 서울
const DEFAULT_TZ_OFFSET_MINUTES = 540;
const KST_OFFSET_MINUTES = 540; // 라이브러리 계약상 벽시시각 해석 기준 (UTC+9) // KST (UTC+9)

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_RE = /^(\d{2}):(\d{2})(?::\d{2})?$/;

function assertFiniteNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name}은(는) 유한한 숫자여야 합니다: ${value}`);
  }
}

function parseDateISO(dateISO) {
  const m = DATE_RE.exec(String(dateISO || ''));
  if (!m) {
    throw new TypeError(`dateISO는 YYYY-MM-DD 형식이어야 합니다: ${dateISO}`);
  }
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (!manseryeok.isValidSolarDate(year, month, day)) {
    throw new RangeError(`유효하지 않은 양력 날짜입니다: ${dateISO}`);
  }
  if (year < 1800 || year > 2300) {
    throw new RangeError(`연도는 1800~2300 범위만 지원합니다: ${year}`);
  }
  return { year, month, day };
}

function parseTimeISO(timeISO) {
  if (timeISO === null || timeISO === undefined || timeISO === '') {
    return null; // 시주 부재 모드
  }
  const m = TIME_RE.exec(String(timeISO));
  if (!m) {
    throw new TypeError(`timeISO는 HH:MM 형식이어야 합니다: ${timeISO}`);
  }
  const hour = Number(m[1]);
  const minute = Number(m[2]);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new RangeError(`시각 범위 오류: ${timeISO}`);
  }
  return { hour, minute };
}

/** 두 60갑자 간지(한자 2자)의 60주기 인덱스 (0=甲子 ~ 59=癸亥). */
function sexagenaryIndex(hanja) {
  const stem = hanja[0];
  const branch = hanja[1];
  const s = manseryeok.HEAVENLY_STEMS_HANJA.indexOf(stem);
  const b = manseryeok.EARTHLY_BRANCHES_HANJA.indexOf(branch);
  if (s < 0 || b < 0) return -1;
  // 간지의 60주기 인덱스: 짝 간지 쌍만 성립(癸亥=59). 수학적 검증식.
  let idx = 0;
  for (let i = 0; i < 60; i++) {
    if (i % 10 === s && i % 12 === b) { idx = i; break; }
  }
  return idx;
}

function pillarSummary(pillar, element, yinyang) {
  if (!pillar) return null;
  const hanja = manseryeok.HEAVENLY_STEMS_HANJA[manseryeok.HEAVENLY_STEMS.indexOf(pillar.heavenlyStem)] +
    manseryeok.EARTHLY_BRANCHES_HANJA[manseryeok.EARTHLY_BRANCHES.indexOf(pillar.earthlyBranch)];
  return {
    hangul: pillar.heavenlyStem + pillar.earthlyBranch,
    hanja,
    stem: {
      hangul: pillar.heavenlyStem,
      hanja: hanja[0],
      element: element.stem,
      yinyang: yinyang.stem,
    },
    branch: {
      hangul: pillar.earthlyBranch,
      hanja: hanja[1],
      element: element.branch,
      yinyang: yinyang.branch,
    },
  };
}

/** 출생 순간이 속한 절기와 다음 절기(전환일)를 찾는다. */
function resolveSolarTerm(instantMs, year) {
  const terms = [];
  for (const y of [year - 1, year, year + 1]) {
    for (let i = 0; i < 24; i++) {
      terms.push(manseryeok.getSolarTerm(y, i));
    }
  }
  terms.sort((a, b) => a.date.getTime() - b.date.getTime());
  let current = null;
  let next = null;
  for (let i = 0; i < terms.length; i++) {
    if (terms[i].date.getTime() <= instantMs) current = terms[i];
    else { next = terms[i]; break; }
  }
  return { current, next };
}

/**
 * 사주 원국 계산.
 *
 * @param {object} input
 * @param {string} input.dateISO    생년월일 'YYYY-MM-DD' (양력)
 * @param {string|null} [input.timeISO] 출생시각 'HH:MM' (출생지 민간시). null이면 시주 부재 모드.
 * @param {number} [input.longitude=126.978] 출생지 경도 (-180~180)
 * @param {number} [input.tzOffsetMinutes=540] 민간시의 UTC 오프셋(분, 서머타임 적용분 포함)
 * @param {boolean} [input.applyEquationOfTime=true] 균시차 보정
 * @param {boolean} [input.applyHistoricalDst=true] 과거 한국 서머타임 보정
 * @returns {object} chart
 */
function computeChart(input) {
  if (input === null || typeof input !== 'object') {
    throw new TypeError('input 객체가 필요합니다.');
  }
  const { year, month, day } = parseDateISO(input.dateISO);
  const time = parseTimeISO(input.timeISO);
  const hourAbsent = time === null;
  const longitude = input.longitude === undefined ? DEFAULT_LONGITUDE : input.longitude;
  assertFiniteNumber(longitude, 'longitude');
  if (longitude < -180 || longitude > 180) {
    throw new RangeError(`longitude는 -180~180 범위여야 합니다: ${longitude}`);
  }
  const tzOffsetMinutes = input.tzOffsetMinutes === undefined ? DEFAULT_TZ_OFFSET_MINUTES : input.tzOffsetMinutes;
  assertFiniteNumber(tzOffsetMinutes, 'tzOffsetMinutes');
  const applyEquationOfTime = input.applyEquationOfTime === undefined ? true : Boolean(input.applyEquationOfTime);
  const applyHistoricalDst = input.applyHistoricalDst === undefined ? true : Boolean(input.applyHistoricalDst);

  // 민간시 → UTC 순간 → KST 벽시시각 (라이브러리 계약: KST 벽시시각 입력)
  const civilMinutes = hourAbsent ? 12 * 60 : time.hour * 60 + time.minute;
  const instantMs = Date.UTC(year, month - 1, day) + civilMinutes * 60000 - tzOffsetMinutes * 60000;
  const instant = new Date(instantMs);
  const kst = new Date(instantMs + KST_OFFSET_MINUTES * 60000);
  const hour = hourAbsent ? 12 : kst.getUTCHours();
  const minute = hourAbsent ? 0 : kst.getUTCMinutes();
  const kstWallMinutes = hour * 60 + minute;

  // 진태양시 (계산 투명성 재료): KST 벽시시각 기준 135도 자오선 대비 경도 보정 + 균시차
  const longitudeCorrectionMinutes = (longitude - 135) * 4;
  let equationOfTimeMinutes = 0;
  if (applyEquationOfTime) {
    const eot = manseryeok.equationOfTimeMinutes(instant);
    if (typeof eot !== 'number' || !Number.isFinite(eot)) {
      throw new Error('균시차 계산 실패: equationOfTimeMinutes에는 Date 객체를 전달해야 합니다.');
    }
    equationOfTimeMinutes = eot;
  }
  const trueSolarTimeMinutesRaw = kstWallMinutes + longitudeCorrectionMinutes + equationOfTimeMinutes;
  const trueSolarTimeMinutes = ((Math.round(trueSolarTimeMinutesRaw) % 1440) + 1440) % 1440;

  const result = manseryeok.calculateFourPillars({
    year: kst.getUTCFullYear(), month: kst.getUTCMonth() + 1, day: kst.getUTCDate(), hour, minute,
    trueSolarTime: { longitude, applyEquationOfTime, applyHistoricalDst },
  });

  const { current, next } = resolveSolarTerm(instantMs, kst.getUTCFullYear());

  return {
    input: {
      dateISO: input.dateISO,
      timeISO: hourAbsent ? null : `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`,
      longitude,
      tzOffsetMinutes,
      applyEquationOfTime,
      applyHistoricalDst,
      hourAbsent,
    },
    dayMaster: {
      hangul: result.day.heavenlyStem,
      hanja: result.dayHanja[0],
      element: result.dayElement.stem,
      yinyang: result.dayYinYang.stem,
    },
    pillars: {
      year: pillarSummary(result.year, result.yearElement, result.yearYinYang),
      month: pillarSummary(result.month, result.monthElement, result.monthYinYang),
      day: pillarSummary(result.day, result.dayElement, result.dayYinYang),
      hour: hourAbsent ? null : pillarSummary(result.hour, result.hourElement, result.hourYinYang),
    },
    fourPillarsHanja: hourAbsent
      ? `${result.yearHanja} ${result.monthHanja} ${result.dayHanja}`
      : `${result.yearHanja} ${result.monthHanja} ${result.dayHanja} ${result.hourHanja}`,
    tenGods: hourAbsent ? null : result.tenGods,
    voidBranches: result.voidBranches,
    transparency: {
      civilMinutes,
      kstWallMinutes,
      longitudeCorrectionMinutes: Number(longitudeCorrectionMinutes.toFixed(4)),
      equationOfTimeMinutes: Number(equationOfTimeMinutes.toFixed(4)),
      trueSolarTimeMinutes,
      solarTerm: current ? { name: current.name, hanja: current.hanja, instantISO: current.date.toISOString() } : null,
      nextSolarTerm: next ? { name: next.name, hanja: next.hanja, instantISO: next.date.toISOString() } : null,
      dayBoundary: 'midnight',
    },
  };
}

module.exports = {
  computeChart,
  sexagenaryIndex,
  DEFAULT_LONGITUDE,
  DEFAULT_TZ_OFFSET_MINUTES,
};
