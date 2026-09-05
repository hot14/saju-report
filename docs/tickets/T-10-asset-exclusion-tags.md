# T-10 · 타이포그래피 표본 배제 태그 (T6)

> 상태: open · 우선순위: **P2** · 담당 후보: COORD · 예상: 0.5h(CTO T6 승계) · 소스: tone-alignment-guide.md §8-1·§9-5 · GitHub: hot14/saju-report#1 연계
> Design Read: 금지 서체 표본이 채택 자산으로 오인되지 않게 하는 인덱스 정합 소티켓, with 배제 사유 한 줄로 근거를 보존하는 최소 변경.

## 배경

- `design-ssot/04-assets/INDEX.md`에 fraunces.png·instrument-serif.png의 배제 태그가 없다 [파일: grep 0건 확인].
- tasteskill §4.1 금지 서체(LLM 기본 세리프). 톤 가이드 §4-2가 배제를 확정했고 §9-5가 COORD 인계로 남겼다. Stitch 프롬프트 잔여 방지용 표시.

## 범위

- 할 것: INDEX.md에 배제 태그 + 사유 1줄(기존 파일 수정 = 코디네이터 커밋).
- 하지 않을 것: 표본 파일 삭제(보존, 태그만).

## 수용조건

- [ ] fraunces.png·instrument-serif.png 2표본에 배제 태그 존재
- [ ] 사유 1줄 포함(tasteskill §4.1 금지 서체, 라틴 디스플레이는 Cormorant Garamond급)
- [ ] 태그 체계는 기존 판정 태그(채택·참고·배제 예시)와 동일 어휘 사용

## 체크리스트

- [ ] INDEX.md 전수 재검: 동일 계열 표본 추가 발견 여부
- [ ] 커밋 메시지에 CTO T6 연결

## 의존성

- 선행: 없음.

## 관련 문서

`design-ssot/04-assets/INDEX.md` · `docs/tone-alignment-guide.md` §4-2·§9-5 · `.agents/skills/design-taste-frontend/SKILL.md` §4.1
