import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../components/motion";
import { CtaBand, PageHero } from "../../components/page-blocks";
import { INSIGHT_CATEGORIES } from "../../content/site";

export const metadata: Metadata = {
  title: "Insights — The World of Experiences, In Focus",
  description:
    "Perspectives on creative industries, entertainment, film, AVGC-XR, gaming, AI, the creator economy, destination experiences and experiential marketing.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="The world of experiences,"
        titleEm="in focus."
        intro="Notes, perspectives and field reports from the intersection of entertainment, creative industries, technology and human moments."
      />

      <section className="section-pad insights-empty">
        <Reveal>
          <div className="section-label"><span>01</span><p>Currently curating</p></div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2>
            The first stories are <em>being written.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="insights-note">
            Insights from the HRIPOP ecosystem — essays on experience design, dispatches
            from our platforms, and thinking on the future of the creative economy —
            are being curated now. In the meantime, here is where our attention lives.
          </p>
        </Reveal>
        <ul className="cap-list compact">
          {INSIGHT_CATEGORIES.map((category) => (
            <li key={category}><span>✦</span>{category}</li>
          ))}
        </ul>
        <Reveal delay={0.14}>
          <Link className="text-link" href="/contact">
            Ask us anything in the meantime <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <CtaBand
        title="Curious about"
        titleEm="something specific?"
        body="If a question about experiences, ecosystems or the creative economy keeps circling your mind — send it over. It might become our next piece."
      />
    </main>
  );
}
