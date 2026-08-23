import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { PROJECTS } from "../content";

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Signature projects"
          title="Some projects are events. Some become platforms."
          lead="We don’t just talk about experiences. We build them."
        />

        <div className="mt-14 grid gap-4 sm:mt-20 sm:gap-5 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.name} delay={0.08 * i}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                  project.upcoming
                    ? "border-white/25 bg-gradient-to-br from-white/[0.1] to-transparent hover:border-white/40"
                    : "border-white/10 bg-white/5 hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium tracking-[0.25em] text-white/40">{project.year}</span>
                  {project.upcoming && (
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      Upcoming
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-light text-white/60 sm:text-base">{project.headline}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-light text-white/60"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {project.note && (
                  <p className="mt-5 text-xs font-light uppercase tracking-[0.2em] text-white/35">
                    {project.note}
                  </p>
                )}

                {project.upcoming && (
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-transform hover:translate-x-1"
                  >
                    Discover {project.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
