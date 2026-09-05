# Design System: Nocturne Obang (K-Saju Service)
**Skill:** stitch-design-taste · **Project:** Korean Saju (물상론) reading service for global K-culture fans
**Version:** v0.2 (2026-09-04) — Stitch 3안 검증(A 56 / C 76 / A+C 87)으로 확정된 방향을 반영. v0.1 "Hanji Ink"(라이트 단독)는 읽기 모드로 흡수됨.
**상위 문서:** `02-direction/design-direction.md` (창작 방향 원본) · `01-direction/design-analysis.md` (니즈 분석)
**Stitch DS 고정값:** 프로젝트 `11843585505944593298` · Nocturne Obang DS `assets/eb0e569bc76a4af680d4ee6eb43ee128` — 재생성 시 항상 이 DS를 주입한다.

## Configuration — Set Your Style

| Dial | Level | Rationale |
|------|-------|-----------|
| **Creativity** | `7` | Dark editorial premium. Expressive devices: meridian badge strip + gold signature. Nothing else decorative. |
| **Density** | `3` | A+C 관찰상 중단 밀도가 유일한 감점 요소였다. 여백을 늘려 3으로 조정. |
| **Variance** | `6` | Hero → badge strip → card preview → CTA. 섹션마다 구조를 바꾸되 흐름은 서사 순서를 유지. |
| **Motion Intent** | `5` | 결정론적 연출만(같은 입력 = 같은 시퀀스). 계산 중 조립 리빌 + 카드 시그니처 글로우 한정. |

---

## 1. Visual Theme & Atmosphere
"Nocturne Obang" — 밤의 먹색 바탕 위 오방색 자오선(meridian). Dark celestial editorial의 절제된 무드에, 오방 5색 시스템을 '박물관 라벨'처럼 의미 부여해 얹는다. 페이지 크롬(배경·텍스트)은 먹+한지 뉴트럴이 통제하고, 색은 물상 배지·도트·공유 카드 시그니처에만 나온다. 느낌의 목표: 고급 시계 공방의 사양서. 신비가 아니라 정밀함이 팔린다. 유료 리딩 화면은 한지 라이트 읽기 모드로 전환해 "책"이 된다.

## 2. Color Palette & Roles (다크 프리미엄 조정 오방)
Neutrals:
- **Ink Base** (#141416 → #1B1B1E) — 페이지 배경. 수(黑) 먹색 기원. 순검정 금지.
- **Ink Surface** (#202024) — 카드·섹션.
- **Hanji** (#F5F1E6) — 본문 텍스트, 라이트 모드 베이스. 금(白) 한지 백.
- **Hanji Muted** (#A8A29A) — 서브 텍스트·메타.

Obang (adjusted for dark web) — 물상 배지·도트·공유 카드 전용:
- **Wood 청** (#2E5A87) · **Fire 적** (#B33B24) · **Earth 황·금박** (#C9A227) · **Metal 백금** (#C0C6CD) · **Water 흑청** (#3B4A6B)

Hard rules:
1. Gold(#C9A227)는 CTA와 공유 카드 시그니처에만 쓴다. 남발 시 저가화된다.
2. 오행 5색은 페이지 크롬에 절대 금지. 배지·도트·시그니처 한정.
3. 라이트 읽기 모드: Hanji 베이스 + 먹 텍스트(#2A2724) + 오행 5도트. 유료 결과 화면 전용 토글.
4. 한지 그레인 오버레이 opacity 3~6% (textured-grains 트렌드).
5. BANNED: indigo→violet 그라데이션, 보라 배지 스팸, 글로우 남발(공유 카드 시그니처 예외), glassmorphism, 순백 배경.

## 3. Typographic Architecture (3본제)
| 역할 | 한글 | 라틴 | 비고 |
|---|---|---|---|
| 히어로·시작·공유 카드 | Noto Serif KR (본명조) | Cinzel | 한자 그리프 내장. 壬癸·木火土金水를 텍스트로 유지(이미지화 금지 = SEO·접근성) |
| 리포트 본문 | MaruBuri (마루 부리) | Cormorant | 장문 가독. 읽기 모드 본문 |
| 숫자·라벨·CTA | MaruBuri | Italiana (대형 단문 한정) | $12 가격 표기·카드 라벨의 럭셔리 헤어라인 |

- 한글 폰트 최종 확정은 눈누(https://noonnu.cc) 상업용 무료 라인업에서.
- BANNED: Inter, Roboto, 기본 시스템 산세리프, 3단 미만 타입 스케일.
- 스펙imen: `assets/typography/` (noto-serif-kr · maruburi-noonnu · italiana · cinzel · cormorant-garamond 등 16종).

## 4. Component Behaviors
- **물상 배지 ×10** (브랜드 최고 자산): 일간 10종. 오행색 도트 + 한자 + 영어 물상명. 배지 = 색 = 의미의 시스템. 단, 영어 명명은 astrobazi.com 선점 계열(The Flowing River 壬 등 "The + 형용사 + 자연물" 공식)을 그대로 쓰지 말고 재명명할 것.
- **공유 카드**: 1:1 / 4:5. 배지 + 핵심 한 줄("He is the dam to your river.") + 오행 5도트 시그니처 + 골드 워드마크. OG 겸용. 본문 없이 카드만으로 의미가 성립해야 한다.
- **컷 블록**: 무료 결과 하단 "HERE, THE DIAGNOSIS ENDS" + 처방 프리뷰 + CTA.
- **결제 보증 블록**: "One-time payment. No subscription. Delivered instantly. Full refund, no questions." 3줄 고정 + Apple Pay / Google Pay 버튼(Apple 로고 포함으로 교체할 것 - flows 결함 #2).
- **대운 타임라인**: 7번 주제("언제 달라지는가") 전용. AC 화면의 "WHEN THE BANKS ARRIVE" 구현이 원형.
- **챕터 내비**: 유료 결과 7주제 진행 인디케이터.
- **입력**: "I don't know my birth time" 1급 옵션 필수 (3방향 전부 구현 확인됨).
- **Primary CTA**: Gold fill + ink text. Hover 2px lift, glow 금지.
- **가격**: 변수 처리. 화면에 하드코딩 금지 (설계서 $8 / v2 $12 불일치 미해결).

## 5. Layout Principles
모바일 1컬럼 에디토리얼. 대형 세리프 히어로. 벤토 그리드는 공유 카드와 결과 요약에 한정. Hero 서사 순서 고정: 히어로 → 5원소 배지 스트립 → 공유 카드 프리뷰 → CTA. 여백 ≥55%. 워드마크는 서비스명 미확정 - Stitch 자동 생성 워드마크("NOCTURNE OBANG" 등)는 전부 교체 대상(flows 결함 #3).

## 6. Motion Philosophy (결정론)
1. 같은 입력 = 같은 계산 연출 시퀀스. 랜덤 스피너·프로그레스 바 금지.
2. '계산 중' = 물상 조립 단계 리빌 (3~4단계, 스킵 가능, 4열 年月日時 구조).
3. 200~400ms ease-out. 글로우 펄스는 공유 카드 시그니처에 한정.
4. 스크롤잭킹·패럴랙스 과다 금지. 구현 참고: `04-design-tokens/motion-refs.md`.

## 7. Anti-Patterns (hard bans)
- 카피: fortune, destiny, fate, "the stars say", 십신·격국 등 학파 용어 노출.
- 비주얼: 수정구·점성술 원반·타로 클리셰, 단청 원색·한옥 장식, 이모지, 3열 아이콘 카드 랜딩.
- 구조: 로그인 유도, 구독 상품, 광고 슬롯, 카운트다운·가짜 할인.
- 신뢰 라인의 그라데이션 텍스트 처리 (C 방향 결함 - 채택 시 수정).
- 사람·셀럽 사진. 사진은 한지·먹 텍스처만 허용.

## 8. Voice (The Pattern 벤치마크)
- 주어는 항상 "당신". 구조는 단정, 미래는 조건문.
- 어휘: pattern, tendency, the way you're built, thrive in, drawn to.
- 무료 샘플 문장(설계 문서 §5)이 톤의 정답지. Stitch 카피는 영문 초안 수준이므로 보닌 검수 단계 필수.

## 9. 검증 게이트
1. P1–P7 체크리스트 (`01-analysis/product-analysis.md` §5)
2. design-taste-frontend §14 Hard pre-flight
3. 공유 카드 단독 문맥 성립 테스트
4. flows-verification.md 결함 5건 중 미해결 3건(#1 비정상 비율, #2 Pay 로고, #3 워드마크) 처리 확인
