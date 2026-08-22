import type { Metadata } from "next";
import { PageHero } from "../../../components/page-blocks";

type Params = { doc: string };

const DOCS = {
  privacy: {
    title: "Privacy Policy",
    headline: ["Your imagination is yours.", "So is your data."],
    intro:
      "This policy explains what HRIPOP Media collects through this website, why we collect it, and the choices you have.",
    sections: [
      ["What we collect", "When you submit an enquiry we collect the details you provide: your name, organization, email, phone, the nature of your enquiry, location, audience expectations, timeline, budget range and your idea. We also collect standard technical logs (such as pages requested) needed to operate the site securely."],
      ["Why we collect it", "Only to respond to your enquiry, prepare proposals, and — where you've asked us to — continue the conversation about your experience. We do not sell your data. We do not use your idea for anything other than replying to you."],
      ["Sharing", "Your enquiry may be shared with the specific HRIPOP team members and specialist partners required to respond to it. Nothing more."],
      ["Retention", "Enquiries are retained only as long as needed to serve you, or as required by applicable law."],
      ["Your choices", "Write to us at any time to access, correct or delete your details, or to withdraw from further communication."],
      ["Updates", "This policy will be updated as the site evolves. Continued use of the site after changes means you accept the updated policy."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    headline: ["The terms, in", "plain language."],
    intro:
      "These terms govern your use of the HRIPOP Media website and the enquiries you submit through it.",
    sections: [
      ["The website", "Content on this site — including copy, design, project descriptions and brand elements — belongs to HRIPOP Media and may not be reproduced without permission."],
      ["Enquiries", "Submitting an enquiry starts a conversation, not a contract. Engagements are confirmed only through separate written agreements."],
      ["Project information", "Descriptions of projects such as Cinematica Expo, CINICATHON and Frames of Founders reflect HRIPOP's role and scope. Verified statistics are used only where available."],
      ["No guarantees", "Nothing on this site constitutes a guarantee of specific outcomes, attendances, media coverage or business results."],
      ["Liability", "The site is provided as-is. HRIPOP Media is not liable for decisions made based on website content alone."],
      ["Governing law", "These terms are governed by the laws of India, with jurisdiction in the courts applicable to HRIPOP Media's place of business."],
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    headline: ["Honest by", "design."],
    intro:
      "A short note on how we present information on this website.",
    sections: [
      ["General information", "Content on this site is for general information about HRIPOP Media's philosophy, capabilities and signature work. It is not professional, legal or financial advice."],
      ["Metrics", "We use verified project statistics only. Where numbers are not verified, we choose storytelling over speculation — we do not invent audience, partner, media or reach figures."],
      ["External links", "Links to external platforms (social media, partner sites) are provided for convenience. We are not responsible for their content."],
      ["Images & media", "Visuals are used to convey the feeling of experiences. Where original project photography is not yet available, representative imagery may be used."],
      ["Contact", "Questions about anything on this site? Write to us — we'd rather explain than assume."],
    ],
  },
} as const;

export function generateStaticParams(): Params[] {
  return Object.keys(DOCS).map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { doc } = await params;
  const entry = DOCS[doc as keyof typeof DOCS];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.intro,
    alternates: { canonical: `/${doc}` },
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const { doc } = await params;
  const entry = DOCS[doc as keyof typeof DOCS];
  if (!entry) return null;

  return (
    <main className="legal-page">
      <PageHero
        eyebrow={`Legal · ${entry.title}`}
        title={entry.headline[0]}
        titleEm={entry.headline[1]}
        intro={entry.intro}
      />
      <section className="section-pad legal-body">
        {entry.sections.map(([heading, body], index) => (
          <div className="legal-block" key={heading}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{heading}</h2>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
