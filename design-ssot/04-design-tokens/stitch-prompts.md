# Stitch 화면 생성 프롬프트 시드

사용법: Stitch에서 Web 프로젝트 생성 후, 각 화면 프롬프트에 DESIGN.md 전문을 첨부(또는 MCP 컨텍스트로 주입)하고 아래 시드를 붙인다. 한 화면씩 생성하고, 마음에 드는 화면이 나오면 "Refine"으로 미세 조정한다. 한 번에 여러 화면을 생성하지 않는다. 톤이 흐트러지면 DESIGN.md의 Anti-Patterns 조항을 프롬프트 뒤에 다시 붙인다.

---

## 공통 접두어 (모든 화면 프롬프트 앞에 붙일 것)

```
Design a screen for a premium Korean Saju (four pillars) reading web service
for global K-pop fans, English-first, mobile-first (375px baseline).
Aesthetic: warm hanji paper (#F7F3EA) background, ink (#2A2724) typography,
hairline fog borders (#D8D2C7), serif display (Cormorant Garamond) + sans body
(IBM Plex Sans KR), generous whitespace, no photos of people, no stars/moons/
tarot cliches, no purple gradients, no glassmorphism. Single accent comes
from one colored nature illustration (ink-line style). Follow DESIGN.md.
```

---

## 화면 1 · Landing (시작)

```
Hero screen. Background: a faint gray single-stroke line landscape (mountain,
river, a small tree) covering the lower two-thirds, barely visible.
Headline in Cormorant Garamond: "You are a great tree." Subline in sans: "TikTok gave
you your Day Master. This is the system behind it." One ink-black CTA button
"Find my day master". Below the hero, three result cards fanned like sheets
of paper, each showing a colored ink-line nature object (green tree, blue
river, red sun), a large hanja glyph, and one English line. Header: wordmark
only + language switch. 70% of the screen is whitespace.
```

## 화면 2 · Input (입력)

```
Input screen. Title: "Your birth date." Three segmented fields YYYY / MM / DD
with monospaced digits and fog-gray underlines, no calendar widget. Below,
a horizontal chip row to pick a K-pop group (6 chips, paper cards). At the
bottom, eight empty slots shown as □ outlines with caption "Your eight
characters appear here." One ink CTA "See my matches". No birth-time field.
No signup, no email field.
```

## 화면 3 · Calculating (계산 중)

```
Loading screen, static mockup of the loading state. Hanji background with a
soft ink bloom spreading from center (radial diffusion, 20% opacity). Eight
slots across the middle; four already filled with hanja glyphs (乙, 丙, 壬,
己) in their stem colors, four still empty outlines. Caption in small sans:
"The reading is fixed by computation - the same birthday always yields the
same chart." No spinner, no progress bar. Calm and precise.
```

## 화면 4 · Free Result (무료 결과)

```
Result screen, list of 5 compatibility matches ranked 1 to 5, all fully
visible (no locks, no blur). Each row: rank number, member name, a small
colored ink-line nature object, a hanja glyph, and a one-line relationship
metaphor ("He is the dam to your river."). Top of screen: a large shareable
card preview (4:5) with share button pinned. Bottom of the list: a quiet
teaser section on paper background: "Why are you drawn to a great tree?
Your own chart holds the answer." + one ink button "Read my reading".
No countdown, no discount, no fake urgency.
```

## 화면 5 · Payment (결제)

```
Checkout screen, slightly darker paper tone. Product summary card: "Full
reading - 7 chapters" with a price placeholder. Two large black wallet
buttons first: " Pay" and "G Pay", then a hairline divider, then a quiet
card form (number/expiry/cvc). Trust lines in small text above the wallet
buttons, styled as a receipt: "One-time payment. No subscription. Delivered
instantly. Full refund, no questions." No badges, no timers, no upsell.
```

## 화면 6 · Paid Result (유료 리딩)

```
Editorial reading screen on bright hanji background (#F7F3EA),
for immersive night reading. Top: hanja glyph large in stem color + chapter
title in Cormorant Garamond ("The river without banks"). Body: single 640px column,
16px sans, 1.75 line height, paragraph every 3-4 lines. Small evidence tag
inline in mono ("node B2 - river kept flowing by metal"). Chapter nav at
bottom: 7 dots. A save-to-card button pinned. Feels like a beautifully set
book page, not an app dashboard.
```

---

## 생성 후 체크리스트 (매 화면)

- [ ] 배경이 #F7F3EA 계열인가 (순백 아님)
- [ ] CTA가 먹색 단색인가 (천간색 CTA 금지)
- [ ] 천간색이 텍스트로 쓰이지 않았는가
- [ ] 별·달·수정구·타로·단청 클리셰 없는가
- [ ] 보라/네온 그라데이션 없는가
- [ ] 사람 사진 없는가
- [ ] 여백 60% 이상 유지되는가
- [ ] 공유 카드가 4:5 규격인가
