import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../../components/motion";
import { PageHero } from "../../components/page-blocks";
import EnquiryForm from "../../components/enquiry-form";
import { BRAND } from "../../content/site";

export const metadata: Metadata = {
  title: "Contact — Have an Idea That Doesn't Exist Yet?",
  description:
    "Tell us the idea. We’ll find the way. Events, summits, concerts, film launches, destination weddings, business matchmaking, publicity campaigns and image transformations — or something you can't describe yet.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const { mode } = await searchParams;
  const initialMode = mode === "partner" ? "partner" : "experience";

  return (
    <main>
      <PageHero
        eyebrow="Contact · The Experience Lab"
        title="Have an idea that doesn’t exist yet? Good."
        titleEm="That's where we start."
        intro="Tell us what you’re imagining. It could be an event, summit, concert, film launch, roadshow, destination wedding, honeymoon, birthday, business gathering, creator experience, brand experience, publicity campaign, image transformation — or something you don't even know how to describe yet."
      >
        <p className="contact-aside">Tell us the idea. We’ll find the way.</p>
      </PageHero>

      <section className="contact-layout section-pad">
        <div className="contact-form-wrap">
          <Reveal>
            <div className="section-label"><span>01</span><p>The enquiry</p></div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2>What are you <em>imagining?</em></h2>
          </Reveal>
          <Reveal delay={0.1} className="idea-panel">
            <EnquiryForm initialMode={initialMode} />
          </Reveal>
        </div>

        <aside className="contact-panels">
          <Reveal delay={0.12}>
            <div className="contact-panel">
              <span>Don’t worry</span>
              <ul>
                <li>…if it doesn’t fit into a standard category.</li>
                <li>…if it hasn’t been done before.</li>
                <li>…if you don’t know how to execute it.</li>
              </ul>
              <p><strong>That’s our job.</strong></p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="contact-panel theme-dark">
              <span>Connect directly</span>
              <p>
                Prefer email? Write to{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> — or find us on{" "}
                <a href={BRAND.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>,{" "}
                <a href={BRAND.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> and{" "}
                <a href={BRAND.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="contact-panel">
              <span>What happens next</span>
              <ol>
                <li>We read what you imagined.</li>
                <li>We respond with curiosity — not a rate card.</li>
                <li>Together, we begin: Imagine → Curate → Hybridize.</li>
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link className="contact-partner-link" href="/ecosystem">
              Capable partner? Join the ecosystem →
            </Link>
          </Reveal>
        </aside>
      </section>
    </main>
  );
}
