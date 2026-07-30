import Image from "next/image";
import Link from "next/link";

export function Brand({
  compact = false,
  reversed = false,
}: {
  compact?: boolean;
  reversed?: boolean;
}) {
  return (
    <Link
      href="/"
      className="brand-link"
      aria-label="Jomolab 首页"
    >
      <Image
        src={
          reversed
            ? "/images/brand/jomolab-logo-white.png"
            : "/images/brand/jomolab-logo.png"
        }
        alt="Jomolab"
        width={1220}
        height={300}
        priority
        className={compact ? "brand-image brand-image-compact" : "brand-image"}
      />
    </Link>
  );
}
