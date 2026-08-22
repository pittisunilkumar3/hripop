"use client";

import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Plus,
} from "lucide-react";
import { motion, useInView, useScroll } from "framer-motion";
import { ease, SectionLabel } from "../components/motion";
import {
  METHOD,
  PROJECTS,
  TAGLINES,
  WHO_WE_SERVE,
  WHY_HRIPOP,
  WORLDS,
} from "../content/site";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeWorld, setActiveWorld] = useState(0);
  const { scrollYProgress } = useScroll();

  return (
    <main id="top">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      {/* HERO — doc §04 */}
      <section className="editorial-hero" aria-labelledby="hero-title">
        <div className="hero-meta">
          <p>Experience-led creative company</p>
          <p>India · Building globally</p>
        </div>

        <motion.div
          className="hero-title-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="hero-title">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease }}>
              You imagine it.
            </motion.span>
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.24, ease }}>
              We hybridize it <em>into reality.</em>
            </motion.span>
          </h1>
        </motion.div>

        <div className="hero-artifacts" aria-hidden="true">
          <motion.div className="artifact artifact-code" initial={{ opacity: 0, rotate: -7, y: 30 }} animate={{ opacity: 1, rotate: -7, y: 0 }} transition={{ duration: 0.8, delay: 0.75, ease }}>
            <span>HRI—001</span>
            <strong>WHAT IF?</strong>
            <small>Every experience begins with possibility.</small>
          </motion.div>

          <motion.figure className="artifact artifact-film" initial={{ opacity: 0, y: 45, rotate: 3 }} animate={{ opacity: 1, y: 0, rotate: 3 }} transition={{ duration: 0.9, delay: 0.55, ease }}>
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_170109_f96e01a5-b0db-4274-b24d-8d97e99ec928.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/og.png"
            />
            <figcaption><span>From imagination</span><span>Into reality · 00:∞</span></figcaption>
          </motion.figure>

          <motion.div className="artifact artifact-poster" initial={{ opacity: 0, rotate: 6, y: 35 }} animate={{ opacity: 1, rotate: 6, y: 0 }} transition={{ duration: 0.8, delay: 0.88, ease }}>
            <span>UPCOMING / 2026</span>
            <strong>CINEMATICA</strong>
            <small>The next chapter<br />is coming.</small>
            <i>04</i>
          </motion.div>

          <motion.div className="artifact artifact-seal" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 1, ease }}>
            <span>IMAGINE<br />CURATE<br />HYBRIDIZE</span>
            <i>✦</i>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <p>
            HRIPOP Media creates extraordinary experiences across creative industries,
            entertainment, events, media and image management — from summits and concerts
            to destination weddings, film publicity, business matchmaking and public image.
          </p>
          <div className="hero-cta-row">
            <Link className="hero-cta" href="/contact">Imagine with us <ArrowUpRight size={15} /></Link>
            <Link className="text-link" href="#worlds">Enter the experience <ArrowDown size={17} /></Link>
          </div>
        </div>
      </section>

      <div className="proof-rail" aria-label="Selected HRIPOP platforms">
        <span>Selected platforms</span>
        <p>Cinematica Expo 2025</p><i>✦</i>
        <p>CINICATHON 2026</p><i>✦</i>
        <p>Frames of Founders</p><i>✦</i>
        <p>Cinica Creators Council</p>
      </div>

      {/* POSITIONING — doc §01, §02, §05 */}
      <section className="positioning section-pad" id="about">
        <Reveal><SectionLabel number="01" light>The difference</SectionLabel></Reveal>
        <div className="positioning-grid">
          <Reveal className="positioning-aside">
            <Asterisk />
            <p>
              Not a catalogue of services. A flexible ecosystem built around the
              experience you want to create.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2>
              Not just event management.<br />
              <em>Experiences that didn’t exist before.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal className="positioning-foot" delay={0.12}>
          <p>Entertainment meets creativity.</p>
          <p>Business meets opportunity.</p>
          <p>Technology meets imagination.</p>
          <p>Moments become memories.</p>
        </Reveal>
      </section>

      {/* FIVE WORLDS — doc §06 */}
      <section className="worlds section-pad" id="worlds">
        <Reveal><SectionLabel number="02">Five worlds. One philosophy.</SectionLabel></Reveal>
        <div className="worlds-intro">
          <Reveal><h2>Tell us what you imagine.<br /><em>We’ll build what it needs.</em></h2></Reveal>
          <Reveal delay={0.1}><p>Move through the five worlds that form the HRIPOP ecosystem.</p></Reveal>
        </div>

        <div className="worlds-explorer">
          <div className="world-index" role="tablist" aria-label="HRIPOP worlds">
            {WORLDS.map((world, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeWorld === index}
                className={activeWorld === index ? "active" : ""}
                onMouseEnter={() => setActiveWorld(index)}
                onFocus={() => setActiveWorld(index)}
                onClick={() => setActiveWorld(index)}
                key={world.number}
              >
                <span>{world.number}</span>
                <strong>{world.title}</strong>
                <Plus />
              </button>
            ))}
          </div>

          <motion.article
            className="world-stage"
            key={WORLDS[activeWorld].number}
            role="tabpanel"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <div className="world-stage-top">
              <span>{WORLDS[activeWorld].signal}</span>
              <span>WORLD / {WORLDS[activeWorld].number}</span>
            </div>
            <div className="world-stage-orbit"><span>{WORLDS[activeWorld].number}</span></div>
            <div className="world-stage-copy">
              <p>{WORLDS[activeWorld].line}</p>
              <h3>{WORLDS[activeWorld].title}</h3>
              <small>{WORLDS[activeWorld].detail}</small>
              <Link className="world-stage-link" href={`/${WORLDS[activeWorld].slug}`}>
                Enter this world <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* WORK PREVIEW — doc §43 */}
      <section className="work section-pad" id="work">
        <Reveal><SectionLabel number="03">Selected realities</SectionLabel></Reveal>
        <div className="work-heading">
          <Reveal><h2>Some projects are events.<br /><em>Some become platforms.</em></h2></Reveal>
          <Reveal delay={0.1}><p>Experiences that start conversations, create opportunities and build creative communities.</p></Reveal>
        </div>

        <div className="project-grid">
          {PROJECTS.map((project, index) => {
            const layout = ["coral", "dark", "paper", "line", "feature"][index % 5];
            return (
            <motion.article
              className={`project-card project-${layout}`}
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.75, delay: (index % 2) * 0.08, ease }}
            >
              <Link className="project-link" href={`/work/${project.slug}`}>
                <div className="project-meta">
                  <span>{project.id}</span>
                  <span>{project.status === "upcoming" ? "UPCOMING · " : ""}{project.year}</span>
                </div>
                <div className="project-symbol" aria-hidden="true"><span>{project.id}</span></div>
                <div className="project-content">
                  <p>{project.tagline}</p>
                  <h3>{project.title}</h3>
                  <small>{project.ecosystem}</small>
                </div>
                <div className="project-role"><span>HRIPOP role</span><p>{project.role.slice(0, 3).join(" · ")}</p><ArrowUpRight /></div>
              </Link>
            </motion.article>
            );
          })}
        </div>

        <Reveal className="work-more">
          <Link className="text-link" href="/work">
            Explore all signature projects <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* METHOD — doc §35 */}
      <section className="method section-pad" id="method">
        <div className="method-heading">
          <Reveal><SectionLabel number="04" light>The HRIPOP Experience™</SectionLabel></Reveal>
          <Reveal delay={0.08}><h2>From a thought<br />to something <em>felt.</em></h2></Reveal>
          <Reveal delay={0.12}>
            <p>
              No standard package. No ordinary template. One method flexible enough to
              fit an industry platform, a private celebration — or an idea without a name yet.
            </p>
          </Reveal>
        </div>

        <div className="method-track">
          {METHOD.map(([number, title, description]) => (
            <motion.article
              className="method-step"
              key={title}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-28% 0px -28% 0px" }}
              transition={{ duration: 0.45 }}
            >
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <ArrowRight />
            </motion.article>
          ))}
        </div>
      </section>

      {/* TAGLINES — doc §03 */}
      <section className="tagline-index section-pad" aria-label="What we believe, in one line each">
        <Reveal><SectionLabel number="05">One line each</SectionLabel></Reveal>
        <Reveal delay={0.06}><h2>Say it <em>simply.</em></h2></Reveal>
        <ul className="tagline-list">
          {TAGLINES.map(([context, line], index) => (
            <Reveal as="li" key={context} delay={Math.min(index * 0.04, 0.3)}>
              <span>{context}</span>
              <p>{line}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ECOSYSTEM — doc §38, §73 */}
      <section className="ecosystem" aria-label="The HRIPOP partner ecosystem">
        <div className="ecosystem-copy">
          <p>YOUR IMAGINATION</p><ArrowRight /><p>OUR ECOSYSTEM</p><ArrowRight /><p>ONE EXPERIENCE</p>
        </div>
        <div className="ecosystem-ticker" aria-hidden="true">
          <div>STUDIOS ✦ ARTISTS ✦ CREATORS ✦ TECHNOLOGY ✦ PRODUCTION ✦ MEDIA ✦ HOSPITALITY ✦ TRAVEL ✦ CULTURE ✦ STUDIOS ✦ ARTISTS ✦ CREATORS ✦ TECHNOLOGY ✦ PRODUCTION ✦ MEDIA ✦ HOSPITALITY ✦ TRAVEL ✦ CULTURE ✦</div>
        </div>
        <div className="ecosystem-cta section-pad">
          <Reveal>
            <h2>Don’t get a standard package.<br /><em>Get a solution built around you.</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link className="text-link light" href="/ecosystem">
              Explore the ecosystem <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY + WHO — doc §39, §40 */}
      <section className="why-serve section-pad">
        <div className="why-serve-grid">
          <div className="why-col">
            <Reveal><SectionLabel number="06">Why HRIPOP?</SectionLabel></Reveal>
            <Reveal delay={0.06}>
              <h2>We are not a vendor.<br /><em>We are your experience partner.</em></h2>
            </Reveal>
            <ul className="why-list">
              {WHY_HRIPOP.map((point, index) => (
                <Reveal as="li" key={point} delay={Math.min(index * 0.04, 0.3)}>
                  <i aria-hidden="true">✦</i>{point}
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="serve-col">
            <Reveal><SectionLabel number="07">Who we serve</SectionLabel></Reveal>
            <Reveal delay={0.06}>
              <h2>Different situations.<br /><em>One philosophy.</em></h2>
            </Reveal>
            <ul className="serve-list">
              {WHO_WE_SERVE.map(([audience, detail], index) => (
                <Reveal as="li" key={audience} delay={Math.min(index * 0.04, 0.3)}>
                  <strong>{audience}</strong>
                  <small>{detail}</small>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MANIFESTO — doc §05, §65 */}
      <section className="manifesto section-pad">
        <Reveal className="manifesto-brand"><span>✦</span> HRIPOP MEDIA</Reveal>
        <motion.blockquote initial={{ opacity: 0.15 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
          We don’t create memories.<br />We create the moments<br />from which <em>memories are made.</em>
        </motion.blockquote>
        <div className="manifesto-foot">
          <p>An event ends. An experience stays.</p>
          <p>Imagine it. Feel it. Live it. Remember it.</p>
        </div>
      </section>

      {/* FINAL CTA — doc §75 */}
      <section className="home-final section-pad" id="imagine">
        <Reveal><SectionLabel number="08">What are you imagining?</SectionLabel></Reveal>
        <Reveal delay={0.06}>
          <h2>
            Don’t worry if it hasn’t<br />
            been done before.<br />
            <em>That’s our job.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p>
            Tell us what you see in your mind. We’ll bring together the people, places,
            ideas, technology, talent and expertise required to turn it into something real.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="home-final-actions">
          <Link className="cta-primary" href="/contact">Submit your imagination <ArrowUpRight size={16} /></Link>
          <Link className="text-link light" href="/about">Meet HRIPOP <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </main>
  );
}
