/**
 * HRIPOP Media — single source of truth for site copy.
 * Every string comes from the master content & creative direction document.
 * Nothing here is invented — no metrics, no fake handles.
 *
 * TODO(before launch): replace placeholder email + social handles.
 */

export const BRAND = {
  name: "HRIPOP Media",
  tagline: "Imagination, Hybridized into Reality.",
  // TODO: replace with the real inbox before launch.
  email: "imagine@hripop.media",
  socials: {
    // TODO: replace with real profile URLs before launch.
    instagram: "https://instagram.com/hripopmedia",
    linkedin: "https://linkedin.com/company/hripopmedia",
    youtube: "https://youtube.com/@hripopmedia",
  },
} as const;

export const HERO = {
  eyebrow: "Creative Industries • Events • Media • Image Management",
  typing: "What if your imagination could become an experience?",
  punch: "We make it real.",
  lead:
    "HRIPOP Media creates extraordinary experiences across creative industries, entertainment, events, media and image management. From creative-industry summits and concerts to destination weddings, film publicity, business matchmaking, private celebrations and public image management — we bring imagination into the real world.",
  primaryCta: "Imagine with us",
  secondaryCta: "Plan an experience",
  scrollHint: "From what you imagine to what you experience",
} as const;

export const JOURNEY = {
  steps: ["Imagination", "Transformation", "Reality"],
} as const;

export const PHILOSOPHY = {
  eyebrow: "Brand philosophy",
  title: "Life creates moments. We create the experience.",
  paragraphs: [
    "Every event, celebration, encounter or unexpected moment can become a memory. But not every moment becomes a meaningful memory. The difference is the experience.",
    "At HRIPOP, we believe experiences can be intentionally designed — the place, people, story, entertainment, surprise, connection, emotion and details.",
  ],
  pull: "An event ends. An experience stays.",
  footnote: "We don’t create memories. We create the moments from which memories are made.",
} as const;

export type World = {
  index: string;
  title: string;
  tagline: string;
  chips: string[];
};

export const WORLDS: World[] = [
  {
    index: "01",
    title: "Creative Industries",
    tagline: "Where ideas become industries.",
    chips: ["Film", "Animation", "VFX", "Gaming", "XR", "AI", "Creators", "Design", "Digital Media", "Entertainment"],
  },
  {
    index: "02",
    title: "Events & Experiences",
    tagline: "Where moments become memories.",
    chips: ["Summits", "Concerts", "Festivals", "Roadshows", "Private Experiences", "Destination Celebrations", "Brand Experiences"],
  },
  {
    index: "03",
    title: "Media",
    tagline: "Where experiences become stories.",
    chips: ["Film", "Content", "Production", "Photography", "Videography", "Digital Media", "Publicity"],
  },
  {
    index: "04",
    title: "Image & PR",
    tagline: "Where people become brands.",
    chips: ["Personal Branding", "Film PR", "Publicity", "Media Relations", "Public Image", "Digital Presence"],
  },
  {
    index: "05",
    title: "Talent",
    tagline: "Where the right people meet the right opportunity.",
    chips: ["Casting", "Artists", "Creators", "Influencers", "Speakers", "Performers", "Industry Talent"],
  },
];

export const EXPERIENCE_STEPS = [
  { title: "Imagine", line: "Tell us what exists in your mind." },
  { title: "Curate", line: "Identify people, place, mood, story, technology and details." },
  { title: "Hybridize", line: "Combine imagination with real-world resources, creativity, technology and experiences." },
  { title: "Create", line: "Turn the concept into something tangible." },
  { title: "Experience", line: "You live it." },
  { title: "Remember", line: "The event ends; the experience remains." },
] as const;

export const LAB = {
  eyebrow: "The HRIPOP Experience Lab",
  title: "Tell us something that doesn’t exist yet.",
  ideas: [
    "A birthday that feels like a movie",
    "A wedding that feels like a journey",
    "A summit that feels like a festival",
    "A company meeting the right investors",
    "Creators feeling like a community",
    "A film launch becoming a cultural moment",
    "An event that surprises everyone",
  ],
  punch: "We’ll figure out how to make it real.",
  cta: "Submit your imagination",
} as const;

export const WHY = {
  title: "We are not a vendor. We are your experience partner.",
  chips: [
    "Creative Industry Specialization",
    "Experience-first Thinking",
    "Curation",
    "Business Matchmaking",
    "Entertainment",
    "Community",
    "Scalability",
    "Partner Ecosystem",
    "Media Amplification",
  ],
} as const;

export const SERVE = {
  eyebrow: "Who we serve",
  groups: [
    { name: "Entertainment", detail: "Films · Studios · Production Houses · Artists · Music" },
    { name: "Creative Industries", detail: "Animation · VFX · Gaming · XR · AI · Creators" },
    { name: "Corporates", detail: "Brands · Enterprises · Leadership · HR · Marketing" },
    { name: "Government & Institutions", detail: "Programs · Summits · Roadshows · Public Events" },
    { name: "Startups", detail: "Founders · Investors · Launches · Networking · Branding" },
    { name: "Education", detail: "Universities · Colleges · Student Communities" },
    { name: "Individuals & Families", detail: "Weddings · Birthdays · Honeymoons · Anniversaries · Getaways" },
    { name: "Public Figures", detail: "Artists · Entrepreneurs · Leaders · Public Representatives" },
  ],
} as const;

export type Project = {
  year: string;
  name: string;
  headline: string;
  roles: string[];
  note?: string;
  upcoming?: boolean;
};

export const PROJECTS: Project[] = [
  {
    year: "2025",
    name: "Cinematica Expo 2025",
    headline: "Where cinema met the future.",
    roles: ["Event Management", "Creative Curation", "Industry Engagement", "Partnerships", "Experience Management"],
    note: "Cinema × Technology × Creativity × Business × Community",
  },
  {
    year: "2026",
    name: "CINICATHON 2026",
    headline: "Where creativity met innovation.",
    roles: ["Event Management", "Creative Ecosystem Development", "Program Curation", "Industry Engagement", "Partnerships"],
    note: "Not just a competition. A launchpad for creative innovation.",
  },
  {
    year: "2026",
    name: "Frames of Founders 2026",
    headline: "Where entrepreneurship became storytelling.",
    roles: ["Program Management", "Creative Curation", "Outreach", "Event Experience", "Media & Content"],
    note: "Every business has a story. Every founder has a journey.",
  },
  {
    year: "2026",
    name: "Cinica Creators Council Challenges",
    headline: "Taking creativity beyond the classroom.",
    roles: ["Program Management", "Event Execution", "Creative Ecosystem", "Outreach", "Industry Engagement"],
  },
  {
    year: "2026",
    name: "Cinematica Expo 2026",
    headline: "The next chapter is coming.",
    roles: ["4th Edition", "Cinema · Film Technology · Animation · VFX · Gaming · AI · XR · Creators"],
    note: "Status: Upcoming — 2026.",
    upcoming: true,
  },
];

export const FINAL_CTA = {
  title: "What are you imagining?",
  paragraphs: [
    "Don’t worry if it doesn’t fit into a standard category. Don’t worry if it hasn’t been done before. Don’t worry if you don’t know how to execute it. That’s our job.",
    "Tell us what you see in your mind. We’ll bring together the people, places, ideas, technology, talent and expertise required to turn it into something real.",
  ],
  punch: "Your imagination. Our ecosystem. One experience.",
} as const;

export const CONTACT = {
  eyebrow: "Contact",
  title: "Have an idea that doesn’t exist yet?",
  punch: "Good. That’s where we start.",
  lead: "Tell us the idea. We’ll find the way.",
  cta: "Submit your imagination",
  types: [
    "Creative Industry Event",
    "Summit",
    "Conference",
    "Concert",
    "Festival",
    "Film Event",
    "AVGC-XR Event",
    "Creator Event",
    "Roadshow",
    "Business Matchmaking",
    "Brand Experience",
    "Destination Wedding",
    "Destination Honeymoon",
    "Destination Birthday",
    "Destination Anniversary",
    "Corporate Retreat",
    "Private Experience",
    "Film Casting",
    "Film PR",
    "Image Management",
    "Talent Management",
    "Media Production",
    "Other",
  ],
} as const;

export const FOOTER = {
  columns: [
    {
      heading: "Company",
      links: [
        ["About", "#top"],
        ["Our Work", "#work"],
        ["The Experience", "#experience"],
        ["Experience Lab", "#lab"],
        ["Contact", "#contact"],
      ],
    },
    {
      heading: "Experiences",
      links: [
        ["Creative Industry Events", "#worlds"],
        ["Entertainment", "#worlds"],
        ["Destination Experiences", "#worlds"],
        ["Private Experiences", "#worlds"],
        ["Business Matchmaking", "#worlds"],
        ["Roadshows", "#worlds"],
      ],
    },
    {
      heading: "Media & Talent",
      links: [
        ["Media Management", "#worlds"],
        ["Film Casting", "#worlds"],
        ["Talent Management", "#worlds"],
        ["Film PR", "#worlds"],
      ],
    },
    {
      heading: "Image Management",
      links: [
        ["Personal Branding", "#worlds"],
        ["Celebrity Image", "#worlds"],
        ["Public Figure Image", "#worlds"],
        ["Digital Presence", "#worlds"],
      ],
    },
  ],
  legal: "© 2026 HRIPOP Media. All Rights Reserved.",
} as const;
