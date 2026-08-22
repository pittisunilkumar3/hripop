import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type TypingEffectProps = {
  text: string;
  className?: string;
  /** Stagger between consecutive characters, in seconds. */
  charDelay?: number;
};

/**
 * Character-by-character reveal. Words stay as `inline-block` spans so the
 * heading wraps naturally; each character fades in with a global stagger.
 */
export default function TypingEffect({
  text,
  className,
  charDelay = 0.045,
}: TypingEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {words.map((word, wordIndex) => {
        const characters = Array.from(word);
        const startIndex = globalCharIndex;
        globalCharIndex += characters.length;

        return (
          <span key={`${word}-${wordIndex}`} className="inline-block">
            {characters.map((character, charIndex) => (
              <motion.span
                key={`${character}-${charIndex}`}
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : undefined}
                transition={{
                  duration: 0.15,
                  delay: (startIndex + charIndex) * charDelay,
                }}
              >
                {character}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 ? (
              <span className="inline-block">&nbsp;</span>
            ) : null}
          </span>
        );
      })}
    </span>
  );
}
