import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./motion";

export type Theme = "ink" | "paper" | "deep" | "accent";

/** Dark editorial page hero used across vertical / content pages. */
export function PageHero({
  eyebrow,
  title,
  titleEm,
  intro,
  stats,
  children,
}: {
  eyebrow: string;
  title: string;
  titleEm?: string;
  intro?: string;
  stats?: [string, string][];
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hero-meta">
        <p>HRIPOP Media</p>
        <p>{eyebrow}</p>
      </div>
      <Reveal className="page-hero-title">
        <h1>
          {title}
          {titleEm ? (
            <>
              <br />
              <em>{titleEm}</em>
            </>
          ) : null}
        </h1>
      </Reveal>
      {(intro || children) && (
        <div className="page-hero-foot">
          {intro ? <p className="page-hero-intro">{intro}</p> : null}
          {children}
        </div>
      )}
      {stats && (
        <div className="page-hero-stats">
          {stats.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/** Editorial index of possibilities — capabilities presented as a designed grid. */
export function CapIndex({
  number,
  label,
  headline,
  items,
  note,
  theme = "paper",
  id,
}: {
  number: string;
  label: string;
  headline: ReactNode;
  items: readonly string[];
  note?: string;
  theme?: Theme;
  id?: string;
}) {
  return (
    <section id={id} className={`cap-index section-pad theme-${theme}`}>
      <Reveal>
        <SectionLabel number={number} light={theme === "ink" || theme === "accent"}>
          {label}
        </SectionLabel>
      </Reveal>
      <div className="cap-index-head">
        <Reveal>
          <h2>{headline}</h2>
        </Reveal>
        {note ? <Reveal delay={0.1}><p className="cap-index-note">{note}</p></Reveal> : null}
      </div>
      <ul className="cap-list">
        {items.map((item, index) => (
          <Reveal as="li" key={item} delay={Math.min(index * 0.03, 0.3)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/** Narrative statement block — big editorial copy between capability grids. */
export function Statement({
  number,
  label,
  quote,
  body,
  theme = "deep",
  id,
}: {
  number?: string;
  label?: string;
  quote: ReactNode;
  body?: string;
  theme?: Theme;
  id?: string;
}) {
  return (
    <section id={id} className={`statement section-pad theme-${theme}`}>
      {number ? (
        <Reveal>
          <SectionLabel number={number} light={theme === "ink" || theme === "accent"}>
            {label}
          </SectionLabel>
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <blockquote>{quote}</blockquote>
      </Reveal>
      {body ? (
        <Reveal delay={0.12}>
          <p className="statement-body">{body}</p>
        </Reveal>
      ) : null}
    </section>
  );
}

/** Numbered journey / process rail (used for the method, roadshow model, etc.). */
export function FlowRail({
  number,
  label,
  headline,
  steps,
  theme = "ink",
  id,
}: {
  number: string;
  label: string;
  headline: ReactNode;
  steps: readonly (readonly [string, string, string])[];
  theme?: Theme;
  id?: string;
}) {
  return (
    <section id={id} className={`flow-rail section-pad theme-${theme}`}>
      <Reveal>
        <SectionLabel number={number} light={theme === "ink" || theme === "accent"}>
          {label}
        </SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h2>{headline}</h2>
      </Reveal>
      <ol className="flow-steps">
        {steps.map(([n, title, desc], index) => (
          <Reveal as="li" key={title} delay={Math.min(index * 0.05, 0.35)}>
            <span>{n}</span>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/** Universal closing CTA band. */
export function CtaBand({
  kicker = "The HRIPOP Experience Lab",
  title = "Tell us something that",
  titleEm = "doesn't exist yet.",
  body = "A birthday that feels like a movie. A summit that feels like a festival. A company meeting the right investors. Tell us what you're imagining — we'll figure out how to make it real.",
  primary = ["Submit your imagination", "/contact"],
  secondary,
}: {
  kicker?: string;
  title?: string;
  titleEm?: string;
  body?: string;
  primary?: [string, string];
  secondary?: [string, string];
}) {
  return (
    <section className="cta-band">
      <div className="cta-band-inner section-pad">
        <Reveal>
          <p className="cta-kicker">{kicker}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2>
            {title}
            <br />
            <em>{titleEm}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="cta-body">{body}</p>
        </Reveal>
        <Reveal delay={0.16} className="cta-actions">
          <Link className="cta-primary" href={primary[1]}>
            {primary[0]} <ArrowUpRight size={16} />
          </Link>
          {secondary ? (
            <Link className="cta-ghost" href={secondary[1]}>
              {secondary[0]} <ArrowRight size={15} />
            </Link>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function WorldNav({ current }: { current?: string }) {
  return (
    <aside className="world-nav" aria-label="Other worlds">
      {[
        ["/creative-industries", "01", "Creative Industries", "Where ideas become industries."],
        ["/experiences", "02", "Events & Experiences", "Where moments become memories."],
        ["/media-talent", "03", "Media & Talent", "Where experiences become stories — and people meet opportunity."],
        ["/image-pr", "04", "Image & PR", "Where people become brands."],
        ["/destinations", "D", "Destination Experiences", "Make the destination part of the story."],
      ]
        .filter(([href]) => href !== current)
        .map(([href, n, title, line]) => (
          <Link key={href} href={href}>
            <span>{n}</span>
            <div>
              <strong>{title}</strong>
              <small>{line}</small>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        ))}
    </aside>
  );
}
