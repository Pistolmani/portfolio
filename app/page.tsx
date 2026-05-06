import { experience, projects } from "./lib/data";
import { AnimatedNav } from "./components/AnimatedNav";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectCards } from "./components/ProjectCards";
import { ScrollReveal } from "./components/ScrollReveal";
import { SkillsSection } from "./components/SkillsSection";

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

const capabilities = [
  {
    title: "Banking backend delivery",
    body: "Feature work for regulated finance systems, with clear boundaries between commands, handlers, validators, persistence, and APIs.",
    stack: [".NET", "CQRS", "MediatR", "EF Core"],
  },
  {
    title: "Production incident literacy",
    body: "A support-to-engineering path that makes data integrity, SQL investigation, and failure modes feel practical instead of abstract.",
    stack: ["MSSQL", "T-SQL", "Root cause", "Reconciliation"],
  },
  {
    title: "End-to-end product shipping",
    body: "Frontend, backend, deployment, DNS, SSL, payments, and maintenance for projects that leave localhost and meet real users.",
    stack: ["Next.js", "ASP.NET Core", "Azure", "BOG iPay"],
  },
];

const facts = [
  ["Based in", "Tbilisi, Georgia - GMT+4"],
  ["Citizenship", "Greek / EU citizen"],
  ["Available for", "US B2B contractor work and EU full-time roles"],
  ["Languages", "Georgian native, English fluent, German fluent"],
  ["Current focus", "Backend systems, fintech workflows, local AI retrieval"],
];

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <main className="relative overflow-hidden">
        <AnimatedNav />
        <HeroSection />

        <EditorialSection id="projects" label="Selected work" index="01">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <ScrollReveal y={24}>
              <h2 className="max-w-4xl text-5xl font-semibold leading-none text-white md:text-7xl">
                Systems that have to explain themselves.
              </h2>
            </ScrollReveal>
            <ScrollReveal y={24} delay={0.08}>
              <p className="max-w-xl text-base leading-7 text-zinc-400">
                Four case studies, all grounded in backend ownership: banking
                modules, a live store, pricing rules, and AI-assisted operations.
              </p>
            </ScrollReveal>
          </div>
          <ProjectCards projects={projects} />
        </EditorialSection>

        <EditorialSection id="capabilities" label="What I build" index="02">
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} y={28} delay={index * 0.05}>
                <article className="min-h-[220px] border border-white/10 bg-black/35 p-6 sm:min-h-[320px] md:p-7">
                  <div className="mb-16 font-mono text-xs text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-zinc-400">
                    {item.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.stack.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection id="experience" label="Experience" index="03">
          <div className="mb-10 max-w-4xl">
            <ScrollReveal y={24}>
              <h2 className="text-5xl font-semibold leading-none text-white md:text-7xl">
                Production before polish. Then polish.
              </h2>
            </ScrollReveal>
          </div>
          <ExperienceSection experience={experience} />
        </EditorialSection>

        <EditorialSection id="skills" label="Technical index" index="04">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <ScrollReveal y={24}>
              <div>
                <h2 className="text-5xl font-semibold leading-none text-white md:text-6xl">
                  Tools I reach for when the system gets real.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-6 text-zinc-400">
                  The center of gravity is backend and architecture, with enough
                  frontend, cloud, and AI tooling to ship the whole shape.
                </p>
              </div>
            </ScrollReveal>
            <SkillsSection skills={skills} />
          </div>
        </EditorialSection>

        <EditorialSection id="about" label="Beyond the API" index="05">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal y={24}>
              <div>
                <h2 className="text-5xl font-semibold leading-none text-white md:text-7xl">
                  Backend engineer. Systems that scale, codebases that last.
                </h2>
                <div className="mt-10 space-y-5 text-sm leading-7 text-zinc-400">
                  <p>
                    I build features for enterprise banking systems where Clean
                    Architecture, CQRS, and disciplined testing are everyday
                    practice, not just design principles.
                  </p>
                  <p>
                    Before that, I worked inside Bank of Georgia diagnosing
                    production incidents in regulated MSSQL environments. That
                    taught me to care about auditability, data shape, and how
                    systems fail under pressure.
                  </p>
                  <p>
                    On my own time I ship end-to-end: DressField is a live
                    commerce platform, InfraLens explores grounded local AI, and
                    StitchPrice turns messy pricing rules into a testable domain.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal y={24} delay={0.08}>
              <div className="border-y border-white/10">
                {facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-2 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[180px_1fr]"
                  >
                    <span className="font-mono text-xs uppercase text-zinc-500">
                      {label}
                    </span>
                    <span className="text-sm leading-6 text-zinc-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </EditorialSection>

        <section
          id="contact"
          className="relative min-h-[82svh] border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10"
        >
          <div className="flex min-h-[calc(82svh-4rem)] flex-col justify-between">
            <div className="flex items-center gap-3 font-mono text-xs uppercase text-cyan-300">
              <span className="h-px w-8 bg-cyan-300" />
              Contact
            </div>
            <ScrollReveal y={36}>
              <h2 className="max-w-6xl text-7xl font-semibold leading-[0.92] text-white sm:text-8xl md:text-9xl">
                Let&apos;s build something that holds up.
              </h2>
            </ScrollReveal>
            <ScrollReveal y={24} delay={0.08}>
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6 font-mono text-sm md:grid-cols-5">
                <ContactLink label="email" value={links.email} href={`mailto:${links.email}`} />
                <ContactLink label="phone" value={links.phone} href={`tel:${links.phone.replace(/\s/g, "")}`} />
                <ContactLink label="linkedin" value="otar-pirosmanashvili" href={links.linkedin} external />
                <ContactLink label="github" value="Pistolmani" href={links.github} external />
                <ContactLink label="resume" value="resume.pdf" href={links.resume} external />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 px-5 py-6 font-mono text-xs text-zinc-600 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <span>(c) {new Date().getFullYear()} Otar Pirosmanashvili</span>
          <span>Built with Next.js. Deployed on Vercel.</span>
        </footer>
      </main>
    </>
  );
}

function EditorialSection({
  id,
  label,
  index,
  children,
}: {
  id: string;
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mb-12 flex items-center justify-between gap-6 font-mono text-xs uppercase text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="text-cyan-300">{index}</span>
          <span>{label}</span>
        </div>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      {children}
    </section>
  );
}

function ContactLink({
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
      className="group min-w-0 border border-white/10 px-3 py-3 transition-colors hover:border-cyan-300/50 hover:bg-cyan-300/5"
    >
      <span className="block text-xs uppercase text-zinc-500">{label}</span>
      <span className="mt-2 block truncate text-zinc-200 transition-colors group-hover:text-white">
        {value}
      </span>
    </a>
  );
}
