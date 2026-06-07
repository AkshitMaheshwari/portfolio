type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl text-left">
      {eyebrow ? (
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.48em] text-[var(--accent)]/72">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[2rem] font-semibold tracking-tight text-[var(--text)] sm:text-[2.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
