import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../components/motion";
import { CtaBand } from "../../../components/page-blocks";
import { PROJECTS } from "../../../content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <section className="case-hero">
        <div className="hero-meta">
          <p>Case study · {project.id}</p>
          <p>{project.status === "upcoming" ? "Upcoming" : "Delivered"} · {project.year}</p>
        </div>
        <Reveal className="case-title">
          <h1>
            {project.title}
            <em>{project.tagline}</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="case-intro">
          <p>{project.summary}</p>
        </Reveal>
        <Reveal delay={0.16} className="case-ecosystem">
          <span>The ecosystem</span>
          <p>{project.ecosystem}</p>
        </Reveal>
      </section>

      <section className="case-grid section-pad">
        <Reveal>
          <div className="case-block">
            <span>01 · The idea</span>
            <h2>Where it <em>began.</em></h2>
            <p>{project.line}</p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="case-block">
            <span>02 · HRIPOP’s role</span>
            <ul className="case-role">
              {project.role.map((role) => (
                <li key={role}><i aria-hidden="true">✦</i>{role}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="case-block">
            <span>03 · What it brought together</span>
            <ul className="case-focus">
              {project.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="case-final">
        <Reveal>
          <blockquote>Another idea <em>brought into reality.</em></blockquote>
        </Reveal>
        {project.status === "upcoming" && (
          <Reveal delay={0.1}>
            <Link className="cta-primary" href="/contact">
              Discover {project.title} <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        )}
      </section>

      <section className="case-next section-pad">
        <p className="world-nav-label">Continue the journey</p>
        <div className="case-next-grid">
          {others.map((other) => (
            <Link key={other.slug} href={`/work/${other.slug}`} className="case-next-card">
              <span>{other.year}</span>
              <strong>{other.title}</strong>
              <small>{other.tagline}</small>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link className="text-link" href="/work">
          <ArrowLeft size={15} /> All signature projects
        </Link>
      </section>

      <CtaBand
        title="Ready to build"
        titleEm="the next chapter?"
        body="Platforms like these begin as a single sentence — someone describing something that doesn’t exist yet. Tell us yours."
      />
    </main>
  );
}
