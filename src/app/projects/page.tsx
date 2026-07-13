import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollReveal } from '@/components/scroll-reveal';
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
            href="/blogs"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Blogs
          </a>
          <Link
            href="/#contact"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Contact
          </Link>
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
        <ScrollReveal>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Builds &amp; experiments.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A full collection of AI/ML projects, research prototypes, and engineering work.
          </p>
        </ScrollReveal>
      </section>

      {/* Projects grid */}
      <section className="grid gap-6 pb-20 md:grid-cols-2">
        {profile.projects.map((project, index) => (
          <ScrollReveal key={project.name} delay={index * 50}>
            <ProjectCard project={project} delay={index * -1} />
          </ScrollReveal>
        ))}
      </section>

      <footer className="py-10 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
