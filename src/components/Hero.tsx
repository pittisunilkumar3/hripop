import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import FadeUp from "./FadeUp";
import TypingEffect from "./TypingEffect";
import { HERO } from "../content";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay blocked — retry on the first user interaction.
          const resume = () => {
            video.play().catch(() => {});
            window.removeEventListener("pointerdown", resume);
            window.removeEventListener("keydown", resume);
          };
          window.addEventListener("pointerdown", resume, { once: true });
          window.addEventListener("keydown", resume, { once: true });
        });
      }
    };

    tryPlay();
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Atmospheric fallback — guarantees a cinematic backdrop even before
          (or instead of) the video, so the screen is never plain black. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a2340_0%,#0b1020_45%,#000000_100%)]"
      />

      {/* Full-screen looping background video — poster (matching frame 0)
          paints instantly while the optimized file streams in. */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-bg.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Centered hero content (shifted up 50px) */}
      <div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-20 text-center sm:px-6 sm:pt-24"
        style={{ marginTop: "-50px" }}
      >
        {/* Eyebrow */}
        <FadeUp className="mb-4 sm:mb-6" delay={0}>
          <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-3 sm:text-xs md:text-sm md:tracking-[0.3em]">
            <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
            {HERO.eyebrow}
            <span className="hidden h-px w-4 bg-white/40 sm:w-6 sm:inline-block" />
          </p>
        </FadeUp>

        {/* Main heading */}
        <h1
          className="max-w-4xl text-[1.75rem] font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          aria-label={`${HERO.typing} ${HERO.punch}`}
        >
          <TypingEffect text={HERO.typing} />
          <FadeUp delay={2.6} className="mt-2 sm:mt-4">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {HERO.punch}
            </span>
          </FadeUp>
        </h1>

        {/* Subheading */}
        <FadeUp className="mt-4 sm:mt-6" delay={2.9}>
          <p className="mx-auto max-w-xs text-xs font-light leading-relaxed text-white/50 sm:max-w-xl sm:text-sm md:text-base lg:text-lg">
            {HERO.lead}
          </p>
        </FadeUp>

        {/* CTAs */}
        <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5">
          <FadeUp delay={3.1} className="w-full sm:w-auto">
            <a
              href="#contact"
              className="btn-glow flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-950 py-2.5 pl-6 pr-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-100 sm:w-auto sm:gap-3 sm:py-3.5 sm:pl-10 sm:pr-5 sm:text-lg"
            >
              {HERO.primaryCta}
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 sm:h-9 sm:w-9">
                <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
            </a>
          </FadeUp>

          <FadeUp delay={3.25} className="w-full sm:w-auto">
            <a
              href="#worlds"
              className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30 hover:text-white active:scale-100 sm:w-auto sm:px-10 sm:py-3.5 sm:text-lg"
            >
              {HERO.secondaryCta}
            </a>
          </FadeUp>
        </div>
      </div>

      {/* Scroll hint */}
      <FadeUp delay={3.6} className="relative z-10 pb-6 sm:pb-8">
        <p className="flex items-center justify-center gap-2 text-[10px] font-light uppercase tracking-[0.3em] text-white/35 sm:text-xs">
          {HERO.scrollHint}
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </motion.span>
        </p>
      </FadeUp>
    </section>
  );
}
