"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label${light ? " section-label-light" : ""}`}>
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}
