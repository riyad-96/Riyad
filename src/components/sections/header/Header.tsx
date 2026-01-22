'use client';

import { useGlobalStore } from '@/store/global.store';
import scrollToSection from '@/utils/scrollToSection';
import { useEffect } from 'react';
import NavBtn from './NavBtn';
import ThemeToggler from '@/components/ui/ThemeToggler';

export default function Header() {
  const { scrolled, setScrolled, addWindowScrollListener } = useGlobalStore();

  useEffect(() => {
    const unsub = addWindowScrollListener(() => {
      setScrolled(window.scrollY > 50);
    });

    return unsub;
  }, [addWindowScrollListener, setScrolled]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex h-17.5 items-center border-b bg-white/90 px-4 backdrop-blur-sm duration-150 md:px-6 dark:bg-black/90 ${
        scrolled
          ? 'border-neutral-200 dark:border-neutral-800'
          : 'border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl flex-1">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="relative md:text-lg pointer-fine:hover:text-neutral-600 dark:pointer-fine:hover:text-neutral-300"
          >
            <span className="absolute top-1/2 left-1/2 size-10 -translate-1/2"></span>
            R.
          </button>

          <div className="flex items-center gap-2">
            <ThemeToggler />

            <nav className="flex">
              <NavBtn text="about" onClick={() => scrollToSection('about')} />
              <NavBtn
                text="projects"
                onClick={() => scrollToSection('projects')}
              />
              <NavBtn
                text="package"
                onClick={() => scrollToSection('package')}
              />
              <NavBtn
                text="contact"
                onClick={() => scrollToSection('contact')}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
