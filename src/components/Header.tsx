"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, List, UserCircle, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AuthDialog } from "./AuthDialog";
import { Brand } from "./Brand";

const links = [
  { label: "设计服务", href: "/#services" },
  { label: "OPC 计划", href: "/#opc" },
  { label: "学习中心", href: "/#learning" },
  { label: "签约背书", href: "/#proof" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const closeAuth = useCallback(() => setAuthOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="header-shell">
          <Brand compact />
          <nav className="desktop-nav" aria-label="主导航">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={pathname === link.href ? "nav-link is-active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="desktop-auth-actions">
            <Link
              className="header-cta"
              href="/?intent=加入社区#contact"
              onClick={() => setOpen(false)}
            >
              联系我们
              <ArrowUpRight size={16} weight="bold" />
            </Link>
            <button
              type="button"
              className="header-auth-trigger"
              aria-haspopup="dialog"
              onClick={() => setAuthOpen(true)}
            >
              <UserCircle size={18} weight="bold" />
              登录 / 注册
            </button>
          </div>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "关闭导航" : "打开导航"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="移动端主导航" className="mobile-menu-links">
              {links.map((link, index) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                className="mobile-auth-button"
                aria-haspopup="dialog"
                onClick={() => {
                  setOpen(false);
                  setAuthOpen(true);
                }}
              >
                <UserCircle size={21} weight="bold" />
                登录 / 注册
                <ArrowUpRight size={18} weight="bold" />
              </button>
              <Link
                className="mobile-menu-cta"
                href="/?intent=加入社区#contact"
                onClick={() => setOpen(false)}
              >
                加入 Jomolab AI-OPC 社区
                <ArrowUpRight size={20} weight="bold" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AuthDialog open={authOpen} onClose={closeAuth} />
    </>
  );
}
