import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { PHILOSOPHY } from "../content";

export default function Philosophy() {
  return (
    <section className="section-shell philosophy-section">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="section-container philosophy-layout">
        <div className="philosophy-marker" aria-hidden="true">
          <span>01</span>
          <div />
          <p>Moments<br />become<br />meaning.</p>
        </div>

        <div className="philosophy-content">
          <SectionHeading eyebrow={PHILOSOPHY.eyebrow} title={PHILOSOPHY.title} align="left" />

          <div className="philosophy-copy">
          {PHILOSOPHY.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.15}>
                <p>{p}</p>
            </FadeUp>
          ))}
          </div>

          <FadeUp delay={0.55}>
            <blockquote className="philosophy-quote">“{PHILOSOPHY.pull}”</blockquote>
          </FadeUp>

          <FadeUp delay={0.7}>
            <p className="philosophy-footnote">{PHILOSOPHY.footnote}</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
