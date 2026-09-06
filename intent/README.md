# Intent — AI-Native SDLC 의도·명세·계획 관리

> Anthropic Applied AI 『The AI-Native SDLC Playbook』 (2026-08-21) 채택.
> 코드는 더 이상 병목이 아니다. 병목은 의도 전달과 승인이다.

## 인덱스

| 슬러그 | 제목 | 상태 | 게이트 |
|---|---|---|---|
| [design-finalization](design-finalization/intent.md) | 디자인 방향 확정 및 잔여 화면 확장 | `draft` | Gate 1 대기 |

(새 intent 추가 시 이 표에 한 줄 추가)

## 워크플로우 (6단계 루프)

```
Plan(intent.md) → Gate1 승인 → Design(spec.md) → Gate2 승인
→ Build(plan.md+코드) → Gate3 승인 → Test(연속 평가) → Gate4
→ Deploy(REVIEW.md 준수 PR) → Gate5 → Maintain(장애 → 새 intent.md) ↺
```

각 단계는 **버전 관리되는 마크다운 산출물**로 끝나고, 다음 단계가 그것을 읽는다. 커밋 체인 자체가 감사 추록이다.

## 핵심 파일 4종

| 파일 | 질문 | 작성 | 스코프 |
|---|---|---|---|
| `CLAUDE.md` / `AGENTS.md` | How to work (상시 규칙) | 개발팀 | 레포 전역 · 상시 |
| `intent.md` | **Why** (비즈니스 의도) | 발의자 + Claude | 기능 단위 · 해결 시 완료 |
| `spec.md` | **What** (기술 명세) | Claude + 승인자 | 기능 단위 |
| `plan.md` | **How to build** (실행 계획) | Claude Code (Plan 모드) | 기능 단위 |

**정보 사다리 원칙**: 단계가 내려갈수록 컨텍스트는 좁혀진다. 각 단계 에이전트는 직전 산출물 + 필요한 스킬만 입력받는다. 전체 대화 로그·레거시 문서를 통째로 주입하지 않는다.

## 규칙

1. **폴더당 1세트**: `intent/[슬러그]/` 안에 intent.md · spec.md · plan.md 각 1개. 분할 필요 시 폴더를 나눈다 (의도:구현 1:1).
2. **상태 게이트**: intent.md 헤더의 `Status: draft | approved | completed` — 승인 행위는 커밋/머지로 기록된다.
3. **자동 주입 안 됨**: intent.md는 CLAUDE.md와 달리 자동 로드되지 않는다. **기능 작업 전 반드시 `.agents/skills/intent/` 스킬을 통해 해당 intent.md를 읽고 시작한다.**
4. **예외 기준**: 오타 수정, UI 문구 변경, 원인 명확한 단순 패치는 intent 불필요. **신규 피처 · 도메인 로직 변경 · 복수 시스템 연동 아키텍처 작업은 필수.**
5. **템플릿**: `intent/templates/`의 3종을 복사해 시작. 5대 필드(Problem / Proposed Outcome / Affected users and systems / Constraints / Open questions)는 프랙티스이지 고정 표준이 아니며, 프로젝트 성격에 맞게 확장 가능.
6. **기존 도구 공존**: wayfinder 맵·GitHub 이슈는 `Related Ticket` 필드로 상호 링크. Jira/Notion 대체가 아니다.

## 단독 개발자 모드 (이 프로젝트 기본)

PR 승인 체인은 팀용이다. 단독 모드에서는:
- **Gate 기록 = Status 필드 전환 + 커밋 히스토리** (draft → approved 커밋이 곧 승인)
- 큰 기능 전 intent.md 작성으로 **오버엔지니어링 방지** + **수일 후 복귀 시 결정 기록(ADR 역할)**
- team 모드로 전환 시 intent/[슬러그] → spec/[슬러그] → feature/[슬러그] 3단계 PR 워크플로우로 승격
