import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { PHILOSOPHY } from "../content";

export default function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,35,64,0.5)_0%,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
        <SectionHeading eyebrow={PHILOSOPHY.eyebrow} title={PHILOSOPHY.title} />

        <div className="mt-8 space-y-5 sm:mt-10">
          {PHILOSOPHY.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.15}>
              <p className="text-sm font-light leading-relaxed text-white/50 sm:text-base">{p}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.55}>
          <p className="mt-12 text-xl font-medium tracking-tight text-white sm:mt-16 sm:text-2xl md:text-3xl">
            “{PHILOSOPHY.pull}”
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <p className="mt-4 text-xs font-light uppercase tracking-[0.25em] text-white/40 sm:text-sm">
            {PHILOSOPHY.footnote}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
