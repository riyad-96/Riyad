'use client';

import { useGlobalStore } from '@/store/global.store';
import scrollToSection from '@/utils/scrollToSection';
import { useEffect } from 'react';
import NavBtn from './NavBtn';

export default function Navigation() {
  const { scrolled, setScrolled, addWindowScrollListener } = useGlobalStore();

  useEffect(() => {
    const unsub = addWindowScrollListener(() => {
      setScrolled(window.scrollY > 50);
    });

    return unsub;
  }, [addWindowScrollListener, setScrolled]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex h-17.5 items-center border-b px-4 transition-colors duration-150 md:px-6 ${
        scrolled
          ? 'border-neutral-200 bg-white/90 backdrop-blur-sm'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl flex-1">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="relative transition-colors pointer-fine:hover:text-neutral-500"
          >
            <span className="absolute top-1/2 left-1/2 size-10 -translate-1/2"></span>
            R.
          </button>
          <nav className="flex">
            <NavBtn onClick={() => scrollToSection('about')}>About</NavBtn>
            <NavBtn onClick={() => scrollToSection('projects')}>
              Projects
            </NavBtn>
            <NavBtn onClick={() => scrollToSection('package')}>Package</NavBtn>
            <NavBtn onClick={() => scrollToSection('contact')}>Contact</NavBtn>
          </nav>
        </div>
      </div>
    </header>
  );
}
