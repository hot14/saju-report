# SajuRoot 전체 로드맵 — 동적 워크플로우 오케스트레이션 (DDD)

작성: 2026-10-09 · 원칙: 문서가 먼저다(이 문서가 단일 진실). 모든 작업은 TDD 검증기 통과로 닫고, 산출은 커밋으로 남긴다. 서브에이전트는 MECE 조각만 맡고, 통합·검증·배포는 본 세션이 수행한다(반복 검증된 패턴: 서브에이전트는 파일 산출 후 사망해도 무손실).

## 현재 완료 기반 (재검증 완료)
- 라이브: 랜딩·무료 차트·하이브리드 리딩·슬롯 엔진 Q02·concern 배너·타겟 프로파일 ?p=·공유 카드·이메일(Google Form e2e 도달)·AEO 자산
- 데이터: slots.json 10일간(1,338 검증)·relations·dynamics·regions·policy
- 테스트: engine golden ALL PASSED · smoke SMOKE_OK · slots VALIDATION 1,338/0

## MECE 작업 분해 (웨이브 1 — 병렬 즉시)

| 팀 | 조각 | 산출 | 검증 |
|---|---|---|---|
| W1-A | 주제별 심층 슬롯 3종(돈·직업·이성) — 소비 82% 커버(사주아이 실측) | slots.json topicSections + app.js 렌더 | smoke 콘텐츠 대응 + 신규 유닛 |
| W1-B | 게이미피케이션 최소판(방문 스탬프·연속 일수, 캐릭터 없이 localStorage) | js/streak.js | smoke 신규 유닛 |
| W1-C | 주제별 랜딩 변형 3종(?t=money|career|love — src별 진입 최적화) | index.html 변형 | 마커 grep |

## 웨이브 2 (웨이브 1 통합 후)
- 가족·친구·지역 슬롯 3종 추가
- 동적 OG(share-card.html 파라미터 확장)
- 대운 서사 라이브 반영 확인
- 5축 벤치마크 적용: freeOneLiner 무료 미리보기 카드

## 웨이브 3 (운영 개시)
- 채널 게시(A안 단일 집중 — experiment-strategy-variants.md)
- Google Form 응답 모니터링(주 2회)
- 12주 로드맵 주차별 실행(master-strategy.md 3장)

## 상시 루프 (매 웨이브 반복)
빌드 → smoke/golden/validator 3종 → 배포(design-ssot) → 라이브 마커 확인 → 커밋·푸시 → 이 문서 갱신

## 저작권·법적 경계 (불변)
남촌 원문 인용 금지·사주아이/혼빛 문구 재사용 금지(구조 학습만)·운세 어휘 0·em-dash 0·연구회 비제휴 명시.

윤문 게이트: 경로 light, 엠대시 0, 법령 검증 해당없음
