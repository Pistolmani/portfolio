import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../../lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24">
      <nav className="sticky top-0 z-30 -mx-6 flex items-center justify-between border-b border-zinc-900/80 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          ← otar<span className="text-indigo-400">.</span>
        </Link>
        <Link
          href="/#projects"
          className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          all projects
        </Link>
      </nav>

      <article className="pt-16">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-zinc-500">{project.year}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-zinc-300">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-indigo-500 px-3.5 py-1.5 font-medium text-white transition-colors hover:bg-indigo-400"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
            >
              GitHub ↗
            </a>
          )}
        </div>

        <Section label="Summary">
          <p className="text-zinc-300">{project.summary}</p>
        </Section>

        <Section label="Problem">
          <p className="text-zinc-400">{project.problem}</p>
        </Section>

        <Section label="Approach">
          <ul className="space-y-2.5 text-zinc-400">
            {project.approach.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 select-none font-mono text-xs text-zinc-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Highlights">
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="rounded-md border border-zinc-900 bg-zinc-950 px-3 py-2 text-sm text-zinc-300"
              >
                {h}
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Stack">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-zinc-800/80 bg-zinc-900/40 px-2 py-1 font-mono text-xs text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <div className="mt-16 border-t border-zinc-900 pt-6">
          <Link
            href="/#projects"
            className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← back to all projects
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
        <span>{label}</span>
        <span className="h-px flex-1 bg-zinc-900" />
      </h2>
      <div className="text-sm leading-relaxed">{children}</div>
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
