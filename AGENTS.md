# AGENTS.md

## Agent skills

### AI-Native SDLC — intent 우선 (필수 준수)

**기능성 작업(신규 피처 · 방향 변경 · 아키텍처 작업)을 시작하기 전에 반드시 `intent` 스킬(`.agents/skills/intent/SKILL.md`)을 실행한다**: `intent/README.md` 인덱스 확인 → 해당 기능의 `intent/[슬러그]/intent.md` 읽기 → `Status: approved`가 아니면 구현 금지. intent.md는 자동 주입되지 않으므로 이 규칙이 주입 장치다. 예외(오타 · 문구 · 원인 명확한 단순 패치)는 스킬 §0 판정 따름. 리뷰 정책은 루트 `REVIEW.md`, CI 검증은 `.github/workflows/agent-evals.yml`.

### Issue tracker

Issues live in GitHub Issues at `hot14/saju-report` (remote `origin` 연결됨, `gh` CLI 사용, PRs are not a triage surface). 코드 푸시는 `main:design-ssot` 브랜치로만 — 원격 design-ssot이 Pages 배포 브랜치. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-label vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `CONTEXT.md` + `docs/adr/` for architecture decisions. See `docs/agents/domain.md`.
