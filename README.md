# HRIPOP Media — Cinematic Website

**Imagination, Hybridized into Reality.**

The HRIPOP Media website built in the cinematic dark design language: full-screen video hero, typing-effect headline, staged reveal timeline, glass cards, glowing CTAs — all content from the master content & creative direction document.

## Design system

- **Look:** pure black canvas, white typography, glass surfaces (`white/5 + backdrop-blur`), pill buttons with inner glow (`.btn-glow`)
- **Type:** Quire Sans Pro (CDN), large medium-weight display headings, uppercase tracked eyebrows
- **Motion:** Framer Motion — typing headline (char × 0.045s), staged fade-ups, floating navbar pill on scroll
- **Media:** optimized local video (`public/hero-bg.mp4`, 8.3MB `+faststart`) with frame-0 poster for instant paint and a gradient fallback so the screen is never plain black

## Page flow (per the master document)

1. **Hero** — “What if your imagination could become an experience? / We make it real.” + CTAs
2. **Journey** — Imagination → Transformation → Reality
3. **Philosophy** — “An event ends. An experience stays.”
4. **Five Worlds** — Creative Industries · Events & Experiences · Media · Image & PR · Talent
5. **The HRIPOP Experience™** — Imagine → Curate → Hybridize → Create → Experience → Remember
6. **Signature projects** — Cinematica Expo 2025/2026, CINICATHON 2026, Frames of Founders 2026, Creators Council (verified roles only — no invented metrics)
7. **Experience Lab** — “Tell us something that doesn’t exist yet.”
8. **Why HRIPOP + Who we serve**
9. **Final CTA** — “What are you imagining?”
10. **Enquiry** — form builds a pre-filled email (opens the user's mail app)
11. **Footer** — link columns, socials, legal line

## Commands

```bash
npm run dev        # develop at http://localhost:5173
npm run build      # tsc + vite production build
npm run preview    # serve the build at http://localhost:4173
```

## Structure

```
src/
├── content.ts               # single source of truth for all copy
├── App.tsx                  # section composition
└── components/
    ├── FadeUp.tsx           # reveal-on-view primitive
    ├── TypingEffect.tsx     # char-by-char headline
    ├── section-heading.tsx  # eyebrow + title + lead
    ├── navbar.tsx           # floating glass pill + mobile menu
    ├── hero.tsx             # full-screen video hero
    ├── journey.tsx / philosophy.tsx / worlds.tsx / experience.tsx
    ├── projects.tsx / lab.tsx / serve.tsx / final-cta.tsx
    ├── enquiry.tsx          # brief → pre-filled email
    └── site-footer.tsx
```

## Before launch

- Replace placeholder `BRAND.email` + `BRAND.socials` in `src/content.ts` (marked with TODO)
- Swap in real project photography/video as available
