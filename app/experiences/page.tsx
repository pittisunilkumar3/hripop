import type { Metadata } from "next";
import { CtaBand, CapIndex, FlowRail, PageHero, Statement, WorldNav } from "../../components/page-blocks";

export const metadata: Metadata = {
  title: "Events & Experiences — Not an Event. An Experience.",
  description:
    "Summits, concerts, festivals, roadshows, creator events, business matchmaking, brand experiences and private gatherings — designed around you, not a template.",
  alternates: { canonical: "/experiences" },
};

const formats = [
  "Summits", "Conferences", "Concerts", "Festivals", "Exhibitions", "Roadshows",
  "Creator Events", "Film Events", "Brand Experiences", "Business Meets",
  "Private Gatherings", "Cultural Experiences", "Destination Celebrations",
  "Corporate Experiences", "Community Events",
];

const concerts = [
  "Concerts", "Music Festivals", "DJ Events", "Live Performances", "Artist Shows",
  "Celebrity Appearances", "Stand-up Comedy", "Cultural Performances",
  "Entertainment Nights", "Private Concerts", "Themed Events",
  "Artist Meet & Greets", "Music & Culture Experiences",
];

const creatorEvents = [
  "Creator Meetups", "Creator Summits", "Creator Conventions", "Creator Awards",
  "Portfolio Showcases", "Creative Jams", "Networking Nights", "Masterclasses",
  "Creator-Brand Meets", "Creator-Technology Meets", "Industry Meets",
  "Collaboration Sessions",
];

const matchmakingPairs = [
  "Business ↔ Business", "Brand ↔ Creator", "Studio ↔ Brand",
  "Startup ↔ Investor", "Technology ↔ Industry", "Creator ↔ Brand",
  "Institution ↔ Industry", "International ↔ Indian Business", "Talent ↔ Production",
];

const matchmakingFormats = [
  "B2B Meetings", "Investor Meets", "Buyer-Seller Meets", "Partnership Meetings",
  "Networking Forums", "Business Roundtables", "Industry Matchmaking",
  "Startup Showcases", "Pitch Sessions",
];

const summitCuration = [
  "Theme Development", "Concept Creation", "Agenda Curation", "Speaker Curation",
  "Panel Curation", "Fireside Conversations", "Masterclasses", "Roundtables",
  "Business Matchmaking", "Exhibitions", "Showcases", "Entertainment",
  "Networking", "Delegate Experience", "Event Production", "Media & Content",
];

const summitFormats = [
  "Creative Economy Summit", "Film Summit", "AVGC-XR Summit", "Technology Summit",
  "Creator Summit", "Business Conclave", "Industry Forum", "Investor Forum",
  "Leadership Forum",
];

const roadshows = [
  "Creative Industry Roadshows", "Government Initiative Roadshows", "Student Roadshows",
  "Creator Roadshows", "Brand Roadshows", "Technology Roadshows", "Film Promotions",
  "Startup Roadshows", "Talent Discovery Tours", "Multi-city Industry Programs",
  "Awareness Campaigns",
];

const crossCultural = [
  "Cultural Exchange", "International Meets", "Cross-Culture Gatherings",
  "Global Creator Meets", "Cultural Festivals", "International Business Networking",
  "Food & Culture Experiences", "Music & Culture Events",
  "Creative Diplomacy Experiences", "Community Gatherings",
];

const privateFormats = [
  "Homestay Parties", "Private Villa Experiences", "Rooftop Experiences",
  "Creative House Gatherings", "Private Dinners", "Networking Evenings",
  "Curated Brunches", "Friends' Getaways", "Community Gatherings",
  "Surprise Experiences", "Members-only Events", "Intimate Celebrations",
  "Themed Gatherings",
];

const scales: [string, string, string][] = [
  ["01", "Intimate", "Private gatherings · Homestay experiences · Creative dinners · Private celebrations · Creator meets."],
  ["02", "Mid-scale", "Masterclasses · Industry meets · Brand experiences · Networking events · Community events."],
  ["03", "Large-scale", "Summits · Conferences · Exhibitions · Concerts · Festivals · Awards."],
  ["04", "Multi-city", "Roadshows · Industry programs · Creator tours · Brand activations · Government initiatives."],
];

export default function ExperiencesPage() {
  return (
    <main>
      <PageHero
        eyebrow="World 02 · Events & Experiences"
        title="Not an event. An experience"
        titleEm="designed around you."
        intro="Life creates moments. We create the experience — the place, people, story, entertainment, surprise, connection, emotion and details that turn a moment into a memory."
      />

      <Statement
        quote={<>Where moments <em>become memories.</em></>}
        body="An event ends. An experience stays."
        theme="deep"
      />

      <CapIndex
        number="01"
        label="The formats we design"
        headline={<>Every scale. Every stage. <em>Every story.</em></>}
        items={formats}
      />

      <CapIndex
        id="concerts"
        number="02"
        label="Concerts & live entertainment"
        headline={<>Make some noise. <em>Make some memories.</em></>}
        items={concerts}
        theme="ink"
      />

      <CapIndex
        id="creators"
        number="03"
        label="Creator experiences"
        headline={<>Creators need a place <em>to connect.</em></>}
        items={creatorEvents}
      />

      <Statement
        id="matchmaking"
        number="04"
        label="Business matchmaking"
        quote={<>Not more connections. <em>The right connections.</em></>}
        body="We curate the meetings that matter — so the right people find each other at the right moment."
        theme="accent"
      />

      <CapIndex
        number="05"
        label="Curated pairings"
        headline={<>Who meets <em>whom.</em></>}
        items={matchmakingPairs}
        note="Every pairing is deliberate. Every introduction is curated."
      />

      <CapIndex
        number="06"
        label="Matchmaking formats"
        headline={<>Structured ways to <em>meet.</em></>}
        items={matchmakingFormats}
        theme="ink"
      />

      <Statement
        number="07"
        label="Summit curation"
        quote={<>Don’t build another conference. <em>Build a platform people want to return to.</em></>}
        theme="deep"
      />

      <CapIndex
        number="08"
        label="What we curate"
        headline={<>The anatomy of <em>a summit.</em></>}
        items={summitCuration}
      />

      <CapIndex
        number="09"
        label="Summit formats"
        headline={<>Platforms, <em>not panel marathons.</em></>}
        items={summitFormats}
        theme="ink"
      />

      <Statement
        id="roadshows"
        number="10"
        label="Roadshows"
        quote={<>Take the experience <em>everywhere.</em></>}
        theme="accent"
      />

      <FlowRail
        number="11"
        label="The roadshow model"
        headline={<>One idea. Many cities. <em>One experience.</em></>}
        steps={[
          ["01", "One idea", "A single creative identity carries the whole journey."],
          ["02", "One creative identity", "Consistent design, story and tone in every city."],
          ["03", "Multiple cities", "The experience travels without diluting."],
          ["04", "Local engagement", "Each city adds its own flavour to the platform."],
          ["05", "One unified experience", "Every audience feels part of the same story."],
        ]}
      />

      <CapIndex
        number="12"
        label="Roadshow formats"
        headline={<>Ideas that <em>travel.</em></>}
        items={roadshows}
      />

      <CapIndex
        number="13"
        label="Cross-cultural experiences"
        headline={<>Different cultures. <em>One experience.</em></>}
        items={crossCultural}
        theme="ink"
      />

      <Statement
        id="private"
        number="14"
        label="Private & unconventional experiences"
        quote={<>Not every experience <em>needs a ballroom.</em></>}
        body="Small can be spectacular."
        theme="deep"
      />

      <CapIndex
        number="15"
        label="Private formats"
        headline={<>Intimate, <em>unexpected, unforgettable.</em></>}
        items={privateFormats}
      />

      <FlowRail
        number="16"
        label="Event scale"
        headline={<>From 20 guests <em>to 20 cities.</em></>}
        steps={scales}
        theme="ink"
      />

      <section className="world-nav-wrap section-pad">
        <p className="world-nav-label">Continue through the worlds</p>
        <WorldNav current="/experiences" />
      </section>

      <CtaBand
        title="Imagine an experience"
        titleEm="designed around you."
        body="A company meeting the right investors. Creators feeling like a community. An event that surprises everyone. Describe the feeling you want — we'll design the experience that creates it."
      />
    </main>
  );
}
