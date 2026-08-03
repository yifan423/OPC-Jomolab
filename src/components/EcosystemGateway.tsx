"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const gateways = [
  {
    index: "01",
    title: "OPC 资源池",
    modules: [
      { index: "01", label: "产业服务", href: "#services" },
      { index: "02", label: "AI工具", href: "#tools" },
    ],
    className: "ecosystem-gateway-resource",
    icon: "/images/generated/opc-resource-icon.webp",
  },
  {
    index: "02",
    title: "OPC 孵化器",
    modules: [
      { index: "03", label: "成长中心", href: "#learning" },
      { index: "04", label: "孵化中心", href: "#incubation" },
    ],
    className: "ecosystem-gateway-incubator",
    icon: "/images/generated/opc-incubator-icon.webp",
  },
] as const;

export function EcosystemGateway() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const revealProgress = useTransform(scrollY, [14, 132], [0, 1]);
  const smoothProgress = useSpring(revealProgress, {
    stiffness: 250,
    damping: 28,
    mass: 0.72,
  });
  const y = useTransform(smoothProgress, [0, 1], [104, 0]);
  const scaleX = useTransform(smoothProgress, [0, 1], [0.82, 1]);
  const scaleY = useTransform(smoothProgress, [0, 1], [0.72, 1]);
  const opacity = useTransform(scrollY, [14, 62], [0, 1]);
  const instantOpacity = useTransform(scrollY, (value) => (value > 14 ? 1 : 0));

  return (
    <motion.nav
      className="ecosystem-gateway"
      aria-label="Jomolab OPC 生态入口"
      style={
        reduceMotion
          ? { opacity: instantOpacity }
          : { opacity, scaleX, scaleY, y }
      }
    >
      {gateways.map((gateway) => (
        <div
          className={`ecosystem-gateway-item ${gateway.className}`}
          key={gateway.title}
        >
          <span className="ecosystem-gateway-icon" aria-hidden="true">
            <Image
              src={gateway.icon}
              alt=""
              width={420}
              height={420}
              sizes="88px"
            />
          </span>

          <span className="ecosystem-gateway-content">
            <span className="ecosystem-gateway-title">
              <span className="ecosystem-gateway-index">
                MODULE {gateway.index}
              </span>
              <strong>{gateway.title}</strong>
            </span>
            <span className="ecosystem-gateway-meta">
              {gateway.modules.map((module) => (
                <Link
                  className="ecosystem-gateway-module"
                  href={module.href}
                  key={module.label}
                >
                  <span aria-hidden="true">{module.index}</span>
                  <strong>{module.label}</strong>
                </Link>
              ))}
            </span>
          </span>
        </div>
      ))}
    </motion.nav>
  );
}
