import scrollToSection from '@/utils/scrollToSection';
import NavBtn from './NavBtn';
import ThemeToggler from '@/components/ui/ThemeToggler';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MobileMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    function closeMenu(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('.dropdown-btn')) return;
      if (target.closest('.dropdown-menu')) return;
      setIsDropdownOpen(false);
    }

    document.addEventListener('click', closeMenu);
    document.addEventListener('mousedown', closeMenu);
    document.addEventListener('touchstart', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('mousedown', closeMenu);
      document.removeEventListener('touchstart', closeMenu);
    };
  }, []);

  return (
    <header className="fixed top-4 right-4 z-50 border border-neutral-300 bg-white py-2 sm:hidden dark:border-neutral-700 dark:bg-black">
      <div className="flex items-center gap-6 px-3">
        <button
          onClick={() => scrollToSection('home')}
          className="relative grid size-6 place-items-center text-neutral-700 md:text-lg dark:text-neutral-300 pointer-fine:hover:text-neutral-600 dark:pointer-fine:hover:text-neutral-300"
        >
          <span className="absolute -inset-2 z-5" />
          <span>R.</span>
        </button>

        <ThemeToggler>
          <span className="absolute -inset-2 z-5" />
        </ThemeToggler>

        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="dropdown-btn relative grid size-6 place-items-center"
        >
          <span className="absolute -inset-2 z-5" />
          {isDropdownOpen ? (
            <span>
              <X size="18" />
            </span>
          ) : (
            <span>
              <Menu size="18" />
            </span>
          )}
        </button>
      </div>

      <nav
        className={`dropdown-menu absolute top-1/1 right-0 grid origin-top-right border border-t border-neutral-300 transition-[scale,opacity] bg-white py-2 dark:border-neutral-700 ${isDropdownOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-80 opacity-0'}`}
      >
        <NavBtn
          className="flex justify-end px-4 py-1 text-sm uppercase"
          text="about"
          onClick={() => {
            setIsDropdownOpen(false);
            scrollToSection('about');
          }}
        />
        <NavBtn
          className="flex justify-end px-4 py-1 text-sm uppercase"
          text="projects"
          onClick={() => {
            setIsDropdownOpen(false);
            scrollToSection('projects');
          }}
        />
        <NavBtn
          className="flex justify-end px-4 py-1 text-sm uppercase"
          text="package"
          onClick={() => {
            setIsDropdownOpen(false);
            scrollToSection('package');
          }}
        />
        <NavBtn
          className="flex justify-end px-4 py-1 text-sm uppercase"
          text="contact"
          onClick={() => {
            setIsDropdownOpen(false);
            scrollToSection('contact');
          }}
        />
      </nav>
    </header>
  );
}
