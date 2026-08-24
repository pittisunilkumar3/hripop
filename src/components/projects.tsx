import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { PROJECTS } from "../content";

export default function Projects() {
  return (
    <section id="work" className="section-shell projects-section">
      <div className="projects-beam" aria-hidden="true" />
      <div className="section-container">
        <SectionHeading
          eyebrow="Signature projects"
          title="Some projects are events. Some become platforms."
          lead="We don’t just talk about experiences. We build them."
        />

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.name} delay={0.08 * i} className={`project-card-wrap project-card-wrap--${i + 1}`}>
              <article className={`project-card group ${project.upcoming ? "project-card--upcoming" : ""}`}>
                <div className="project-visual" aria-hidden="true">
                  <div className="project-visual__grid" />
                  <span className="project-visual__micro">HRIPOP / SIGNATURE / {project.year}</span>
                  <span className="project-visual__number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project-visual__signal" />
                  <div className="project-visual__title">{project.name.split(" ")[0]}</div>
                </div>

                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span>{project.year}</span>
                  {project.upcoming && (
                      <span className="project-card__status"><i /> Upcoming</span>
                  )}
                </div>

                  <h3>{project.name}</h3>
                  <p className="project-card__headline">{project.headline}</p>

                  <div className="project-card__roles">
                  {project.roles.map((role) => (
                      <span key={role}>{role}</span>
                  ))}
                </div>

                {project.note && (
                    <p className="project-card__note">{project.note}</p>
                )}

                {project.upcoming && (
                  <a
                    href="#contact"
                      className="project-card__link"
                  >
                    Discover {project.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                  {!project.upcoming && <ArrowUpRight className="project-card__arrow" aria-hidden="true" />}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
