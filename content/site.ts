/**
 * HRIPOP Media — master content source of truth.
 * Every string maps to the master Content & Creative Direction document.
 * Edit copy here; pages and metadata update automatically.
 */

export const BRAND = {
  name: "HRIPOP Media",
  strapline: "Creative Industries • Events • Media • Image Management",
  tagline: "Imagination, hybridized into reality.",
  supporting: "Imagine. Curate. Hybridize. Experience. Remember.",
  descriptionShort:
    "HRIPOP Media is an experience-led Creative Industries, Events, Media and Image Management Company that transforms imagination into reality.",
  descriptionMaster:
    "HRIPOP Media is an experience-led Creative Industries, Events, Media and Image Management Company specializing in entertainment, creative industries, destination experiences, talent, publicity and public image. We conceptualize, curate and manage extraordinary experiences across film, AVGC-XR, gaming, music, creators, summits, concerts, festivals, roadshows, business matchmaking, destination weddings, honeymoons, birthdays, anniversaries, private celebrations and corporate experiences. We also provide media management, film casting, talent coordination, film PR, publicity and image management for artists, creators, entrepreneurs, public figures and organizations.",
  email: "hello@hripop.media", // placeholder — replace with the live inbox
  socials: {
    // placeholder handles — replace with live profiles before launch
    instagram: "https://instagram.com/hripopmedia",
    linkedin: "https://linkedin.com/company/hripopmedia",
    youtube: "https://youtube.com/@hripopmedia",
  },
} as const;

export const METHOD = [
  ["01", "Imagine", "Tell us what exists in your mind."],
  ["02", "Curate", "Identify people, place, mood, story, technology and details."],
  ["03", "Hybridize", "Combine imagination with real-world resources, creativity, technology and experiences."],
  ["04", "Create", "Turn the concept into something tangible."],
  ["05", "Experience", "You live it."],
  ["06", "Remember", "The event ends; the experience remains."],
] as const;

export const WORLDS = [
  {
    number: "01",
    slug: "creative-industries",
    title: "Creative Industries",
    line: "Where ideas become industries.",
    detail:
      "Film · Animation · VFX · Gaming · XR · AI · Creators · Design · Digital Media · Entertainment",
    signal: "IDEA / INDUSTRY",
  },
  {
    number: "02",
    slug: "experiences",
    title: "Events & Experiences",
    line: "Where moments become memories.",
    detail:
      "Summits · Concerts · Festivals · Roadshows · Private Experiences · Destination Celebrations · Brand Experiences",
    signal: "MOMENT / MEMORY",
  },
  {
    number: "03",
    slug: "media-talent",
    title: "Media",
    line: "Where experiences become stories.",
    detail:
      "Film · Content · Production · Photography · Videography · Digital Media · Publicity",
    signal: "EXPERIENCE / STORY",
  },
  {
    number: "04",
    slug: "image-pr",
    title: "Image & PR",
    line: "Where people become brands.",
    detail:
      "Personal Branding · Film PR · Publicity · Media Relations · Public Image · Digital Presence",
    signal: "PERSON / PRESENCE",
  },
  {
    number: "05",
    slug: "media-talent",
    title: "Talent",
    line: "Where the right people meet the right opportunity.",
    detail:
      "Casting · Artists · Creators · Influencers · Speakers · Performers · Industry Talent",
    signal: "PEOPLE / POSSIBILITY",
  },
] as const;

export const TAGLINES = [
  ["Event", "An event ends. An experience stays."],
  ["Destination", "Don't just celebrate somewhere. Make the destination part of the story."],
  ["Media", "Every experience deserves a story."],
  ["Image Management", "Your image is your story."],
  ["Talent", "The right person can change the story."],
  ["Business Matchmaking", "Not more connections. The right connections."],
  ["Summits", "Don't build another conference. Build a platform."],
  ["Roadshows", "One idea. Many cities. One experience."],
  ["Private Experiences", "Not every experience needs a stage."],
] as const;

export type Project = {
  slug: string;
  id: string;
  year: string;
  status: "delivered" | "upcoming";
  title: string;
  tagline: string;
  summary: string;
  ecosystem: string;
  role: string[];
  focus: string[];
  line: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "cinematica-expo-2025",
    id: "CE25",
    year: "2025",
    status: "delivered",
    title: "Cinematica Expo 2025",
    tagline: "Where cinema met the future.",
    summary:
      "Cinematica Expo 2025 brought together cinema, filmmaking, film technology, animation, VFX, gaming, emerging technology and storytelling. It created opportunities for industry networking, technology showcases, discussions, workshops, creator interaction and business engagement.",
    ecosystem: "Cinema + Technology + Creativity + Business + Community",
    role: [
      "Event Management",
      "Creative Curation",
      "Industry Engagement",
      "Partnerships",
      "Experience Management",
    ],
    focus: [
      "Cinema",
      "Filmmaking",
      "Film Technology",
      "Animation",
      "VFX",
      "Gaming",
      "Emerging Technology",
      "Storytelling",
      "Industry Networking",
      "Technology Showcases",
      "Workshops",
      "Creator Interaction",
      "Business Engagement",
    ],
    line: "Cinema × Technology × Creativity",
  },
  {
    slug: "cinicathon-2026",
    id: "CI26",
    year: "2026",
    status: "delivered",
    title: "CINICATHON 2026",
    tagline: "Where creativity met innovation.",
    summary:
      "CINICATHON 2026 brought together creative minds, emerging technologies, startups, students, creators and industry professionals around storytelling and technology.",
    ecosystem: "Storytelling × Technology × Creative Innovation",
    role: [
      "Event Management",
      "Creative Ecosystem Development",
      "Program Curation",
      "Industry Engagement",
      "Partnerships",
      "Experience Management",
    ],
    focus: [
      "Hybrid Filmmaking",
      "Animation",
      "VFX",
      "Gaming",
      "Comics",
      "Digital Storytelling",
      "AI",
      "Creative Technology",
      "AVGC-XR",
      "Startups",
      "Students",
      "Creators",
    ],
    line: "Not just a competition. A launchpad for creative innovation.",
  },
  {
    slug: "frames-of-founders-2026",
    id: "FOF26",
    year: "2026",
    status: "delivered",
    title: "Frames of Founders 2026",
    tagline: "Where entrepreneurship became storytelling.",
    summary:
      "Frames of Founders brings together entrepreneurship and visual storytelling — turning founder journeys into films, animation and digital stories.",
    ecosystem: "Entrepreneurship × Visual Storytelling",
    role: [
      "Program Management",
      "Creative Curation",
      "Outreach",
      "Event Experience",
      "Media & Content",
    ],
    focus: [
      "Documentary",
      "AI-generated Storytelling",
      "Animation",
      "Hybrid Storytelling",
      "Comics",
      "Digital Media",
    ],
    line: "Every business has a story. Every founder has a journey.",
  },
  {
    slug: "cinica-creators-council-challenges",
    id: "CCC",
    year: "2026",
    status: "delivered",
    title: "Cinica Creators Council Challenges",
    tagline: "Taking creativity beyond the classroom.",
    summary:
      "Initiatives and challenges that connect creators, students, entrepreneurs, filmmakers and creative professionals with real-world opportunities to create, collaborate, experiment, solve, tell stories, explore technology, build ideas and connect with industry.",
    ecosystem: "Creators × Challenges × Industry",
    role: [
      "Program Management",
      "Event Execution",
      "Creative Ecosystem",
      "Outreach",
      "Industry Engagement",
    ],
    focus: [
      "Creator Challenges",
      "Student Programs",
      "Real-world Briefs",
      "Collaboration",
      "Technology Exploration",
      "Industry Connection",
    ],
    line: "Creativity, connected to opportunity.",
  },
  {
    slug: "cinematica-expo-2026",
    id: "CE26",
    year: "2026",
    status: "upcoming",
    title: "Cinematica Expo 2026",
    tagline: "The next chapter is coming.",
    summary:
      "The 4th edition continues building a platform for the evolving creative economy — bringing together cinema, film technology, animation, VFX, gaming, AI, XR, hybrid filmmaking, digital storytelling, creators and creative entrepreneurship.",
    ecosystem: "Cinema × Technology × Creators × Creative Economy",
    role: [
      "Platform Curation",
      "Creative Direction",
      "Ecosystem Development",
      "Experience Management",
    ],
    focus: [
      "Cinema",
      "Film Technology",
      "Animation",
      "VFX",
      "Gaming",
      "AI",
      "XR",
      "Hybrid Filmmaking",
      "Digital Storytelling",
      "Creators",
      "Creative Entrepreneurship",
    ],
    line: "Cinematica Expo 2026 — 4th Edition · Status: Upcoming",
  },
];

export const TIMELINE = [
  ["2025", "Cinematica Expo 2025", "Cinema × Technology × Creativity"],
  ["2026", "CINICATHON 2026", "Creative Innovation × Technology"],
  ["2026", "Frames of Founders 2026", "Entrepreneurship × Visual Storytelling"],
  ["2026", "Cinica Creators Council Challenges", "Creators × Challenges × Industry"],
  ["2026", "Cinematica Expo 2026", "The Next Chapter"],
] as const;

export const WHY_HRIPOP = [
  "Creative Industry Specialization",
  "Experience-first Thinking",
  "Curation",
  "Business Matchmaking",
  "Entertainment",
  "Community",
  "Scalability",
  "Partner Ecosystem",
  "Media Amplification",
] as const;

export const WHO_WE_SERVE = [
  ["Entertainment", "Films · Studios · Production Houses · Artists · Music"],
  ["Creative Industries", "Animation · VFX · Gaming · XR · AI · Creators"],
  ["Corporates", "Brands · Enterprises · Leadership · HR · Marketing"],
  ["Government & Institutions", "Programs · Summits · Roadshows · Public Events"],
  ["Startups", "Founders · Investors · Launches · Networking · Branding"],
  ["Education", "Universities · Colleges · Student Communities"],
  ["Individuals & Families", "Weddings · Birthdays · Honeymoons · Anniversaries · Getaways"],
  ["Public Figures", "Artists · Entrepreneurs · Leaders · Public Representatives"],
] as const;

export const MANAGEMENT_MODEL = [
  ["Concept", "Idea · Theme · Story · Format · Experience"],
  ["Curation", "People · Speakers · Artists · Creators · Content"],
  ["Production", "Stage · AV · Lighting · Sound · Set · Technology"],
  ["Operations", "Venue · Logistics · Hospitality · Registration · Vendors"],
  ["Entertainment", "Artists · Music · Performances · Experiences"],
  ["Media", "Photography · Video · Interviews · Social Content · Live Streaming"],
  ["Communication", "PR · Digital · Influencers · Media · Campaigns"],
  ["Experience", "Guest Journey · Networking · Surprise · Engagement · Memories"],
] as const;

export const VALUES = [
  ["Imagination", "We start where ordinary thinking stops."],
  ["Curiosity", "We ask, \u201cWhat if?\u201d"],
  ["Curation", "The right detail can change everything."],
  ["Connection", "People are at the heart of every experience."],
  ["Experience", "We design for emotion, not just execution."],
  ["Integrity", "We manage every project with professionalism and accountability."],
  ["Innovation", "We embrace new ideas, technologies and formats."],
  ["Memory", "We create moments worth remembering."],
] as const;

export const ECOSYSTEM_PARTNERS = [
  "Event Production Companies",
  "Production Houses",
  "Studios",
  "Creative Agencies",
  "Artists",
  "Speakers",
  "Creators",
  "Technology Companies",
  "AI Companies",
  "Hotels",
  "Resorts",
  "Travel Partners",
  "Hospitality Companies",
  "Digital Agencies",
  "PR Agencies",
  "Media Houses",
  "Educational Institutions",
  "Government Organizations",
  "Industry Associations",
] as const;

export const CREATIVE_NETWORK = [
  "Filmmakers",
  "Actors",
  "Directors",
  "Producers",
  "Creators",
  "Animators",
  "VFX Artists",
  "Game Developers",
  "AI Creators",
  "Designers",
  "Photographers",
  "Videographers",
  "Event Professionals",
  "Artists",
  "Musicians",
  "Speakers",
  "Technology Specialists",
  "Consultants",
  "Studios",
  "Agencies",
] as const;

export const INSIGHT_CATEGORIES = [
  "Creative Industries",
  "Entertainment",
  "Events",
  "Film",
  "AVGC-XR",
  "Gaming",
  "AI",
  "Creator Economy",
  "Destination Experiences",
  "Experiential Marketing",
  "Image Management",
  "Media",
  "Culture",
  "Technology",
  "Business Networking",
  "Event Trends",
  "HRIPOP Experiences",
] as const;

export const ENQUIRY_TYPES = [
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
] as const;

export const BUDGET_RANGES = [
  "Under ₹5 Lakh",
  "₹5 – 15 Lakh",
  "₹15 – 50 Lakh",
  "₹50 Lakh +",
  "Not sure yet",
] as const;
