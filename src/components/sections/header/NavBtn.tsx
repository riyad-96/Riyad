'use client';

import { useEffect, useState } from 'react';

type NavLinkProps = {
  onClick: () => void;
  children: string;
};

export default function NavBtn({ onClick, children }: NavLinkProps) {
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
      className="font-geist-mono px-2 py-1 text-xs transition-colors md:px-3.5 md:text-sm pointer-fine:hover:text-neutral-500"
    >
      {displayText}
    </button>
  );
}
