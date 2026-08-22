import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../components/motion";
import { CtaBand, FlowRail, PageHero, Statement } from "../../components/page-blocks";
import { BRAND, MANAGEMENT_MODEL, METHOD, VALUES } from "../../content/site";

export const metadata: Metadata = {
  title: "About — Imagination Should Not Have to Stay Imagination",
  description:
    "HRIPOP Media was created to bridge the gap between what people imagine and what they are able to experience — at the intersection of entertainment, creative industries, events, media, technology, culture and people.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About HRIPOP"
        title="Built around one belief: imagination should not"
        titleEm="have to stay imagination."
        intro="HRIPOP Media was created to bridge the gap between what people imagine and what they are actually able to experience. We operate at the intersection of Entertainment, Creative Industries, Events, Media, Technology, Culture and People."
      />

      <Statement
        quote={<>Different situations. <em>One philosophy.</em> Create something worth remembering.</>}
        body="Our work ranges from professional industry platforms to deeply personal celebrations: a summit, concert, film premiere, creator gathering, business connection, destination wedding, honeymoon, milestone birthday, private celebration or a public personality’s image."
        theme="deep"
      />

      {/* Vision & Mission — doc §56, §57 */}
      <section className="vision-mission section-pad">
        <Reveal>
          <div className="vm-block">
            <span>01 · Vision</span>
            <blockquote>
              To redefine how people experience creative industries, entertainment
              and life’s important moments — a distinctive global experience company
              where imagination, creativity, entertainment, technology and people
              create experiences that <em>didn’t exist before.</em>
            </blockquote>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="vm-block">
            <span>02 · Mission</span>
            <blockquote>
              To conceptualize, curate, manage and deliver extraordinary experiences
              across entertainment, creative industries, media, destination celebrations
              and public image — while connecting people, businesses, talent
              <em> and opportunities.</em>
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* Values — doc §58 */}
      <section className="section-pad theme-ink values-section" aria-labelledby="values-heading">
        <Reveal>
          <div className="section-label section-label-light"><span>03</span><p>Values</p></div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="values-heading">What we <em>stand for.</em></h2>
        </Reveal>
        <ul className="values-grid">
          {VALUES.map(([value, line], index) => (
            <Reveal as="li" key={value} delay={Math.min(index * 0.04, 0.3)}>
              <strong>{value}</strong>
              <p>{line}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Management model — doc §37 */}
      <FlowRail
        number="04"
        label="Management model"
        headline={<>We manage <em>the entire experience.</em></>}
        steps={MANAGEMENT_MODEL.map(([title, desc], i) => [
          String(i + 1).padStart(2, "0"),
          title,
          desc,
] as [string, string, string])}
      />

      {/* Method recap — doc §35 */}
      <Statement
        number="05"
        label="The HRIPOP Experience™"
        quote={<>Imagine → Curate → Hybridize → Create → Experience → <em>Remember.</em></>}
        theme="accent"
      />

      <section className="section-pad method-recap">
        <ol className="method-inline">
          {METHOD.map(([n, title, desc]) => (
            <li key={title}>
              <span>{n}</span>
              <strong>{title}</strong>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
        <Reveal delay={0.1}>
          <Link className="cta-primary" href="/contact">
            Start with Imagine <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>

      <CtaBand
        kicker="One belief"
        title="You bring the imagination."
        titleEm="We build the experience."
        body={BRAND.descriptionMaster}
      />
    </main>
  );
}
