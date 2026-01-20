import { create } from 'zustand';

type useGlobalStoreType = {
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  isShowingNavigateToTop: boolean;
  setIsShowingNavigateToTop: (isShowingNavigateToTop: boolean) => void;
  addWindowScrollListener: (callback: () => void) => () => void;
};

const useGlobalStore = create<useGlobalStoreType>((set) => ({
  scrolled: false,
  setScrolled: (scrolled) => {
    set(() => ({ scrolled }));
  },
  isShowingNavigateToTop: false,
  setIsShowingNavigateToTop: (isShowingNavigateToTop) => {
    set(() => ({ isShowingNavigateToTop }));
  },
  addWindowScrollListener: (callback) => {
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  },
}));

const isTouchDevice =
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches ||
    navigator.maxTouchPoints > 0) &&
  window.matchMedia('(hover: none)').matches;

export { useGlobalStore, isTouchDevice };
