# Image assets — drop-in manifest

The site ships with tasteful placeholders so it looks finished today. To go
live with real imagery, drop the files below into this folder using **exactly
these filenames** — no code changes needed. Every placeholder in the HTML is
labeled with the filename it expects.

## Brand

| Filename | What it is | Source (client Google Drive → "Logos" folder) |
| --- | --- | --- |
| `logo.png` | Official Forever 13 logo, transparent PNG, ~600px+ wide | `png (1).png` |
| `logo-mark.svg` | *(optional)* wings+13 mark only, if exported from the `.ai` | `vetor.ai` |
| `favicon.png` | 512×512 square version of the mark for the browser tab | derive from logo |
| `og-image.jpg` | 1200×630 social share card (Connor + name) | compose from a hero photo |

Until `logo.png` is added, the header shows a faithful hand-built wings+13
monogram (inline SVG). Once the official logo is in place, see the note in
`index.html` near the header to switch the wordmark to the image.

## Connor (Home page)

| Filename | Slot | Notes |
| --- | --- | --- |
| `connor-hero.jpg` | Hero portrait | The single strongest photo of Connor. Portrait/vertical works best. |
| `connor-story-1.jpg` | Connor's story | A candid, warm photo. |
| `connor-story-2.jpg` | Connor's story | Optional second photo. |

## Team (Home page)

Headshots are **deferred by the client** for now — the team section uses elegant
initials tiles. When ready, add `team-<firstname>.jpg` (e.g. `team-collin.jpg`)
and follow the note in `index.html`'s team section to switch a tile to a photo.

## Gallery (gallery.html)

Add event photos as `gallery-01.jpg`, `gallery-02.jpg`, … and add one `<figure>`
per photo following the commented pattern in `gallery.html`. (Phase 2 replaces
this with the self-serve phone upload flow described in `PLAN.md` §6, so the
family never edits HTML.)

## Image tips

- Compress before uploading (TinyPNG/Squoosh) — aim < 400 KB each for fast
  mobile load. The CSS handles cropping/fit; any orientation works.
- Provide meaningful `alt` text when you add a photo (the placeholders show
  where). It matters for screen readers and for people Connor's story reaches.
