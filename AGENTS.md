# AGENTS.md

## Agent skills

### Issue tracker

Issues live in GitHub Issues at `hot14/saju-report` (remote `origin` 연결됨, `gh` CLI 사용, PRs are not a triage surface). 코드 푸시는 `main:main-local` 브랜치로만 — 원격 main은 Pages 배포 브랜치. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-label vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `CONTEXT.md` + `docs/adr/` for architecture decisions. See `docs/agents/domain.md`.
