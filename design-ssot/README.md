# K-Saju 디자인 SSOT (Single Source of Truth)

> 남촌 물상론 기반 사주 웹서비스 — 영어권 K컬처 유입 사용자 대상.
> 이 디렉터리가 Stitch → OpenDesign → 프론트엔드까지 **모든 디자인 판단의 유일한 근거 저장소**다.
> 생성: 2026-09-04 · 원천 설계 문서: `~/Downloads/사주앱_설계와_워크플로우.html`

## 네비게이션

| 문서 | 내용 | 언제 읽나 |
|---|---|---|
| [01-analysis/product-analysis.md](01-analysis/product-analysis.md) | **제품 본질·니즈 3층·비판적 리스크 R1-8·디자인 원리 P1-7·방향 3축** | 모든 디자인 논쟁의 최상위 근거 |
| [01-analysis/competitor-landscape.md](01-analysis/competitor-landscape.md) | 경쟁 18개 분석 + 따라할 것 10 / 피할 것 5 | 기능·퍼널·공유 장치 설계 시 |
| [02-direction/design-direction.md](02-direction/design-direction.md) | 방향 "Nocturne Obang" (A+C) + 컬러·타이포·컴포넌트 토큰 초안 | Stitch 프롬프트·캔버스 작업 입력값 |
| [03-references/references-index.md](03-references/references-index.md) | **작업 단계→참조 매핑 테이블** + 최우선 에셋 12 | 실제 작업 시작 시 첫 조회 지점 |
| [03-references/trends-2025-26.md](03-references/trends-2025-26.md) | 2025-26 트렌드 14종 + 검증 URL 59 | 무드 근거 필요 시 |
| [03-references/aesthetic-korean-mystic.md](03-references/aesthetic-korean-mystic.md) | 한국 전통 자원·미스틱 레퍼런스·타이포 6세트·색 시스템 | 시각 언어 상세 결정 시 |
| [04-assets/INDEX.md](04-assets/INDEX.md) | Pinterest 이미지 172점 + 경쟁사 캡처 7점 인덱스 | 무드보드 구성 시 |
| [05-skills/design-skills-stack.md](05-skills/design-skills-stack.md) | 설치된 디자인 스킬 스택 + 단계별 사용 규칙 | 작업 파이프라인 진입 시 |
| [06-workflow/stitch-to-opendesign.md](06-workflow/stitch-to-opendesign.md) | Stitch MCP → OpenDesign 5단계 절차 + 결함 대응 | 디자인 생성 착수 시 |

## 에셋 구조

```
design-ssot/
├── 01-analysis/    product-analysis.md · competitor-landscape.md
├── 02-direction/   design-direction.md            (← DESIGN.md가 여기 들어옴)
├── 03-references/  references-index.md · trends-2025-26.md · aesthetic-korean-mystic.md
├── 04-assets/      INDEX.md · assets/<category>/*.jpg · assets/competitors/*.png
├── 05-skills/      design-skills-stack.md
├── 06-workflow/    stitch-to-opendesign.md
└── raw/            pinterest_*.json (수집 매니페스트: 이미지 URL + 핀 링크)
```

이미지 카테고리 12종: astrology_app_ui · tarot_app_ui · mystic_website · celestial_branding · korean_traditional_pattern · minhwa_art · saju_design · personality_app_ui · share_card_design · editorial_serif_web · luxury_dark_landing · competitors

## 운용 규칙 (SSOT 유지 조건)

1. **새 레퍼런스는 반드시 이 구조에 추가** — 대화 중 링크만 던지는 건 금지. 해당 카테고리 md 또는 assets에 기록.
2. **디자인 결정이 나면 02-direction을 갱신** — v0.1 → v0.2 … 이력 유지.
3. **Stitch 생성물의 확정본은 DESIGN.md로 추출해 02-direction에 저장** (06-workflow Step 4).
4. 금기: 최종 제품에 수집 이미지 직접 사용 (내부 무드보드 전용).

## 현재 상태와 다음 액션

- ✅ Stitch MCP 설치·검증 완료 (2026-09-04) — 커뮤니티 `stitch-mcp` · GCP `sajuro-fortune` · 도구 17개 실호 확인. **신규 세션에서 마운트됨**
- ⏭ 다음: 06-workflow Step 1 — 방향 A/C/A+C 중 베이스 확정 → Stitch로 화면 6종+공유카드 생성 (시작 화면부터)
- ⚠ OpenDesign(pencil MCP) 사용 전 앱 실행 필수
