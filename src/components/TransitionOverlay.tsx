'use client';

import { useTransitionStore } from '../components/store/transitionStore';
import { motion, AnimatePresence } from 'framer-motion';

export const TransitionOverlay = () => {
  const { isShowing, message } = useTransitionStore();

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white text-2xl"
          initial={{ y: '100%', opacity: 1 }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            y: { duration: 0.6, ease: 'easeInOut' },
            opacity: { delay: 0.5, duration: 0.4 },
          }}
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide text-white font-[Poppins] text-center"
          >
            <p className="text-3xl md:text-5xl text-neutral-100 font-light tracking-[0.05em]">
              {message}
            </p>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
