"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type LineRevealProps = {
  as?: "h1" | "h2" | "h3";
  id?: string;
  lines: string[];
  className?: string;
  lineClassNames?: Array<string | undefined>;
  lineContent?: ReactNode[];
  delay?: number;
};

export function LineReveal({
  as: Tag = "h2",
  id,
  lines,
  className,
  lineClassNames = [],
  lineContent,
  delay = 0,
}: LineRevealProps) {
  const label = lines.join(" ");
  const nodeRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(nodeRef, {
    once: false,
    amount: 0.18,
    margin: "0px 0px -8% 0px",
  });
  const reduceMotion = useReducedMotion();
  const visible = reduceMotion || inView;

  return (
    <Tag
      ref={nodeRef}
      id={id}
      className={className}
      aria-label={label}
      data-line-reveal=""
    >
      {lines.map((line, index) => (
        <span className="line-reveal-clip" aria-hidden="true" key={`${line}-${index}`}>
          <motion.span
            className={lineClassNames[index]}
            initial={false}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: "0%",
                    rotateX: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: "112%",
                    rotateX: -24,
                    filter: "blur(4px)",
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.82,
                    delay: delay + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          >
            {lineContent?.[index] ?? line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
