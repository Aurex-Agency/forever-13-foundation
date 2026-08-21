# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily people who knew or hear about Connor Taylor — friends, family, local
community members in Mississippi, and event attendees — who arrive (most often
on a phone, often from a shared social link) wanting to understand who Connor
was and to give in his memory. Secondary: the foundation's own board members,
who need to hand out a link and, later, upload event photos themselves.

## Product Purpose

A two-page memorial website for the Forever 13 Foundation, a nonprofit founded
by Connor Taylor's family after he passed unexpectedly in a four-wheeler
accident in August 2024 at age 13. The site's single most important job is to
make giving effortless and moving: tell Connor's story, explain the mission,
introduce the people behind it, and keep a donate action within reach at all
times. Success = a first-time visitor understands who Connor was and gives.

## Positioning

This is not a generic charity site and — per the family's explicit correction —
**not a racing/motorsports look**. "Forever 13" means Connor was 13; the brand
carries angel wings and the number 13 as memorial symbols, not sport graphics.
The site's difference is authenticity: the family's own words, real photos of
Connor, and a tone that is warm, reverent, and hopeful rather than somber.

## Operating Context

- Most traffic is mobile, arriving from shared social posts and in-person events.
- At events the foundation shows a QR code so people can give on the spot.
- The family must be able to run the site with near-zero technical skill and no
  ongoing cost; future photo uploads should be self-serve from a phone.
- Two pages only: Home and an event photo Gallery.

## Capabilities and Constraints

- **Home page:** persistent donate action, hero, mission, Connor's story, team,
  a second larger donate block with QR, footer.
- **Gallery page:** responsive photo grid with full-screen lightbox.
- **Donations:** CashApp only, as a button + QR code. The
  donate link must live in ONE config value so switching providers (and, if the
  foundation becomes a 501(c)(3), moving to Zeffy) is a ~5-minute change.
- **Explicitly undecided / to be wired later:** the real donation handle
  (button is present but not yet wired), the production domain, tax status /
  MS charitable registration.
- **Deferred by the client for this build:** team headshots (use tasteful
  placeholders), real contact details (use clearly-marked sample info).

## Brand Commitments

- Name: **Forever 13 Foundation.** Memorial line: **"In Memory of Connor Taylor."**
- Tagline: **"Turning pain into purpose — one family at a time."**
- Connor's saying: **"Keep Smiling."** Connor's song: **"Dancing in the Sky."**
- Logo palette: **blue, black, silver**, with **angel wings** and the number
  **13**. Official logo files exist in the client's Drive (AI/PNG/JPG); the
  build uses a faithful placeholder mark until the optimized web logo is dropped
  in. Real photos of Connor and events only — never stock imagery of people.
- Voice: plain, warm, first-person-plural, from the heart. No corporate jargon.

## Evidence on Hand

- Family-authored mission statement, Connor's story, and full team roster with
  bios (President Collin Walters; VP Chelsea Carter/Williams — surname to
  confirm; Treasurer Becky Thurston; Secretary April Estes; Outreach Brandy
  Surunis, Connor's mother; Board members Alvin Estes, Jason Lindsey, Stephanie
  Walters). All body copy on the site comes from these real sources.
- Photos of Connor and the logo assets are in the client's Google Drive and
  will be dropped into labeled slots (see `assets/img/README.md`).
- No testimonials, donation totals, benchmarks, or 501(c)(3) status exist yet —
  none may be fabricated.

## Product Principles

1. **The story earns the gift.** Connor comes before the second ask, always.
2. **Giving is one tap away** on every screen, at every scroll position.
3. **Real and specific over generic.** The family's words and Connor's photos
   carry the site; nothing stock, nothing invented.
4. **Warm and hopeful, not somber or sporty.** Honor grief with light.
5. **The family owns it.** Simple to run, self-serve, swappable donate link,
   zero ongoing cost.

## Accessibility & Inclusion

All-ages, mobile-first audience. Target WCAG AA contrast, full keyboard
navigation, visible focus, alt text on every image, generous tap targets, and
`prefers-reduced-motion` support. Emotional content must never depend on motion
or color alone.
