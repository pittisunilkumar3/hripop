import { motion } from "framer-motion";

type KineticHeadingProps = {
  text: string;
  className?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
};

const word = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function KineticHeading({ text, className = "" }: KineticHeadingProps) {
  return (
    <motion.h2
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      {text.split(" ").map((item, index) => (
        <span key={`${item}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span className="inline-block" variants={word}>
            {item}
            {index < text.split(" ").length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
