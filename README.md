# SAJU — 프리미엄 사주 자기이해 서비스

한국식 사주 팔주(八字)를 오컬트가 아닌 **데이터 해석 프레임**으로 풀어내는 글로벌 MZ 대상 셀프이해 서비스.

## 웹에서 보기

**디자인 갤러리 허브**: https://hot14.github.io/saju-report/

## 레포 구조

| 경로 | 내용 |
|---|---|
| `index.html` | 웹 허브 (Pages 진입점) |
| `intent/` | AI-Native SDLC 의도 체인 — [README](intent/README.md) · 템플릿 · 완료된 intent 3건 |
| `design-ssot/02-direction/` | 시안 45장(20컨셉 EN/KO + 브루탈 20 EN/KO + 구현 4방향 EN/KO + 최종 6화면) · 리뷰 페이지 · 카피덱 |
| `design-ssot/05-handoff/` | **OpenDesign 이관 패키지** — [HANDOFF.md](design-ssot/05-handoff/HANDOFF.md) · 토큰 v1.0 |
| `.agents/skills/` | 설치 스킬: mattpocock/skills 37종 + `intent` + `design-taste-frontend` |
| `REVIEW.md` | PR 리뷰 정책 (3대 패스 + 5-Nit Cap) |
| `.github/workflows/agent-evals.yml` | CI 연속 평가 (문서 무결성 · intent 게이트 · 브랜드 법) |

## 확정 디자인

**스위스 데이터-에디토리얼 (Swiss Ledger, KO)** — 순백/잉크/레드 마침표 · 도판 체계(01~07) · Noto Serif KR + IBM Plex Mono. 사용자 여정 7화면: 랜딩 → 입력 → 해석 → 결과 → 리포트 → 형태 도감 → 공유.

## 규칙

- 브랜드 법: 오컬트 심벌 0 · 운세/운명 어휘 0 · em-dash 0 · 다크 배경 0 — CI가 푸시마다 검증
- 기능 작업 전 `intent` 스킬 실행 (AGENTS.md 참조)
- 푸시: `main:design-ssot` (Pages 배포 브랜치)
