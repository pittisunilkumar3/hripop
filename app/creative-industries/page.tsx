import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, CapIndex, PageHero, Statement, WorldNav } from "../../components/page-blocks";

export const metadata: Metadata = {
  title: "Creative Industries — Where Ideas Become Industries",
  description:
    "HRIPOP builds where creativity meets opportunity — across film, animation, VFX, gaming, XR, AI, creators and the wider creative economy. Industry programs, summits, ecosystems and platforms.",
  alternates: { canonical: "/creative-industries" },
};

const sectors = [
  "Film", "Television", "OTT", "Animation", "VFX", "Gaming", "XR",
  "Virtual Production", "AI & Creative Technology", "Digital Media",
  "Creator Economy", "Music", "Advertising", "Design", "Photography",
  "Content Creation", "Entertainment", "Culture",
];

const capabilities = [
  "Creative Industry Programs", "Industry Events", "Industry Summits",
  "Ecosystem Development", "Industry Networking", "Creative Business Development",
  "Creative Partnerships", "Creator Programs", "Startup Programs",
  "Innovation Programs", "Industry-Academia Programs", "Competitions",
  "Challenges", "Creative Hackathons", "Workshops", "Masterclasses",
  "Consultancy", "Project Management", "Program Management",
];

const platformFormats = [
  "Creative Industry Summits", "Film Summits", "AVGC-XR Summits",
  "Animation Conferences", "VFX Conferences", "Gaming Events",
  "Creator Conventions", "Creative Technology Expos", "Film Festivals",
  "Film Markets", "Industry Conclaves", "Business Forums",
  "Industry Roundtables", "Networking Platforms", "Studio Showcases",
  "Technology Demonstrations", "Masterclasses", "Competitions",
  "Innovation Challenges", "Creative Hackathons", "Awards & Recognition Platforms",
];

const creativeTech = [
  "AI-assisted Content", "AI Video", "AI Animation", "2D Animation", "3D Animation",
  "VFX", "Motion Graphics", "XR", "AR", "VR", "Virtual Production",
  "Interactive Experiences", "Digital Installations", "Immersive Experiences",
];

export default function CreativeIndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="World 01 · Creative Industries"
        title="We build where creativity"
        titleEm="meets opportunity."
        intro="HRIPOP works across the full creative economy — connecting ideas, talent, technology and business so that creative industries don't just grow, they compound."
      >
        <Link className="cta-primary" href="/contact">
          Build with us <ArrowUpRight size={16} />
        </Link>
      </PageHero>

      <Statement
        quote={<>Where ideas <em>become industries.</em></>}
        body="Film · Animation · VFX · Gaming · XR · AI · Creators · Design · Digital Media · Entertainment"
        theme="deep"
      />

      <CapIndex
        number="01"
        label="The sectors we move through"
        headline={<>Every sector of the <em>creative economy.</em></>}
        items={sectors}
        note="One ecosystem spanning the whole creative economy — connected by people, technology and opportunity."
      />

      <CapIndex
        number="02"
        label="How we build"
        headline={<>From programs to <em>platforms.</em></>}
        items={capabilities}
        theme="ink"
        note="We conceptualize, curate and manage the structures that help creative ecosystems grow."
      />

      <Statement
        number="03"
        label="Creative industry events"
        quote={<>We don’t just manage industry events.<br /><em>We build industry platforms.</em></>}
        theme="accent"
      />

      <CapIndex
        number="04"
        label="Platform formats"
        headline={<>Formats that become <em>annual rituals.</em></>}
        items={platformFormats}
        note="A platform people return to is worth more than a hundred one-off events."
      />

      <CapIndex
        number="05"
        label="Creative technology"
        headline={<>When technology becomes part of <em>the experience.</em></>}
        items={creativeTech}
        theme="ink"
        note="AI, animation, XR and immersive tools — not as gimmicks, but as storytelling instruments."
      />

      <section className="world-nav-wrap section-pad">
        <p className="world-nav-label">Continue through the worlds</p>
        <WorldNav current="/creative-industries" />
      </section>

      <CtaBand
        title="Have an idea for the"
        titleEm="creative economy?"
        body="A summit the industry actually waits for. A challenge that launches careers. A platform that becomes an ecosystem. Tell us what’s missing — we'll build it."
      />
    </main>
  );
}
