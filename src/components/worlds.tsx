import { Clapperboard, Sparkles, Video, Star, Users } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { WORLDS } from "../content";

const ICONS = [Clapperboard, Sparkles, Video, Star, Users];

export default function Worlds() {
  return (
    <section id="worlds" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our five worlds"
          title="Five worlds. One philosophy."
          lead="Every world begins with imagination — and ends as an experience people remember."
        />

        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {WORLDS.map((world, i) => {
            const Icon = ICONS[i];
            const wide = i === 3 || i === 4; // balance the 5-card grid
            return (
              <FadeUp
                key={world.index}
                delay={0.1 * i}
                className={`${wide ? "lg:col-span-1" : ""} ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <article className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 transition-colors group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                      {world.index}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-white sm:text-xl">
                    {world.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-white/50">{world.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {world.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-light text-white/60"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeUp>
            );
          })}

          {/* Philosophy card completes the grid */}
          <FadeUp delay={0.5} className="sm:col-span-2 lg:col-span-2">
            <article className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                The HRIPOP philosophy
              </p>
              <div>
                <p className="mt-6 text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
                  You imagine it.
                  <br />
                  We hybridize it into reality.
                </p>
                <p className="mt-4 text-sm font-light text-white/50">
                  Imagine. Curate. Hybridize. Experience. Remember.
                </p>
              </div>
            </article>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
