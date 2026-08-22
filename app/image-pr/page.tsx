import type { Metadata } from "next";
import { CtaBand, CapIndex, PageHero, Statement, WorldNav } from "../../components/page-blocks";

export const metadata: Metadata = {
  title: "Image & PR — Your Image Is Your Story",
  description:
    "Personal branding, celebrity image management, public figure and political image management, and digital presence — built with authenticity, professionalism and discretion.",
  alternates: { canonical: "/image-pr" },
};

const whoWeWorkWith = [
  "Actors", "Directors", "Producers", "Musicians", "Creators", "Influencers",
  "Entrepreneurs", "Founders", "Business Leaders", "Public Figures",
  "Politicians & Public Representatives", "Speakers", "Professionals",
  "Brands", "Organizations",
];

const personal = [
  "Personal Brand Strategy", "Positioning", "Public Persona Development",
  "Profile Development", "Media Positioning", "Interview Coordination",
  "Public Appearance Management", "Event Appearance Curation",
  "Digital Presence", "Personal Brand Content", "Professional Photography",
  "Video Profiles", "Brand Films", "Thought Leadership Content",
  "Social Media Positioning", "Styling & Appearance Coordination",
  "Brand Collaborations",
];

const celebrity = [
  "Public Image", "Media Presence", "Interviews", "Public Appearances",
  "Event Appearances", "Digital Content", "Film Publicity",
  "Brand Collaborations", "Creator Collaborations", "Promotional Campaigns",
  "Personal Branding", "Media Scheduling", "Publicity Coordination",
];

const publicFigure = [
  "Public Image Strategy", "Personal Branding", "Media Coordination",
  "Press Conference Management", "Interview Coordination", "Public Event Management",
  "Public Appearance Management", "Digital Content", "Social Media Communication",
  "Photography & Videography", "Profile Films", "Public Communication Materials",
  "Speech Presentation Support", "Stakeholder Event Coordination",
  "Public Engagement Events",
];

export default function ImagePrPage() {
  return (
    <main>
      <PageHero
        eyebrow="World 04 · Image & PR"
        title="Your image"
        titleEm="is your story."
        intro="HRIPOP helps individuals and organizations build a consistent, authentic and professional public presence — where people become brands."
      />

      <Statement
        quote={<>Be seen. Be understood. <em>Be remembered.</em></>}
        theme="deep"
      />

      <CapIndex
        number="01"
        label="Who we work with"
        headline={<>Every public life needs <em>a considered story.</em></>}
        items={whoWeWorkWith}
      />

      <Statement
        id="personal"
        number="02"
        label="Personal image management"
        quote={<>Be seen. Be understood. <em>Be remembered.</em></>}
        theme="accent"
      />

      <CapIndex
        number="03"
        label="Personal capabilities"
        headline={<>The craft behind <em>a public presence.</em></>}
        items={personal}
      />

      <Statement
        id="celebrity"
        number="04"
        label="Film & celebrity image management"
        quote={<>Beyond the screen. <em>Building the persona.</em></>}
        theme="ink"
      />

      <CapIndex
        number="05"
        label="Celebrity capabilities"
        headline={<>The persona, <em>professionally managed.</em></>}
        items={celebrity}
      />

      <Statement
        id="public-figure"
        number="06"
        label="Public figure & political image management"
        quote={<>A public presence requires <em>a public story.</em></>}
        body="Professional image, communication, media and event support for politicians, elected representatives and public figures — positioned around professional communication, public presentation and reputation-conscious image management."
        theme="deep"
      />

      <CapIndex
        id="digital"
        number="07"
        label="Public figure capabilities"
        headline={<>Communication, curated <em>with care.</em></>}
        items={publicFigure}
      />

      <section className="world-nav-wrap section-pad">
        <p className="world-nav-label">Continue through the worlds</p>
        <WorldNav current="/image-pr" />
      </section>

      <CtaBand
        title="An image that works"
        titleEm="as hard as you do?"
        body="A launch, a reputation, a reinvention. Tell us the story you want the world to see — we'll build the presence that tells it."
      />
    </main>
  );
}
