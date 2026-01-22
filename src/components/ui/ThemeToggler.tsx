'use client';

import { useThemeStore } from '@/store/theme.store';
import { Sun, Moon } from 'lucide-react';
import { useEffect } from 'react';

export default function ThemeToggler({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { initTheme, theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <button
      onClick={(e) => {
        document.documentElement.style.setProperty(
          '--clip-x',
          `${e.clientX}px`,
        );
        document.documentElement.style.setProperty(
          '--clip-y',
          `${e.clientY}px`,
        );

        toggleTheme();
      }}
      className="relative grid size-6 items-center text-neutral-900 dark:text-neutral-100"
    >
      {children}
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
