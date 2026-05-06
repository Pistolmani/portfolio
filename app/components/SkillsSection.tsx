"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SkillsSection({ skills }: { skills: Record<string, string[]> }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".skill-group", {
        y: 28,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="skill-group bg-black p-5 md:p-6">
          <h3 className="font-mono text-xs uppercase text-cyan-300">{group}</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
