import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Sparkles, Wand2 } from "lucide-react";
import { EASE } from "./FadeUp";
import FadeUp from "./FadeUp";

const STEPS = [
  { title: "Imagination", line: "Tell us what exists in your mind.", Icon: Lightbulb },
  { title: "Transformation", line: "We hybridize it — people, places, story, technology.", Icon: Wand2 },
  { title: "Reality", line: "You live it. The memory stays.", Icon: Sparkles },
] as const;

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-[3.25rem] sm:py-20">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,35,64,0.35)_0%,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <FadeUp>
          <p className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-3 sm:text-xs md:tracking-[0.3em]">
            <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
            The journey
            <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
          </p>
        </FadeUp>

        {/* Diagram */}
        <div ref={ref} className="relative mt-14 sm:mt-20">
          {/* Desktop connector line — draws itself between the first and last node */}
          <motion.div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px origin-left bg-gradient-to-r from-white/10 via-white/70 to-white/10 shadow-[0_0_12px_rgba(255,255,255,0.4)] md:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : undefined}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-6">
            {STEPS.map(({ title, line, Icon }, i) => {
              const base = 0.3 + i * 0.45;
              return (
                <div key={title} className="flex flex-col items-center gap-5 text-center md:gap-6">
                  {/* Node */}
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    {/* Radar ping */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-white/30"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1.7, opacity: [0, 0.6, 0] } : undefined}
                      transition={{ duration: 1.4, delay: base + 0.15, ease: "easeOut" }}
                    />
                    <motion.span
                      className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={
                        inView
                          ? {
                              scale: 1,
                              opacity: 1,
                              boxShadow: "0 0 32px rgba(255, 255, 255, 0.18)",
                            }
                          : undefined
                      }
                      transition={{ duration: 0.55, delay: base, ease: EASE }}
                    >
                      <Icon size={22} strokeWidth={1.5} className="text-white" />
                    </motion.span>
                  </span>

                  {/* Copy */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.5, delay: base + 0.1, ease: EASE }}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-base font-medium tracking-tight text-white sm:text-lg md:text-xl">
                      {title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[240px] text-xs font-light leading-relaxed text-white/50 sm:text-sm">
                      {line}
                    </p>
                  </motion.div>

                  {/* Mobile connector */}
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent md:hidden"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Caption — the promise of the journey */}
        <FadeUp delay={1.9}>
          <p className="mt-14 text-center text-xs font-light uppercase tracking-[0.3em] text-white/40 sm:mt-20 sm:text-sm md:tracking-[0.35em]">
            From what you imagine
            <span className="mx-2 text-white/60">→</span>
            to what you experience
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
