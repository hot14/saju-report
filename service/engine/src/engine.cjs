"use strict";

/**
 * SAJU(가칭) 결정론 사주 계산 엔진
 * ================================
 *
 * 천문·역법 계산은 전부 manseryeok(KASI 정본 데이터 기반 역법 라이브러리)이
 * 담당한다. 이 모듈은 (1) 입력 정규화·검증, (2) 시간대 해석(명시적 오프셋),
 * (3) 진태양시 환산 재료 수집, (4) 절기 경계 정보 조립만 하고, 어떤 간지도
 * 스스로 판정하지 않는다. LLM이 계산에 개입하는 경로는 없다(결정론 전용 계약).
 *
 * 시간대 계약 (중요)
 * ------------------
 * 벽시시각 해석은 tzOffsetMinutes 하나로 결정된다(기본 540 = KST+9).
 *
 *   instantUTCms = Date.UTC(벽시시각) - tzOffsetMinutes * 60000
 *
 * 서머타임 지역이면 "그 시각에 실제 유효한 오프셋"(예: 뉴욕 여름 -240)을
 * 호출자가 넣는다. 런타임 환경의 로컬 타임존은 절대 개입하지 않는다.
 *
 * 이렇게 구한 순간을 KST 표준시 필드(UTC+540)로 재표현해 라이브러리에 넘기되,
 * 라이브러리의 applyHistoricalDst는 반드시 false로 고정한다. 이걸 켜두면
 * 라이브러리가 한국 과거 서머타임(1987-88 등) 규칙으로 KST 필드를 재해석해
 * 엔진이 계산한 순간과 60분 어긋나는 이중 보정이 일어난다. 벽시시각 해석
 * 권한은 명시적 오프셋 계약에 따라 엔진에만 있다.
 *
 * 진태양시
 * --------
 * 진태양시 = 표준시 + (출생경도 - 135도) * 4분 + 균시차(EoT, ±16분 내외).
 * 균시차는 manseryeok의 equationOfTimeMinutes를 쓴다. 함정: 이 함수는
 * epoch 밀리초(또는 Date 객체)만 받는다. '초' 단위 숫자나 문자열을 넣으면
 * 예외 없이 NaN이 나온다. 엔진은 Date.getTime() 경유로 고정하고, 유한수
 * 검증을 이중으로 둔다. (test/golden.cjs §10 참고)
 *
 * 시각 미상 모드 (timeISO: null)
 * ------------------------------
 * hourPillar는 null로 반환하고, 연·월·일주는 "당일 정오 12:00" 가정으로
 * 계산한다. 정오는 진태양시 보정(최대 ±46분)을 적용해도 같은 날 안에
 * 머무는 유일한 안전 지점이다. 자정 가정은 서울 경도 기준 진태양시가 전날
 * 23시대가 되어 일주가 하루 밀릴 수 있다. 가정 사실은 반환값 assumptions에
 * 그대로 노출한다(계산 투명성 재료).
 */

const {
  calculateFourPillars,
  getSolarTerm,
  SOLAR_TERM_NAMES,
  SOLAR_TERM_NAMES_HANJA,
  equationOfTimeMinutes,
} = require("manseryeok");

/** 한국 표준 자오선 (동경 135도). manseryeok 보정 기준과 동일. */
const KST_STANDARD_MERIDIAN_DEG = 135;
/** KST(UTC+9) 오프셋(분). tzOffsetMinutes 미지정 시 기본 해석. */
const DEFAULT_TZ_OFFSET_MINUTES = 540;
/** 서울 기본 좌표 (출생지 미지정 서비스 기본값). */
const DEFAULT_LONGITUDE = 126.978;
const DEFAULT_LATITUDE = 37.5665;
/** 시각 미상 모드 일주 판정용 가정 시각 (당일 정오). */
const NOON_ASSUMPTION = { hour: 12, minute: 0 };
/** 절기 경계 위험 판정 창(분): 시각 있음 ±2시간, 미상 모드는 정오 가정 ±12시간. */
const RISK_WINDOW_KNOWN_MIN = 120;
const RISK_WINDOW_UNKNOWN_MIN = 720;

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_RE = /^(\d{2}):(\d{2})$/;

class EngineError extends Error {
  constructor(message) {
    super(message);
    this.name = "EngineError";
  }
}

// ---------------------------------------------------------------------------
// 천간·지지 정적 표 (라이브러리 공개 배열과 동일 순서. 직렬화 전용)
// ---------------------------------------------------------------------------

const STEMS_HANGUL = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const STEMS_HANJA = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES_HANGUL = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const BRANCHES_HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const STEM_ELEMENTS = ["목", "목", "화", "화", "토", "토", "금", "금", "수", "수"];
const BRANCH_ELEMENTS = ["수", "토", "목", "목", "토", "화", "화", "토", "금", "금", "토", "수"];

/** 두 한자 간지의 60주기 인덱스(0=甲子 ~ 59=癸亥). 유효하지 않으면 -1. */
function sexagenaryIndex(hanja) {
  const s = STEMS_HANJA.indexOf(hanja[0]);
  const b = BRANCHES_HANJA.indexOf(hanja[1]);
  if (s < 0 || b < 0) return -1;
  for (let i = 0; i < 60; i++) {
    if (i % 10 === s && i % 12 === b) return i;
  }
  return -1;
}

// ---------------------------------------------------------------------------
// 입력 정규화·검증
// ---------------------------------------------------------------------------

function parseDateISO(dateISO) {
  if (typeof dateISO !== "string" || !DATE_RE.test(dateISO)) {
    throw new EngineError(`dateISO는 'YYYY-MM-DD' 형식이어야 합니다: ${JSON.stringify(dateISO)}`);
  }
  const year = Number(dateISO.slice(0, 4));
  const month = Number(dateISO.slice(5, 7));
  const day = Number(dateISO.slice(8, 10));
  const probe = new Date(Date.UTC(year, month - 1, day));
  if (probe.getUTCFullYear() !== year || probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day) {
    throw new EngineError(`존재하지 않는 날짜입니다: ${dateISO}`);
  }
  if (year < 1800 || year > 2300) {
    throw new EngineError(`연도는 manseryeok 절입표 지원 범위 1800~2300이어야 합니다: ${year}`);
  }
  return { year, month, day };
}

function parseTimeISO(timeISO) {
  if (timeISO === null || timeISO === undefined || timeISO === "") return null;
  if (typeof timeISO !== "string" || !TIME_RE.test(timeISO)) {
    throw new EngineError(`timeISO는 'HH:MM' 형식 또는 null이어야 합니다: ${JSON.stringify(timeISO)}`);
  }
  const hour = Number(timeISO.slice(0, 2));
  const minute = Number(timeISO.slice(3, 5));
  if (hour > 23 || minute > 59) {
    throw new EngineError(`시·분 범위 오류(시 0-23, 분 0-59): ${timeISO}`);
  }
  return { hour, minute };
}

function requireFiniteNumber(value, name, min, max) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new EngineError(`${name}는 유한한 숫자여야 합니다: ${JSON.stringify(value)}`);
  }
  if (value < min || value > max) {
    throw new EngineError(`${name}는 ${min}~${max} 범위여야 합니다: ${value}`);
  }
  return value;
}

function normalizeInput(raw) {
  if (raw === null || typeof raw !== "object") {
    throw new EngineError("computeChart에는 입력 객체가 필요합니다.");
  }
  const date = parseDateISO(raw.dateISO);
  const time = parseTimeISO(raw.timeISO);
  const latitude = raw.latitude === undefined ? DEFAULT_LATITUDE : requireFiniteNumber(raw.latitude, "latitude", -90, 90);
  const longitude = raw.longitude === undefined ? DEFAULT_LONGITUDE : requireFiniteNumber(raw.longitude, "longitude", -180, 180);
  let tzOffsetMinutes = DEFAULT_TZ_OFFSET_MINUTES;
  if (raw.tzOffsetMinutes !== undefined && raw.tzOffsetMinutes !== null) {
    if (typeof raw.tzOffsetMinutes !== "number" || !Number.isInteger(raw.tzOffsetMinutes) || Math.abs(raw.tzOffsetMinutes) > 840) {
      throw new EngineError(`tzOffsetMinutes는 -840~840의 정수(분)여야 합니다: ${JSON.stringify(raw.tzOffsetMinutes)}`);
    }
    tzOffsetMinutes = raw.tzOffsetMinutes;
  }
  const dayBoundary = raw.dayBoundary === undefined ? "midnight" : raw.dayBoundary;
  if (!["midnight", "jasi", "splitJasi"].includes(dayBoundary)) {
    throw new EngineError(`dayBoundary는 'midnight'|'jasi'|'splitJasi' 중 하나여야 합니다: ${JSON.stringify(dayBoundary)}`);
  }
  const trueSolarTime = raw.trueSolarTime === undefined ? true : Boolean(raw.trueSolarTime);
  return {
    date,
    time,
    latitude,
    longitude,
    tzOffsetMinutes,
    dayBoundary,
    trueSolarTime,
  };
}

// ---------------------------------------------------------------------------
// 시간 해석: 벽시시각 → UTC 순간 → 지방 진태양시
// ---------------------------------------------------------------------------

function isoDateFromUTCms(ms) {
  return new Date(ms).toISOString().slice(0, 10);
}

function isoTimeFromUTCms(ms) {
  const d = new Date(ms);
  return `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`;
}

/** UTC ms → KST 표준시 필드. manseryeok 전달용 중간 표현(해석 권한은 엔진에 있음). */
function kstFieldsFromUTCms(ms) {
  const d = new Date(ms + DEFAULT_TZ_OFFSET_MINUTES * 60000);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
  };
}

/** 균시차(분). Date.getTime() 경유만 허용(문자열·초 단위 입력 → NaN 함정 차단). */
function equationOfTimeAt(instantUTCms) {
  const value = equationOfTimeMinutes(new Date(instantUTCms).getTime());
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new EngineError("균시차 계산 실패: equationOfTimeMinutes에 유효한 epoch ms가 전달되지 않았습니다.");
  }
  return value;
}

/** UTC ms → 'YYYY-MM-DDTHH:MM+09:00' (KST 라벨, 투명성 UI용). */
function kstIsoLabel(ms) {
  const f = kstFieldsFromUTCms(ms);
  const p = (n) => String(n).padStart(2, "0");
  return `${f.year}-${p(f.month)}-${p(f.day)}T${p(f.hour)}:${p(f.minute)}+09:00`;
}

// ---------------------------------------------------------------------------
// 절기 정보: 출생 순간을 감싸는 절기 쌍
// ---------------------------------------------------------------------------

function bracketSolarTerms(instantUTCms, calendarYear) {
  const terms = [];
  for (const y of [calendarYear - 1, calendarYear, calendarYear + 1]) {
    for (let i = 0; i < 24; i++) {
      const t = getSolarTerm(y, i);
      terms.push({ index: t.index, name: t.name, hanja: t.hanja, instantMs: t.date.getTime() });
    }
  }
  terms.sort((a, b) => a.instantMs - b.instantMs);
  let prev = null;
  let next = null;
  for (const t of terms) {
    if (t.instantMs <= instantUTCms && (prev === null || t.instantMs > prev.instantMs)) prev = t;
    if (t.instantMs > instantUTCms && (next === null || t.instantMs < next.instantMs)) next = t;
  }
  return { prev, next };
}

function solarTermInfoFor(instantUTCms, calendarYear, riskWindowMinutes) {
  const { prev, next } = bracketSolarTerms(instantUTCms, calendarYear);
  const toTerm = (t, dir) =>
    t && {
      name: t.name,
      hanja: t.hanja,
      index: t.index,
      /** 짝수 인덱스 = 절(節) = 월주 경계. 홀수 = 중(氣). */
      isJieol: t.index % 2 === 0,
      instantUTC: new Date(t.instantMs).toISOString(),
      kst: kstIsoLabel(t.instantMs),
      ...(dir === "next" ? { minutesUntil: Math.round((t.instantMs - instantUTCms) / 60000) }
                        : { minutesSince: Math.round((instantUTCms - t.instantMs) / 60000) }),
    };
  const minutesToNext = next ? Math.round((next.instantMs - instantUTCms) / 60000) : null;
  const nearBoundary = minutesToNext !== null && minutesToNext <= riskWindowMinutes;
  /** 다음 절입이 입춘이면 연주 경계도 임박. */
  const yearBoundaryRisk = next !== null && next.index === 2 && nearBoundary;
  return {
    /** 출생 순간이 속한 절기 (절입 직후). */
    current: toTerm(prev, "prev"),
    /** 다음 절입 = 전환일. */
    next: toTerm(next, "next"),
    nearSolarTermBoundary: nearBoundary,
    riskWindowMinutes,
    riskNote: nearBoundary
      ? `출생 순간이 '${next.name}'(${next.hanja}) 절입 ${minutesToNext}분 전입니다.` +
        (next.index % 2 === 0 ? " 절(節) 경계라 월주가 바뀔 수 있습니다." : " 중(氣)이므로 월주는 유지됩니다.") +
        (yearBoundaryRisk ? " 입춘 직전이라 연주도 바뀔 수 있습니다." : "")
      : null,
  };
}

// ---------------------------------------------------------------------------
// 주(柱) 직렬화
// ---------------------------------------------------------------------------

function pillarJSON(pillar) {
  if (!pillar) return null;
  const s = STEMS_HANGUL.indexOf(pillar.heavenlyStem);
  const b = BRANCHES_HANGUL.indexOf(pillar.earthlyBranch);
  return {
    hangul: `${pillar.heavenlyStem}${pillar.earthlyBranch}`,
    hanja: `${STEMS_HANJA[s]}${BRANCHES_HANJA[b]}`,
    stem: { hangul: pillar.heavenlyStem, hanja: STEMS_HANJA[s], index: s, element: STEM_ELEMENTS[s], yinYang: s % 2 === 0 ? "양" : "음" },
    branch: { hangul: pillar.earthlyBranch, hanja: BRANCHES_HANJA[b], index: b, element: BRANCH_ELEMENTS[b], yinYang: b % 2 === 0 ? "양" : "음" },
    element: { stem: STEM_ELEMENTS[s], branch: BRANCH_ELEMENTS[b] },
    yinYang: { stem: s % 2 === 0 ? "양" : "음", branch: b % 2 === 0 ? "양" : "음" },
  };
}

function round2(x) {
  return Math.round(x * 100) / 100;
}

// ---------------------------------------------------------------------------
// 진입점
// ---------------------------------------------------------------------------

/**
 * 사주 원판(四柱原盤)을 계산한다.
 *
 * @param {object} raw
 * @param {string} raw.dateISO    생년월일 'YYYY-MM-DD' (양력)
 * @param {string|null} [raw.timeISO]  출생시각 'HH:MM' (출생지 민간시). null이면 시주 부재 모드.
 * @param {number} [raw.latitude=37.5665]   위도 (십진 도수, 북위 양수)
 * @param {number} [raw.longitude=126.978]  경도 (십진 도수, 동경 양수 / 서경 음수)
 * @param {number} [raw.tzOffsetMinutes=540] 벽시시각 해석 오프셋(분). 서머타임 유효분 포함.
 * @param {'midnight'|'jasi'|'splitJasi'} [raw.dayBoundary='midnight'] 자시 일경계 관법
 * @param {boolean} [raw.trueSolarTime=true] 진태양시 보정(경도+균시차) 적용 여부
 * @returns {object} 계산 원판 + 중간값 전체 (README의 반환 스키마 참고)
 */
function computeChart(raw) {
  const input = normalizeInput(raw);
  const hasTime = input.time !== null;

  // 1) 벽시시각 → 절대 순간. (시각 미상이면 당일 정오 가정)
  const wallHour = hasTime ? input.time.hour : NOON_ASSUMPTION.hour;
  const wallMinute = hasTime ? input.time.minute : NOON_ASSUMPTION.minute;
  const wallMs = Date.UTC(input.date.year, input.date.month - 1, input.date.day, wallHour, wallMinute, 0);
  const instantUTCms = wallMs - input.tzOffsetMinutes * 60000;

  // 2) 라이브러리 전달용 KST 표준시 필드. applyHistoricalDst는 false 고정:
  //    해석은 이미 엔진의 명시적 오프셋으로 끝났으므로 라이브러리가 한국 과거
  //    서머타임으로 재해석하면 이중 보정된다.
  const kst = kstFieldsFromUTCms(instantUTCms);
  const trueSolarOptions = input.trueSolarTime
    ? { longitude: input.longitude, applyEquationOfTime: true, applyHistoricalDst: false }
    : { longitude: KST_STANDARD_MERIDIAN_DEG, applyEquationOfTime: false, applyHistoricalDst: false };

  // 3) 4주 계산: 전적으로 manseryeok(절입표 + 60갑자 + 시간 천간 규칙).
  const detail = calculateFourPillars({
    year: kst.year, month: kst.month, day: kst.day, hour: kst.hour, minute: kst.minute,
    trueSolarTime: trueSolarOptions,
    dayBoundary: input.dayBoundary,
  });

  // 4) 진태양시 환산 재료 (투명성 UI용).
  const longitudeMinutes = input.trueSolarTime ? (input.longitude - KST_STANDARD_MERIDIAN_DEG) * 4 : 0;
  const eotMinutes = input.trueSolarTime ? equationOfTimeAt(instantUTCms) : 0;
  const tzDeltaMinutes = input.trueSolarTime ? input.tzOffsetMinutes - KST_STANDARD_MERIDIAN_DEG * 4 : 0;
  // 입력 벽시시각 → 지방 진태양시까지의 총 보정(분).
  const totalCorrectionMinutes = longitudeMinutes + eotMinutes - tzDeltaMinutes;
  const apparentMs = instantUTCms + (input.longitude * 4 + eotMinutes) * 60000;
  // 진태양시 시각: '당일 0시 기준 경과 분'(0~1439) + 시계 표기 + 날짜 이동.
  const wallMinutesOfDay = wallHour * 60 + wallMinute;
  const trueSolarTimeMinutes = ((Math.round(wallMinutesOfDay + totalCorrectionMinutes) % 1440) + 1440) % 1440;
  const dayShift = Math.floor((wallMinutesOfDay + totalCorrectionMinutes) / 1440);

  // 5) 절기 정보.
  const solarTermInfo = solarTermInfoFor(
    instantUTCms,
    kst.year,
    hasTime ? RISK_WINDOW_KNOWN_MIN : RISK_WINDOW_UNKNOWN_MIN
  );

  // 6) 직렬화.
  const pillars = {
    year: pillarJSON(detail.year),
    month: pillarJSON(detail.month),
    day: pillarJSON(detail.day),
    hour: hasTime ? pillarJSON(detail.hour) : null,
  };

  return {
    input: {
      dateISO: raw.dateISO,
      timeISO: hasTime ? input.time.hour.toString().padStart(2, "0") + ":" + input.time.minute.toString().padStart(2, "0") : null,
      latitude: input.latitude,
      longitude: input.longitude,
      longitudeConvention: "eastPositive",
      tzOffsetMinutes: input.tzOffsetMinutes,
      dayBoundary: input.dayBoundary,
      trueSolarTime: input.trueSolarTime,
      calendar: "gregorian",
    },
    mode: hasTime ? "full" : "noHour",
    assumptions: hasTime
      ? []
      : [
          `출생시각 미상: 연·월·일주는 당일 ${NOON_ASSUMPTION.hour.toString().padStart(2, "0")}:${NOON_ASSUMPTION.minute.toString().padStart(2, "0")}(입력 시간대) 가정으로 계산했다. 정오는 진태양시 보정을 적용해도 같은 날 안에 머무는 안전 지점이다.`,
          "시주는 제공하지 않는다(hourPillar=null).",
        ],
    instantUTC: new Date(instantUTCms).toISOString(),
    /** 진태양시 시각: 당일 0시 기준 경과 분(0~1439). branch = floor(((x+60)%1440)/120). */
    trueSolarTimeMinutes,
    trueSolarTimeClock: input.trueSolarTime ? isoTimeFromUTCms(apparentMs) : `${String(wallHour).padStart(2, "0")}:${String(wallMinute).padStart(2, "0")}`,
    /** 진태양시 날짜가 입력 날짜 대비 이동한 일수(-1|0|1). */
    trueSolarDayShift: dayShift,
    correctionBreakdown: {
      longitudeMinutes: round2(longitudeMinutes),
      equationOfTimeMinutes: round2(eotMinutes),
      tzOffsetMinutes: input.tzOffsetMinutes,
      tzDeltaFromMeridianMinutes: round2(tzDeltaMinutes),
      totalCorrectionMinutes: round2(totalCorrectionMinutes),
      formula: "total = (longitude - 135) * 4 + equationOfTime - (tzOffsetMinutes - 540)",
    },
    solarTermInfo,
    yearPillar: pillars.year,
    monthPillar: pillars.month,
    dayPillar: pillars.day,
    hourPillar: pillars.hour,
    pillars,
    fourPillarsHanja: hasTime
      ? `${detail.yearHanja} ${detail.monthHanja} ${detail.dayHanja} ${detail.hourHanja}`
      : `${detail.yearHanja} ${detail.monthHanja} ${detail.dayHanja}`,
    dayMaster: {
      hangul: detail.day.heavenlyStem,
      hanja: detail.dayHanja[0],
      element: detail.dayElement.stem,
      yinYang: detail.dayYinYang.stem,
    },
    tenGods: hasTime ? detail.tenGods : null,
    voidBranches: detail.voidBranches,
  };
}

module.exports = {
  computeChart,
  sexagenaryIndex,
  EngineError,
  DEFAULT_TZ_OFFSET_MINUTES,
  DEFAULT_LONGITUDE,
  KST_STANDARD_MERIDIAN_DEG,
  SOLAR_TERM_NAMES,
  SOLAR_TERM_NAMES_HANJA,
};
