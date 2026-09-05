# Design System: Bright Mulsang (K-Saju Service)
**Skill:** stitch-design-taste · **Project:** Korean Saju (물상론) reading service for global K-culture fans
**Version:** v0.3 (2026.09.05 · 09.05 콘셉트 가드레일 회의에 따라 다크 v0.2(Nocturne Obang)를 폐기하고 **밝은 모던 K-컬처 물성**으로 단일화. 본 문서가 유일한 토큰 원천이다(다크 v0.2 표기 #141416 배경·#C9A227 CTA·Fraunces·Motion 5는 전부 무효).
**상위 문서:** `02-direction/concept-guardrail.md` (제작 원칙) · `02-direction/design-direction.md` (v0.1 원본, 이력용) · `02-direction/github-pages-archive-digest.md`
**Stitch DS 고정값:** 프로젝트 `282676268687837114` (K-Saju V2 - Bright Mulsang) · Bright DS `assets/9d25763e1c344185bfc980f7a09cb755` · 재생성 시 항상 이 DS를 주입한다.

## Configuration · Set Your Style

| Dial | Level | Rationale |
|------|-------|-----------|
| **Creativity** | `6` | 밝은 에디토리얼 프리미엄. 표현 장치는 물성 스틸컷 + 배지 스트립뿐. |
| **Density** | `3` | 여백이 주인장. 갤러리 무드. |
| **Variance** | `6` | Hero → identity card → badge strip → CTA. 섹션 구조는 바꾸되 서사 순서 유지. |
| **Motion Intent** | `4` | 결정론적 연출만(같은 입력 = 같은 시퀀스). 계산 중 조립 리빌 한정, 글로우 없음. |

---

## 1. Visual Theme & Atmosphere
"밝은 모던 K-컬처 물성" · 한지 화이트 바탕, 넉넉한 여백, 얇은 먹 선. 점성학(오컬트) 문법과의 완전한 분리가 1순위 가드레일이다: 별·달·천체·성운·수정구를 어떤 형태로도 쓰지 않는다. 물상(오행)은 상징물 그림이 아니라 **물성의 스틸컷**(표면 장력 곡선·파쇄 단면·흡수 번짐·표면결)으로만 시각화한다. 느낌의 목표: 박물관 소장품의 정밀 사양서. 신비가 아니라 물성이 팔린다.

## 2. Color Palette & Roles (밝은 한지 · 먹 · 절제 골드)
Neutrals:
- **Hanji Base** (#F7F3EA) · 페이지 배경. 한지(韓紙) 실재 소재 기반.
- **Surface** (#FDF8F8) · 카드·시트 레이어.
- **Ink** (#1B1B1E) · 본문·헤드라인 텍스트. 먹의 창흑 톤(살짝 찬 근흑색).
- **Muted** (#6F6A63) · 서브 텍스트.
- **Field Line** (#8E887F) · 입력 보더·헤어라인.

Obang (adjusted) · 물상 배지·도트·공유 카드 전용:
- **Wood 청** (#2E5A87) · **Fire 적** (#B33B24) · **Earth 황·금박** (#B98A2C) · **Metal 백금** (#C0C6CD) · **Water 흑청** (#3B4A6B)

Hard rules:
1. CTA는 **먹색 단색 필 + 한지 텍스트**. 골드(#B98A2C)는 시그니처(공유 카드·근거 태그)에만. 골드 CTA 금지.
2. 오행 5색은 배지·도트·시그니처 한정. 페이지 크롬·텍스트 색 절대 금지.
3. 테마 잠금: 전 화면 밝은 톤 단일. 다크 섹션 샌드위치 금지.
4. 한지 그레인 오버레이 opacity 3~6%.
5. BANNED: 다크 배경, indigo→violet 그라데이션, 글로우, glassmorphism, 순백(#FFFFFF) 배경, 보라 계열 전부.

## 3. Typographic Architecture (3본제)
| 역할 | 한글 | 라틴 | 비고 |
|---|---|---|---|
| 히어로·시작·공유 카드 | Noto Serif KR (본명조) | Cormorant Garamond | 한자 그리프 내장. 壬癸·木火土金水를 텍스트로 유지(이미지화 금지 = SEO·접근성) |
| 리포트 본문 | MaruBuri (마루 부리) | Cormorant Garamond | 장문 가독. 본문 하한 16px·캡션 12px |
| 숫자·라벨·CTA | MaruBuri | Italiana (대형 단문 한정) | {{PRICE}} 표기·카드 라벨의 헤어라인 |
| 근거 태그·데이터 | · | IBM Plex Mono | 판정 근거·좌표 라벨 전용 |

- 한글 폰트 최종 확정은 눈누(https://noonnu.cc) 상업용 무료 라인업에서.
- BANNED: Inter, Roboto, tasteskill §4.1 금지 세리프 2종, 3단 미만 타입 스케일.
- 스펙imen: `assets/typography/` (16종, §4.1 금지 세리프 2종 표본은 배제 태그로 전환 예정).

## 4. Component Behaviors
- **일간 정체성 카드 ×10** (브랜드 최고 자산): 입력 완료 즉시 출력. 오행색 도트 + 한자 + 영어 물상명(배지명은 `docs/badge-naming-en.md` 확정값, astrobazi 선점 공식 회피) + 물성 스틸컷. 워드마크는 {{BRAND}} 토큰.
- **공유 카드**: 4:5 / 9:16. 배지 + stat 한 줄 + 오행 5도트 + {{BRAND}} 시그니처. 스펙: `docs/share-card-v2-spec.md` (1:1 폐기).
- **컷 블록**: 무료 결과 하단 "HERE, THE DIAGNOSIS ENDS" + 처방 프리뷰 + CTA. 카피: `docs/cutblock-copy-en-kr.md`.
- **결제 보증 블록**: 3줄 고정 + Apple Pay / Google Pay (Apple 로고 포함 · flows 결함 #2).
- **재접근·영수증**: 결제 화면 이메일 1필드 + 매직 링크 영수증. 설계: `docs/reaccess-and-receipt-design.md`.
- **대운 타임라인**: 7번 주제 전용. "WHEN THE BANKS ARRIVE" 원형.
- **입력**: "I don't know my birth time" 1급 옵션 필수.
- **Primary CTA**: 먹색 단색 필 + 한지 텍스트. Hover 2px lift, glow 금지. 골드는 시그니처 전용.
- **가격·워드마크**: {{PRICE}} · {{BRAND}} 토큰 필수. 하드코딩 금지 (G1).

## 5. Layout Principles
모바일 1컬럼 에디토리얼. 대형 세리프 히어로. 벤토 그리드는 공유 카드와 결과 요약에 한정. Hero 서사 순서 고정: 히어로 → 일간 정체성 카드 → 배지 스트립 → CTA. 여백 ≥55%. 워드마크는 {{BRAND}} · Stitch 자동 생성 워드마크("NOCTURNE OBANG", "SAJU" 등)는 전부 교체 대상.

## 6. Motion Philosophy (결정론)
1. 같은 입력 = 같은 계산 연출 시퀀스. 랜덤 스피너·프로그레스 바 금지.
2. '계산 중' = 물상 조립 단계 리빌 (3~4단계, 스킵 가능, 4열 年月日時 구조).
3. 200~400ms ease-out. 글로우 펄스 금지(다크 v0.2 잔재).
4. 스크롤잭킹·패럴랙스 금지. 구현 참고: `04-design-tokens/motion-refs.md`.

## 7. Anti-Patterns (hard bans)
- 카피: fortune, destiny, fate, "the stars say", 운명·길한 날·팔자, 십신·격국 등 학파 용어 노출, **em-dash(-/-) 전면 금지(가운뎃점 · 또는 콜론 사용)**.
- 비주얼: 수정구·점성술 원반·타로 클리셰, 단청 원색·한옥 장식, 별·달·천체 모티프, 다크 배경, 이모지, 3열 아이콘 카드 랜딩.
- 구조: 로그인 유도, 구독 상품, 광고 슬롯, 카운트다운·가짜 할인.
- 신뢰 라인의 그라데이션 텍스트 처리.
- 사람·셀럽 사진. 사진은 한지·먹 텍스처만 허용.

## 8. Voice (The Pattern 벤치마크)
- 주어는 항상 "당신". 구조는 단정, 미래는 조건문.
- 어휘: pattern, tendency, the way you're built, thrive in, drawn to.
- 카피 정답지: `docs/copy-deck-v2-kr.md` + `docs/copy-deck-v2-en.md` (em-dash 0 기계검증 완료). Stitch 카피는 초안이며 검수 필수.

## 9. 검증 게이트
1. P1-P7 체크리스트 (`01-analysis/product-analysis.md` §5)
2. design-taste-frontend §14 Hard pre-flight
3. 공유 카드 단독 문맥 성립 테스트 (`docs/share-card-v2-spec.md`)
4. gate-cto-solutions.md G1-G8 조건 (머지 전 필수)
