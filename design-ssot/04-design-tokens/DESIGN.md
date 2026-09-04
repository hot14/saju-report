# Design System: Hanji Ink (K-Saju Service)
**Skill:** stitch-design-taste · **Project:** Korean Saju (물상론) reading service for global K-culture fans
**Source of truth:** 01-direction/design-analysis.md · **Updated:** 2026-09-04

## Configuration: Set Your Style

| Dial | Level | Rationale |
|------|-------|-----------|
| **Creativity** | `7` | Editorial premium. One expressive device only: the gray-line landscape with one colored Day-Master object. No extra decoration. |
| **Density** | `3` | Gallery-airy. Reading screens breathe; whitespace is the brand. |
| **Variance** | `6` | Sections alternate structure (hero → stacked cards → editorial column) without becoming chaotic. |
| **Motion Intent** | `5` | Two branded moments only (ink-bloom loading, card highlight). Everything else: 200–300ms fades. |

---

## 1. Visual Theme & Atmosphere
A quiet Korean paper studio. Warm hanji off-white paper, one spoon of ink. A pale gray line-drawn landscape (mountain, river, tree, sun) fills the background; exactly one natural object glows in its element color and heavier stroke. That object is the user's Day Master. The atmosphere is calm, literary, and precise: a fortune system that behaves like a reference book, never like a casino. The single most important visual rule: **faint scenery, vivid self** ("흐린 풍경, 선명한 나").

## 2. Color Palette & Roles
Neutrals (the only colors allowed on chrome):
- **Hanji Paper** (#FAF7F2): page background. Never pure white as a full-page base.
- **Wove White** (#FFFFFF): cards and sheets on the paper.
- **Fog Line** (#D8D2C7): 1.1px hairline borders, dividers, background landscape strokes.
- **Ink** (#2A2724): headings, primary CTA fill, footer text. The ONLY default CTA color.
- **Body Ink** (#57514A): body copy.
- **Mute** (#A39B8E): captions, metadata, fine print.

Ten Celestial Stem colors (usage rules below):
- 甲 Great Tree #2F6B54 · 乙 Vine #7CC2A6 · 丙 Sun #C2543D · 丁 Candle #E5A18C
- 戊 Mountain #A07C3C · 己 Garden #DCBE84 · 庚 Blade #5E6E78 · 辛 Gem #AFBBC2
- 壬 River #2C4463 · 癸 Rain #7B9BBD

**Hard color rules**
1. Stem colors appear ONLY on: the Day-Master object illustration, thin 2.6–3px accent borders, background tints at ≤8% opacity, and the hanja glyph. Never as text color on hanji (all ten fail contrast on paper; light stems like #7CC2A6 fail worst).
2. Buttons and links are always Ink (#2A2724). No stem-colored CTA, ever. Primary action = Ink fill + paper text.
3. Never pure black (#000000). Ink is the darkest value on screen.
4. BANNED: purple/blue neon, gradients, glassmorphism, drop shadows heavier than 40px blur at 5% opacity, more than one stem color per screen section (a compatibility screen may show exactly two).

## 3. Typographic Architecture
- **Display (EN):** `Fraunces` (optical sizes, soft wonk at large sizes). Fallback `Instrument Serif`. Tight tracking (-0.01em), weight 500–600, never screaming sizes. Example hero: 44–64px desktop / 34–44px mobile.
- **Serif accent (CJK):** `Nanum Myeongjo`: hanja glyphs (乙, 壬) and Korean pull-quotes only. Hanja renders LARGE as a visual asset (120–220px), often in its stem color.
- **Body/UI:** `IBM Plex Sans KR` or `Gowun Dodum`: all body copy, forms, buttons, both EN and KO. 16–17px, line-height 1.75, max 65–70 characters per line.
- **Data:** `IBM Plex Mono` for dates, the eight-character chart (�haeng display), timestamps.
- BANNED fonts: Inter, Roboto, Georgia, Times New Roman, and any default system serif.

## 4. Component Behaviors
- **Primary button:** Ink fill, hanji text, 10px radius, 48px min height, label in plain verbs ("Find my day master", "See the reading"). Hover: 2px lift, no glow. Press: 98% scale.
- **Secondary button:** transparent, 1.1px Fog Line border, Ink text.
- **Cards:** Wove White sheet, 14px radius, Fog Line border, no shadow (or whisper shadow only on overlapping stacks).
- **Share card (the product):** fixed 4:5 (1080×1350). Layers: hanji base → gray landscape → colored Day-Master object(s) → giant hanja glyph → one-line English sentence ("He is the dam to your river.") → wordmark. NOTHING else. Ranks and names sit in the caption band, not on the art.
- **Birth-date input:** three segmented fields (YYYY · MM · DD), Mono digits, Fog Line underlines, no calendar widget. No birth-time field in the free celebrity flow.
- **Calculating state:** 2.5–4s ink-bloom over hanji; the eight characters drop into 8 slots one by one; caption: "The reading is fixed by computation." Never a spinner.
- **Paywall (free result bottom):** 3-line teaser then a single Ink button. No countdowns, no fake urgency, no discounts. Trust lines always visible: "One-time payment. No subscription. Delivered instantly. Full refund, no questions."
- **Payment:** Apple Pay / Google Pay black buttons sit visually first; card form is below the fold. Price is a variable (never hardcode).

## 5. Layout Principles
- Whitespace budget: ≥60% empty paper on landing and reading screens.
- Asymmetric but calm: one offset per section, never mirrored repetition.
- Reading screens are a single 640px column with chapter headers in Fraunces + hanja.
- Mobile-first: 375px baseline; all primary actions thumb-reachable; share button pinned on result screens.
- Landing hero stacks: line landscape behind, headline over it, three share cards fanned below.

## 6. Motion Philosophy
Motion budget = 2 branded moments, everything else static.
1. **Ink bloom** (calculating screen): radial ink diffusion on paper, 2.5–4s, GSAP scale/opacity on an SVG turbulence mask. Skippable after first view.
2. **Card reveal** (result → share card): the Day-Master object strokes itself in (SVG stroke-dashoffset), then the hanja fades up 12px. 600–900ms.
Transitions: 200–300ms ease-out fades. Scroll: native momentum; no scroll-jacking, no parallax on mobile.

## 7. Anti-Patterns (hard bans)
- Western astrology clichés: stars, moons, crystal balls, zodiac wheels, tarot iconography.
- Korean kitsch: dancheong primary colors, hanbok patterns, brush-calligraphy decoration, pagodas.
- AI slop: purple/neon gradients, glassmorphism, emoji, glowing buttons, generic 3-column card grids, "Scroll to explore" filler.
- Trust killers: countdown timers, fake discounts, ads, subscription framing, dark patterns on the paywall.
- Photo usage: any human/celebrity photo anywhere. Photos are allowed only as hanji paper and ink textures.

## 8. Voice (for screen copy)
- Subject is ALWAYS "you/your". Never assert the other person's feelings or future actions.
- Structure is stated firmly ("This is how money moves through your chart."); future is conditional ("This period favors building containers for what you earn.").
- BANNED words: fortune, destiny, fate. Use: pattern, tendency, the way you're built.
- Never name professions. Describe conditions: "You work well where someone else sets the banks."
