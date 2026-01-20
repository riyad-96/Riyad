'use client';

import scrollToSection from '@/utils/scrollToSection';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type HeroButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  sectionName: string;
};

export default function HeroButton({
  sectionName,
  children,
  ...rest
}: HeroButtonType) {
  return (
    <button onClick={() => scrollToSection(sectionName)} {...rest}>
      {children}
    </button>
  );
}
