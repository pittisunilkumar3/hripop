import type { Metadata } from "next";
import { CtaBand, CapIndex, PageHero, Statement, WorldNav } from "../../components/page-blocks";

export const metadata: Metadata = {
  title: "Media & Talent — Every Experience Deserves a Story",
  description:
    "Media management, film production, casting, talent management, film PR and publicity. Where experiences become stories — and the right people meet the right opportunity.",
  alternates: { canonical: "/media-talent" },
};

const mediaManagement = [
  "Event Films", "Corporate Films", "Brand Films", "Documentary Production",
  "Promotional Videos", "Interviews", "Podcasts", "Digital Content",
  "Photography", "Videography", "Reels", "Social Media Content",
  "Live Streaming", "Event Coverage", "Post-event Content", "Editing",
  "Motion Graphics", "Animation", "VFX", "Dubbing", "Subtitling", "Localization",
];

const filmMedia = [
  "Film Launches", "Trailer Launches", "Audio Launches", "Press Meets",
  "Media Events", "Premiere Events", "Red Carpet Events", "Promotional Tours",
  "Artist Interviews", "Director Interviews", "Producer Interviews",
  "Digital Content", "Film Promotions", "Media Coordination", "Festival Publicity",
];

const casting = [
  "Feature Films", "Short Films", "Web Series", "OTT", "Television",
  "Advertisements", "Music Videos", "Digital Content", "Character Roles",
  "Supporting Artists", "Child Artists", "Fresh Talent", "Theatre Artists",
  "Models", "Dancers", "International Talent",
];

const talentRoster = [
  "Actors", "Directors", "Producers", "Musicians", "Artists", "Anchors", "Hosts",
  "Speakers", "Creators", "Influencers", "Photographers", "Videographers",
  "Designers", "Animators", "VFX Artists", "AI Creators", "Performers",
  "Technical Professionals",
];

const talentServices = [
  "Talent Coordination", "Artist Management", "Speaker Management",
  "Creator Collaborations", "Influencer Campaigns", "Celebrity Coordination",
  "Brand Collaborations", "Event Talent", "Production Talent",
];

const filmPr = [
  "PR Strategy", "Film Publicity", "Pre-release Publicity", "Release Campaigns",
  "Post-release Publicity", "Media Relations", "Press Releases",
  "Press Conferences", "Media Interviews", "Artist Interviews", "Press Meets",
  "Promotional Events", "Media Tours", "Regional Media Outreach", "Digital PR",
  "Creator Outreach", "Influencer Collaborations", "Film Festival Publicity",
];

export default function MediaTalentPage() {
  return (
    <main>
      <PageHero
        eyebrow="World 03 & 05 · Media & Talent"
        title="Every experience deserves"
        titleEm="a story."
        intro="Experiences become stories. We make sure they live beyond the event — through film, content, publicity, and the right people in the right roles."
      />

      <Statement
        id="media"
        number="01"
        label="Media management"
        quote={<>Experiences become stories. <em>We make sure they live beyond the event.</em></>}
        theme="deep"
      />

      <CapIndex
        number="02"
        label="Media capabilities"
        headline={<>From the stage <em>to the screen.</em></>}
        items={mediaManagement}
      />

      <CapIndex
        number="03"
        label="Film & entertainment media"
        headline={<>From screen to <em>public conversation.</em></>}
        items={filmMedia}
        theme="ink"
      />

      <Statement
        id="casting"
        number="04"
        label="Film casting"
        quote={<>The right face <em>can change the story.</em></>}
        body="Casting support: brief development · talent search · audition coordination · shortlisting · artist coordination · portfolio management · production coordination."
      />

      <CapIndex
        number="05"
        label="Casting across"
        headline={<>Every screen, <em>every role.</em></>}
        items={casting}
      />

      <Statement
        id="talent"
        number="06"
        label="Talent management"
        quote={<>People are <em>the experience.</em></>}
        theme="accent"
      />

      <CapIndex
        number="07"
        label="The talent we represent & coordinate"
        headline={<>The people behind <em>every moment.</em></>}
        items={talentRoster}
        theme="ink"
      />

      <CapIndex
        number="08"
        label="Talent services"
        headline={<>Where the right people meet <em>the right opportunity.</em></>}
        items={talentServices}
      />

      <Statement
        id="film-pr"
        number="09"
        label="Film PR & publicity"
        quote={<>A great story deserves <em>a conversation.</em></>}
        theme="deep"
      />

      <CapIndex
        number="10"
        label="Publicity capabilities"
        headline={<>We don’t just promote a film. <em>We build the conversation around it.</em></>}
        items={filmPr}
        theme="ink"
      />

      <section className="world-nav-wrap section-pad">
        <p className="world-nav-label">Continue through the worlds</p>
        <WorldNav current="/media-talent" />
      </section>

      <CtaBand
        title="A story that deserves"
        titleEm="a bigger stage?"
        body="A film launch that becomes a cultural moment. A campaign that starts the right conversation. A face that changes the story. Tell us what needs to be seen."
      />
    </main>
  );
}
