# Forever 13 Foundation

A two-page memorial website for the **Forever 13 Foundation**, a nonprofit
founded in memory of **Connor Taylor**. Built by Aurex Agency.

Its single most important job: make giving easy and moving. A Donate action
stays within reach on every screen; Connor's story earns the gift.

## Pages

- **`index.html`** — Home: hero, mission, Connor's story, the team, donate + QR, footer.
- **`gallery.html`** — Event photo gallery with an accessible lightbox.

## Design

Design world **"First Light"** — a warm, hopeful memorial (deep dawn blue,
silver light, one gold "hope" accent), *not* a racing look. Direction, tokens,
and rationale are documented in [`DESIGN.md`](DESIGN.md); product truth in
[`PRODUCT.md`](PRODUCT.md); the full strategy in [`PLAN.md`](PLAN.md).

Built as a plain static site (HTML + CSS + vanilla JS) — no build step, hosts
anywhere (Netlify, Vercel, GitHub Pages, etc.).

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Going live — what to finish

Everything works today with tasteful placeholders. To launch:

1. **Donation link** — set `DONATE_URL` (one value) in `assets/js/main.js`.
   Every Donate button and the QR wire off that. Swapping to Zeffy later is the
   same one-line change.
2. **Images** — drop real files into `assets/img/` using the exact filenames in
   [`assets/img/README.md`](assets/img/README.md) (logo, Connor's photos, team
   headshots, gallery, donation QR, social share card). Each placeholder in the
   HTML is labeled with the filename it expects.
3. **Contact & socials** — replace the clearly-marked *sample* email/social
   links in the footer of both pages.
4. **Confirm** — the VP's surname (`Chelsea Carter` vs `Williams` — flagged in
   an HTML comment) and the production domain.

## Design tooling

This project has [Impeccable](https://impeccable.style) installed under
`.claude/` — an AI design skill (commands like `/polish`, `/audit`) with an
anti-pattern detector that runs on save. Run a check anytime:

```bash
node .claude/skills/impeccable/scripts/detect.mjs index.html gallery.html
```
