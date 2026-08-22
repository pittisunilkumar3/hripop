import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "../content/site";

const columns: [string, { href: string; label: string }[]][] = [
  [
    "Company",
    [
      { href: "/about", label: "About" },
      { href: "/#worlds", label: "What We Do" },
      { href: "/work", label: "Our Work" },
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
  ],
  [
    "Experiences",
    [
      { href: "/experiences", label: "Creative Industry Events" },
      { href: "/experiences#concerts", label: "Entertainment" },
      { href: "/destinations", label: "Destination Experiences" },
      { href: "/experiences#private", label: "Private Experiences" },
      { href: "/experiences#matchmaking", label: "Business Matchmaking" },
      { href: "/experiences#roadshows", label: "Roadshows" },
    ],
  ],
  [
    "Media & Talent",
    [
      { href: "/media-talent#media", label: "Media Management" },
      { href: "/media-talent#casting", label: "Film Casting" },
      { href: "/media-talent#talent", label: "Talent Management" },
      { href: "/media-talent#film-pr", label: "Film PR & Publicity" },
    ],
  ],
  [
    "Image Management",
    [
      { href: "/image-pr#personal", label: "Personal Branding" },
      { href: "/image-pr#celebrity", label: "Celebrity Image" },
      { href: "/image-pr#public-figure", label: "Public Figure Image" },
      { href: "/image-pr#digital", label: "Digital Presence" },
    ],
  ],
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-cta">
        <p className="footer-cta-eyebrow">What are you imagining?</p>
        <h2>
          Your imagination.<br />
          Our ecosystem.<br />
          <em>One experience.</em>
        </h2>
        <Link className="footer-cta-button" href="/contact">
          Start your experience <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="footer-wordmark" href="/">
            HRIPOP<span aria-hidden="true">✦</span>
          </Link>
          <p className="footer-tagline">{BRAND.tagline}</p>
          <p className="footer-strap">{BRAND.strapline.replace(/•/g, "·")}</p>
        </div>

        {columns.map(([title, links]) => (
          <nav key={title} aria-label={`Footer — ${title}`}>
            <p>{title}</p>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav className="footer-connect" aria-label="Footer — connect">
          <p>Connect</p>
          <ul>
            <li><a href={BRAND.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={BRAND.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={BRAND.socials.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href={`mailto:${BRAND.email}`}>Email</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HRIPOP Media. All rights reserved.</p>
        <p>{BRAND.strapline.replace(/•/g, "·")}</p>
        <nav aria-label="Legal">
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms &amp; Conditions</Link>
          <Link href="/legal/disclaimer">Disclaimer</Link>
        </nav>
      </div>
    </footer>
  );
}
