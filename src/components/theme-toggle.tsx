'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const storageKey = 'portfolio-theme';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const preferredTheme: Theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    setTheme(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/60"
      aria-label="Toggle theme"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}