import { Clapperboard, Sparkles, Video, Star, Users } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { WORLDS } from "../content";

const ICONS = [Clapperboard, Sparkles, Video, Star, Users];

export default function Worlds() {
  return (
    <section id="worlds" className="section-shell worlds-section">
      <div className="worlds-halo" aria-hidden="true" />
      <div className="section-container">
        <SectionHeading
          eyebrow="Our five worlds"
          title="Five worlds. One philosophy."
          lead="Every world begins with imagination — and ends as an experience people remember."
        />

        <div className="worlds-grid">
          {WORLDS.map((world, i) => {
            const Icon = ICONS[i];
            return (
              <FadeUp
                key={world.index}
                delay={0.1 * i}
                className="world-card-wrap"
              >
                <article className="world-card group">
                  <div className="world-card__glow" aria-hidden="true" />
                  <div className="world-card__top">
                    <span className="world-card__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="world-card__index">{world.index}</span>
                  </div>
                  <div className="world-card__body">
                    <h3>{world.title}</h3>
                    <p>{world.tagline}</p>
                  </div>
                  <div className="world-card__chips">
                    {world.chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                </article>
              </FadeUp>
            );
          })}

          <FadeUp delay={0.5} className="world-statement-wrap">
            <article className="world-statement">
              <p className="world-statement__eyebrow">The HRIPOP philosophy</p>
              <div className="world-statement__copy">
                <p>
                  You imagine it.
                  <br />
                  We hybridize it into reality.
                </p>
              </div>
              <p className="world-statement__footer">Imagine. Curate. Hybridize. Experience. Remember.</p>
            </article>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
