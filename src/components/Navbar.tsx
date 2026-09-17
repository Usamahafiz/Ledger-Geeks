"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 40);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,border-color] duration-500 ease-out"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--background) 70%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderColor: scrolled ? "var(--border-subtle)" : "transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-sm font-bold text-background">
            LG
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Ledger Geeks
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105"
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}
