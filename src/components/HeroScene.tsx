"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { useRef } from "react";
import { LineReveal } from "./LineReveal";

export function HeroScene() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section ref={ref} className="hero">
      <motion.div
        className="hero-background"
        style={reduceMotion ? undefined : { y: backgroundY }}
      >
        <Image
          src="/images/generated/hero-sky-4k.webp"
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="hero-image"
        />
      </motion.div>
      <div className="hero-scrim" />

      <motion.div
        className="hero-content"
        style={reduceMotion ? undefined : { y: titleY, opacity: titleOpacity }}
      >
        <div className="hero-kicker">
          <span>AI CREATIVE ECOSYSTEM</span>
          <span className="hero-kicker-line" />
          <span>HANGZHOU · CHINA</span>
        </div>
        <LineReveal
          as="h1"
          lines={["Jomolab", "释放 AI 创造力，兑现商业想象力"]}
          lineClassNames={["hero-brand"]}
          lineContent={[
            <Image
              key="hero-wordmark"
              src="/images/brand/jomolab-hero-wordmark.webp"
              alt=""
              width={1538}
              height={241}
              priority
              sizes="(max-width: 620px) 68vw, 420px"
            />,
            "释放 AI 创造力，兑现商业想象力",
          ]}
          delay={0.08}
        />
        <div className="hero-actions">
          <Link className="button button-primary" href="/?intent=加入社区#contact">
            加入 Jomolab AI-OPC 社区
            <ArrowUpRight size={18} weight="bold" />
          </Link>
          <Link className="hero-text-link" href="#services">
            探索设计服务
            <ArrowDown size={16} weight="bold" />
          </Link>
        </div>
      </motion.div>

      <div className="hero-note">
        <span className="hero-note-dot" />
        <span>JOMO / JOY OF MAKING ORIGINALS</span>
      </div>
    </section>
  );
}
