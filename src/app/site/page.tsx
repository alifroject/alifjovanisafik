'use client';

import { LanguageShowcase } from "../../components/sections/Site";
import { useTransitionStore } from '../../components/store/transitionStore';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Site() {
  const show = useTransitionStore((s) => s.show);
  const hide = useTransitionStore((s) => s.hide);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    show("SITE");

    const timeout = setTimeout(() => {
      hide();
      setShowContent(true);
    }, 1200); // Wait longer for message animation

    return () => clearTimeout(timeout);
  }, [show, hide]);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {showContent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <LanguageShowcase />
        </motion.div>
      )}
    </div>
  );
}
