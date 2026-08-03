"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useId, useMemo, useState } from "react";
import {
  creativeDesignCategories,
  creativeDesignSkus,
  type CreativeDesignCategory,
} from "@/content/creative-design";

type ActiveCategory = "全部" | CreativeDesignCategory;

function PriceAmount({ price }: { price: string }) {
  const [minimum, maximum] = price.split("~");

  return (
    <strong aria-label={price}>
      <small aria-hidden="true">¥</small>
      <span>{minimum.replace("¥", "")}</span>
      {maximum ? (
        <>
          <i aria-hidden="true">~</i>
          <span>{maximum}</span>
        </>
      ) : null}
    </strong>
  );
}

export function CreativeDesignCatalog() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("全部");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase("zh-CN"));
  const reduceMotion = useReducedMotion();
  const searchId = useId();

  const filteredSkus = useMemo(() => {
    return creativeDesignSkus.filter((item) => {
      const matchesCategory =
        activeCategory === "全部" || item.category === activeCategory;
      const searchableText = [
        item.title,
        item.category,
        item.subcategory,
        item.summary,
        ...item.tags,
      ]
        .join(" ")
        .toLocaleLowerCase("zh-CN");

      return matchesCategory && (!deferredQuery || searchableText.includes(deferredQuery));
    });
  }, [activeCategory, deferredQuery]);

  function clearFilters() {
    setActiveCategory("全部");
    setQuery("");
  }

  return (
    <main className="creative-catalog-page">
      <section className="creative-catalog-hero" aria-labelledby="creative-catalog-title">
        <Image
          src="/images/services/aigc-creative/hero-ai-creative-design.jpg"
          alt="由品牌视觉、三维空间与插画元素组成的 AI 创意设计场景"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) calc(100vw - 32px), 1400px"
          className="creative-catalog-hero-image"
        />
        <div className="creative-catalog-hero-scrim" />
        <Link className="creative-catalog-back" href="/#services">
          <ArrowLeft size={17} weight="bold" aria-hidden="true" />
          返回产业服务
        </Link>
        <div className="creative-catalog-hero-copy">
          <p>AI CREATIVE DESIGN</p>
          <h1 id="creative-catalog-title">AI 创意设计</h1>
          <span>从品牌视觉、营销物料到 3D 与插画，按 SKU 快速选择创意服务。</span>
          <a className="creative-catalog-jump" href="#creative-service-catalog">
            浏览服务
            <ArrowDown size={17} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="creative-catalog-section"
        id="creative-service-catalog"
        aria-labelledby="creative-service-title"
      >
        <div className="creative-catalog-shell">
          <div className="creative-catalog-heading">
            <div>
              <h2 id="creative-service-title">选择设计类型</h2>
              <p>按五大品类筛选，或直接搜索你需要的 SKU。</p>
            </div>
            <div className="creative-search-control">
              <label htmlFor={searchId}>搜索服务</label>
              <div className="creative-search-field">
                <MagnifyingGlass size={19} weight="bold" aria-hidden="true" />
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  placeholder="输入名称、品类或关键词"
                  autoComplete="off"
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query ? (
                  <button type="button" aria-label="清空搜索" onClick={() => setQuery("")}>
                    <X size={16} weight="bold" aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="creative-filter-row">
            <div className="creative-filter-tabs" role="tablist" aria-label="设计服务品类">
              {creativeDesignCategories.map((category) => {
                const count =
                  category === "全部"
                    ? creativeDesignSkus.length
                    : creativeDesignSkus.filter((item) => item.category === category).length;
                const isActive = activeCategory === category;

                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="creative-sku-grid"
                    className={isActive ? "is-active" : undefined}
                    onClick={() => setActiveCategory(category)}
                    key={category}
                  >
                    <span>{category}</span>
                    <small>{count}</small>
                  </button>
                );
              })}
            </div>
            <p className="creative-result-count" aria-live="polite">
              当前显示 {filteredSkus.length} 项服务
            </p>
          </div>

          {filteredSkus.length ? (
            <div className="creative-grid-stage">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  className="creative-sku-grid"
                  id="creative-sku-grid"
                  role="tabpanel"
                  key={`${activeCategory}:${deferredQuery || "all"}`}
                  initial={reduceMotion ? false : { opacity: 0.08, y: 6 }}
                  animate={
                    reduceMotion
                      ? { opacity: 1, y: 0, transition: { duration: 0 } }
                      : {
                          opacity: 1,
                          y: 0,
                          transition: {
                            opacity: { duration: 0.18, ease: "linear" },
                            y: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
                          },
                        }
                  }
                  exit={
                    reduceMotion
                      ? { opacity: 0, transition: { duration: 0 } }
                      : {
                          opacity: 0.08,
                          y: -3,
                          transition: {
                            opacity: { duration: 0.12, ease: "linear" },
                            y: { duration: 0.16, ease: [0.4, 0, 1, 1] },
                          },
                        }
                  }
                >
                  {filteredSkus.map((item) => (
                    <article className="creative-sku-card" key={item.id}>
                      <div className="creative-sku-media">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 980px) 42vw, 280px"
                          style={{ objectPosition: item.imagePosition }}
                        />
                      </div>
                      <div className="creative-sku-content">
                        <div className="creative-sku-classification">
                          <span>{item.category}</span>
                          <small>{item.subcategory}</small>
                        </div>
                        <h3>{item.title}</h3>
                        <div className="creative-sku-price">
                          <span>参考价格</span>
                          <PriceAmount price={item.price} />
                        </div>
                        <p>{item.summary}</p>
                        <div className="creative-sku-tags" aria-label={`${item.title}服务标签`}>
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="creative-empty-state" id="creative-sku-grid" role="status">
              <MagnifyingGlass size={30} weight="regular" aria-hidden="true" />
              <h3>暂时没有匹配的服务</h3>
              <p>可以缩短关键词，或清除筛选查看全部 16 项服务。</p>
              <button type="button" onClick={clearFilters}>
                查看全部服务
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
