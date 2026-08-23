import { ArrowRight } from "lucide-react";
import FadeUp from "./FadeUp";
import { JOURNEY } from "../content";

export default function Journey() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-14 sm:py-20">
      <FadeUp>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-5 sm:px-6 md:flex-row md:gap-8">
          {JOURNEY.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-4 md:gap-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm md:text-base md:tracking-[0.35em]">
                {step}
              </span>
              {i < JOURNEY.steps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-white/30 sm:h-5 sm:w-5" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
