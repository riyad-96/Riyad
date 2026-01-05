import { useGlobalStore } from '@/store/global.store';
import scrollToSection from '@/utils/scrollToSection';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { scrolled, setScrolled, addWindowScrollListener } = useGlobalStore();

  useEffect(() => {
    const unsub = addWindowScrollListener(() => {
      setScrolled(window.scrollY > 50);
    });

    return unsub;
  }, []);

  return (
    <nav
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
            className="relative transition-colors hover:text-neutral-500"
          >
            <span className="absolute top-1/2 left-1/2 size-10 -translate-1/2"></span>
            R.
          </button>
          <div className="flex">
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>
              Projects
            </NavLink>
            <NavLink onClick={() => scrollToSection('package')}>
              Package
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

type NavLinkProps = {
  onClick: () => void;
  children: string;
};

function NavLink({ onClick, children }: NavLinkProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      (() => {
        setDisplayText(children);
      })();
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(() =>
        children
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return children[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(''),
      );

      if (iteration >= children.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, children]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="px-2.5 py-1 font-mono text-sm transition-colors hover:text-neutral-500 md:px-3.5"
    >
      {displayText}
    </button>
  );
}
