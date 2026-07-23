# Design — Forever 13 Foundation

<!-- impeccable:design-schema 1 -->

World name: **Keep Smiling.** (Replaces the earlier "First Light" world.)

## Direction contract

**THESIS.** Celebrate Connor's smile — don't mourn in the dark. This build
refuses two defaults: the muted navy/gold "tasteful memorial" of the first
attempt (which ignored the real brand and felt generic), and the AI section-
stack of identical eyebrow→title→body→card blocks. Instead it is **bright,
sunlit, and photo-led**, in the foundation's actual brand: electric royal blue,
chrome/silver, black, white — with Connor's real face leading and the real
winged logo as the anchor.

**OWN-WORLD.** A light, airy base (white + cool paper) for lift and honesty;
**electric royal blue (`#0a5cf5`)** as a committed brand color that owns whole
bands (the "promise" section and the give section are drenched blue); **chrome/
silver hairlines and rules** echo the metal outline of the logo; black ink for
type. Real photography is the material — big, warmly cropped, sometimes bleeding
across section edges. The **angel wings** from the logo recur as a quiet
watermark. Type is Archivo (wide, confident display) + Hanken Grotesk (humanist
body) + Caveat (a handwritten accent for "Keep Smiling" and personal notes,
echoing the logo's script).

**STORY.** A bright hero with Connor's sunlit face, "Forever 13," and "keep
smiling" in his own kind of script. The visitor meets who he was, reads his
story beside the photo of him holding his own baby portrait, understands the
family's promise (the bold blue band), meets the real family behind it (the
event photo + roster), and is asked to give — warmly, confidently.

**FIRST VIEWPORT.** Asymmetric editorial: Connor's beach portrait large to one
side; on the other, "Forever 13" set big in Archivo, "keep smiling." in Caveat,
one sentence of purpose, and a solid electric-blue Donate. The real logo sits in
the header. No dark gradients, no placeholder boxes.

**FORM.** Photo-led editorial tribute, brief-pinned (the client demanded a full
revamp around the real assets), so no concept roll. Rhythm deliberately varies
section to section — no repeated block template.

## Color

Committed electric blue on a light ground. Chosen for Connor's own sunlit,
joyful photos and the vivid real logo; a dark or muted world would contradict
both. Picked for a phone in daylight, shared at events and on social.

- `--blue: #0a5cf5` (primary brand) · `--blue-bright: #1f86ff` · `--blue-deep:
  #063bb0` (hover/gradient) · `--blue-ink: #06205f` (text on blue tints).
- `--blue-050: #eef4ff` · `--blue-100: #dde9ff` — soft tint fields.
- `--ink: #0b1220` (near-black, faintly blue) · `--ink-2: #3b4a63` (secondary text).
- `--paper: #ffffff` · `--paper-2: #f5f8fd` (cool, never cream).
- `--silver: #c7d0dc` · `--chrome-*`: a light→dark silver gradient used only on
  thin rules/dividers to echo the logo's metallic outline (never as filler).

Contrast: ink on paper and white on `--blue` both clear AA. Secondary text on
paper uses `--ink` tints, never flat gray.

## Type

- Display: **Archivo** (700/800/900). Big, wide, confident headlines and
  "Forever 13". Tracking negative at large sizes. Not a serif; deliberately
  breaks from the memorial-serif cliché.
- Body/UI: **Hanken Grotesk** (400/500/600/700). Copy, nav, buttons, labels.
- Accent: **Caveat** (600/700), handwritten. Only for short human moments —
  "keep smiling", a signed note — echoing the logo's script. Never body text.
- Fluid scale via `clamp()`. Hero display up to ~clamp(3rem, 8vw, 6rem) (≤6rem
  floor). Body 1.0625–1.1875rem, measure 60–70ch. More space above headings than
  below.

## Imagery & motif

Real, optimized photos ship in `assets/img/` (see its README for sources):
`connor-hero.jpg` (beach portrait, hero), `connor-smile.jpg` (car, joyful),
`connor-memory.jpg` (holding his baby portrait, story), `family-event.jpg`
(the family in Forever 13 shirts, community/team), plus `logo.png`. The wings
recur as a low-opacity watermark behind key headings. Any future photos slot in
by the manifest; gallery uses real event photos.

## Motion & depth

One calm language: photos and headings rise gently into place on scroll
(translateY + fade, exponential ease-out, staggered), collapsing to static under
`prefers-reduced-motion`. Shadows carry real offset + soft blur. Buttons and
links get purposeful hover/focus states; the gallery lightbox is keyboard- and
Escape-accessible.

## Donate config

The donate URL lives in ONE value (`DONATE_URL` in `assets/js/main.js`) read by
every Donate control + the QR slot. Provider swap or move to Zeffy = one line.
Button is present; wire it when the handle is ready.
