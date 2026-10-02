# SAJU 결정론 사주 계산 엔진

manseryeok(KASI 정본 데이터 기반 역법 라이브러리, npm)으로 사주 원판을 계산하는 순수 계산 엔진이다. 천문·역법 계산은 전부 라이브러리가 담당하고, 이 엔진은 입력 정규화, 시간대 해석, 진태양시 환산 재료 수집, 절기 경계 정보 조립만 한다. 계산 경로에 LLM은 존재하지 않으며, 해석 로직도 없다(해석은 별도 티켓).

## 설치와 실행

```bash
npm install
npm run check   # node --check 문법 검사
npm test        # 골든 테스트 186항목
```

의존성은 `manseryeok@^2.0.0` 하나다. Node 18 이상.

## API

### computeChart(input)

```js
const { computeChart } = require('./src/engine.cjs');

const chart = computeChart({
  dateISO: '1985-03-21',   // 필수. 양력 생년월일 'YYYY-MM-DD'
  timeISO: '14:30',        // 'HH:MM' (출생지 민간시) 또는 null (시각 미상 모드)
  latitude: 37.5665,       // 선택. 북위 양수 십진 도수. 기본 37.5665 (서울)
  longitude: 126.978,      // 선택. 동경 양수·서경 음수 십진 도수. 기본 126.978 (서울)
  tzOffsetMinutes: 540,    // 선택. 벽시시각 해석 오프셋(분). 기본 540 (KST+9)
  dayBoundary: 'midnight', // 선택. 'midnight'|'jasi'|'splitJasi'. 기본 'midnight'
  trueSolarTime: true,     // 선택. 진태양시 보정(경도+균시차) on/off. 기본 true
});
```

위도·경도·오프셋을 생략하면 서울·KST 기본값으로 계산한다. 검증 실패(형식 오류, 존재하지 않는 날짜, 범위 밖 좌표, 1800~2300년 밖)는 `EngineError`를 던진다. 오류는 조용히 통과되지 않는다.

### 반환값 (계산 투명성 재료 포함)

| 필드 | 내용 |
|---|---|
| `input` | 정규화된 입력 전체(위도·경도·오프셋·관법 포함) |
| `mode` | `'full'` 또는 `'noHour'` (시각 미상) |
| `assumptions` | 계산에 넣은 가정 목록. 시각 미상이면 정오 가정 2건 |
| `instantUTC` | 벽시시각을 오프셋으로 해석한 절대 순간 (ISO 8601) |
| `trueSolarTimeMinutes` | 진태양시 시각, 당일 0시 기준 경과 분(0~1439) |
| `trueSolarTimeClock` | 진태양시 시계 표기 `'HH:MM'` |
| `trueSolarDayShift` | 진태양시 날짜가 입력 날짜 대비 이동한 일수(-1·0·1) |
| `correctionBreakdown` | `longitudeMinutes`(경도×4 보정), `equationOfTimeMinutes`(균시차), `tzDeltaFromMeridianMinutes`, `totalCorrectionMinutes`, `formula` |
| `solarTermInfo` | `current`(당시 절기, 절입 순간), `next`(다음 절입 = 전환일, `minutesUntil`), `nearSolarTermBoundary`, `riskWindowMinutes`, `riskNote` |
| `yearPillar` `monthPillar` `dayPillar` `hourPillar` | 각 주. `hourPillar`는 시각 미상일 때 `null` |
| `pillars` | 위 네 주의 맵(`{ year, month, day, hour }`) |
| `fourPillarsHanja` | `'乙丑 己卯 己未 辛未'` 형식 전체 표기 |
| `dayMaster` | 일간 요약 |
| `tenGods` | 십신 차트 (시각 미상이면 `null`) |
| `voidBranches` | 공망 지지 2개 (일주 기반) |

각 주(pillar) 객체 구조:

```js
{
  hangul: '을축', hanja: '乙丑',
  stem:   { hangul: '을', hanja: '乙', index: 1, element: '목', yinYang: '음' },
  branch: { hangul: '축', hanja: '丑', index: 1, element: '토', yinYang: '음' },
  element: { stem: '목', branch: '토' },
  yinYang: { stem: '음', branch: '음' },
}
```

### 시간대 계약

벽시시각 해석은 `tzOffsetMinutes` 하나로 결정된다.

```
instantUTC = Date.UTC(벽시시각) - tzOffsetMinutes × 60000
```

런타임 환경의 로컬 타임존은 절대 개입하지 않는다. 서머타임 지역이면 그 시각에 실제로 유효한 오프셋을 호출자가 넣는다(뉴욕 여름 `-240`, 한국 서머타임 기간 `600` 등). 엔진은 이 순간을 KST 표준시 필드로 재표현해 라이브러리에 넘기면서 라이브러리의 `applyHistoricalDst`를 `false`로 고정한다. 이유는 함정 2번 참고.

### 시각 미상 모드

`timeISO: null`이면 `hourPillar`는 `null`이고 연·월·일주는 당일 정오 12:00 가정으로 계산된다. 정오는 진태양시 보정(최대 약 46분)을 적용해도 같은 날 안에 머무는 유일한 안전 지점이어서다. 자정 가정은 서울 경도 기준 진태양시가 전날 23시대가 되어 일주가 하루 밀릴 수 있다. 가정 사실은 `assumptions`에 그대로 노출된다.

### 진태양시와 절기 경계

```
진태양시 = 표준시 + (출생경도 - 135도) × 4분 + 균시차(±16분 내외)
```

`solarTermInfo`는 출생 순간이 속한 절기와 다음 절입(전환일)을 분 단위로 알려준다. 출생 순간이 절입 임박(시각 있음 2시간, 미상 모드 12시간 이내)이면 `nearSolarTermBoundary`가 `true`가 되고 `riskNote`에 무엇이 바뀔 수 있는지(월주, 입춘 직전이면 연주까지) 적힌다.

## 함정 목록 (골든 테스트로 고정)

1. **equationOfTimeMinutes 인자 함정.** 이 함수는 epoch 밀리초 숫자 또는 `Date` 객체만 받는다. 실측(manseryeok 2.0.0): 문자열은 `NaN`을 반환하고, **초 단위 숫자는 예외 없이 1970년으로 해석한 엉뚱한 값을 반환**한다. NaN보다 위험한 조용한 오답이다. 엔진 내부는 `new Date(ms).getTime()` 경유만 사용하고 유한수 검증을 이중으로 둔다. (test §8)
2. **이중 서머타임 보정 함정.** 라이브러리에 `applyHistoricalDst: true`(기본값)로 KST 벽시시각을 넘기면 라이브러리가 한국 과거 서머타임(1948~1960, 1987~1988) 규칙으로 그 필드를 다시 해석해 엔진이 계산한 순간과 60분 어긋난다. 그래서 엔진은 해석 권한을 명시적 오프셋으로 끝낸 뒤 라이브러리에는 `applyHistoricalDst: false`로 고정해 넘긴다. (test §4)
3. **같은 순간이어도 같은 사주가 아니다.** 일주·시주는 출생지의 지방 진태양시 날짜·시각으로 결정된다. 1990-05-15 10:00 서울 출생과 1990-05-14 21:00 뉴욕 출생은 같은 UTC 순간이지만 뉴욕의 태양일은 하루 전이라 일주가 다르다. 년·월주(절기 절대 순간 판정)만 경도와 무관하다. (test §3)
4. **자정 가정 함정.** 서울 경도에서 자정 00:00의 진태양시는 전날 23시 14~46분이다. 시각 미상 모드의 정오 가정은 이 때문에 선택됐다. (test §5)
5. **연도 범위.** manseryeok의 정밀 절입표는 1800~2300년만 분 단위 정확도를 보장한다. 범위 밖은 오류로 거부한다.

## 사용 예

### 예 1: 서울 출생, 시각 있음

```js
const chart = computeChart({ dateISO: '1985-03-21', timeISO: '14:30' });

chart.fourPillarsHanja;        // '乙丑 己卯 己未 辛未'
chart.trueSolarTimeClock;      // '13:50' (보정 -39.35분 적용)
chart.correctionBreakdown;     // { longitudeMinutes: -32.09, equationOfTimeMinutes: -7.26, ... }
chart.solarTermInfo.current;   // { name: '춘분', ... }
chart.solarTermInfo.next;      // { name: '청명', kst: '1985-04-05T05:14+09:00', ... }
chart.dayMaster;               // { hanja: '己', element: '토', yinYang: '음', ... }
```

### 예 2: 뉴욕 출생 (서머타임 기간, 현지 민간시 기록)

```js
const chart = computeChart({
  dateISO: '1990-05-14',
  timeISO: '21:00',          // 뉴욕 현지 시계
  latitude: 40.7128,
  longitude: -74.006,        // 서경이므로 음수
  tzOffsetMinutes: -240,     // 1990년 5월 뉴욕은 EDT(UTC-4)
});

chart.instantUTC;              // '1990-05-15T01:00:00.000Z' (서울 5/15 10:00과 같은 순간)
chart.trueSolarTimeClock;      // '20:07' (뉴욕의 진태양시, 날짜는 5/14)
```

### 예 3: 시각 미상 + 절기 경계일

```js
const chart = computeChart({ dateISO: '2024-02-04', timeISO: null });

chart.mode;                                 // 'noHour'
chart.hourPillar;                           // null
chart.fourPillarsHanja;                     // '癸卯 乙丑 戊戌' (정오 가정이라 입춘 17:27 전)
chart.solarTermInfo.nearSolarTermBoundary;  // true
chart.solarTermInfo.riskNote;               // "…입춘 절입 327분 전… 연주도 바뀔 수 있습니다…"
chart.assumptions;                          // 정오 가정 내용 2건
```


## 한국 역사 서머타임 자동 적용

입력 벽시시각이 KST 기본 오프셋(540)일 때, 아래 12구간(표준시령대 기록)에 해당하면 엔진이 자동으로 시계 시각을 표준시로 60분 되돌려 계산한다. 적용 사실은 반환값 dst와 correctionBreakdown.dstApplied로 보고되고 assumptions에 고지문이 추가된다. 명시적 오프셋(해외 등)을 넣으면 한국 표를 건너뛴다. applyHistoricalDst: false로 끌 수 있다.

| 시작 | 종료 |
|---|---|
| 1948-06-01 00:00 | 1948-09-13 00:00 |
| 1949-04-03 00:00 | 1949-09-11 00:00 |
| 1950-04-01 00:00 | 1950-09-10 00:00 |
| 1951-05-06 00:00 | 1951-09-09 00:00 |
| 1955-05-05 00:00 | 1955-09-09 00:00 |
| 1956-05-20 00:00 | 1956-09-30 00:00 |
| 1957-05-05 00:00 | 1957-09-22 00:00 |
| 1958-05-04 00:00 | 1958-09-21 00:00 |
| 1959-05-03 00:00 | 1959-09-20 00:00 |
| 1960-05-01 00:00 | 1960-09-18 00:00 |
| 1987-05-10 02:00 | 1987-10-11 03:00 |
| 1988-05-08 02:00 | 1988-10-09 03:00 |

실시간 검증 케이스: 1987-08-28 09:50(서머타임 구간)은 丁卯 戊申 己酉 戊辰으로 계산되며, 라이브러리 applyHistoricalDst=true 독립 계산과 일치한다(골든 §15). 적용을 끄면 시주가 己巳로 한 시진 밀린다.

## 골든 테스트 구성 (186항목, `npm test`)

| 섹션 | 내용 |
|---|---|
| §1 외부 검증 앵커 | 공개 인물 3건(이재용 戊申·戊午·甲子, 문재인 壬辰·癸丑·乙亥, 박근혜 辛卯·辛丑·戊寅·甲寅, 각 출처는 테스트 주석) + manseryeok README 예제 4건 + 수학 유도 앵커(1949-10-01 甲子일) |
| §2 절기 경계 | 2024 입춘(17:27 KST) 전후, 망종(13:10 KST) 전후, 시각 미상 경계 경고, 1985 입춘 연주 경계 |
| §3 경도별·시간대 | 서울·뉴욕·시드니·런던 경도별 시지, 동일 순간 3개 시간대 표기, 오프셋 표현 불변 |
| §4 서머타임 | 한국 1988 KDT(+600 vs +540), 뉴욕 2024 전환일 EST(-300)/EDT(-240) |
| §5 시각 미상 | 시주 null, 삼주 보존, 십신 null, 외국 경도 |
| §6~§8 불변식·투명성 | 60갑자 연속성 31일, 오호둔원 공식 10년, 시간 천간 공식, 균시차 천문 극단, 투명성 중간값, EoT 인자 함정 회귀 |
| §9 오류 처리 | 12건 결정적 실패(형식·범위·존재하지 않는 날짜 등) |

기대값의 출처 등급은 테스트 파일 주석에 표기했다. 외부 검증(공개 인물·README·역사 앵커), 손계산(천문 상수), 라이브러리 실측 동결(회귀 방지)의 세 등급이다.
