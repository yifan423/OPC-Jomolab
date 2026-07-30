import Image from "next/image";
import Link from "next/link";

export function Brand({
  compact = false,
  reversed = false,
  preload = false,
}: {
  compact?: boolean;
  reversed?: boolean;
  preload?: boolean;
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
            ? "/images/brand/jomolab-logo-white.webp"
            : "/images/brand/jomolab-logo.webp"
        }
        alt="Jomolab"
        width={1220}
        height={300}
        preload={preload}
        sizes="(max-width: 620px) 132px, 190px"
        className={compact ? "brand-image brand-image-compact" : "brand-image"}
      />
    </Link>
  );
}
