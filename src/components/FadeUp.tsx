import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

/**
 * Reusable fade-up reveal. Animates `opacity` + `y` once the element scrolls
 * (or mounts) into view.
 */
export default function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
