import FadeUp from "./FadeUp";
import KineticHeading from "./KineticHeading";
import { FINAL_CTA } from "../content";

export default function FinalCta() {
  return (
    <section className="section-shell final-cta-section">
      <div className="final-cta-rings" aria-hidden="true"><i /><i /><i /></div>
      <div className="section-container final-cta-content">
        <FadeUp>
          <p className="section-eyebrow justify-center">
            <span className="section-eyebrow__line" />
            Final call
            <span className="section-eyebrow__line" />
          </p>
        </FadeUp>

        <KineticHeading text={FINAL_CTA.title} className="final-cta-title" />

        <div className="final-cta-copy">
          {FINAL_CTA.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.3 + i * 0.15}>
              <p>{p}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.65}>
          <p className="final-cta-punch">{FINAL_CTA.punch}</p>
        </FadeUp>

        <FadeUp delay={0.78}>
          <a className="final-cta-link" href="#contact">Start with an idea <span>↘</span></a>
        </FadeUp>
      </div>
    </section>
  );
}
