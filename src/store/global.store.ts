import { create } from 'zustand';

type followingCursorStylesType = {
  width?: number;
  height?: number;
  background: 'white' | 'trnsparent' | string;
  scale: number;
};

type useGlobalStoreType = {
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  isShowingNavigateToTop: boolean;
  setIsShowingNavigateToTop: (isShowingNavigateToTop: boolean) => void;
  addWindowScrollListener: (callback: () => void) => () => void;
  followingCursorStyles: followingCursorStylesType;
  setFollowingCursorStyles: (styles: followingCursorStylesType) => void;
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
  followingCursorStyles: {
    width: 60,
    height: 60,
    background: 'transparent',
    scale: 1,
  },
  setFollowingCursorStyles: (styles) => {
    set(() => ({ followingCursorStyles: styles }));
  },
}));

const isTouchDevice =
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches ||
    navigator.maxTouchPoints > 0) &&
  window.matchMedia('(hover: none)').matches;

const defaultFollowingCursorStyles =
  useGlobalStore.getState().followingCursorStyles;

const setFollowingCursorStyles = (styles: followingCursorStylesType) => {
  useGlobalStore.setState({ followingCursorStyles: styles });
};

export {
  useGlobalStore,
  setFollowingCursorStyles,
  isTouchDevice,
  defaultFollowingCursorStyles,
};
