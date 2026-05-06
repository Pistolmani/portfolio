"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Experience } from "../lib/data";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection({ experience }: { experience: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".experience-item", {
        y: 36,
        duration: 0.7,
        stagger: 0.12,
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
    <div ref={containerRef} className="border-y border-white/10">
      {experience.map((job) => (
        <article
          key={`${job.company}-${job.role}`}
          className="experience-item grid gap-8 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[260px_minmax(0,1fr)] md:py-10"
        >
          <div className="font-mono text-xs uppercase text-zinc-500">
            <div className="text-cyan-300">{job.period}</div>
            <div className="mt-3">{job.location}</div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              {job.role}
            </h3>
            <p className="mt-2 font-mono text-sm text-zinc-500">{job.company}</p>
            <ul className="mt-7 grid gap-4 text-sm leading-6 text-zinc-400 md:grid-cols-2">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="border-l border-white/10 pl-4">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {job.stack.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
