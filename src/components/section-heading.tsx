import FadeUp from "./FadeUp";
import KineticHeading from "./KineticHeading";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, lead, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`section-heading ${centered ? "section-heading--center" : "section-heading--left"}`}>
      <FadeUp>
        <p
          className={`section-eyebrow ${centered ? "justify-center" : ""}`}
        >
          <span className="section-eyebrow__line" />
          {eyebrow}
          {centered && <span className="section-eyebrow__line" />}
        </p>
      </FadeUp>
      <KineticHeading text={title} className="section-title" />
      {lead && (
        <FadeUp delay={0.3}>
          <p className="section-lead">{lead}</p>
        </FadeUp>
      )}
    </div>
  );
}
