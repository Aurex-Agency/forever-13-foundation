# Design — Forever 13 Foundation

<!-- impeccable:design-schema 1 -->

World name: **First Light.**

## Direction contract

**THESIS.** A memorial that looks *up toward light*, not down into grief. The
surface refuses both category defaults: the racing/motorsports look the family
explicitly rejected, and the AI "memorial" default of warm cream ground + italic
serif + terracotta. Instead it commits to the brand's own sky: deep dawn blue,
silver light, one warm gold glow for hope. Connor is "dancing in the sky."

**OWN-WORLD.** Deep dawn-blue fields own whole regions (hero and donate close
are near-drenched navy); a cool porcelain light carries the reading passages
(mission, story, team) — the "ground" where the community lives. Silver is the
light on the water; a single warm luminous gold is reserved for the one sacred
action (Donate) and the "13" mark — never spread around. Type is Spectral
(literary serif, for Connor's name, titles, and quotes) over Hanken Grotesk
(humanist sans, for copy and controls). A hand-built wings+13 monogram appears
quietly: nav, a large low-opacity hero watermark, a slim section divider, footer.

**STORY.** A visitor lands in a calm dawn sky with Connor's face, his name, and
"Forever 13," one line on why the foundation exists, and a glowing Donate. They
descend to the ground to read the mission and meet Connor in the family's own
words ("Keep Smiling," "Dancing in the Sky"), then the real people behind it,
then rise back into the sky for a larger, warmer ask with a QR code.

**FIRST VIEWPORT.** Full-bleed dawn-sky gradient with a slow drifting light and
a faint wings+13 watermark. Left/centered: memorial eyebrow "In Memory of Connor
Taylor," then "Forever 13" in large Spectral, a single sentence, and the gold
Donate button beside a quiet Gallery link. Connor's portrait sits in a
soft-edged frame to the side (placeholder until the real photo drops in). Sticky
header above it all: monogram + wordmark, Home · Gallery, gold Donate.

**FORM.** Editorial memorial long-page, brief-pinned (the client approved this
direction in PLAN.md), so no concept-seed roll was run. Composition arc:
Sky → Ground → Sky → deepest-blue footer.

## Color

Committed-to-Drenched blue with a single warm accent. Picked for a phone held
anywhere, day or night, by people who loved a child — light emerging from blue
reads as hope; a dark-only or cream-only world would read as either grief or
greeting-card.

- `--sky-900: #081228` · `--sky-800: #0b1a38` · `--sky-700: #12244c` — deep
  dawn fields and footer.
- `--sky-horizon: #21407e` — the lighter band where light breaks.
- `--silver-100: #eef2fb` · `--silver-300: #c6d2ea` · `--silver-500: #93a4c8`
  — light and secondary text on sky (tinted from the hue, never neutral gray).
- `--porcelain: #f4f7fc` · `--porcelain-2: #eaf0f9` — cool reading ground (NOT
  cream).
- `--ink-900: #0e1830` · `--ink-600: #33456b` — text on porcelain.
- `--gold-400: #f0c674` · `--gold-500: #e6b45a` · `--gold-600: #cf9a3e` — the
  single sacred/hope accent: Donate CTA, the "13", small light glints. Contrast
  gold text only on dark; on light use `--gold-600` or darker.

Contrast: silver-100 on sky-800 and ink-900 on porcelain both clear AA. Gold is
a surface/mark color, not body text on light.

## Type

- Display: **Spectral** (300/400/500/600, plus 400 italic for quotes). Connor's
  name, "Forever 13," section titles, pull quotes. Chosen over the Fraunces/
  Playfair default to avoid the memorial cliché and match a plainspoken family
  voice; screen-native with gentle warmth.
- Text/UI: **Hanken Grotesk** (400/500/600/700). Body, nav, buttons, labels.
- Fluid scale via `clamp()`. Hero display `clamp(2.75rem, 8vw, 5rem)` (≤6rem
  floor). Body 1.0625–1.1875rem, measure 62–72ch. Tracking floor -0.04em; body
  0; display slightly negative. More space above headings than below.

## Motif & imagery

- `wings+13` monogram is inline SVG (silver stroke), scalable, one source of
  truth. Large hero watermark at ~6–10% opacity; small in nav/divider/footer.
- Authored atmosphere only (layered CSS sky + slow light drift + faint stars) —
  not a lazy single gradient, and never generic glass/gradient chrome as filler.
- Real photos of Connor/events go in labeled slots; until then, soft porcelain
  placeholder frames carry a small monogram and a caption of what belongs there.
  Team uses initials-monogram tiles (headshots deferred by client).

## Motion

One orchestrated language: content is visible by default; on scroll it *rises
into light* (translateY + fade, exponential ease-out, staggered per section, not
an identical entrance everywhere). Hero light drifts slowly. Everything inside
`@media (prefers-reduced-motion: reduce)` collapses to static. No scattered
hover novelties; buttons and links get calm, purposeful state changes.

## Depth & states

Shadows carry real offset + soft blur (no zero-offset halos). Gold Donate button
has hover, focus-visible, and active states and a genuine drop shadow. Gallery
tiles have hover, focus, and an accessible lightbox with keyboard + Escape.
Provide empty/placeholder states for missing photos.

## Donate config

The donate URL and cashtag/handle live in ONE place (a single JS/config value +
one QR image slot) used by every Donate control. Provider swap or move to Zeffy
= change one value and one QR. Button is present but intentionally unwired
(placeholder href) for this build.
