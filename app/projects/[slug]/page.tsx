import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackgroundEffects } from "../../components/BackgroundEffects";
import { StatusBadge } from "../../components/StatusBadge";
import { projects } from "../../lib/data";

const siteUrl = "https://pirosmani.dev";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const url = `${siteUrl}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.summary,
      url,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <BackgroundEffects />
      <main className="relative overflow-hidden">
        <nav className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/75 px-5 py-4 font-mono text-xs uppercase text-zinc-400 backdrop-blur-md sm:px-8 lg:px-10">
          <Link href="/" className="text-white transition-colors hover:text-cyan-300">
            {"<-"} otar.p
          </Link>
          <Link
            href="/#projects"
            className="transition-colors hover:text-white"
          >
            all work
          </Link>
        </nav>

        <article className="pt-20">
          <header className="relative min-h-[78svh] overflow-hidden border-b border-white/10 px-5 pb-8 pt-10 sm:px-8 lg:px-10">
            <div className="hero-grid" aria-hidden />
            <div className="relative z-10 flex min-h-[calc(78svh-7rem)] flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase text-zinc-500">
                <div className="flex items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span>{project.year}</span>
                </div>
                <span>{project.stack.slice(0, 3).join(" / ")}</span>
              </div>

              <div>
                <h1 className="max-w-6xl text-7xl font-semibold leading-[0.9] text-white sm:text-8xl md:text-9xl">
                  {project.title}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300 md:text-2xl md:leading-9">
                  {project.tagline}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-300 bg-cyan-300 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white"
                    >
                      Live site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/60"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </header>

          <CaseSection label="Summary" index="01">
            <p className="max-w-4xl text-2xl leading-9 text-white md:text-3xl md:leading-10">
              {project.summary}
            </p>
          </CaseSection>

          <CaseSection label="Problem" index="02">
            <p className="max-w-4xl text-base leading-8 text-zinc-400">
              {project.problem}
            </p>
          </CaseSection>

          <CaseSection label="Approach" index="03">
            <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {project.approach.map((line, index) => (
                <li
                  key={line}
                  className="grid gap-5 bg-black p-5 text-sm leading-7 text-zinc-300 md:grid-cols-[90px_1fr] md:p-6"
                >
                  <span className="font-mono text-xs text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection label="Highlights" index="04">
            <ul className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="min-h-28 border border-white/10 bg-black/40 p-5 text-lg font-medium leading-7 text-white"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection label="Stack" index="05">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 font-mono text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </CaseSection>

          <div className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
            <Link
              href="/#projects"
              className="font-mono text-xs uppercase text-zinc-500 transition-colors hover:text-cyan-300"
            >
              {"<-"} back to all work
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

function CaseSection({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-8 border-b border-white/10 px-5 py-16 sm:px-8 md:grid-cols-[260px_minmax(0,1fr)] md:py-20 lg:px-10">
      <div className="font-mono text-xs uppercase text-zinc-500">
        <span className="text-cyan-300">{index}</span>
        <span className="ml-3">{label}</span>
      </div>
      <div>{children}</div>
    </section>
  );
}
