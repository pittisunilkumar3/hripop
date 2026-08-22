"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  ChevronRight,
  CirclePlay,
  Menu,
  MoveDownRight,
  Sparkles,
  X,
} from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const navItems = [
  ["Worlds", "#worlds"],
  ["Our work", "#work"],
  ["Approach", "#approach"],
  ["About", "#about"],
];

const worlds = [
  {
    number: "01",
    title: "Creative industries",
    line: "Where ideas become industries.",
    detail: "Film · Animation · VFX · Gaming · XR · AI · Creators",
    tone: "brand",
  },
  {
    number: "02",
    title: "Events & experiences",
    line: "Where moments become memories.",
    detail: "Summits · Concerts · Festivals · Roadshows · Destinations",
    tone: "brand",
  },
  {
    number: "03",
    title: "Media",
    line: "Where experiences become stories.",
    detail: "Film · Content · Production · Photography · Publicity",
    tone: "brand",
  },
  {
    number: "04",
    title: "Image & PR",
    line: "Where people become brands.",
    detail: "Personal branding · Film PR · Public image · Digital presence",
    tone: "brand",
  },
  {
    number: "05",
    title: "Talent",
    line: "Where the right people meet the right opportunity.",
    detail: "Casting · Artists · Creators · Speakers · Performers",
    tone: "brand",
  },
];

const process = [
  ["Imagine", "Tell us what exists in your mind—even if it has never existed before."],
  ["Curate", "We find the right people, place, mood, story, technology and details."],
  ["Hybridize", "We combine imagination with a flexible real-world ecosystem."],
  ["Create", "The idea becomes something tangible, precise and alive."],
  ["Experience", "You live it. Your people feel it."],
  ["Remember", "The event ends. The experience remains."],
];

const projects = [
  {
    year: "2025",
    title: "Cinematica Expo",
    line: "Where cinema met the future.",
    fields: "Cinema × Technology × Creativity × Business",
    accent: "brand",
  },
  {
    year: "2026",
    title: "CINICATHON",
    line: "Where creativity met innovation.",
    fields: "Hybrid Filmmaking × AVGC-XR × AI",
    accent: "brand",
  },
  {
    year: "2026",
    title: "Frames of Founders",
    line: "Where entrepreneurship became storytelling.",
    fields: "Documentary × Animation × Digital Media",
    accent: "brand",
  },
  {
    year: "2026",
    title: "Cinematica Expo — 4th Edition",
    line: "The next chapter is coming.",
    fields: "Cinema × Creators × Creative Economy",
    accent: "brand",
  },
];

function FadeUp({
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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SplitHeading({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className="split-word"
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: "70%", rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.72, delay: 0.36 + index * 0.07, ease }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState("Something new");
  const [formComplete, setFormComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(heroProgress, [0, 0.82], [1, 0]);

  useEffect(() => {
    videoRef.current?.play().catch(() => undefined);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormComplete(true);
  }

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.62, ease }}
      >
        <a className="wordmark" href="#top" aria-label="HRIPOP Media home">
          <span className="wordmark-star">✦</span>
          <span>HRIPOP</span>
          <small>MEDIA</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#imagine">
          Imagine with us <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      {menuOpen && (
        <motion.nav
          className="mobile-nav"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {navItems.map(([label, href], index) => (
            <motion.a
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <span>0{index + 1}</span> {label}
            </motion.a>
          ))}
          <a className="mobile-cta" href="#imagine" onClick={() => setMenuOpen(false)}>
            Imagine with us <ArrowUpRight />
          </a>
        </motion.nav>
      )}

      <section className="hero" id="top" ref={heroRef}>
        <video
          ref={videoRef}
          className="hero-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_170109_f96e01a5-b0db-4274-b24d-8d97e99ec928.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="hero-shade" />
        <div className="hero-grid" />
        <motion.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <span /> Creative industries · Events · Media · Image management
          </motion.p>
          <h1>
            <SplitHeading text="What if your imagination could become an experience?" />
          </h1>
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
          >
            We make it real.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.32, ease }}
          >
            <a className="button button-primary" href="#imagine">
              Imagine with us <span><Sparkles size={17} /></span>
            </a>
            <a className="button button-ghost" href="#worlds">
              <CirclePlay size={18} /> Discover the experience
            </a>
          </motion.div>
        </motion.div>
        <div className="hero-foot">
          <p>Imagination, hybridized into reality.</p>
          <a href="#possibility" aria-label="Scroll to discover">
            Scroll to transform <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section className="possibility section" id="possibility">
        <div className="ambient-orb" aria-hidden="true" />
        <FadeUp className="section-label">
          <span>01</span> The possibility
        </FadeUp>
        <div className="possibility-grid">
          <FadeUp>
            <p className="intro-copy">
              Every event begins as an idea. Every celebration begins as a feeling.
              Every film begins as an imagination.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>
              Life creates moments.
              <br />
              <em>We create the experience.</em>
            </h2>
          </FadeUp>
          <FadeUp className="possibility-note" delay={0.16}>
            <Asterisk size={24} />
            <p>
              We bring together people, places, culture, entertainment and technology
              to create something people don&apos;t simply attend—they feel.
            </p>
          </FadeUp>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>
            IMAGINE&nbsp; ✦ &nbsp;CURATE&nbsp; ✦ &nbsp;HYBRIDIZE&nbsp; ✦ &nbsp;EXPERIENCE&nbsp; ✦
            &nbsp;REMEMBER&nbsp; ✦ &nbsp;IMAGINE&nbsp; ✦ &nbsp;CURATE&nbsp; ✦ &nbsp;HYBRIDIZE&nbsp; ✦
          </div>
        </div>
      </section>

      <section className="worlds section" id="worlds">
        <div className="worlds-heading">
          <FadeUp className="section-label light-label">
            <span>02</span> Five worlds. One philosophy.
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>Not a list of services.<br /><em>A universe of possibilities.</em></h2>
          </FadeUp>
        </div>
        <div className="world-list">
          {worlds.map((world, index) => (
            <motion.article
              className={`world-row world-${world.tone}`}
              key={world.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease }}
            >
              <span className="world-number">{world.number}</span>
              <div>
                <h3>{world.title}</h3>
                <p>{world.line}</p>
              </div>
              <p className="world-detail">{world.detail}</p>
              <MoveDownRight className="world-arrow" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-sticky">
          <FadeUp className="section-label">
            <span>03</span> The HRIPOP Experience™
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>You imagine it.<br /><em>We build the ecosystem.</em></h2>
          </FadeUp>
          <FadeUp className="approach-copy" delay={0.14}>
            <p>
              No standard packages. No ordinary templates. One flexible partner
              ecosystem shaped around the experience you want to create.
            </p>
          </FadeUp>
        </div>
        <div className="process-list">
          {process.map(([title, description], index) => (
            <motion.article
              className="process-step"
              key={title}
              initial={{ opacity: 0.35 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.5 }}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <FadeUp className="section-label light-label">
          <span>04</span> Signature projects
        </FadeUp>
        <div className="work-title-row">
          <FadeUp><h2>Some projects are events.<br /><em>Some become platforms.</em></h2></FadeUp>
          <FadeUp className="work-side-note" delay={0.1}>
            <p>
              Experiences that start conversations, create opportunities and build
              creative communities.
            </p>
          </FadeUp>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-${project.accent}`}
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: (index % 2) * 0.08, ease }}
            >
              <div className="project-glow" />
              <div className="project-top">
                <span>{project.year}</span>
                <ArrowUpRight />
              </div>
              <div className="project-copy">
                <p>{project.line}</p>
                <h3>{project.title}</h3>
                <small>{project.fields}</small>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="manifesto section" id="about">
        <FadeUp className="manifesto-mark"><span>✦</span> HRIPOP MEDIA</FadeUp>
        <motion.blockquote
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.1 }}
        >
          We don&apos;t create memories. We create the moments from which
          <em> memories are made.</em>
        </motion.blockquote>
        <div className="manifesto-footer">
          <p>An event ends. An experience stays.</p>
          <p>Built around one belief: imagination should not have to stay imagination.</p>
        </div>
      </section>

      <section className="imagine section" id="imagine">
        <div className="imagine-intro">
          <FadeUp className="section-label">
            <span>05</span> The Experience Lab
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>Tell us something<br /><em>that doesn&apos;t exist yet.</em></h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p>
              Don&apos;t worry if it doesn&apos;t fit a category. Tell us what you see in
              your mind. We&apos;ll figure out how to make it real.
            </p>
          </FadeUp>
        </div>

        <FadeUp className="idea-panel" delay={0.1}>
          {formComplete ? (
            <motion.div className="success-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Sparkles size={38} />
              <span>Imagination received</span>
              <h3>Your idea has taken its first step into reality.</h3>
              <p>Thank you for sharing it with HRIPOP Media.</p>
              <button type="button" onClick={() => setFormComplete(false)}>
                Share another idea <ChevronRight size={17} />
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="form-label">I&apos;m imagining…</p>
              <div className="idea-types" role="group" aria-label="Experience type">
                {["An industry platform", "A live experience", "A destination story", "A public story", "Something new"].map((type) => (
                  <button
                    type="button"
                    className={selectedWorld === type ? "selected" : ""}
                    onClick={() => setSelectedWorld(type)}
                    key={type}
                    aria-pressed={selectedWorld === type}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <input type="hidden" name="experienceType" value={selectedWorld} />
              <label>
                <span>My name is</span>
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                <span>You can reach me at</span>
                <input name="email" type="email" placeholder="you@email.com" required />
              </label>
              <label>
                <span>Here&apos;s what I see in my mind</span>
                <textarea name="idea" placeholder="A summit that feels like a festival…" rows={3} required />
              </label>
              <button className="submit-button" type="submit">
                Submit your imagination <span><ArrowUpRight /></span>
              </button>
            </form>
          )}
        </FadeUp>
      </section>

      <footer>
        <div className="footer-top">
          <a className="footer-wordmark" href="#top">HRIPOP<span>✦</span></a>
          <p>Imagination,<br /><em>hybridized into reality.</em></p>
          <a className="back-top" href="#top">Back to top <ArrowDown /></a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HRIPOP Media. All rights reserved.</p>
          <p>Creative Industries · Events · Media · Image Management</p>
          <div>
            <a href="#worlds">What we do</a>
            <a href="#work">Our work</a>
            <a href="#imagine">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
