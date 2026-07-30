"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { LineReveal } from "@/components/LineReveal";
import type { ServiceCategory } from "@/content/site";

export function ServiceRail({ items }: { items: ServiceCategory[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "-34%"]);

  return (
    <section ref={sectionRef} className="service-story" id="services">
      <div className="service-sticky">
        <div className="service-rail-header">
          <div>
            <p className="eyebrow">DESIGN SERVICES · 01 / 04</p>
            <LineReveal
              lines={["不止生成内容", "更建立可持续的创意系统"]}
            />
          </div>
          <p>
            从平面、视频到传播与潮玩，把 AI 放进真正的商业语境。
            每个方向都连接策略、审美与可复用的生产能力。
          </p>
        </div>

        <motion.div
          className="service-track"
          style={!reduceMotion ? { x } : undefined}
        >
          {items.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              className="service-card"
              key={service.slug}
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 768px) 82vw, 420px"
                className="service-card-image"
              />
              <div className="service-card-scrim" />
              <div className="service-card-top">
                <span>{service.index}</span>
                <span className="service-card-arrow">
                  <ArrowUpRight size={19} weight="bold" />
                </span>
              </div>
              <div className="service-card-copy">
                <p>{service.english}</p>
                <h3>{service.title}</h3>
                <span>{service.eyebrow}</span>
              </div>
            </Link>
          ))}
          <div className="service-track-end" aria-hidden="true">
            <p>四类能力，一个共同目标</p>
            <strong>
              <span className="service-finale-line">让创意被看见，</span>
              <br />
              也能被兑现。
            </strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
