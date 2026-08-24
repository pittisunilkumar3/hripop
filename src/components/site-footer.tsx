import { Hexagon, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { BRAND, FOOTER } from "../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-wordmark" aria-hidden="true">HRIPOP</div>
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#top" className="footer-logo group" aria-label={`${BRAND.name} home`}>
              <Hexagon />
              <span>
                HRIPOP<small> Media</small>
              </span>
            </a>
            <p>
              Creative Industries • Events • Experiences • Media • Talent • Image Management.
            </p>
            <small className="footer-tagline">
              {BRAND.tagline}
            </small>

            {/* Connect */}
            <div className="footer-socials">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="HRIPOP Media on Instagram"
                className="footer-social"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="HRIPOP Media on LinkedIn"
                className="footer-social"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={BRAND.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="HRIPOP Media on YouTube"
                className="footer-social"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                aria-label={`Email ${BRAND.name}`}
                className="footer-social"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="footer-column">
              <h3>{column.heading}</h3>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p>{FOOTER.legal}</p>
          <p>
            Imagine. Curate. Hybridize. Experience. Remember.
          </p>
        </div>
      </div>
    </footer>
  );
}
