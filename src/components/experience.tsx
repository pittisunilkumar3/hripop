import { Lightbulb, Compass, Layers, PenTool, Eye, Star } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { EXPERIENCE_STEPS } from "../content";

const ICONS = [Lightbulb, Compass, Layers, PenTool, Eye, Star];

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <div className="section-container experience-layout">
        <div className="experience-intro">
          <SectionHeading
            eyebrow="The HRIPOP Experience™"
            title="From first thought to lasting feeling."
            lead="A six-part creative system that turns a possibility into something people can enter, feel and remember."
            align="left"
          />
          <div className="experience-sequence" aria-hidden="true">
            Imagine / Curate / Hybridize / Create / Experience / Remember
          </div>
        </div>

        <div className="experience-steps">
          {EXPERIENCE_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <FadeUp key={step.title} delay={0.08 * i}>
                <article className="experience-step group">
                  <span className="experience-step__number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="experience-step__icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div className="experience-step__copy">
                    <h3>{step.title}</h3>
                    <p>{step.line}</p>
                  </div>
                  <span className="experience-step__line" aria-hidden="true" />
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
