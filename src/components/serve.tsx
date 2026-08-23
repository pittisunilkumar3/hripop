import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { SERVE, WHY } from "../content";

export default function Serve() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading eyebrow="Why HRIPOP" title={WHY.title} />

        <FadeUp delay={0.25}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2 sm:mt-12">
            {WHY.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-light text-white/70 sm:text-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeUp>

        <div className="mt-16 sm:mt-24">
          <FadeUp>
            <h3 className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/40 sm:text-sm">
              {SERVE.eyebrow}
            </h3>
          </FadeUp>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {SERVE.groups.map((group, i) => (
              <FadeUp key={group.name} delay={0.06 * i}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-6">
                  <p className="text-sm font-medium text-white sm:text-base">{group.name}</p>
                  <p className="mt-2 text-xs font-light leading-relaxed text-white/45 sm:text-sm">
                    {group.detail}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
