import Image from 'next/image';
import { CometBorder } from '@/components/comet-border';
import type { Project } from '@/data/portfolio';

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <CometBorder delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden text-left">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-end bg-[linear-gradient(135deg,rgba(14,14,16,0.9),rgba(14,14,16,0.2))] p-5">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[var(--page)]/70">
                  Project preview
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--page)]/85">
                  Add a screenshot in public/projects and wire it through the project data.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex h-full flex-col pt-6">
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text)] transition duration-300 group-hover:tracking-tight">
            {project.name}
          </h3>
          <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">{project.description}</p>

          <ul className="mt-4 space-y-3 text-sm text-[var(--muted-strong)] sm:text-base">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
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
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--page)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
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
        </div>
      </article>
    </CometBorder>
  );
}
