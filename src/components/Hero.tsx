import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import FadeUp from "./FadeUp";
import TypingEffect from "./TypingEffect";

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
    <>
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
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 text-center sm:px-6 sm:pt-24"
        style={{ marginTop: "-50px" }}
      >
        {/* Eyebrow */}
        <FadeUp className="mb-4 sm:mb-6" delay={0}>
          <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-3 sm:text-xs md:text-sm md:tracking-[0.3em]">
            <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
            The future is unfolding
          </p>
        </FadeUp>

        {/* Main heading */}
        <h1
          className="max-w-4xl text-[1.75rem] font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          aria-label="Innovation that reshapes the fabric of experience"
        >
          <TypingEffect text="Innovation that reshapes the fabric of experience" />
        </h1>

        {/* Subheading */}
        <FadeUp className="mt-4 sm:mt-6" delay={2.4}>
          <p className="max-w-xs text-xs font-light leading-relaxed text-white/50 sm:max-w-xl sm:text-sm md:text-base lg:text-lg">
            We craft platforms where insight, power, and design converge — giving
            rise to something the world hasn&rsquo;t seen.
          </p>
        </FadeUp>

        {/* CTAs */}
        <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5">
          <FadeUp delay={2.8} className="w-full sm:w-auto">
            <button
              type="button"
              className="btn-glow flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-950 py-2.5 pl-6 pr-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-100 sm:w-auto sm:gap-3 sm:py-3.5 sm:pl-10 sm:pr-5 sm:text-lg"
            >
              Begin Now
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 sm:h-9 sm:w-9">
                <Play className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
              </span>
            </button>
          </FadeUp>

          <FadeUp delay={3.0} className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30 hover:text-white active:scale-100 sm:w-auto sm:px-10 sm:py-3.5 sm:text-lg"
            >
              Watch the story
            </button>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
