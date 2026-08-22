import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "../../components/motion";
import { CtaBand, PageHero, Statement } from "../../components/page-blocks";
import { PROJECTS, TIMELINE } from "../../content/site";

export const metadata: Metadata = {
  title: "Our Work — Some Projects Become Platforms",
  description:
    "HRIPOP's signature experiences: Cinematica Expo, CINICATHON, Frames of Founders and the Cinica Creators Council challenges — platforms for the creative economy.",
  alternates: { canonical: "/work" },
};

const portfolioCategories = [
  "Creative Industries", "Entertainment", "Summits", "Conferences", "Concerts",
  "Film", "AVGC-XR", "Creators", "Roadshows", "Destination Experiences",
  "Brand Experiences", "Business Matchmaking", "Private Experiences", "Industry Programs",
];

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        title="We don’t just talk about experiences."
        titleEm="We build them."
        intro="Some projects are events. Some become platforms. At HRIPOP, we're interested in the second kind — experiences that start conversations, create opportunities and build communities."
      />

      {/* Signature projects */}
      <section className="section-pad work-listing" aria-labelledby="signature-heading">
        <Reveal><SectionLabel number="01">Signature projects</SectionLabel></Reveal>
        <Reveal delay={0.06}>
          <h2 id="signature-heading" className="listing-head">
            Some events we don’t just manage. <em>We create them.</em>
          </h2>
        </Reveal>

        <ol className="project-rows">
          {PROJECTS.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={Math.min(index * 0.05, 0.25)}>
              <Link href={`/work/${project.slug}`} className="project-row">
                <span className="row-year">
                  {project.status === "upcoming" ? "Upcoming · " : ""}{project.year}
                </span>
                <span className="row-title">
                  <strong>{project.title}</strong>
                  <small>{project.tagline}</small>
                </span>
                <span className="row-fields">{project.ecosystem}</span>
                <span className="row-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Timeline — doc §50 */}
      <section className="section-pad theme-ink timeline-section" aria-labelledby="timeline-heading">
        <Reveal><SectionLabel number="02" light>Experience timeline</SectionLabel></Reveal>
        <Reveal delay={0.06}>
          <h2 id="timeline-heading">The journey <em>so far.</em></h2>
        </Reveal>
        <ol className="timeline">
          {TIMELINE.map(([year, title, line], index) => (
            <Reveal as="li" key={title} delay={Math.min(index * 0.06, 0.3)}>
              <span>{year}</span>
              <div>
                <strong>{title}</strong>
                <small>{line}</small>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Philosophy — doc §49 */}
      <Statement
        number="03"
        label="Signature projects philosophy"
        quote={<>They can become ecosystems. They can become movements. They can become memories. <em>And sometimes, they can become industries.</em></>}
        theme="deep"
      />

      {/* Portfolio — doc §51 */}
      <section className="section-pad portfolio-section" aria-labelledby="portfolio-heading">
        <Reveal><SectionLabel number="04">Portfolio</SectionLabel></Reveal>
        <Reveal delay={0.06}>
          <h2 id="portfolio-heading">Experiences we’ve <em>brought to life.</em></h2>
        </Reveal>
        <ul className="cap-list compact">
          {portfolioCategories.map((category) => (
            <li key={category}><span>✦</span>{category}</li>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <p className="portfolio-note">
            Individual case studies follow the HRIPOP format — the idea, the imagination,
            the approach, the moment and the impact. Verified metrics only. Another idea
            brought into reality.
          </p>
        </Reveal>
      </section>

      {/* Owned IPs CTAs — doc §42 */}
      <section className="ip-cta" aria-label="Partner with HRIPOP's owned experiences">
        <div className="section-pad">
          <Reveal>
            <h2>Partner with our IPs. <em>Sponsor an experience.</em></h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>Become an ecosystem partner on platforms built to return — year after year, city after city.</p>
          </Reveal>
          <Reveal delay={0.14} className="ip-cta-actions">
            <Link className="cta-primary" href="/contact?mode=partner">Partner with our IPs <ArrowUpRight size={16} /></Link>
            <Link className="cta-ghost" href="/ecosystem">See the ecosystem <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Your project could be"
        titleEm="the next platform."
        body="Every case study on this page began the same way — as something that didn't exist yet. Tell us yours."
      />
    </main>
  );
}
