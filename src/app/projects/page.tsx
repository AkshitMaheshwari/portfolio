import Link from 'next/link';
import { CometBorder } from '@/components/comet-border';
import { ThemeToggle } from '@/components/theme-toggle';
import { profile } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Akshit Maheshwari',
  description: 'All projects by Akshit Maheshwari — AI/ML builds, experiments, and research systems.'
};

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      {/* Navbar */}
      <header className="relative z-10 mb-8 flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-3 shadow-[var(--shadow)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="text-sm font-medium text-[var(--text)] transition hover:text-[var(--muted)]">
          Akshit Maheshwari
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-full bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--text)] transition duration-200"
          >
            Projects
          </Link>
          <a
            href="#"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Blogs
          </a>
          <a
            href="https://drive.google.com/file/d/1AtoKLP_-DwR1ngpiLQTj7UsbMPhD2WDT/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="ml-1 rounded-full border border-[var(--border)] bg-[var(--text)] px-4 py-1.5 text-sm font-semibold text-[var(--page)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Resume ↗
          </a>
        </nav>

        <ThemeToggle />
      </header>

      {/* Page heading */}
      <section className="py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--accent)]/70">
          All Projects
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
          Builds &amp; experiments.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          A full collection of AI/ML projects, research prototypes, and engineering work.
        </p>
      </section>

      {/* Projects grid */}
      <section className="grid gap-6 pb-20 md:grid-cols-2">
        {profile.projects.map((project, index) => (
          <CometBorder key={project.name} delay={index * -1}>
            <article className="group text-left transition duration-300 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]/75">{project.summary}</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text)] transition duration-300 group-hover:tracking-tight">
                {project.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{project.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-[var(--muted)] sm:text-base">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--page)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                >
                  GitHub <span>↗</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[var(--accent)]/50 hover:bg-[var(--text)] hover:text-[var(--page)]"
                >
                  Live demo <span>↗</span>
                </a>
              </div>
            </article>
          </CometBorder>
        ))}
      </section>

      <footer className="py-10 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
