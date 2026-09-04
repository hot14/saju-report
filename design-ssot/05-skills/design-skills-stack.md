# 05 — 디자인 스킬 스택 (설치 현황 + 용도 매핑)

> 설치일 2026-09-04. 작업 파이프라인 단계별로 어떤 스킬을 언제 쓰는지의 기준 문서.

## 설치된 핵심 스택

| 스킬 | 위치 | 용도 | 파이프라인 단계 |
|---|---|---|---|
| **design-taste-frontend** (tasteskill v2) | 프로젝트 `.agents/skills/design-taste-frontend` (+ Claude Code 심링크) | Anti-slop 프론트엔드 구현 규칙. §0 Brief Inference → Design Read 선언 → §14 Hard pre-flight. 구현 단계에서 반드시 로드 | OpenDesign → 코드 |
| **stitch-design 플러그인** (tasteskill 저장소) | `~/.claude/skills/stitch-skills/plugins/stitch-design/` | Stitch 작업 5종: `generate-design`(프롬프트 키워드·매핑), `extract-design-md`(DESIGN.md 스펙 추출), `extract-static-html`, `code-to-design`, `manage-design-system` | Stitch ↔ 코드 동기화 |
| **pencil MCP (OpenDesign)** | 세션 MCP | `.pen` 캔버스 설계 파일 편집. **사전 조건: OpenDesign 앱 실행 중** (미실행 시 `get_editor_state` 연결 실패 확인됨) | 디자인 정제/확정 |
| **ego-browser** | CLI (`ego-browser nodejs`) | AI 최적화 브라우저. 레퍼런스 수집·생성물 시각 검증·스크린샷 | 전 단계 검증 |
| superdesign | 세션 스킬 | 대안 캔버스(멀티모델 비교). OpenDesign 경로가 막힐 때 폴백 | 비교 생성 |

## 보조 스택 (하네스 기본 제공, 필요 시 로드)

| 스킬 | 용도 |
|---|---|
| high-end-visual-design | 고급감 타이포·스페이싱·섀도 규칙 (tasteskill 계열) |
| hallmark / kill-ai-slop | AI-slop 패턴 감사·제거 (인디고 그라데이션, 배지 스팸 등) |
| frontend-design / minimalist-ui / industrial-brutalist-ui | 무드별 스타일 참조 |
| tailwind-design-system / web-design-guidelines | 디자인 토큰·접근성 감사 |
| imagegen-frontend-web / imagegen-frontend-mobile (tasteskill) | 프리미엄 레퍼런스 이미지 생성용 |

## 단계별 사용 규칙

1. **디자인 방향 확정 전** — 이 SSOT(`01-analysis`, `02-direction`, `03-references`)만 읽고 판단. 스킬이 방향을 정하지 않는다.
2. **Stitch 생성 시** — `stitch-design/generate-design`의 키워드·매핑 참조로 프롬프트 작성 + `02-direction/design-direction.md`의 토큰 초안 주입.
3. **Stitch 결과 → OpenDesign 이관 시** — `extract-design-md`로 DESIGN.md 뽑아 `02-direction/DESIGN.md`로 보관 → pencil MCP `get_guidelines` 후 `batch_design`으로 재구성. pencil MCP 호출 전 반드시 `get_editor_state(include_schema=true)`.
4. **생성물 검증 시** — ego-browser 스크린샷 + `design-taste-frontend` §14 pre-flight + `kill-ai-slop` 패턴 감사.
5. **구현 시** — `design-taste-frontend` 전체 규칙 로드. 랜딩/결과화면이 대상(대시보드 규칙 아님).

## tasteskill 설치 출처
- `npx skills add Leonxlnx/taste-skill --skill design-taste-frontend` / `--skill stitch-skill`
- 원문: https://www.tasteskill.dev/ · 저장소: https://github.com/Leonxlnx/taste-skill (v2 experimental, 2026 리라이트)
