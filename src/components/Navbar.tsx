import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { EASE } from "./FadeUp";

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5 sm:gap-3" aria-label="VERTX home">
          <Hexagon
            size={24}
            strokeWidth={1.5}
            className="text-white transition-transform duration-300 group-hover:rotate-[30deg]"
          />
          <span className="text-[15px] font-semibold tracking-tight text-white sm:text-base">
            VERTX
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[13px] font-medium text-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30 hover:text-white active:scale-100"
          >
            Contact
          </button>
          <button
            type="button"
            className="btn-glow rounded-full bg-slate-950 px-5 py-2 text-[13px] font-medium text-white transition-transform hover:scale-105 active:scale-100"
          >
            Sign Up
          </button>
        </div>
      </div>
    </motion.header>
  );
}
