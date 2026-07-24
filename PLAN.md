# Forever 13 Foundation — Website Plan

*In memory of Connor Taylor · Prepared by Aurex Agency · July 2026*

A two‑page website built to do one thing above all else: **make it effortless and moving to give.** Everything below serves that goal — the story earns the donation, the design honors Connor, and the mechanics stay dead simple for the family to run themselves.

---

## 0. The one big call — tone correction

The earlier draft leaned into a **"racing / motorsports"** look (racing blue, race‑style headlines, "motorsports energy"). The family's questionnaire answer corrects this directly:

> *"This is not a race look. The forever13 stands for Connor passed at the age of 13."*

**So we pivot the emotional register.** This is a **memorial foundation** for a 13‑year‑old boy with an enormous heart, who died unexpectedly. The design should feel:

- **Warm, reverent, and hopeful** — not fast, aggressive, or sporty.
- **Heartfelt first, polished second.** The angel wings and the number **13** are sacred symbols here, not sporty graphics.
- **Uplifting, not heavy.** Connor's saying was *"Keep Smiling."* The site should carry light, not grief.

We keep the logo's **blue / black / silver** palette (it's the brand), but we express it through a soft, airy, memorial aesthetic — think *sky, light, and wings* — rather than *speed and asphalt*. This single shift is what will make the site feel true to Connor instead of generic.

---

## 1. Who Connor was (the heart of the site)

Straight from the family, to be honored word‑for‑word with their approval:

> Connor was one of the kindest, most humble and well‑mannered children anyone could ever meet. He loved helping people and never expected anything in return. Every day after getting off the school bus, he would walk across the street just to sit and talk with his neighbor, Miss Jones. On holidays, he made sure he had a plate of food and personally took it to her. That's just who he was. He cared about people. He loved giving. He loved helping. He had a heart far bigger than his 13 years.

- **Passed:** four‑wheeler accident, August 2024, age 13.
- **Saying:** *"Keep Smiling"*
- **Song:** *"Dancing in the Sky"*
- **The 13:** Connor's age — the reason the foundation exists.

This section is the emotional core. It comes **before** the second donate ask on purpose — people give after they've met Connor.

---

## 2. Mission & voice

**Mission (family's words):**
> Forever 13 Foundation is a nonprofit founded in memory of Connor Taylor. We support families facing unexpected hardships through community support, fundraising, and acts of kindness.

**Origin (from the mission statement):** After Connor passed, a flood of people helped with funeral costs, brought food, and prayed for the family. The foundation exists to *pass that same support forward* to families facing their own hardest days.

**Tagline:** **"Turning pain into purpose — one family at a time."**

**Voice:** Plain, warm, from the heart. Short sentences. First person plural ("our family," "we"). No corporate nonprofit jargon. Real photos only — never stock.

---

## 3. Site architecture

Two pages, one persistent donate action.

| Page | Purpose |
| --- | --- |
| **Home** | Donate, mission, Connor's story, the team, second donate + QR, footer |
| **Gallery** | Event photos in a grid; tap to view full‑screen; self‑serve uploads |
| **Everywhere** | A Donate button that stays visible at all times — pinned in the header on desktop, floating at the bottom of the screen on phones |
| *(Hidden)* | A private, password‑protected **Add Photos** page for the family |

### Home — section by section

1. **Header / nav** — Logo, minimal menu (Home · Gallery), persistent **Donate** button.
2. **Hero** — Connor's name, "Forever 13," one strong photo, one line on why the foundation exists, and a primary **"Donate in Connor's Memory"** button. Angel wings + "13" motif used quietly here. Consider a gentle sky/light treatment behind the hero.
3. **Mission** — A few plain sentences: what we do, who we help, why it matters. Tagline anchored here.
4. **Connor's Story** — The family's words above, with the photos they choose. The emotional heart. "Keep Smiling" and "Dancing in the Sky" woven in tastefully.
5. **Impact / What we do** — Optional short band: "community support · fundraising · acts of kindness," with room for real numbers or family stories as they grow.
6. **The Team** — Photo, name, role, and a line for each person (roster below). Builds trust; shows the real people carrying this.
7. **Donate (primary block)** — Larger, warmer second ask *after* the story. Payment link **+ printable QR code** for in‑person events.
8. **Footer** — Contact, social links, one more donate link, subtle "In Memory of Connor Taylor · Forever 13."

### Gallery

- Clean, responsive photo grid; tap any photo for a full‑screen lightbox.
- Donate button stays visible.
- Photos are the family's real event photos, added by them (see §6).

---

## 4. The team

For the "Team" section. **One item to confirm:** the roster doc names the VP as **"Chelsea Carter"** in the heading but **"Chelsea Williams"** in the bio — we'll confirm the correct name before publishing.

| Name | Role |
| --- | --- |
| Collin Walters | President |
| Chelsea Carter *(confirm surname)* | Vice President |
| Becky Thurston | Treasurer |
| April Estes | Secretary |
| Brandy Surunis | Outreach / Social Media *(Connor's mother)* |
| Alvin Estes | Board of Directors |
| Jason Lindsey | Board of Directors |
| Stephanie Walters | Board of Directors |

Full bios are provided and ready to drop in. We'll want a headshot for each; where photos are missing we'll use a tasteful monogram/initials placeholder so the section still looks complete.

---

## 5. Design system

**Direction:** *Memorial, warm, and hopeful — light and sky, not speed.*

- **Color** — Brand blue, black, and silver from the logo, warmed with soft off‑whites and a hint of sky/light. Deep blue for trust and calm; silver for the "wings" shimmer; generous white space so it breathes.
- **Type** — A strong, humane display face for headlines (dignified, not racing‑style) paired with a clean, highly readable body face. Large, comfortable line spacing.
- **Motifs** — Angel wings and the number **13** used sparingly and meaningfully: a section divider, a watermark behind the hero, a small mark near the footer. Never decorative clutter.
- **Imagery** — Real photos of Connor and events only. Soft, natural treatment. A subtle sky/light background motif ties to "Dancing in the Sky."
- **Motion** — Gentle, slow fades and reveals on scroll. Nothing fast or flashy. Respect `prefers-reduced-motion`.
- **Accessibility** — WCAG AA contrast, full keyboard navigation, alt text on every photo, readable tap targets. This audience skews all‑ages and mobile — it must be easy for everyone.
- **Mobile‑first** — Most visitors and all sharing will be on phones. The floating donate button and fast load are non‑negotiable.

---

## 6. Photo uploads (family self‑serve)

The promise: **the family never touches the website or waits on us.**

**Recommended mechanic:** a private, password‑protected **Add Photos** page. The family opens it on their phone, taps upload, picks from their camera roll, confirms — and photos appear in the gallery automatically within seconds.

**How we'll build it (recommended):** host images in a managed image service (e.g. **Cloudinary**, free tier) using its secure upload widget behind a simple gate; the Gallery page reads from that same source and renders new photos automatically — with fast, auto‑optimized delivery and no re‑deploys. No app to learn, no ongoing cost, no designer in the loop. We record a 2‑minute walkthrough video they can rewatch anytime.

---

## 7. Donations & compliance

Family is taking donations through **CashApp only**. It plugs in as a **button + printable QR code**.

| | CashApp |
| --- | --- |
| Link | cash.app/$Cashtag |
| Business fee | 2.75% / payment |
| QR code | Yes |
| Tax receipts | No |

**Guidance to pass along (as considerations, not legal advice):**

- **Use a business account, not personal** — personal accounts receiving donations risk tax paperwork and freezes.
- **Neither app issues tax‑deductible receipts.** If/when the foundation becomes a registered **501(c)(3)**, we switch to **Zeffy** (free nonprofit platform with receipts + donor tracking). We'll build the donate section so this swap is a **~5‑minute change** — nothing breaks.
- **Mississippi charitable registration** — MS asks charities to register with the Secretary of State before soliciting the public, with a simpler exemption filing for smaller orgs. Recommend a quick chat with an accountant/attorney. We build either way.

**Build implication:** the donate link lives in **one config value** used everywhere (header, hero, mid‑page, footer, QR). Switching providers = change one value + regenerate one QR.

---

## 8. Technical approach (recommended)

- **Static site** for speed, security, and near‑zero cost: **Astro** or **Next.js (static export)**.
- **Hosting:** Vercel or Netlify free tier; connect a custom domain.
- **Gallery/uploads:** Cloudinary (or equivalent) as above.
- **Analytics:** lightweight, privacy‑friendly (e.g. Plausible/Umami) so we can show the family that giving is working.
- **SEO/share:** proper title/description, and a custom Open Graph card (Connor's photo + name) so links shared to Facebook/text look beautiful and respectful.
- **Performance target:** sub‑2s load on mobile, optimized images, minimal scripts.

---

## 9. Open items to confirm with the family

1. **Donation handle** — the CashApp `$Cashtag` (and confirm the account is a *business* account).
2. **Domain name** — preferred URL (e.g. `forever13foundation.org`).
3. **Team photos** — headshots for each member; who to placeholder.
4. **Connor's story photos** — which images go with the story vs. gallery.
5. **VP name** — Chelsea **Carter** or **Williams**?
6. **Contact details** — public email / phone / mailing address for footer.
7. **Social links** — Facebook / Instagram handles.
8. **Approval of story wording** — family signs off on Connor's story copy before launch.

---

## 10. Suggested build phases

1. **Approve this plan & lock design direction** (memorial tone confirmed).
2. **Design pass** — one polished home‑page mockup for family sign‑off before full build.
3. **Build** — Home + Gallery, donate config, upload flow.
4. **Content load** — real copy, Connor's photos, team, QR code.
5. **Review with family** — nothing goes live without their approval.
6. **Launch + handoff** — connect domain, record the upload walkthrough video, hand over the keys.

---

*Everything above is grounded in the family's own answers and the brand assets provided. The single most important decision captured here is the shift from a "racing" aesthetic to a warm, wing‑and‑sky memorial that honors who Connor actually was.*
