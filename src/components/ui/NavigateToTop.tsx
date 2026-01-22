'use client';

import { useGlobalStore } from '@/store/global.store';
import scrollToSection from '@/utils/scrollToSection';
import { ChevronUp } from 'lucide-react';
import { useEffect } from 'react';

export default function NavigateToTop() {
  const {
    isShowingNavigateToTop,
    addWindowScrollListener,
    setIsShowingNavigateToTop,
  } = useGlobalStore();

  useEffect(() => {
    const unsub = addWindowScrollListener(() => {
      setIsShowingNavigateToTop(window.scrollY > 300);
    });

    return unsub;
  }, [addWindowScrollListener, setIsShowingNavigateToTop]);

  return (
    <button
      onClick={() => scrollToSection('home')}
      className={`group fixed right-4 bottom-4 z-50 flex size-9 origin-bottom-right items-center justify-center bg-white mix-blend-difference transition-[scale,opacity] duration-200 md:right-6 md:bottom-6 md:h-10 md:w-10 dark:text-black ${isShowingNavigateToTop ? 'scale-100 opacity-100' : 'pointer-events-none scale-50 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  );
}
