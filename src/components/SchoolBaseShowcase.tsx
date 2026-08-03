"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { SchoolBase } from "@/content/site";

function SchoolMedia({
  school,
}: {
  school: SchoolBase;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const show = (next: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActive((next + school.images.length) % school.images.length);
  };

  useEffect(() => {
    if (reduceMotion || paused || school.images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % school.images.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, school.images.length]);

  const current = school.images[active];

  return (
    <div
      className="school-base-media"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <AnimatePresence initial={false} mode="popLayout" custom={direction}>
        <motion.div
          className="school-base-slide"
          custom={direction}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: direction * 32, scale: 1.018 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction * -24, scale: 0.992 }
          }
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          key={current.src}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 860px) 100vw, 56vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="school-base-controls">
        <div className="school-base-dots" aria-label={`${school.name}图片选择`}>
          {school.images.map((image, index) => (
            <button
              aria-label={`查看${image.alt}`}
              aria-current={active === index ? "true" : undefined}
              className={active === index ? "is-active" : undefined}
              onClick={() => show(index, index >= active ? 1 : -1)}
              onFocus={() => show(index, index >= active ? 1 : -1)}
              onMouseEnter={() => show(index, index >= active ? 1 : -1)}
              type="button"
              key={image.src}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export function SchoolBaseShowcase({ schools }: { schools: SchoolBase[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="school-base-showcase">
      {schools.map((school, index) => (
        <motion.article
          className="school-base-card"
          data-media-side={index % 2 === 0 ? "right" : "left"}
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.18, once: true }}
          transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}
          key={school.id}
        >
          <div className="school-base-copy">
            <div className="school-base-heading">
              <span>校企 OPC 实践基地</span>
              <h4>{school.name}</h4>
            </div>

            <div className="school-base-summary">
              {school.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="school-base-evidence">
              <strong>{school.metric}</strong>
              <span>{school.metricLabel}</span>
            </div>

            <div className="school-base-tags" aria-label={`${school.name}特色标签`}>
              {school.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <SchoolMedia school={school} />
        </motion.article>
      ))}

      <p className="school-base-source">
        内容与图片根据用户提供的院校材料整理，合作信息以双方最终发布口径为准。
      </p>
    </div>
  );
}
