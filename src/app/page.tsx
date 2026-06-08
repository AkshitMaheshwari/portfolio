import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { CursorGlow } from '@/components/cursor-glow';
import { ThemeToggle } from '@/components/theme-toggle';
import { CometBorder } from '@/components/comet-border';
import { TypingHeading } from '@/components/typing-heading';
import { ScrollReveal } from '@/components/scroll-reveal';
import { profile } from '@/data/portfolio';

function sectionCard(content: React.ReactNode, className = '', delay = 0, key?: React.Key) {
  return (
    <CometBorder key={key} className={className} delay={delay}>
      {content}
    </CometBorder>
  );
}

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <CursorGlow />

      <header className="relative z-10 mb-8 flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-3 shadow-[var(--shadow)] backdrop-blur-xl sm:px-6">
        <p className="text-sm font-medium text-[var(--text)]">Akshit Maheshwari</p>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Projects
          </Link>
          <a
            href="#"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Blogs
          </a>
          <Link
            href="#contact"
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

      <section className="relative z-10 grid gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-14">
        <ScrollReveal className="space-y-6 text-left">
          <TypingHeading />
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            an <span className="font-semibold text-[var(--text)]">AI/ML developer</span> who likes practical systems, polished interfaces,
            and work that feels clean, useful, and intentional.
          </p>
          <p className="max-w-2xl text-sm font-medium uppercase tracking-[0.32em] text-[var(--accent)]/72">
            Enthusiast • Builder • Research-minded
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex justify-start lg:justify-end" delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_68%)] blur-2xl" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] p-3 shadow-[var(--shadow)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-[var(--border)] bg-[var(--page)]">
                <Image
                  src="/pfp4.jpg"
                  alt="Akshit Maheshwari"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="space-y-6 py-8">
        <ScrollReveal className="space-y-6">
          <SectionHeading
            eyebrow=""
            title="About me"
            description=""
          />
          <div className="max-w-4xl text-left text-[var(--muted)]">
            <p className="text-base leading-8 sm:text-lg sm:leading-9">
              A motivated undergraduate in IT and Data Science with hands-on experience in AI/ML projects. I focus on making systems measurable and solvable, not just functional - from data preparation and embedding pipelines to ranking logic and retrieval evaluation.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="space-y-6 py-8">
        <ScrollReveal className="space-y-6">
          <SectionHeading
            eyebrow=""
            title="Academic foundation."
            description=""
          />
          <div className="space-y-4">
            {profile.education.map((item, index) =>
              sectionCard(
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-left gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)]">{item.school}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{item.place} • <span className="italic">{item.degree}</span></p>
                  </div>
                  <div className="text-sm text-[var(--muted)] font-medium shrink-0 sm:text-right">
                    {item.period}
                  </div>
                </div>,
                '',
                index * -0.5,
                item.school
              )
            )}
          </div>
        </ScrollReveal>
      </section>

      <section className="space-y-6 py-8">
        <ScrollReveal className="space-y-6">
          <SectionHeading
            eyebrow=""
            title="Tools and technologies I use."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {profile.skills.map((group, index) =>
              sectionCard(
                <div className="space-y-4 text-left transition duration-300 group-hover:translate-y-[-2px]">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-[var(--text)]">{group.category}</h3>
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.3em] text-[var(--accent)]/72">
                      Core
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--text)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:bg-[var(--text)] hover:text-[var(--page)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>,
                '',
                index * -0.3,
                group.category
              )
            )}
          </div>
        </ScrollReveal>
      </section>

      <section className="space-y-6 py-8">
        <ScrollReveal className="space-y-6">
          <SectionHeading
            eyebrow=""
            title="Practical work and leadership."
            // description=""
          />
          <div className="space-y-4">
            {profile.experience.map((item, index) =>
              sectionCard(
                <div className="flex flex-col text-left gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{item.organization}</p>
                    </div>
                    <div className="text-sm text-[var(--muted)] font-medium shrink-0 sm:text-right">
                      {item.period}
                    </div>
                  </div>
                  <p className="text-base leading-7 text-[var(--muted)]">{item.description}</p>
                </div>,
                '',
                index * -0.5,
                item.title
              )
            )}
          </div>
        </ScrollReveal>
      </section>

      <section id="projects" className="space-y-6 py-8">
        <ScrollReveal className="space-y-6">
          <SectionHeading
            eyebrow=""
            title="Build Projects and Demos"
            // description="The project section stays in the same visual rhythm so it doesn't compete with the rest of the page."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {profile.projects.slice(0, 2).map((project, index) => (
              <CometBorder key={project.name} delay={index * -1}>
                <article className="group text-left">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text)] transition duration-300 group-hover:tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">{project.description}</p>

                    <ul className="mt-4 space-y-3 text-sm text-[var(--muted)] sm:text-base">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap justify-start gap-2">
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
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--page)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--accent)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                      >
                        GitHub
                        <span className="transition duration-300 group-hover:translate-x-0.5">↗</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[var(--accent)]/50 hover:bg-[var(--text)] hover:text-[var(--page)]"
                      >
                        Live demo
                        <span className="transition duration-300 group-hover:translate-x-0.5">↗</span>
                      </a>
                    </div>
                  </article>
              </CometBorder>
            ))}
          </div>
          
          <div className="flex justify-center pt-6">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold text-[var(--text)] shadow-[var(--shadow)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:bg-[var(--text)] hover:text-[var(--page)] hover:shadow-lg"
            >
              <span>View All Projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section id="contact" className="space-y-6 py-8">
        <ScrollReveal>
          {sectionCard(
            <div className="mx-auto max-w-4xl text-center py-4">
              <h2 className="font-[family-name:var(--font-heading)] text-[2.5rem] font-semibold tracking-tight text-[var(--text)] sm:text-[3.6rem]">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Want to chat? Feel free to reach out to me via email or on social media.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {profile.socials.map((link) => {
                  const icon =
                    link.label === 'Email' ? '✉' : link.label === 'GitHub' ? '◉' : link.label === 'LinkedIn' ? 'in' : '⌘';

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--page)] px-5 py-4 text-base font-semibold text-[var(--text)] shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:bg-[var(--text)] hover:text-[var(--page)]"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-bold transition duration-300 group-hover:border-[var(--page)]/30 group-hover:bg-[var(--page)] group-hover:text-[var(--text)]">
                        {icon}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </ScrollReveal>
      </section>

      <footer className="py-10 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}