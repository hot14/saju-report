---
name: intent
description: AI-Native SDLC workflow. Run BEFORE starting any feature work. Checks the intent/ index, reads the feature's intent.md (Why), enforces Status gates (draft/approved/completed), and creates a new intent via grilling interview when missing. Skippable only for typos, copy tweaks, and obvious single-cause patches.
---

# intent — 기능 작업의 출발점

intent.md는 자동 주입되지 않는다. **이 스킬이 주입 장치다.** 기능성 작업을 시작하기 전 반드시 이 절차를 따른다.

## 0. 예외 판정 (가장 먼저)

다음은 intent 불필요 — 바로 작업:
- 오타 수정, UI 문구 변경
- 이미 재현 경로와 원인이 명확한 단순 버그 패치
- 리뷰 페이지 경로 수정 같은 기계적 수정

다음은 intent **필수** — 절차 진행:
- 신규 피처/화면 개발
- 기존 비즈니스·도메인 로직·디자인 방향 변경
- 복수 시스템·산출물에 걸치는 아키텍처 작업

## 1. 인덱스 확인

`intent/README.md`의 인덱스 테이블을 읽는다. 진행할 기능의 슬러그가 있으면 → 2. 없으면 → 3.

## 2. 기존 intent 읽기 (일관성 핵심)

`intent/[슬러그]/intent.md`를 **통째로** 읽는다:
- `Status: draft` → **Gate 1 미승인. 구현 금지.** 오너에게 승인 요청 또는 grilling으로 내용 보강
- `Status: approved` → 진행 가능. Open Questions 답힌 것이 있으면 intent.md 갱신
- `Status: completed` → 재작업이면 새 슬러그로 (폴더당 1세트)
- spec.md/plan.md가 이미 있으면 함께 읽고 그 기준으로 작업. **spec에 없는 것을 만들지 않는다** — 필요하면 spec.md 갱신을 먼저 제안

## 3. 신규 intent 생성 (grilling 인터뷰)

`intent/templates/intent.md`를 복사해 `intent/[슬러그]/intent.md` 생성 후:
1. grilling + domain-modeling 스킬로 발의자 인터뷰 — scope · users · constraints · success
2. 5대 필드 완성: Problem / Proposed Outcome / Affected users and systems / Constraints / Open questions
3. 인덱스 테이블에 한 줄 추가 (`Status: draft`)
4. 발의자(오너) 확인 → 커밋 = **Gate 1 승인 기록** (draft → approved 커밋)

## 4. 상위 단계 산출물 (해당 시)

- Gate 1 통과 후 설계가 필요하면 → `spec.md` (템플릿 사용, Flagged concerns 명시, Gate 2 = 오너/테크 승인)
- 구현 직전 → `plan.md` (템플릿 사용, Gate 3 = 계획 사전 승인 후에만 파일 수정 시작)
- PR/리뷰 정책은 루트 `REVIEW.md` (3대 패스 + 5-Nit Cap)

## 5. 하드 룰

- 폴더당 1세트 (intent.md · spec.md · plan.md 각 1). 분할은 폴더 분리로
- **정보 사다리**: 각 단계는 직전 산출물 + 필요한 스킬만 참조. 전체 대화 로그·레거시 문서 통째 주입 금지
- CI(`agent-evals.yml`)가 1세트 원칙·Status·브랜드 법을 검증한다 — 위반 시 머지 불가
- 장애·버그 발견도 루프로: 원인 진단 → 새 intent.md 발행 (Stage 6 → Stage 1)
