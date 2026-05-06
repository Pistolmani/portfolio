import Link from "next/link";
import { experience, projects } from "./lib/data";

const skills = {
  Backend: [".NET 8", "ASP.NET Core", "EF Core", "MediatR", "C#", "REST APIs"],
  Architecture: ["Clean Architecture", "CQRS", "DDD", "Microservices", "SOLID"],
  Frontend: ["Next.js 15", "React 19", "Angular", "TypeScript", "Tailwind", "shadcn/ui"],
  Databases: ["PostgreSQL", "MSSQL", "MySQL", "pgvector", "Redis"],
  "Cloud & Infra": ["Azure", "Docker", "GitHub Actions", "GitLab CI"],
  Testing: ["xUnit", "NUnit", "Integration tests"],
  AI: ["LangGraph", "Ollama (local LLMs)", "RAG", "RRF retrieval"],
};

const links = {
  email: "pirosmanotar@gmail.com",
  phone: "+995 511 123 807",
  github: "https://github.com/Pistolmani",
  linkedin: "https://www.linkedin.com/in/otar-pirosmanashvili-3686a7241/",
  resume: "/resume.pdf",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-30 -mx-6 flex items-center justify-between border-b border-zinc-900/80 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
      <Link
        href="/"
        className="font-mono text-sm font-medium tracking-tight text-zinc-200 hover:text-white"
      >
        otar<span className="text-indigo-400">.</span>
      </Link>
      <div className="flex items-center gap-5 text-xs text-zinc-400">
        <a href="#experience" className="hidden hover:text-white sm:inline">
          experience
        </a>
        <a href="#projects" className="hidden hover:text-white sm:inline">
          projects
        </a>
        <a href="#contact" className="hidden hover:text-white sm:inline">
          contact
        </a>
        <button
          data-cmdk-trigger
          className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
          aria-label="Open command palette"
        >
          <span>Search</span>
          <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300">
            ⌘K
          </kbd>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-20 pb-24">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs">
        <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="font-mono text-emerald-300/90">
          Open to remote roles · US (B2B / contractor) & EU (full-time)
        </span>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Otar Pirosmanashvili
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-300">
        .NET Backend Engineer building production banking systems at{" "}
        <span className="text-white">Andersen</span> with{" "}
        <span className="font-mono text-indigo-300">Clean Architecture</span> &{" "}
        <span className="font-mono text-indigo-300">CQRS</span>. Side-projects in
        AI-grounded retrieval and pricing-domain engines.
      </p>

      <p className="mt-3 font-mono text-sm text-zinc-500">
        EU citizen (Greek) · Tbilisi, Georgia · GMT+4
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${links.email}`}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
        >
          Email me
        </a>
        <a
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
        >
          Resume <span className="ml-1 font-mono text-zinc-500">.pdf</span>
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          LinkedIn ↗
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}

function SectionHeading({
  index,
  label,
  id,
}: {
  index: string;
  label: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-500"
    >
      <span className="text-zinc-600">{index}</span>
      <span className="text-zinc-300">{label}</span>
      <span className="h-px flex-1 bg-zinc-900" />
    </h2>
  );
}

function Experience() {
  return (
    <section className="border-t border-zinc-900 py-16">
      <SectionHeading index="01" label="Experience" id="experience" />
      <div className="space-y-10">
        {experience.map((job) => (
          <article key={job.company} className="grid gap-3 sm:grid-cols-[140px_1fr]">
            <div className="font-mono text-xs text-zinc-500 sm:pt-1">{job.period}</div>
            <div>
              <h3 className="text-base font-semibold text-white">
                {job.role}{" "}
                <span className="font-normal text-zinc-400">
                  · {job.company}
                </span>
              </h3>
              <p className="mt-0.5 font-mono text-xs text-zinc-500">
                {job.location}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-zinc-700" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-zinc-800/80 bg-zinc-900/40 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="border-t border-zinc-900 py-16">
      <SectionHeading index="02" label="Selected Projects" id="projects" />
      <div className="space-y-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-xl border border-zinc-900 bg-zinc-950 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300">
                  {p.title}
                </h3>
                <StatusBadge status={p.status} />
              </div>
              <span className="font-mono text-xs text-zinc-500">{p.year}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">{p.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                >
                  {s}
                </span>
              ))}
              {p.stack.length > 6 && (
                <span className="font-mono text-[11px] text-zinc-600">
                  +{p.stack.length - 6} more
                </span>
              )}
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs">
              <span className="text-indigo-400 group-hover:text-indigo-300">
                Read case study →
              </span>
              {p.liveUrl && (
                <span className="font-mono text-zinc-500">{p.liveUrl.replace("https://", "")}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Live: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    "Working Prototype": "border-amber-500/30 bg-amber-500/10 text-amber-300",
    "In Development": "border-sky-500/30 bg-sky-500/10 text-sky-300",
  };
  return (
    <span
      className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${colors[status] ?? ""}`}
    >
      {status}
    </span>
  );
}

function Skills() {
  return (
    <section className="border-t border-zinc-900 py-16">
      <SectionHeading index="03" label="Skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              {group}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded border border-zinc-800/80 bg-zinc-900/40 px-2 py-1 font-mono text-[11px] text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-zinc-900 py-16">
      <SectionHeading index="04" label="About" />
      <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
        <p>
          I&apos;m a backend engineer with two years of hands-on production
          experience building features for an enterprise banking platform — the
          kind of system where Clean Architecture, CQRS, and disciplined
          testing aren&apos;t whiteboard concepts but daily tools. Before that,
          I worked inside Bank of Georgia diagnosing and fixing production
          incidents in regulated MSSQL environments, which is where I learned
          to respect data integrity in finance.
        </p>
        <p>
          On my own time I ship end-to-end — DressField is a live e-commerce
          store I designed, built, deployed, and now maintain — and I&apos;m
          drawn to the harder problems at the edges, like grounded AI retrieval
          (InfraLens) and disciplined domain modelling (StitchPrice).
        </p>
        <p>
          I&apos;m an EU citizen (Greek), based in Tbilisi (GMT+4), and open to
          remote roles in the US on a B2B / contractor basis or full-time roles
          in the EU.
        </p>
        <div className="pt-2">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Languages
          </h3>
          <p className="mt-2 text-sm text-zinc-300">
            Georgian <span className="text-zinc-500">(native)</span> · English{" "}
            <span className="text-zinc-500">(fluent)</span> · German{" "}
            <span className="text-zinc-500">(fluent)</span> · Russian, Greek{" "}
            <span className="text-zinc-500">(novice)</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="border-t border-zinc-900 py-16">
      <SectionHeading index="05" label="Contact" id="contact" />
      <p className="mb-6 text-sm text-zinc-400">
        The fastest way to reach me is email. I reply within a day.
      </p>
      <div className="grid gap-2 font-mono text-sm">
        <ContactRow label="email" value={links.email} href={`mailto:${links.email}`} />
        <ContactRow label="phone" value={links.phone} href={`tel:${links.phone.replace(/\s/g, "")}`} />
        <ContactRow label="linkedin" value="otar-pirosmanashvili" href={links.linkedin} external />
        <ContactRow label="github" value="Pistolmani" href={links.github} external />
        <ContactRow label="resume" value="resume.pdf" href={links.resume} external />
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-md px-3 py-2 -mx-3 transition-colors hover:bg-zinc-900/50"
    >
      <span className="w-20 text-xs uppercase tracking-wider text-zinc-600">
        {label}
      </span>
      <span className="text-zinc-300 group-hover:text-white">{value}</span>
      <span className="ml-auto text-zinc-700 transition-colors group-hover:text-indigo-400">
        →
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="mt-16 flex items-center justify-between border-t border-zinc-900 pt-6 font-mono text-xs text-zinc-600">
      <span>© {new Date().getFullYear()} Otar Pirosmanashvili</span>
      <span>Built with Next.js · Deployed on Vercel</span>
    </footer>
  );
}
