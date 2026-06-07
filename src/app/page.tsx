import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { CursorGlow } from '@/components/cursor-glow';
import { ThemeToggle } from '@/components/theme-toggle';
import { CometBorder } from '@/components/comet-border';
import { TypingHeading } from '@/components/typing-heading';
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
        <div className="space-y-6 text-left">
          {/* <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[var(--accent)]/72">Hi</p> */}
          <TypingHeading />
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            an <span className="font-semibold text-[var(--text)]">AI/ML developer</span> who likes practical systems, polished interfaces,
            and work that feels clean, useful, and intentional.
          </p>
          <p className="max-w-2xl text-sm font-medium uppercase tracking-[0.32em] text-[var(--accent)]/72">
            Enthusiast • Builder • Research-minded
          </p>

          {/* <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)]">
              <strong className="font-semibold">AI systems</strong> that solve real problems
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)]">
              <strong className="font-semibold">Classy UI</strong> with clear hierarchy
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)]">
              <strong className="font-semibold">Research + product</strong> mindset
            </span>
          </div> */}
        </div>

        <div className="flex justify-start lg:justify-end">
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
        </div>
      </section>

      {/* <section className="relative z-10 py-4">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]/72">What stands out</p>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              A cleaner portfolio should make the important things obvious first: who you are, what you build, and why it matters.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[34rem]">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]/72">Focus</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">AI / ML</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]/72">Style</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">Black / white</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]/72">Mood</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">Classy</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="space-y-6 py-8">
        <SectionHeading
          eyebrow=""
          title="About me"
          description=""
        />
        {sectionCard(
          <div className="mx-auto max-w-4xl text-left text-[var(--muted)]">
            <p className="text-base leading-8 sm:text-lg">
              A motivated undergraduate in IT and Data Science with hands-on experience in AI/ML projects. I focus on making systems measurable and solvable, not just functional - from data preparation and embedding pipelines to ranking logic and retrieval evaluation.
            </p>
          </div>,
          '',
          0
        )}
      </section>

      <section className="space-y-6 py-8">
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
      </section>

      <section className="space-y-6 py-8">
        <SectionHeading
          eyebrow=""
          title="Tools and technologies I use."
        //   description="Grouped so the page stays clean and easy to scan."
        />
        {/* <div className="flex flex-col gap-4 rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]/72">Highlighted stack</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                The most important tools are lifted first so the skills section feels intentional, not noisy.
              </p>
            </div>
            <div className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--accent)]/72">
              Hover to animate
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'FastAPI', 'Docker'].map((item, index) => (
              <span
                key={item}
                className={`rounded-full border px-3 py-1.5 text-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.03] ${index < 2 ? 'border-[var(--accent)]/30 bg-[var(--text)] text-[var(--page)] shadow-[0_12px_32px_rgba(0,0,0,0.18)]' : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)]/40'}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div> */}
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
      </section>

      <section className="space-y-6 py-8">
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
      </section>

      <section id="projects" className="space-y-6 py-8">
        <SectionHeading
          eyebrow=""
          title="Build Projects and Demos"
          // description="The project section stays in the same visual rhythm so it doesn't compete with the rest of the page."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {profile.projects.slice(0, 2).map((project, index) => (
            <CometBorder key={project.name} delay={index * -1}>
              <article className="group text-left transition duration-300 hover:-translate-y-1">
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

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
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
      </section>

      <section className="space-y-6 py-8">
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
      </section>

      <footer className="py-10 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}