# VERTX — Cinematic Hero Landing Page

A full-screen cinematic hero built with **React 18 + TypeScript + Vite +
Tailwind CSS + Framer Motion + Lucide React**.

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build → http://localhost:4173
```

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Title `Nexora — Beyond the Interface`, Quire Sans Pro CDN font |
| `src/App.tsx` | Root `<section>` shell (`relative min-h-screen overflow-hidden bg-black`) |
| `src/components/Navbar.tsx` | Fixed nav — fades in from top; hexagon logo (30° hover rotation), Contact / Sign Up |
| `src/components/Hero.tsx` | Full-screen looping background video (`useRef` + `.play()` fallback), centered content shifted up 50px |
| `src/components/FadeUp.tsx` | Reusable `useInView`-triggered fade-up (`delay`/`duration`/`y` props) |
| `src/components/TypingEffect.tsx` | Character-by-character reveal with global stagger, word-aware wrapping |
| `src/index.css` | Tailwind directives + `.btn-glow` inner-glow effect |

## Animation timeline

- **0.0s** — navbar drops in (0.6s), eyebrow fades up
- **0.0–2.2s** — headline types character-by-character (49 chars × 45ms)
- **2.4s** — subheading fades up
- **2.8s** — "Begin Now" CTA
- **3.0s** — "Watch the story" CTA

## Verified

- ✅ `tsc` strict type-check + production build pass
- ✅ Video autoplays muted/looping (`readyState 4`, advancing `currentTime`)
- ✅ Quire Sans Pro loads from CDN and applies as the default `sans`
- ✅ Zero console errors / failed requests
- ✅ Typing stagger measured in-browser (10/49 chars at 350ms → 49/49 at 3s)
- ✅ Hexagon hover = exactly 30°; `.btn-glow` outline + inset glow applied
- ✅ No horizontal overflow at 390px; CTAs stack full-width on mobile
