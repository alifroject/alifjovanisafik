// utils/navigateWithTransition.ts
'use client';

import { useRouter } from 'next/navigation';
import { useTransitionStore, TransitionState } from '../store/transitionStore';

export const useNavigateWithTransition = () => {
  const router = useRouter();

  const show = useTransitionStore((s: TransitionState) => s.show);
  const hide = useTransitionStore((s: TransitionState) => s.hide);

  return (url: string, message: string = "Going to site...") => {
    show(message);
    setTimeout(() => {
      hide();
      router.push(url);
    }, 800);
  };
};
