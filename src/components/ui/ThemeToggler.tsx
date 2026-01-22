'use client';

import { useThemeStore } from '@/store/theme.store';
import { Sun, Moon } from 'lucide-react';
import { useEffect } from 'react';

export default function ThemeToggler() {
  const { initTheme, theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <button
      onClick={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const x = target.offsetLeft + target.offsetWidth / 2;
        const y = target.offsetTop + target.offsetHeight / 2;
        document.documentElement.style.setProperty('--clip-x', `${x}px`);
        document.documentElement.style.setProperty('--clip-y', `${y}px`);

        toggleTheme();
      }}
      className="relative grid size-6 items-center text-neutral-700 dark:text-neutral-200"
    >
      {theme === 'dark' ? (
        <span className="absolute grid size-full place-items-center">
          <Sun size="14" />
        </span>
      ) : (
        <span className="absolute grid size-full place-items-center">
          <Moon size="14" />
        </span>
      )}
    </button>
  );
}
