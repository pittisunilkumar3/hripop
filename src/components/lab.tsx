import { Lightbulb } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { LAB } from "../content";

export default function Lab() {
  return (
    <section id="lab" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,35,64,0.45)_0%,transparent_65%)]"
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading eyebrow={LAB.eyebrow} title={LAB.title} />

        <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4">
          {LAB.ideas.map((idea, i) => (
            <FadeUp key={idea} delay={0.06 * i}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors hover:border-white/25">
                <Lightbulb className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                <p className="text-sm font-light text-white/70">{idea}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <p className="mt-12 text-center text-xl font-medium tracking-tight text-white sm:mt-16 sm:text-2xl">
            {LAB.punch}
          </p>
        </FadeUp>

        <FadeUp delay={0.62}>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="btn-glow inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-950 py-3 pl-8 pr-4 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-100 sm:py-3.5 sm:pl-10 sm:pr-5 sm:text-base"
            >
              {LAB.cta}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                <Lightbulb className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
