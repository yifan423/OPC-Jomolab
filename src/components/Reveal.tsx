import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      data-reveal=""
      style={
        {
          "--reveal-start": `${Math.min(delay * 100, 10)}%`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
