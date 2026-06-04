import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { profile } from '@/data/portfolio';

function sectionLink(href: string, label: string) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
    >
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">Portfolio</p>
          <p className="text-sm text-slate-200">{profile.name}</p>
        </div>
        <div className="hidden items-center gap-2 sm:flex">{profile.socials.map((link) => sectionLink(link.href, link.label))}</div>
      </header>

      <section className="relative isolate grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 shadow-glow" />
        <div className="absolute left-10 top-8 -z-10 h-56 w-56 animate-float rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-8 top-28 -z-10 h-72 w-72 animate-float rounded-full bg-amber-200/10 blur-3xl" />

        <div className="space-y-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Delhi-based AI / ML portfolio
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building sharp AI systems with a product-grade finish.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-200 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Contact me
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-white/5 to-amber-200/10 blur-2xl" />
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Profile</p>
                <h2 className="mt-2 font-[family-name:var(--font-heading)] text-2xl text-white">{profile.name}</h2>
              </div>
              <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-xs text-cyan-100">
                {profile.location}
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">{profile.about}</p>

            <div className="mt-6 grid gap-3">
              {profile.socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">{link.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="About"
            title="A portfolio built around measurable, useful work."
            description="This layout is designed to show your AI / ML skill set with clarity and taste. Replace the placeholder links in the data file and the site is ready to present your work professionally."
          />
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/70">What stands out</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>Clean, high-end visual direction.</li>
            <li>Resume-driven content blocks.</li>
            <li>Backend contact route included.</li>
            <li>Editable profile links and project URLs.</li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Core technologies across AI, data, and product delivery."
          description="Your resume already spans a strong applied stack. This section keeps it structured so recruiters can scan quickly without losing depth."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profile.skills.map((group) => (
            <div key={group.category} className="rounded-3xl border border-white/10 bg-slate-950/65 p-5 shadow-glow backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation for deep technical work."
            description="Your dual degree track and school background establish strong breadth and commitment."
          />
          <div className="mt-8 space-y-4">
            {profile.education.map((item) => (
              <div key={`${item.school}-${item.degree}`} className="rounded-3xl border border-white/10 bg-slate-950/65 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.school}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.place}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.degree}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Experience"
            title="Research and leadership experience that supports the work."
            description="These entries keep the story focused on practical ML delivery and team contribution."
          />
          <div className="mt-8 space-y-4">
            {profile.experience.map((item) => (
              <div key={`${item.title}-${item.organization}`} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.organization}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds, rewritten as a recruiter-friendly showcase."
          description="Each card emphasizes the problem, the technical approach, and the exact space where your own live or GitHub links can be inserted."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {profile.projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/70">{project.summary}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">Portfolio highlight</div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  GitHub link
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                >
                  Live demo slot
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="A ready-made backend endpoint for your portfolio form."
            description="The form posts to the backend route in this app. Later, you can connect it to email, a database, or your preferred hosting integration without changing the UI."
          />
          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-sm leading-7 text-slate-300">
            <p className="text-white">Editable placeholders included:</p>
            <ul className="mt-3 space-y-2">
              <li>GitHub profile URL</li>
              <li>LinkedIn profile URL</li>
              <li>Email address</li>
              <li>LeetCode handle</li>
              <li>Project repository and live demo links</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
