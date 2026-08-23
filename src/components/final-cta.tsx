import FadeUp from "./FadeUp";
import { FINAL_CTA } from "../content";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(26,35,64,0.55)_0%,transparent_65%)]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
        <FadeUp>
          <p className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-3 sm:text-xs md:tracking-[0.3em]">
            <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
            Final call
            <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            {FINAL_CTA.title}
          </h2>
        </FadeUp>

        <div className="mt-8 space-y-5">
          {FINAL_CTA.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.3 + i * 0.15}>
              <p className="text-sm font-light leading-relaxed text-white/50 sm:text-base">{p}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.65}>
          <p className="mt-12 text-lg font-medium tracking-tight text-white sm:text-xl md:text-2xl">
            {FINAL_CTA.punch}
          </p>
        </FadeUp>

        <FadeUp delay={0.78}>
          <p className="mt-4 text-xs font-light uppercase tracking-[0.3em] text-white/40 sm:text-sm">
            HRIPOP Media — {`Imagine. Curate. Hybridize. Experience. Remember.`}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
