interface CometBorderProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function CometBorder({ children, className = '', delay = 0 }: CometBorderProps) {
  return (
    <div
      className={`comet-border group h-full w-full ${className}`}
      style={{ '--comet-delay': `${delay}s` } as React.CSSProperties}
    >
      <div className="comet-border-inner p-6 sm:p-7">
        {children}
      </div>
    </div>
  );
}
