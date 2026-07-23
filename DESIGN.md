# Design — Forever 13 Foundation

<!-- impeccable:design-schema 1 -->

World name: **Keep Smiling** (warm editorial refinement).

## Direction contract

**THESIS.** A warm, hand-touched tribute that feels made by people who loved
Connor, not generated. It keeps the real brand energy (electric royal blue,
wings) but grounds it on warm ivory paper with grain, characterful type, and
human marginalia (a handwritten family note, a scrolling "keep smiling", the
Miss Jones anecdote pulled out like a memory). It refuses cold flat-white SaaS
minimalism and the cream-plus-serif memorial cliché alike.

**OWN-WORLD.** Warm ivory paper (`#f6f1e8`) with a faint grain overlay for
tactility; warm espresso ink for text; **electric royal blue (`#0a5cf5`)** as
the brand's energy, used as the accent and as two drenched brand bands (the
promise, the give). Photography is warm and large, in soft off-white mats with
real (offset) shadow. Handwriting (Caveat) carries the human voice. The wings
recur as a quiet watermark and the "13" as a recurring mark. Type is Bricolage
Grotesque (warm, characterful display) over Hanken Grotesk (humane body), with
Caveat for personal notes.

**STORY.** Land in warm light with Connor's smile and "keep smiling" in his
family's hand. A marquee carries his memory across the page. Meet who he was
(the Miss Jones story), read his story beside the photo of him holding his baby
portrait, feel the family's promise on the bold blue band, meet the real family,
and give, closed by a handwritten sign-off from the family.

**FIRST VIEWPORT.** Warm ivory, a faint wings watermark, "Forever 13" set large
in Bricolage with the blue "13", "keep smiling" in script beneath, one warm
line, a small "A Mississippi nonprofit, est. 2024" detail, and a solid blue
Donate beside "Meet Connor". Connor's beach portrait sits in a soft mat, gently
revealed. Real logo in the header.

**FORM.** Warm editorial tribute, brief-pinned. Rhythm varies section to
section. One authored focal motion (hero reveal + word rise); everything else is
quiet supporting motion.

## Color

Committed electric blue on warm ivory. Chosen for Connor's sunlit photos and the
vivid logo, warmed so the page feels handmade, not clinical. Light, warm, for a
phone held in daylight.

- `--paper: #f6f1e8` · `--paper-2: #efe7d7` (warm alt) · `--card: #fffdf7`.
- `--ink: #22201b` (warm near-black) · `--ink-2: #5b5347` · `--ink-3: #8a8172`.
- `--blue: #0a5cf5` · `--blue-deep: #063bb0` · `--blue-bright: #2f86ff` ·
  `--blue-050: #ecf2ff`.
- `--rule: #e3dccb` (warm hairline) · `--silver` chrome only on logo-echo details.
- On blue bands: white text, tints of white for secondary.

Contrast: ink on paper and white on blue both clear AA.

## Type

- Display: **Bricolage Grotesque** (600/700/800). Headlines and "Forever 13".
  Chosen for warmth and character over the cold neutral grotesque it replaces,
  and over the serif-memorial cliché.
- Body/UI: **Hanken Grotesk** (400/500/600/700).
- Script: **Caveat** (600/700). Handwritten human moments only (the family's
  note, "keep smiling", captions). Never body text.
- Fluid `clamp()`. Hero display up to ~6rem. Body 1.06–1.19rem, measure 60–68ch.
  More space above headings than below.

## Texture, motif, imagery

Real optimized photos in `assets/img/` (see its README): hero (beach), who-he-
was (car), story (holding his baby portrait), family (event group), logo. A
low-opacity SVG grain overlays the paper for warmth. Wings watermark behind key
headings; the "13" as a recurring mark. A slow "keep smiling · forever 13"
marquee adds character and motion.

## Motion (thesis)

**Focal moment:** the hero, on load, reveals Connor's photo with a soft
clip-path/opacity wipe while the headline words rise once, staggered, from
warm paper. **Supporting:** gentle scroll-reveal (opacity + small rise, capped
stagger), a continuous marquee, and a light parallax drift on the hero
watermark. Easing `cubic-bezier(0.16,1,0.3,1)`; content visible without JS.
Everything collapses to static under `prefers-reduced-motion`.

## States & config

Buttons/links have hover, focus-visible, active. Gallery lightbox is keyboard +
Escape accessible. Donate URL lives in ONE value (`DONATE_URL` in
`assets/js/main.js`) read by every control. No em-dashes anywhere in copy.
