# HRIPOP Media — Master Website

An experience-led, cinematic editorial website for **HRIPOP Media** — Creative
Industries • Events • Media • Image Management. Built to the master Content &
Creative Direction document (`HRIPOP_Media_Master_Website_Content_and_Creative_Direction.docx`).

**Tagline:** *Imagination, hybridized into reality.*

## Quick Start

```bash
npm install
npm run dev     # local dev (D1 binding simulated by the Cloudflare plugin)
npm run build   # production build (vinext → Cloudflare Worker + assets)
npm test        # builds + runs the site test suite
npm run lint    # eslint
```

## Site Map

| Route | Purpose |
|---|---|
| `/` | Homepage — narrative journey: hero, five worlds, work, method, taglines, ecosystem, why/who, manifesto, final CTA |
| `/creative-industries` | Vertical — sectors, capabilities, industry platforms, creative technology |
| `/experiences` | Vertical — formats, concerts, creators, matchmaking, summits, roadshows, cross-cultural, private, event scale |
| `/destinations` | Vertical — weddings, honeymoons, birthdays, anniversaries, family & corporate, destination philosophy |
| `/media-talent` | Vertical — media management, film media, casting, talent, film PR |
| `/image-pr` | Vertical — personal, celebrity, public figure & political image management |
| `/work` | Signature projects, experience timeline, portfolio categories, IP partnership CTAs |
| `/work/[slug]` | Case studies (Cinematica Expo 2025/2026, CINICATHON 2026, Frames of Founders 2026, Cinica Creators Council) |
| `/ecosystem` | Partner ecosystem + HRIPOP creative network + partner enquiry |
| `/insights` | Insight categories (stories curated as they publish) |
| `/about` | Belief, vision, mission, values, management model, method |
| `/contact` | The Experience Lab — full enquiry form (doc §61) + partner mode (doc §62) |
| `/legal/privacy` `/legal/terms` `/legal/disclaimer` | Legal pages |
| `/sitemap.xml` `/robots.txt` | SEO (generated) |

## Architecture

- **Framework:** [vinext](https://github.com/cloudflare/vinext) (Next.js App Router
  API on Vite) deployed to Cloudflare Workers + static assets.
- **Content source of truth:** `content/site.ts` — brand strings, worlds, projects,
  taglines, values, ecosystem, enquiry types. Edit copy here; every page and the
  tests update automatically.
- **Shared components:** `components/` — `site-header` (dropdown nav per doc §64),
  `site-footer` (sitemap footer per doc §66), `page-blocks` (hero, capability
  index, statement, flow rail, CTA band), `enquiry-form` (client), `motion`
  (reveal/label primitives).
- **Design system:** `app/globals.css` — ink `#0a0a0a`, paper `#f0ede5`,
  deep `#d9d4ca`, accent `#ff5a36`. Editorial type, cinematic motion,
  `prefers-reduced-motion` respected.

## Enquiry Backend

- `app/api/enquiries/route.ts` — POST endpoint with validation (name, email,
  idea length, safe brief URLs) and graceful degradation messages.
- `db/schema.ts` — `enquiries` table (Drizzle + Cloudflare D1).
- `.openai/hosting.json` declares the `DB` D1 binding; the platform applies the
  generated migration in `drizzle/` on deploy.
- Local dev: the binding is simulated. To apply the migration locally, run the
  SQL in `drizzle/*.sql` against the miniflare D1 sqlite file under
  `.wrangler/state/v3/d1/` once the dev server has created it.

## Placeholders to replace before launch

- `BRAND.email` and `BRAND.socials` in `content/site.ts` (marked with comments).
- Hero video source in `app/page.tsx` if the CDN link expires.
- Add real project photography to `/public` and wire into project cards when
  available (the doc calls for original photography; stats must stay verified-only).

## Content Principles (from the master document)

1. The homepage is a narrative, not a service catalogue.
2. Communicate: *"Tell us what you imagine. We will build the ecosystem."*
3. Verified project statistics only — never invent metrics.
4. The partner ecosystem is a flexible network, not in-house capabilities.
5. New event IPs, destinations, case studies and insights can be added by
  editing `content/site.ts` — no redesign required.
