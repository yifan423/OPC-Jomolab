"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import type { ServiceSkuPreview } from "@/content/site";

export function ServiceFilterGrid({
  filters,
  items,
}: {
  filters: string[];
  items: ServiceSkuPreview[];
}) {
  const [active, setActive] = useState(filters[0]);
  const reduceMotion = useReducedMotion();
  const filtered = useMemo(
    () => (active === "全部" ? items : items.filter((item) => item.category === active)),
    [active, items],
  );

  return (
    <>
      <div className="filter-tabs" role="tablist" aria-label="服务方案筛选">
        {filters.map((filter) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === filter}
            className={active === filter ? "filter-tab is-active" : "filter-tab"}
            onClick={() => setActive(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <motion.div layout={!reduceMotion} className="sku-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.article
              layout={!reduceMotion}
              key={item.id}
              className={`sku-card sku-card-tone-${(index % 3) + 1}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.34 }}
            >
              <div className="sku-card-head">
                <span>{item.category}</span>
                <CheckCircle size={22} weight="fill" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="sku-card-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <footer>
                <span>{item.badge}</span>
                <span>SKU PREVIEW</span>
              </footer>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
