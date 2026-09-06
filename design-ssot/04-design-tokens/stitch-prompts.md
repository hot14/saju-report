# Stitch 화면 생성 프롬프트 시드 (v0.2 · Nocturne Obang)

상위: `DESIGN.md` v0.2 · `02-direction/design-direction.md` · DS 고정값 `assets/eb0e569bc76a4af680d4ee6eb43ee128` (프로젝트 `11843585505944593298`)
사용법: Stitch에서 해당 프로젝트를 연 뒤 화면당 아래 시드를 붙인다. DS가 프로젝트에 고정돼 있어 별도 첨부 없이도 톤이 유지되지만, 흐트러지면 DESIGN.md §7 Anti-Patterns를 프롬프트 뒤에 다시 붙인다. 한 번에 한 화면씩.
이력: v0.1(라이트 초안) → v0.2(다크 확정 반영). flows-verification 결함 #1(비율)·#2(Pay 로고)·#3(워드마크) 수정 지시가 시드에 반영돼 있다.

---

## 공통 접두어 (모든 화면 프롬프트 앞에 붙일 것)

```
Design a screen for a premium Korean Saju (four pillars) reading web service
for global K-pop fans, English-first, mobile-first (375px baseline).
Direction "Nocturne Obang": deep ink background (#141416 to #1B1B1E), card
surface #202024, hanji-cream text (#F5F1E6) with muted #A8A29A, hairline
borders rgba(245,241,230,0.12). Typography: Noto Serif KR display + Cinzel
for hero/cards, MaruBuri + Cormorant for body, Italiana for large numerals.
Color appears ONLY as five-element meridian badges and dots (wood #2E5A87,
fire #B33B24, earth-gold #C9A227, metal #C0C6CD, water #3B4A6B); CTA is gold
#C9A227 fill with dark text. Subtle hanji grain overlay (3-6%). No photos of
people, no stars/moons/tarot cliches, no purple or indigo gradients, no
glassmorphism, no glow except the share-card signature. Follow DESIGN.md.
```

---

## 화면 1 · Landing (시작) — AC 확정안 재생성용

```
Hero screen on deep ink background. Top: wordmark placeholder (service name
TBD - use a neutral "SAJU" text mark, we will replace it). Headline in
Noto Serif KR / Cinzel: "You are a great tree." Subline in MaruBuri sans:
"TikTok gave you your Day Master. This is the system behind it."
Below: a horizontal strip of five element badges (wood blue dot 木 Wood,
fire red dot 火 Fire, earth gold dot 土 Earth, metal silver dot 金 Metal,
water navy dot 水 Water) like museum labels. Then a 4:5 share-card preview
tilted slightly, showing one colored ink-line nature object (blue river),
the hanja 壬 large in #3B4A6B, one line "He is the dam to your river.", and
five tiny element dots as signature. One gold CTA button "Find my day
master". 60% of the screen stays empty ink. No purple, no starfield.
```

## 화면 2 · Input (입력)

```
Input screen on ink background, card surface panel. Title: "Your birth
date." Three segmented fields YYYY / MM / DD with Italiana numerals and
cream hairline underlines, no calendar widget. Below, a horizontal chip row
to pick a K-pop group (6 chips, dark surface with cream text). First-class
option under the date fields: "I don't know my birth time" - styled as a
quiet checkbox, equally prominent. At the bottom, eight empty slots shown
as □ outlines with caption "Your eight characters appear here." One gold
CTA "See my matches". No signup, no email field.
```

## 화면 3 · Calculating (계산 중)

```
Loading screen, static mockup. Ink background with a soft gold-tinted ink
bloom spreading from center (radial diffusion, low opacity, no glow ring).
Four columns labeled Year / Month / Day / Hour; each column shows its two
character slots filling in sequence - currently 乙 丙 壬 己 placed, the rest
empty cream outlines. Under each placed glyph a tiny element dot in its
color. Caption in small muted sans: "The reading is fixed by computation.
The same birthday always yields the same chart." Deterministic 4-stage
assembly, skippable. No spinner, no progress bar.
```

## 화면 4 · Free Result (무료 결과)

```
Result screen on ink background. Top: a large 4:5 shareable card preview
with a pinned share button; card shows one colored ink-line nature object,
hanja glyph, the line "He is the dam to your river." and the five-dot
signature. Below: all 5 compatibility matches ranked 1 to 5, fully visible,
no locks and no blur. Each row: rank number in Italiana, member name, a
small colored ink-line nature object, hanja glyph, one-line metaphor. Fifth
row reads "You slow each other down." - last place keeps a name, never a
blank. Bottom: a cut block on slightly lighter surface: "HERE, THE
DIAGNOSIS ENDS." + three-line teaser "Why are you drawn to a great tree?
Your own chart holds the answer." + one gold button "Read my reading".
No countdown, no discount, no fake urgency.
```

## 화면 5 · Payment (결제)

```
Checkout screen on ink background, payment panel on card surface. Product
summary card: "Full reading - 7 chapters" with a price placeholder in
Italiana. Two large wallet buttons FIRST: an Apple Pay button with the
Apple logo and "Pay" (logo must be visible, not text-only) and a Google Pay
button with the G Pay mark. Then a hairline divider, then a quiet card form
(number/expiry/cvc). Trust lines in small cream-muted text directly above
the wallet buttons, styled as a receipt: "One-time payment. No
subscription. Delivered instantly. Full refund, no questions." No badges,
no timers, no upsell, no gradient text on the trust lines - plain cream text.
```

## 화면 6 · Paid Result (유료 리딩 · 라이트 읽기 모드)

```
Editorial reading screen that switches to LIGHT reading mode: warm hanji
paper background #F5F1E6, ink text #2A2724. Top: hanja glyph large in its
element color + chapter title in Noto Serif KR ("The river without banks").
Body: single 640px column, 17px MaruBuri, 1.8 line height, paragraph every
3-4 lines. Small evidence tag inline in mono ("Chart basis: node B2 - river
kept flowing by metal"). A five-dot chapter rail at bottom shows progress
across the 7 topics. A save-to-card button pinned. Feels like a beautifully
set book page, not an app dashboard.
```

---

## 생성 후 체크리스트 (매 화면)

- [ ] 배경이 다크 먹(#141416~#1B1B1E)인가 (라이트는 6번 읽기 모드만)
- [ ] CTA가 골드 #C9A227 단색인가 (보라·그라데이션 CTA 금지)
- [ ] 오행 5색이 크롬(배경·텍스트)에 새지 않았는가 (배지·도트·시그니처 전용)
- [ ] 별·달·수정구·타로·단청 클리셰 없는가
- [ ] indigo/violet 그라데이션·글로우 남발 없는가 (카드 시그니처 예외)
- [ ] 사람 사진 없는가
- [ ] 여백 55% 이상 유지되는가 (중단 밀도 과다 금지)
- [ ] 공유 카드가 4:5 규격 + 5도트 시그니처인가
- [ ] Apple Pay 로고가 텍스트가 아니라 로고로 렌더됐는가 (결함 #2)
- [ ] 워드마크가 임의 생성명("NOCTURNE OBANG" 등)으로 남지 않았는가 (결함 #3)
