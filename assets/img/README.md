# Image assets

Real, web-optimized images from the client's Google Drive are now in place.
Originals are kept in `source/` for re-editing.

## In use (real, optimized)

| File | Where | From (Drive) |
| --- | --- | --- |
| `logo.png` | Header + footer | `png (1).png` (downscaled to 1200px) |
| `connor-hero.jpg` | Home hero portrait | `IMG_0834.jpeg` (beach) |
| `connor-smile.jpg` | "Who he was" | `IMG_0833.jpeg` (car) |
| `connor-memory.jpg` | Connor's story | `Pictures.jpeg` (holding his baby portrait) |
| `family-event.jpg` | The Family + Gallery | `b5cad47e…jpg` (event group photo) |

## Still to add before launch

| File | Where | Notes |
| --- | --- | --- |
| `donate-qr.png` | Give section | The CashApp/Venmo QR. Uncomment the `<img>` in `index.html`'s `.qr`. |
| `gallery-02.jpg` … | Gallery | Event photos. Follow the commented pattern in `gallery.html`. Phase 2 makes this a self-serve phone upload (see `PLAN.md`). |
| `og-image.jpg` | Social share card | 1200×630. Optional — currently the hero photo is used. |
| `favicon.png` | Browser tab | Optional — an inline "13" favicon ships by default. |

## Regenerating optimized images

`source/` holds the raw originals. To re-optimize (e.g. after adding new
photos), resize to ~1200–1800px wide and save progressive JPEG at ~q82. The
one-off script used lived in the build; any image tool (Squoosh, ImageMagick,
Pillow) does the same.

## Tips

- Keep web images < ~350 KB for fast mobile load.
- Always add meaningful `alt` text for screen readers.
