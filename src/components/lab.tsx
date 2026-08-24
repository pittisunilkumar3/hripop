import { Lightbulb } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { LAB } from "../content";

export default function Lab() {
  return (
    <section id="lab" className="section-shell lab-section">
      <div className="section-container">
        <div className="lab-frame">
          <div className="lab-orbit lab-orbit--one" aria-hidden="true" />
          <div className="lab-orbit lab-orbit--two" aria-hidden="true" />
          <div className="lab-header">
            <SectionHeading eyebrow={LAB.eyebrow} title={LAB.title} align="left" />
            <span className="lab-code" aria-hidden="true">R&amp;D / 001</span>
          </div>

          <div className="lab-ideas">
          {LAB.ideas.map((idea, i) => (
            <FadeUp key={idea} delay={0.06 * i}>
                <div className="lab-idea">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{idea}</p>
                  <Lightbulb aria-hidden="true" />
              </div>
            </FadeUp>
          ))}
        </div>

          <div className="lab-footer">
            <FadeUp delay={0.5}>
              <p>{LAB.punch}</p>
            </FadeUp>
            <FadeUp delay={0.62}>
            <a
              href="#contact"
                className="action-pill"
            >
              {LAB.cta}
                <Lightbulb />
            </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
