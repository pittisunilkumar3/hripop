import { Lightbulb, Compass, Layers, PenTool, Eye, Star } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { EXPERIENCE_STEPS } from "../content";

const ICONS = [Lightbulb, Compass, Layers, PenTool, Eye, Star];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 border-y border-white/10 bg-white/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="The HRIPOP Experience™"
          title="Imagine → Curate → Hybridize → Create → Experience → Remember"
        />

        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {EXPERIENCE_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <FadeUp key={step.title} delay={0.08 * i}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8">
                  <span className="absolute right-5 top-5 text-5xl font-semibold tracking-tight text-white/[0.06] sm:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 transition-colors group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-white/50">{step.line}</p>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
