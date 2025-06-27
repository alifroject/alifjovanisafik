'use client';

import AboutSection from "../../components/sections/about/About";
import { useTransitionStore } from '../../components/store/transitionStore';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Site() {
  const show = useTransitionStore((s) => s.show);
  const hide = useTransitionStore((s) => s.hide);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    show("ABOUT");

    const timeout = setTimeout(() => {
      hide();
      setShowContent(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [show, hide]);

  return (
    <div className="relative bg-white min-h-screen">
      {showContent && (
        <AboutSection />
      )}
    </div>
  );
}
