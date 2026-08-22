import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../components/motion";
import { CtaBand, PageHero, Statement } from "../../components/page-blocks";
import { CREATIVE_NETWORK, ECOSYSTEM_PARTNERS } from "../../content/site";

export const metadata: Metadata = {
  title: "Ecosystem — One Company. Multiple Specialist Ecosystems.",
  description:
    "Great experiences are never created alone. HRIPOP collaborates with studios, artists, creators, technology companies, hotels, agencies and institutions worldwide.",
  alternates: { canonical: "/ecosystem" },
};

export default function EcosystemPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partnership ecosystem"
        title="Great experiences are"
        titleEm="never created alone."
        intro="One company. Multiple specialist ecosystems. You don’t get a standard package — you get a solution built around you."
      >
        <Link className="cta-primary" href="/contact?mode=partner">
          Become a partner <ArrowUpRight size={16} />
        </Link>
      </PageHero>

      <Statement
        quote={<>Your imagination. Our ecosystem. <em>One experience.</em></>}
        body="HRIPOP curates the specialists each experience actually needs — so the solution fits the idea, not the other way around."
        theme="deep"
      />

      <section className="section-pad eco-section" aria-labelledby="eco-heading">
        <Reveal>
          <div className="section-label"><span>01</span><p>The flexible partner ecosystem</p></div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="eco-heading">One company. <em>Multiple specialist ecosystems.</em></h2>
        </Reveal>
        <ul className="cap-list">
          {ECOSYSTEM_PARTNERS.map((partner, index) => (
            <Reveal as="li" key={partner} delay={Math.min(index * 0.03, 0.3)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{partner}
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section-pad theme-ink network-section" aria-labelledby="network-heading">
        <Reveal>
          <div className="section-label section-label-light"><span>02</span><p>HRIPOP creative network</p></div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="network-heading">The people behind <em>the possibilities.</em></h2>
        </Reveal>
        <ul className="network-cloud">
          {CREATIVE_NETWORK.map((role) => (
            <Reveal as="li" key={role}>{role}</Reveal>
          ))}
        </ul>
      </section>

      <Statement
        quote={<>You don’t get a standard package. <em>You get a solution built around you.</em></>}
        theme="accent"
      />

      <CtaBand
        kicker="Partner enquiry"
        title="Do you have the capability"
        titleEm="we need?"
        body="We are constantly building our ecosystem of studios, artists, event production companies, hotels, resorts, travel companies, technology companies, creative agencies, media houses, creators, performers, consultants and vendors."
        primary={["Join the HRIPOP ecosystem", "/contact?mode=partner"]}
      />
    </main>
  );
}
