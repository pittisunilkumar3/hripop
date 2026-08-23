import { Hexagon, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { BRAND, FOOTER } from "../content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand */}
          <div>
            <a href="#top" className="group flex items-center gap-2.5" aria-label={`${BRAND.name} home`}>
              <Hexagon size={22} strokeWidth={1.5} className="text-white transition-transform duration-300 group-hover:rotate-[30deg]" />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                HRIPOP<span className="text-white/50"> Media</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-xs font-light leading-relaxed text-white/40 sm:text-sm">
              Creative Industries • Events • Experiences • Media • Talent • Image Management.
            </p>
            <p className="mt-3 text-xs font-light uppercase tracking-[0.25em] text-white/30 sm:text-sm">
              {BRAND.tagline}
            </p>

            {/* Connect */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="HRIPOP Media on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="HRIPOP Media on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={BRAND.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="HRIPOP Media on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                aria-label={`Email ${BRAND.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/30 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-xs font-light text-white/40 transition-colors hover:text-white sm:text-sm">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[11px] font-light text-white/30 sm:text-xs">{FOOTER.legal}</p>
          <p className="text-[11px] font-light uppercase tracking-[0.2em] text-white/30 sm:text-xs">
            Imagine. Curate. Hybridize. Experience. Remember.
          </p>
        </div>
      </div>
    </footer>
  );
}
