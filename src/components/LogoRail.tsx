import Image from "next/image";
import type { EcosystemLogo } from "@/content/site";

export function LogoRail({ items }: { items: EcosystemLogo[] }) {
  const splitIndex = Math.ceil(items.length / 2);
  const rows = [items.slice(0, splitIndex), items.slice(splitIndex)];

  return (
    <div className="logo-rail" aria-label="生态平台与工具标识">
      {rows.map((row, rowIndex) => (
        <div
          className={`logo-rail-row ${rowIndex === 1 ? "logo-rail-row-reverse" : ""}`}
          key={rowIndex}
        >
          <div className="logo-rail-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="logo-rail-group"
                key={groupIndex}
                aria-hidden={groupIndex === 1}
              >
                {row.map((item) => (
                  <div className="logo-rail-item" key={`${groupIndex}-${item.name}`}>
                    <Image
                      className="logo-rail-logo"
                      src={item.image}
                      alt={groupIndex === 0 ? `${item.name} Logo` : ""}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 620px) 150px, 210px"
                      style={{
                        height: item.displayHeight ? `${item.displayHeight}px` : undefined,
                        maxWidth: item.maxWidth ? `${item.maxWidth}px` : undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
