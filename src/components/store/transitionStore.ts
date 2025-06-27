// components/store/transitionStore.ts
import { create } from 'zustand';

export interface TransitionState {
  isShowing: boolean;
  message: string;
  show: (message?: string) => void;
  hide: () => void;
}

export const useTransitionStore = create<TransitionState>((set) => ({
  isShowing: false,
  message: '',
  show: (message = 'Loading...') => set({ isShowing: true, message }),
  hide: () => set({ isShowing: false, message: '' }),
}));
