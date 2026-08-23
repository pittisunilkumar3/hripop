import FadeUp from "./FadeUp";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, lead, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      <FadeUp>
        <p
          className={`flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-3 sm:text-xs md:tracking-[0.3em] ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />
          {eyebrow}
          {centered && <span className="inline-block h-px w-4 bg-white/40 sm:w-6" />}
        </p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <h2 className="mt-4 text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </FadeUp>
      {lead && (
        <FadeUp delay={0.3}>
          <p className="mt-4 text-sm font-light leading-relaxed text-white/50 sm:text-base">{lead}</p>
        </FadeUp>
      )}
    </div>
  );
}
