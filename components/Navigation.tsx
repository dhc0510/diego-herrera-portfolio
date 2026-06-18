"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ContactRound,
  GitFork,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { links } from "@/data/portfolio";
import styles from "./Navigation.module.css";

const navItems = [
  { href: "#about", label: "About", number: "01" },
  { href: "#stack", label: "Stack", number: "02" },
  { href: "#projects", label: "Projects", number: "03" },
  { href: "#experience", label: "Experience", number: "04" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 760) {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        open ? styles.menuOpen : ""
      }`}
    >
      <nav className={styles.nav} aria-label="Primary navigation">
        <a
          href="#top"
          className={styles.brand}
          aria-label="Back to top"
          onClick={closeMenu}
        >
          <span className={styles.mark}>DH</span>
          <span className={styles.brandText}>Diego Herrera</span>
        </a>

        <div className={styles.links}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className={styles.contact} href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className={styles.mobileMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileInner}>
              <motion.div
                className={styles.mobileIntro}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.4 }}
              >
                <span>Navigation</span>
                <p>Software Engineer · Heredia, Costa Rica</p>
              </motion.div>

              <div className={styles.mobileLinks}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.055,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span>{item.number}</span>
                    <strong>{item.label}</strong>
                    <ArrowRight size={20} />
                  </motion.a>
                ))}
              </div>

              <motion.a
                className={styles.mobileCta}
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.42 }}
              >
                <span>
                  Have a role or project in mind?
                  <strong>Let&apos;s talk</strong>
                </span>
                <ArrowUpRight size={20} />
              </motion.a>

              <motion.div
                className={styles.mobileFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.52, duration: 0.4 }}
              >
                <div className={styles.mobileSocials}>
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <GitFork size={17} /> GitHub
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer">
                    <ContactRound size={17} /> LinkedIn
                  </a>
                  <a href={links.email}>
                    <Mail size={17} /> Email
                  </a>
                </div>
                <div className={styles.mobileStatus}>
                  <span />
                  Available for 2026 opportunities
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
