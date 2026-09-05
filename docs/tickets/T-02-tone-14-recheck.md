# T-02 · V2 EN 7화면 §14 재판정 (톤 게이트 수검)

> 상태: open · 우선순위: **P0** · 담당 후보: TONE · 예상: 0.5d(CTO T9 승계) · 소스: tone-alignment-guide.md §8·§9-1 + ux-validation-report §9-1 · GitHub: hot14/saju-report#1 잔여 항목 2
> Design Read: 프로덕션 해상도로 재생성된 EN 7화면을 규칙 판정이 아닌 실물 수검으로 전환하는 문서, with §14 체크리스트 항목별 합격 판정과 구현 이관 항목의 분리.

## 배경

- 톤 가이드 §8 판정은 "조건부 합격"이었고 근거가 규칙 수준이었다(당시 화면 미수령). 이후 `flows-v2-en/` 7화면이 780px 폭으로 재생성 완료(U1, 커밋 eaaaf4a·9bb581e) [파일: sips 실측 780px].
- 머지마스터 누락 조각 #8과 CTO fix-next T9가 동일 지적: 반입 화면 기준 재판정 기록 부재.
- 조건부 4건 중 구현 게이트 항목(reduced-motion·useEffect 정리·CWV)은 구현 단계 이관이 예정돼 있다.

## 범위

- 할 것: 신규 `docs/tone-recheck-v2-en.md` 1건 생성. 7화면 수검 판정표 + 구현 이관 목록.
- 하지 않을 것: 기존 tone-alignment-guide.md 수정. 화면 재생성 실행(불합격 시 요청 항목화만).

## 수용조건

- [ ] 화면 7장(landing·entry·calculating·free_result·payment·paid_result·share_card) 각각 §14 해당 항목 판정표 존재(합격/조건부/불합격)
- [ ] U12(영어 카드 먼저·한자 격자 하단)·U13(무료 결과 단일 유형 체계) 배치 규칙 준수 여부 판정 포함
- [ ] 조건부 4건 처리: 문서 판정분은 갱신, 구현분은 이관 목록으로 분리 기록
- [ ] 불합격 발견 시 재생성 요청이 화면·지점 단위로 항목화
- [ ] G3 금지어 게이트(운명·운·운세·fortune·luck·destiny·Diagnosis·BANKS) 결과 인용

## 체크리스트

- [ ] 780px 렌더본 육안 수검(위계·대비·카피 배치·여백 비율)
- [ ] 공유카드 화면은 share-card-v2-spec.md §14 게이트와 교차 판정
- [ ] EYEBROW 지도(tone §5) 기준 위반 라벨 0건 확인
- [ ] 문서 em-dash 0건

## 의존성

- 선행: 없음(화면·EN 카피덱 전부 존재).
- 후속: T-01(CTO 재심)의 입력.

## 관련 문서

`docs/tone-alignment-guide.md` §5·§8 · `docs/copy-deck-v2-en.md` · `design-ssot/02-direction/flows-v2-en/` · `docs/share-card-v2-spec.md` §14 · `docs/gate-merge-master.md` 누락 조각 #8
