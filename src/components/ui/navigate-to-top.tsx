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
  }, []);

  return (
    <button
      onClick={() => scrollToSection('home')}
      className={`fixed right-4 bottom-4 z-10 grid size-9 place-items-center border bg-white mix-blend-difference transition-opacity duration-150 md:right-6 md:bottom-6 ${isShowingNavigateToTop ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <ChevronUp size="24" />
    </button>
  );
}
