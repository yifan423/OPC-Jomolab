import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { LineReveal } from "./LineReveal";

export function SectionHeading({
  eyebrow,
  title,
  titleLines,
  description,
  aside,
  light = false,
}: {
  eyebrow: string;
  title?: ReactNode;
  titleLines?: string[];
  description?: string;
  aside?: ReactNode;
  light?: boolean;
}) {
  return (
    <Reveal className={light ? "section-heading section-heading-light" : "section-heading"}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        {titleLines ? <LineReveal as="h2" lines={titleLines} /> : <h2>{title}</h2>}
      </div>
      <div className="section-heading-copy">
        {description ? <p>{description}</p> : null}
        {aside}
      </div>
    </Reveal>
  );
}
