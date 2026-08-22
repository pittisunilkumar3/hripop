import type { Metadata } from "next";
import { CtaBand, CapIndex, FlowRail, PageHero, Statement, WorldNav } from "../../components/page-blocks";

export const metadata: Metadata = {
  title: "Destination Experiences — Make the Destination Part of the Story",
  description:
    "Destination weddings, honeymoons, birthdays, anniversaries, family getaways and corporate retreats — where travel, hospitality, culture, entertainment and celebration become one story.",
  alternates: { canonical: "/destinations" },
};

const weddings = [
  "Destination Selection", "Venue Coordination", "Wedding Concept", "Theme & Styling",
  "Décor", "Ceremonies", "Mehendi", "Haldi", "Sangeet", "Cocktail Experiences",
  "Entertainment", "Artist Management", "Guest Hospitality", "Travel Coordination",
  "Accommodation", "Local Experiences", "Food Experiences", "Couple Experiences",
  "Photography", "Cinematic Wedding Films", "Guest Activities", "On-ground Management",
];

const honeymoons = [
  "Destination Selection", "Luxury Stays", "Private Villas", "Romantic Dining",
  "Sunset Experiences", "Adventure", "Wellness", "Cultural Experiences",
  "Private Excursions", "Couple Activities", "Surprise Experiences",
  "Photography", "Personalized Itineraries",
];

const birthdays = [
  "Milestone Birthdays", "Surprise Birthdays", "Luxury Getaways", "Villa Parties",
  "Resort Celebrations", "Beach Celebrations", "Adventure Birthdays",
  "Themed Experiences", "Friends' Getaways", "Family Celebrations",
  "Entertainment", "Private Dining", "Photography & Films",
];

const anniversaries = [
  "Anniversary Getaways", "Vow Renewals", "Romantic Experiences", "Private Dinners",
  "Surprise Celebrations", "Couple Experiences", "Family Gatherings",
  "Photography", "Cinematic Films",
];

const familyFriends = [
  "Family Getaways", "Friends' Trips", "Reunions", "Birthday Groups",
  "Milestone Celebrations", "Bachelor/Bachelorette Experiences",
  "Private Villa Gatherings", "Resort Getaways", "Cultural Trips",
  "Adventure Experiences", "Wellness Getaways", "Food & Culinary Experiences",
];

const corporate = [
  "Corporate Retreats", "Leadership Retreats", "Team Offsites", "Incentive Trips",
  "Annual Meets", "Dealer Meets", "Partner Meets", "Executive Experiences",
  "Gala Dinners", "Team-Building Experiences", "Cultural Experiences",
];

export default function DestinationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Destination Experiences"
        title="Don't just go somewhere. Make the destination"
        titleEm="part of the story."
        intro="We create destination experiences combining Travel + Hospitality + Culture + Entertainment + Celebration + Personalization — from once-in-a-lifetime weddings to retreats your team will never stop talking about."
      />

      <Statement
        quote={<>Don’t just celebrate somewhere. <em>Make the destination part of the story.</em></>}
        theme="deep"
      />

      <Statement
        number="01"
        label="Destination weddings"
        quote={<>Your story. Your destination. <em>Your experience.</em></>}
        body="We don't plan a wedding at a destination. We turn the destination into part of the wedding story."
      />

      <CapIndex
        number="02"
        label="Wedding curation"
        headline={<>Every ceremony, <em>every detail.</em></>}
        items={weddings}
        note="From the first mehendi to the final farewell — designed as one continuous story."
      />

      <CapIndex
        number="03"
        label="Destination honeymoons"
        headline={<>Your first chapter deserves <em>a story of its own.</em></>}
        items={honeymoons}
        theme="ink"
      />

      <CapIndex
        number="04"
        label="Destination birthdays"
        headline={<>Make the milestone <em>a destination.</em></>}
        items={birthdays}
      />

      <CapIndex
        number="05"
        label="Destination anniversaries"
        headline={<>Some milestones deserve <em>a journey.</em></>}
        items={anniversaries}
        theme="ink"
      />

      <CapIndex
        number="06"
        label="Family & friend experiences"
        headline={<>Bring your people. <em>We’ll create the experience.</em></>}
        items={familyFriends}
      />

      <CapIndex
        number="07"
        label="Destination corporate experiences"
        headline={<>Take your team somewhere <em>they will remember.</em></>}
        items={corporate}
        theme="ink"
      />

      <FlowRail
        number="08"
        label="Destination experience philosophy"
        headline={<>We curate. <em>You experience.</em></>}
        steps={[
          ["01", "Arrival", "How does the experience begin?"],
          ["02", "Discovery", "What does the guest discover?"],
          ["03", "Celebration", "What do they experience?"],
          ["04", "Surprise", "What didn't they expect?"],
          ["05", "Connection", "Who do they meet?"],
          ["06", "Memory", "What will they remember?"],
        ]}
      />

      <section className="world-nav-wrap section-pad">
        <p className="world-nav-label">Continue through the worlds</p>
        <WorldNav current="/destinations" />
      </section>

      <CtaBand
        title="A wedding that feels like"
        titleEm="a journey?"
        body="A birthday that feels like a movie. An anniversary that feels like a film. Tell us the destination in your mind — or just the feeling — and we'll turn the place into part of the story."
        primary={["Plan a destination experience", "/contact"]}
      />
    </main>
  );
}
