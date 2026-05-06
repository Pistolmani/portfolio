"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = {
  email: "pirosmanotar@gmail.com",
  resume: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/otar-pirosmanashvili-3686a7241/",
  github: "https://github.com/Pistolmani",
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-kicker]", {
        y: -16,
        duration: 0.55,
      })
        .from(
          "[data-hero-title]",
          {
            y: 90,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.2"
        )
        .from(
          "[data-hero-copy], [data-hero-panel]",
          {
            y: 30,
            duration: 0.65,
            stagger: 0.08,
          },
          "-=0.35"
        );

      gsap.to("[data-hero-bg-name]", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden border-b border-white/10 px-5 pb-8 pt-24 sm:px-8 lg:px-10"
    >
      <div className="hero-grid" aria-hidden />
      <div className="hero-scanline" aria-hidden />

      <h1
        data-hero-bg-name
        className="pointer-events-none absolute inset-x-0 top-[19svh] z-0 select-none text-center font-semibold leading-[0.82] sm:inset-x-auto sm:-left-2 sm:text-left"
        aria-label="Otar Pirosmanashvili"
      >
        <span data-hero-title className="hero-name-first block whitespace-nowrap text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem]">
          Otar
        </span>
        <span data-hero-title className="mt-3 block whitespace-nowrap text-[3rem] text-white/40 sm:mt-0 sm:text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem]">
          Pirosmanashvili
        </span>
      </h1>

      <div className="relative z-10 flex min-h-[calc(100svh-8rem)] flex-col justify-between">
        <div
          data-hero-kicker
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase text-zinc-400"
        >
          <div className="flex items-center gap-3 text-cyan-300">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Available for remote roles — US &amp; EU
          </div>
          <div className="hidden text-zinc-500 sm:block">Tbilisi, Georgia / GMT+4</div>
        </div>

        <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div data-hero-copy className="w-full min-w-0 max-w-[21.5rem] pt-[46svh] sm:max-w-3xl sm:pt-[48svh] lg:pt-0">
            <p className="w-full max-w-[21.5rem] text-2xl font-medium leading-tight text-white sm:max-w-2xl sm:text-3xl md:text-4xl">
              .NET backend engineer specialising in regulated financial
              systems, Clean Architecture, and production-grade APIs.
            </p>
            <p className="mt-5 w-full max-w-[21.5rem] text-sm leading-7 text-zinc-400 sm:max-w-xl sm:text-base">
              Clean Architecture, CQRS, MediatR, and ASP.NET Core — with a
              focus on maintainability and long-term system clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${links.email}`}
                className="btn-primary border border-cyan-300 bg-cyan-300 px-4 py-2 text-sm font-semibold text-black"
              >
                Email me
              </a>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost border border-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                Resume.pdf
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          <div
            data-hero-panel
            className="min-w-0 max-w-[21.5rem] border-y border-white/10 py-5 font-mono text-xs uppercase text-zinc-500 sm:max-w-none"
          >
            <HeroFact label="Current" value="Andersen / banking platform" />
            <HeroFact label="Citizenship" value="Greek / EU" />
            <HeroFact label="Remote" value="US B2B + EU full-time" />
            <HeroFact label="Focus" value="Backend architecture + fintech" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid min-w-0 grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-white/10 py-3 last:border-b-0 sm:grid-cols-[110px_minmax(0,1fr)]">
      <span>{label}</span>
      <span className="break-words text-zinc-200">{value}</span>
    </div>
  );
}
