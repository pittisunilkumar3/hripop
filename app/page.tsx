"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Menu,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import { motion, useInView, useScroll } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const navItems = [
  ["What we do", "#worlds"],
  ["Our work", "#work"],
  ["The method", "#method"],
  ["About", "#about"],
];

const worlds = [
  {
    number: "01",
    title: "Creative industries",
    line: "Where ideas become industries.",
    detail: "Film · Animation · VFX · Gaming · XR · AI · Creators · Design · Digital Media · Entertainment",
    signal: "IDEA / INDUSTRY",
  },
  {
    number: "02",
    title: "Events & experiences",
    line: "Where moments become memories.",
    detail: "Summits · Concerts · Festivals · Roadshows · Destination Celebrations · Private Experiences · Brand Experiences",
    signal: "MOMENT / MEMORY",
  },
  {
    number: "03",
    title: "Media",
    line: "Where experiences become stories.",
    detail: "Film · Content · Production · Photography · Videography · Digital Media · Publicity",
    signal: "EXPERIENCE / STORY",
  },
  {
    number: "04",
    title: "Image & PR",
    line: "Where people become brands.",
    detail: "Personal Branding · Film PR · Publicity · Media Relations · Public Image · Digital Presence",
    signal: "PERSON / PRESENCE",
  },
  {
    number: "05",
    title: "Talent",
    line: "Where the right people meet the right opportunity.",
    detail: "Casting · Artists · Creators · Influencers · Speakers · Performers · Industry Talent",
    signal: "PEOPLE / POSSIBILITY",
  },
];

const method = [
  ["01", "Imagine", "Tell us what exists in your mind—even if it has never existed before."],
  ["02", "Curate", "We find the people, place, mood, story, technology and details."],
  ["03", "Hybridize", "We combine imagination with a flexible real-world ecosystem."],
  ["04", "Create", "The idea becomes something tangible, precise and alive."],
  ["05", "Experience", "You live it. Your people feel it."],
  ["06", "Remember", "The event ends. The experience remains."],
];

const projects = [
  {
    id: "CE25",
    year: "2025",
    title: "Cinematica Expo",
    line: "Where cinema met the future.",
    fields: "Cinema × Technology × Creativity × Business × Community",
    role: "Event management · Creative curation · Industry engagement · Partnerships",
    layout: "project-coral",
  },
  {
    id: "CI26",
    year: "2026",
    title: "CINICATHON",
    line: "Not just a competition. A launchpad for creative innovation.",
    fields: "Hybrid Filmmaking × AVGC-XR × AI × Creative Technology",
    role: "Program curation · Ecosystem development · Experience management",
    layout: "project-dark",
  },
  {
    id: "FOF",
    year: "2026",
    title: "Frames of Founders",
    line: "Where entrepreneurship became storytelling.",
    fields: "Documentary × Animation × Comics × Digital Media",
    role: "Program management · Creative curation · Outreach · Media",
    layout: "project-paper",
  },
  {
    id: "CCC",
    year: "2026",
    title: "Cinica Creators Council Challenges",
    line: "Taking creativity beyond the classroom.",
    fields: "Creators × Challenges × Industry × Opportunity",
    role: "Program management · Outreach · Creative ecosystem",
    layout: "project-line",
  },
  {
    id: "CE26",
    year: "UPCOMING · 2026",
    title: "Cinematica Expo — 4th Edition",
    line: "The next chapter is coming.",
    fields: "Cinema × Creators × Creative Economy",
    role: "An evolving platform for the future of the creative economy",
    layout: "project-feature",
  },
];

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

function SectionLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`section-label${light ? " section-label-light" : ""}`}>
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWorld, setActiveWorld] = useState(0);
  const [selectedType, setSelectedType] = useState("Something new");
  const [formComplete, setFormComplete] = useState(false);
  const { scrollYProgress } = useScroll();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormComplete(true);
  }

  return (
    <main id="top">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        <a className="wordmark" href="#top" aria-label="HRIPOP Media home">
          <span>HRI</span><span>POP</span><i>✦</i><small>MEDIA</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <a className="nav-cta" href="#imagine">
          Imagine with us <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      {menuOpen && (
        <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p>Explore HRIPOP</p>
          {navItems.map(([label, href], index) => (
            <motion.a
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <span>0{index + 1}</span>{label}<ArrowUpRight />
            </motion.a>
          ))}
          <a className="mobile-cta" href="#imagine" onClick={() => setMenuOpen(false)}>
            Start your experience <ArrowRight />
          </a>
        </motion.nav>
      )}

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
              We build the <em>experience.</em>
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
            HRIPOP brings together entertainment, creative industries, technology,
            people and place to create something audiences do not simply attend—they feel.
          </p>
          <a className="text-link" href="#worlds">Enter the experience <ArrowDown size={17} /></a>
        </div>
      </section>

      <div className="proof-rail" aria-label="Selected HRIPOP projects">
        <span>Selected platforms</span>
        <p>Cinematica Expo 2025</p>
        <i>✦</i>
        <p>CINICATHON 2026</p>
        <i>✦</i>
        <p>Frames of Founders</p>
        <i>✦</i>
        <p>Cinica Creators Council</p>
      </div>

      <section className="positioning section-pad" id="about">
        <Reveal><SectionLabel number="01" light>The difference</SectionLabel></Reveal>
        <div className="positioning-grid">
          <Reveal className="positioning-aside">
            <Asterisk />
            <p>Not a catalogue of services. A flexible ecosystem built around the experience you want to create.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2>Not just event management.<br /><em>Experiences that didn’t exist before.</em></h2>
          </Reveal>
        </div>
        <Reveal className="positioning-foot" delay={0.12}>
          <p>Entertainment meets creativity.</p>
          <p>Business meets opportunity.</p>
          <p>Technology meets imagination.</p>
          <p>Moments become memories.</p>
        </Reveal>
      </section>

      <section className="worlds section-pad" id="worlds">
        <Reveal><SectionLabel number="02">Five worlds. One philosophy.</SectionLabel></Reveal>
        <div className="worlds-intro">
          <Reveal><h2>Tell us what you imagine.<br /><em>We’ll build what it needs.</em></h2></Reveal>
          <Reveal delay={0.1}><p>Move through the five worlds that form the HRIPOP ecosystem.</p></Reveal>
        </div>

        <div className="worlds-explorer">
          <div className="world-index" role="tablist" aria-label="HRIPOP worlds">
            {worlds.map((world, index) => (
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
            key={worlds[activeWorld].number}
            role="tabpanel"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <div className="world-stage-top">
              <span>{worlds[activeWorld].signal}</span>
              <span>WORLD / {worlds[activeWorld].number}</span>
            </div>
            <div className="world-stage-orbit"><span>{worlds[activeWorld].number}</span></div>
            <div className="world-stage-copy">
              <p>{worlds[activeWorld].line}</p>
              <h3>{worlds[activeWorld].title}</h3>
              <small>{worlds[activeWorld].detail}</small>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <Reveal><SectionLabel number="03">Selected realities</SectionLabel></Reveal>
        <div className="work-heading">
          <Reveal><h2>Some projects are events.<br /><em>Some become platforms.</em></h2></Reveal>
          <Reveal delay={0.1}><p>Experiences that start conversations, create opportunities and build creative communities.</p></Reveal>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.layout}`}
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.75, delay: (index % 2) * 0.08, ease }}
            >
              <div className="project-meta"><span>{project.id}</span><span>{project.year}</span></div>
              <div className="project-symbol" aria-hidden="true"><span>{project.id}</span></div>
              <div className="project-content">
                <p>{project.line}</p>
                <h3>{project.title}</h3>
                <small>{project.fields}</small>
              </div>
              <div className="project-role"><span>HRIPOP role</span><p>{project.role}</p><ArrowUpRight /></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="method section-pad" id="method">
        <div className="method-heading">
          <Reveal><SectionLabel number="04">The HRIPOP Experience™</SectionLabel></Reveal>
          <Reveal delay={0.08}><h2>From a thought<br />to something <em>felt.</em></h2></Reveal>
          <Reveal delay={0.12}><p>No standard package. No ordinary template. One method flexible enough to fit an industry platform, a private celebration—or an idea without a name yet.</p></Reveal>
        </div>

        <div className="method-track">
          {method.map(([number, title, description]) => (
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

      <section className="ecosystem" aria-label="The HRIPOP partner ecosystem">
        <div className="ecosystem-copy">
          <p>YOUR IMAGINATION</p><ArrowRight /><p>OUR ECOSYSTEM</p><ArrowRight /><p>ONE EXPERIENCE</p>
        </div>
        <div className="ecosystem-ticker" aria-hidden="true">
          <div>STUDIOS ✦ ARTISTS ✦ CREATORS ✦ TECHNOLOGY ✦ PRODUCTION ✦ MEDIA ✦ HOSPITALITY ✦ TRAVEL ✦ CULTURE ✦ STUDIOS ✦ ARTISTS ✦ CREATORS ✦ TECHNOLOGY ✦ PRODUCTION ✦ MEDIA ✦ HOSPITALITY ✦ TRAVEL ✦ CULTURE ✦</div>
        </div>
      </section>

      <section className="manifesto section-pad">
        <Reveal className="manifesto-brand"><span>✦</span> HRIPOP MEDIA</Reveal>
        <motion.blockquote initial={{ opacity: 0.15 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
          We don’t create memories.<br />We create the moments<br />from which <em>memories are made.</em>
        </motion.blockquote>
        <div className="manifesto-foot"><p>An event ends. An experience stays.</p><p>Imagination, hybridized into reality.</p></div>
      </section>

      <section className="imagine section-pad" id="imagine">
        <div className="imagine-heading">
          <Reveal><SectionLabel number="05">The Experience Lab</SectionLabel></Reveal>
          <Reveal delay={0.08}><h2>What are you<br /><em>imagining?</em></h2></Reveal>
          <Reveal delay={0.12}><p>Don’t worry if it doesn’t fit a category. Tell us what you see in your mind. We’ll figure out how to make it real.</p></Reveal>
        </div>

        <Reveal className="idea-panel" delay={0.08}>
          {formComplete ? (
            <motion.div className="success-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div><Check /></div>
              <span>A beautiful beginning</span>
              <h3>Your imagination has taken its first step toward reality.</h3>
              <p>Thank you for starting the conversation with HRIPOP Media.</p>
              <button type="button" onClick={() => setFormComplete(false)}>Share another idea <ArrowRight /></button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>I’m imagining…</legend>
                <div className="idea-types">
                  {["An industry platform", "A live experience", "A destination story", "A public story", "Something new"].map((type) => (
                    <button
                      type="button"
                      className={selectedType === type ? "selected" : ""}
                      onClick={() => setSelectedType(type)}
                      aria-pressed={selectedType === type}
                      key={type}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>
              <input type="hidden" name="experienceType" value={selectedType} />
              <label><span>My name is</span><input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
              <label><span>You can reach me at</span><input name="email" type="email" placeholder="you@email.com" autoComplete="email" required /></label>
              <label><span>Here’s what I see</span><textarea name="idea" placeholder="A summit that feels like a festival…" rows={3} required /></label>
              <button className="submit-button" type="submit">Submit your imagination <span><Sparkles /></span></button>
            </form>
          )}
        </Reveal>
      </section>

      <footer>
        <div className="footer-main">
          <a className="footer-wordmark" href="#top">HRIPOP<span>✦</span></a>
          <p>Imagine it.<br />Feel it. Live it.<br /><em>Remember it.</em></p>
          <a className="back-top" href="#top">Back to top <ArrowUpRight /></a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HRIPOP Media. All rights reserved.</p>
          <p>Creative Industries · Events · Media · Image Management</p>
          <nav aria-label="Footer navigation"><a href="#worlds">What we do</a><a href="#work">Our work</a><a href="#imagine">Contact</a></nav>
        </div>
      </footer>
    </main>
  );
}
