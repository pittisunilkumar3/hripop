"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Plus, X } from "lucide-react";
import { ease } from "./motion";

const whatWeDo = [
  ["/experiences", "Events & Experiences", "Summits · Concerts · Festivals · Roadshows · Matchmaking · Private"],
  ["/destinations", "Destination Experiences", "Weddings · Honeymoons · Birthdays · Retreats"],
  ["/media-talent", "Media & Talent", "Media Management · Casting · Talent · Film PR"],
  ["/image-pr", "Image & PR", "Personal Branding · Celebrity · Public Figure · Digital Presence"],
  ["/creative-industries", "Creative Industries", "Film · AVGC-XR · Gaming · AI · Creator Programs"],
] as const;

const navItems = [
  ["/work", "Our Work"],
  ["/ecosystem", "Ecosystem"],
  ["/insights", "Insights"],
  ["/about", "About"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const hoverOpened = useRef(false);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
    if (dropOpen) setDropOpen(false);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setDropOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (!event.target.closest(".nav-drop")) setDropOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const inWorlds = whatWeDo.some(([href]) => isActive(href));

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <Link className="wordmark" href="/" aria-label="HRIPOP Media — home">
          <span>HRI</span><span>POP</span><i aria-hidden="true">✦</i><small>MEDIA</small>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div
            className={`nav-drop ${dropOpen ? "open" : ""} ${inWorlds ? "in-world" : ""}`}
            onMouseEnter={() => {
              hoverOpened.current = true;
              setDropOpen(true);
            }}
            onMouseLeave={() => {
              hoverOpened.current = false;
              setDropOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={dropOpen}
              aria-haspopup="true"
              onClick={() =>
                setDropOpen((open) => (open && hoverOpened.current ? open : !open))
              }
            >
              What we do <ChevronDown size={13} />
            </button>
            <div className="drop-panel" role="menu">
              {whatWeDo.map(([href, title, detail]) => (
                <Link key={href} href={href} role="menuitem" className={isActive(href) ? "active" : ""}>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </Link>
              ))}
            </div>
          </div>
          {navItems.map(([href, label]) => (
            <Link className={isActive(href) ? "active" : ""} href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link
          className={`nav-cta ${isActive("/contact") ? "active" : ""}`}
          href="/contact"
        >
          Imagine with us <ArrowUpRight size={15} />
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>What we do</p>
            {whatWeDo.map(([href, title], index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + index * 0.05 }}
              >
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  <span>W0{index + 1}</span>
                  {title}
                  <Plus aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
            <p className="mobile-group">Explore</p>
            {navItems.map(([href, label], index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>
                  {label}
                  <Plus aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
            <Link className="mobile-cta" href="/contact" onClick={() => setMenuOpen(false)}>
              Imagine with us <ArrowUpRight size={17} />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
