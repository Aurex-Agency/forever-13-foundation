# Forever 13 Foundation

A two-page memorial website for the **Forever 13 Foundation**, a nonprofit
founded in memory of **Connor Taylor**. Built by Aurex Agency.

Its single most important job: make giving easy and moving. A Donate action
stays within reach on every screen; Connor's story earns the gift.

## Pages

- **`index.html`** — Home: hero, mission, Connor's story, the team, donate + QR, footer.
- **`gallery.html`** — Event photo gallery with an accessible lightbox.

## Design

Design world **"Keep Smiling"** — bright, sunlit, and photo-led, in the
foundation's real brand (electric royal blue + chrome/silver from the logo),
leading with Connor's own smiling photos. Direction, tokens, and rationale are
in [`DESIGN.md`](DESIGN.md); product truth in [`PRODUCT.md`](PRODUCT.md); the
full strategy in [`PLAN.md`](PLAN.md).

Built as a plain static site (HTML + CSS + vanilla JS) — no build step, hosts
anywhere (Netlify, Vercel, GitHub Pages, etc.). Real logo and photos are
embedded; see [`assets/img/README.md`](assets/img/README.md).

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Going live — what to finish

Everything works today with tasteful placeholders. To launch:

1. **Donation link** — set `DONATE_URL` (one value) in `assets/js/config.js`.
   Every Donate button and the QR wire off that. Swapping to Zeffy later is the
   same one-line change.
2. **Photo uploads** — set `CLOUDINARY_CLOUD_NAME` and
   `CLOUDINARY_UPLOAD_PRESET` in `assets/js/config.js` (from a free Cloudinary
   account with an unsigned upload preset and resource lists enabled). The
   family then adds photos from a phone at `/add-photos` (hidden page,
   passcode in the same config file) and they appear in the gallery
   automatically.
3. **Donation QR** — the logo and Connor's photos are
   already embedded; still to add are `donate-qr.png` and event photos (see
   [`assets/img/README.md`](assets/img/README.md)).
4. **Contact & socials** — replace the clearly-marked *sample* email/social
   links in the footer of both pages.
5. **Confirm** — the VP's surname (`Chelsea Carter` vs `Williams` — flagged in
   an HTML comment) and the production domain.

## Design tooling

This project has [Impeccable](https://impeccable.style) installed under
`.claude/` — an AI design skill (commands like `/polish`, `/audit`) with an
anti-pattern detector that runs on save. Run a check anytime:

```bash
node .claude/skills/impeccable/scripts/detect.mjs index.html gallery.html
```
