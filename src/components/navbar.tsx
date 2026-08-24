import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "./FadeUp";
import { BRAND, HERO } from "../content";

const LINKS = [
  ["#worlds", "Worlds"],
  ["#experience", "Experience"],
  ["#work", "Work"],
  ["#lab", "Lab"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:h-16 sm:px-6 ${
          scrolled
            ? "rounded-full border border-white/10 bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:mx-6 lg:mx-auto"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2 sm:gap-2.5" aria-label={`${BRAND.name} home`}>
          <img
            src="/hripop-logo.png"
            alt="HRIPOP"
            className="h-6 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-7"
          />
          <span className="text-[15px] font-semibold tracking-tight text-white/60 sm:text-base">
            Media
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-white/60 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#contact"
            className="btn-glow hidden rounded-full bg-slate-950 px-5 py-2 text-[13px] font-medium text-white transition-transform hover:scale-105 active:scale-100 sm:inline-flex"
          >
            {HERO.primaryCta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm transition-all hover:border-white/30 hover:text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-black/90 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile"
          >
            {LINKS.map(([href, label], i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-full px-6 py-3 text-lg font-medium text-white/80 transition-colors hover:text-white"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35, ease: EASE }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-glow mt-4 rounded-full bg-slate-950 px-8 py-3.5 text-base font-medium text-white"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35, ease: EASE }}
            >
              {HERO.primaryCta}
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
