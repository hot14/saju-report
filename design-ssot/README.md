# K-Saju 디자인 SSOT (Single Source of Truth)

> 남촌 물상론 기반 사주 웹서비스 — 영어권 K컬처 유입 사용자 대상.
> 이 디렉터리가 Stitch → OpenDesign → 프론트엔드까지 **모든 디자인 판단의 유일한 근거 저장소**다.
> 생성: 2026-09-04 · 원천 설계 문서: `~/Downloads/사주앱_설계와_워크플로우.html`

## 네비게이션

| 문서 | 내용 | 언제 읽나 |
|---|---|---|
| [01-analysis/product-analysis.md](01-analysis/product-analysis.md) | **제품 본질·니즈 3층·비판적 리스크 R1-8·디자인 원리 P1-7·방향 3축** | 모든 디자인 논쟁의 최상위 근거 |
| [01-analysis/competitor-intel.md](01-analysis/competitor-intel.md) | **경쟁 정찰 추가분** - 혼빛 CSS 해석·포스텔러 가격·SajuRoot 카피·astrobazi 명명 충돌 | 경쟁 대응·카피 작업 시 |
| [01-analysis/competitor-landscape.md](01-analysis/competitor-landscape.md) | 경쟁 18개 분석 + 따라할 것 10 / 피할 것 5 | 기능·퍼널·공유 장치 설계 시 |
| [02-direction/design-direction.md](02-direction/design-direction.md) | 방향 "Nocturne Obang" (A+C) + 컬러·타이포·컴포넌트 토큰 초안 | Stitch 프롬프트·캔버스 작업 입력값 |
| [03-references/references-index.md](03-references/references-index.md) | **작업 단계→참조 매핑 테이블** + 최우선 에셋 12 | 실제 작업 시작 시 첫 조회 지점 |
| [03-references/trends-2025-26.md](03-references/trends-2025-26.md) | 2025-26 트렌드 14종 + 검증 URL 59 | 무드 근거 필요 시 |
| [03-references/aesthetic-korean-mystic.md](03-references/aesthetic-korean-mystic.md) | 한국 전통 자원·미스틱 레퍼런스·타이포 6세트·색 시스템 | 시각 언어 상세 결정 시 |
| [04-assets/INDEX.md](04-assets/INDEX.md) | Pinterest 이미지 172점 + 경쟁사 캡처 인덱스 | 무드보드 구성 시 |
| [index.html](index.html) | **통합 대시보드** - 레퍼런스 291건 갤러리(채택/참고/배제 필터) + 확정 방향·토큰·경쟁사 한눈 보기 | 브라우저로 아카이브 훑을 때 |
| [04-design-tokens/DESIGN.md](04-design-tokens/DESIGN.md) | **Stitch 운영 사양 v0.2 (Nocturne Obang)** - DS ID 고정값·다이얼·컴포넌트·금지 목록 | Stitch 재생성·OpenDesign 정제 시 |
| [05-skills/design-skills-stack.md](05-skills/design-skills-stack.md) | 설치된 디자인 스킬 스택 + 단계별 사용 규칙 | 작업 파이프라인 진입 시 |
| [06-workflow/stitch-to-opendesign.md](06-workflow/stitch-to-opendesign.md) | Stitch MCP → OpenDesign 5단계 절차 + 결함 대응 | 디자인 생성 착수 시 |

## 에셋 구조

```
design-ssot/
├── 01-analysis/    product-analysis.md · competitor-landscape.md
├── 02-direction/   design-direction.md            (← DESIGN.md가 여기 들어옴)
├── 03-references/  references-index.md · trends-2025-26.md · aesthetic-korean-mystic.md
├── 04-assets/      INDEX.md · assets/<category>/*.jpg · assets/competitors/*.png
├── 04-design-tokens/ DESIGN.md(v0.2) · stitch-prompts.md · motion-refs.md
├── 01-direction/   design-analysis.md (니즈 8차원 + 비판적 검토 + 정합성 갱신)
├── 05-skills/      design-skills-stack.md
├── 06-workflow/    stitch-to-opendesign.md
└── raw/            pinterest_*.json (수집 매니페스트: 이미지 URL + 핀 링크)
```

이미지 카테고리 16종 291건: astrology_app_ui · tarot_app_ui · mystic_website · celestial_branding · korean_traditional_pattern · minhwa_art · saju_design · personality_app_ui · share_card_design · editorial_serif_web · luxury_dark_landing · competitors(사이트+앱스토어 54건) · ink-wash(라이선스) · ink-illustration · typography(스펙imen 16종) · trend-galleries

## 운용 규칙 (SSOT 유지 조건)

1. **새 레퍼런스는 반드시 이 구조에 추가** — 대화 중 링크만 던지는 건 금지. 해당 카테고리 md 또는 assets에 기록.
2. **디자인 결정이 나면 02-direction을 갱신** — v0.1 → v0.2 … 이력 유지.
3. **Stitch 생성물의 확정본은 DESIGN.md로 추출해 02-direction에 저장** (06-workflow Step 4).
4. 금기: 최종 제품에 수집 이미지 직접 사용 (내부 무드보드 전용).

## 갱신 이력

- v0.2 (2026-09-04 심야): Stitch 3안 검증으로 Nocturne Obang 확정 반영. DESIGN.md v0.2 재작성, 경쟁사 실측 보강(혼빛 CSS 해석·포스텔러·사주아이), 오염 파일 정제(에러페이지·게이트페이지 6건 삭제·재캡처), 앱스토어 스크린샷 30컷·먹선 일러스트 14컷·타입 스펙imen 3종 추가, 통합 대시보드(index.html) 구축.

## 현재 상태와 다음 액션

- ✅ Stitch 플로우 생성 완료 (2026-09-04) — 3방향 × 7화면 = 21스크린. `02-direction/flows/` + 검증 기록 `02-direction/flows-verification.md`
- ⏭ 다음: 방향별 플로우 열람 → 채택 방향 최종 확정 → **OpenDesign 이관** (앱 실행 필수) → 디자인 시스템 확정
- ⚠ OpenDesign(pencil MCP) 사용 전 앱 실행 필수
