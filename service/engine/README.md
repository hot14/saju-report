# SAJU 계산 엔진 (manseryeok 기반)

결정론 사주 계산 엔진. 천문·역법 계산은 전부 manseryeok 라이브러리로 수행되고, 이 엔진은 입력 정규화와 계산 투명성 데이터 노출만 담당한다. LLM이 계산에 개입하는 경로는 없다.

## 실행

```bash
npm install
npm run check   # node --check (문법)
npm test        # 골든 테스트 116항목
```

## API

```js
const { computeChart } = require('./src/engine.cjs');

const chart = computeChart({
  dateISO: '1985-03-21',        // 양력 생년월일
  timeISO: '14:30',             // 출생지 민간시. null이면 시주 부재 모드
  longitude: 126.978,           // 출생지 경도 (기본 서울)
  tzOffsetMinutes: 540,         // 민간시의 UTC 오프셋(분). 서머타임 적용분 포함. 기본 KST
});

chart.pillars.year.hanja      // '乙丑' — 년월일시 각 주
chart.dayMaster               // 일간: { hangul, hanja, element, yinyang }
chart.tenGods                 // 십신 (시주 부재 시 null)
chart.transparency            // 계산 투명성: 진태양시, 경도 보정, 균시차, 당시 절기와 다음 절기 전환일
```

## 계약과 함정 (골든 테스트로 고정)

1. manseryeok은 벽시시각을 한국표준시(UTC+9)로 해석하고 경도 보정 (경도-135)×4분을 적용한다 (표준 만세력 관례). 그래서 이 엔진은 tzOffsetMinutes로 출생지 민간시를 먼저 KST로 변환한 뒤 라이브러리에 넘긴다. 전 세계 출생 입력은 tzOffsetMinutes만 올바르게 주면 된다.
2. equationOfTimeMinutes에는 Date 객체를 넣어야 한다. 문자열은 NaN을 반환한다 (엔진이 내부적으로 방어).
3. 일주는 출생지의 국지 진태양시 날짜로 결정된다. 같은 순간이라도 출생지 태양일이 하루 차 나면 일주가 달라진다. 이것은 버그가 아니라 사주의 정의다.
4. 시각 미상(timeISO null)은 정오 대표값으로 나머지 삼주를 계산하고 시주와 십신은 null로 반환한다.
5. 균시차 보정을 끄면(applyEquationOfTime false) 진태양시에서 균시차 항이 0이 된다. 과거 한국 서머타임(1948~1960, 1987~1988)은 applyHistoricalDst로 처리된다.

## 골든 테스트 구성 (116항목)

- 외부 앵커: 1985-03-21 (manseryeok 실측+오호둔원 이중 검증), 1968-06-23 공개 인물 3주, 2026-01-01 일주
- 불변량: 60갑자 패리티와 연속 진행(31일), 오호둔원 월간 공식 10개 연도, 시간 공식 4시각, 진태양시-시지 정합 3시각
- 경계: 입춘 전후 연주, 일주 자정 경계, 한국 서머타임 시대
- 표기 불변: 같은 순간·같은 장소를 EDT/EST 두 표기로 입력해도 동일
- 회귀: 균시차 인자 함정, 시각 미상 모드, 오류 6종
