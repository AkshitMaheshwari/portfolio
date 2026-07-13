import Link from 'next/link';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollReveal } from '@/components/scroll-reveal';
import { CometBorder } from '@/components/comet-border';

export const metadata: Metadata = {
  title: 'Blogs | Akshit Maheshwari',
  description: 'Notes, writeups, and technical reflections by Akshit Maheshwari.'
};

const blogPosts = [
  {
    title: 'Building a real-time store intelligence pipeline with YOLOv8 and FastAPI',
    excerpt:
      'How I think about live computer vision systems for retail: tracking movement, separating staff from customers, and turning raw frames into useful business signals.',
    date: 'July 2026',
    readTime: '6 min read',
    tag: 'Computer Vision'
  },
  {
    title: 'From retrieval to ranking: making AI systems measurable',
    excerpt:
      'A practical approach to evaluation, where every step in the pipeline is tied back to something you can inspect, compare, and improve.',
    date: 'June 2026',
    readTime: '5 min read',
    tag: 'AI Systems'
  },
  {
    title: 'Why clean UI matters in technical portfolios',
    excerpt:
      'A short note on why the best technical work still needs a clear presentation layer, especially when you want people to trust the system quickly.',
    date: 'May 2026',
    readTime: '4 min read',
    tag: 'Design'
  }
];

export default function BlogsPage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
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
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--surface)] hover:text-[var(--text)]"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="rounded-full bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--text)] transition duration-200"
          >
            Blogs
          </Link>
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

      <section className="py-10">
        <ScrollReveal className="space-y-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.45em] text-[var(--accent)]/65">
            Blogs
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Notes, experiments, and technical writeups.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
            Short posts on computer vision, AI systems, product thinking, and the small decisions that make technical work easier to trust.
          </p>
        </ScrollReveal>
      </section>

      <section className="space-y-6 pb-20">
        <ScrollReveal>
          <CometBorder>
            <div className="space-y-4 text-left">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.36em] text-[var(--accent)]/65">
                Featured post
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                How I built a real-time store intelligence system
              </h2>
              <p className="max-w-4xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg">
                A walkthrough of Vision-Store: customer tracking, queue monitoring, zone-level movement analysis, and instant business intelligence with YOLOv8, FastAPI, OpenCV, and Docker.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">Computer Vision</span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">FastAPI</span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">YOLOv8</span>
              </div>
            </div>
          </CometBorder>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 50}>
              <CometBorder>
                <article className="flex h-full flex-col text-left">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]">
                      {post.tag}
                    </span>
                    <span className="text-xs font-medium text-[var(--muted)]">{post.readTime}</span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[var(--text)]">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                    {post.date}
                  </p>
                </article>
              </CometBorder>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}