"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const navItems = [
  ["work", "#projects"],
  ["build", "#capabilities"],
  ["about", "#about"],
  ["contact", "#contact"],
];

export function AnimatedNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(el, {
        y: -24,
        duration: 0.55,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/70 px-5 py-4 font-mono text-xs uppercase text-zinc-400 backdrop-blur-md sm:px-8 lg:px-10"
    >
      <Link href="/" className="font-semibold text-white transition-colors hover:text-cyan-300">
        otar.p
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        {navItems.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="hidden transition-colors hover:text-white sm:inline"
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          data-cmdk-trigger
          className="border border-white/10 px-2.5 py-1 text-zinc-300 transition-colors hover:border-cyan-300/50 hover:text-white"
          aria-label="Open command palette"
        >
          Search
        </button>
      </div>
    </nav>
  );
}
