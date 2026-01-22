import { create } from 'zustand';

type Theme = 'light' | 'dark';

type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
  initTheme: () => void;
};

const store = create<ThemeStore>((set, get) => ({
  theme: 'light',
  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark';
    set({ theme: next });
    document.cookie = `theme=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    localStorage.setItem('theme', next);
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduced)',
    ).matches;
    if (reducedMotion) {
      document.documentElement.classList.toggle('dark', next === 'dark');
      return;
    }
    document.startViewTransition(() => {
      document.documentElement.classList.toggle('dark', next === 'dark');
    });
  },
  initTheme: () => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      set({ theme: prefersDark ? 'dark' : 'light' });
      return;
    }
    set({ theme: saved === 'dark' ? 'dark' : 'light' });
  },
}));

export const useThemeStore = store;
export const themeStore = store.getState;
