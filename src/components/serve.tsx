import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { SERVE, WHY } from "../content";

export default function Serve() {
  return (
    <section className="section-shell serve-section">
      <div className="section-container">
        <div className="why-layout">
          <SectionHeading eyebrow="Why HRIPOP" title={WHY.title} align="left" />

          <FadeUp delay={0.25}>
            <div className="why-signals">
            {WHY.chips.map((chip) => (
                <span key={chip}><i />{chip}</span>
            ))}
          </div>
        </FadeUp>
        </div>

        <div className="serve-audience">
          <FadeUp>
            <div className="serve-audience__header">
              <h3>{SERVE.eyebrow}</h3>
              <p>Across culture, enterprise and life.</p>
            </div>
          </FadeUp>

          <div className="serve-grid">
            {SERVE.groups.map((group, i) => (
              <FadeUp key={group.name} delay={0.06 * i}>
                <div className="serve-card">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{group.name}</p>
                  <small>{group.detail}</small>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
