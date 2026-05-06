"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "../lib/data";
import { StatusBadge } from "./StatusBadge";

gsap.registerPlugin(ScrollTrigger);

export function ProjectCards({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".project-row", {
        y: 48,
        duration: 0.75,
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
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="project-row group grid min-h-[300px] gap-8 border-b border-white/10 py-8 transition-colors last:border-b-0 hover:bg-white/[0.025] md:grid-cols-[120px_minmax(0,1fr)_330px] md:py-10"
        >
          <div className="flex items-start justify-between gap-4 md:block">
            <span className="font-mono text-xs text-cyan-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-zinc-500 md:mt-4 md:block">
              {project.year}
            </span>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              {project.liveUrl && (
                <span className="font-mono text-xs text-zinc-500">
                  {project.liveUrl.replace("https://", "")}
                </span>
              )}
            </div>
            <h3 className="max-w-4xl text-4xl font-semibold leading-none text-white transition-colors group-hover:text-cyan-200 sm:text-5xl md:text-6xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors group-hover:border-cyan-300/30"
                >
                  {item}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span className="px-2.5 py-1 font-mono text-xs text-zinc-600">
                  +{project.stack.length - 5}
                </span>
              )}
            </div>
          </div>

          <div className="project-plate relative min-h-[190px] overflow-hidden border border-white/10 bg-black/40">
            <div className="absolute inset-5 border border-cyan-300/20" />
            <div className="absolute left-5 top-5 font-mono text-xs uppercase text-cyan-300">
              Case study
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-xs uppercase text-zinc-500">
                {project.status}
              </div>
              <div className="mt-2 text-3xl font-semibold leading-none text-white/85">
                {project.title.slice(0, 2).toUpperCase()}
              </div>
            </div>
            <div className="absolute right-5 top-5 h-16 w-16 border border-white/10" />
            <div className="absolute right-10 top-10 h-16 w-16 border border-cyan-300/20 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>
        </Link>
      ))}
    </div>
  );
}
