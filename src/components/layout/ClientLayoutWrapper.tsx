'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Navigation } from '../navigates/Navigation';
import { Header } from '../headers/Home-PageHeaders';
import { AnimatePresence } from "framer-motion";
export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      const goingUp = scrollY < lastScrollY;

      // Toggle menu button based on scroll direction
      if (scrollY > 100 && !goingUp) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
      }

      lastScrollY = scrollY;
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (isSidebarOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isSidebarOpen]);



  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header */}
      <div className="relative bg-white z-50">
        <Header />
      </div>

      {/* Menu Button */}
      {showMenuButton && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, -6, 6, 0],
            transition: { duration: 0.6 },
          }}
          className="fixed top-6 right-4 z-30"
        >
          <button
            className="text-white bg-black bg-opacity-70 p-2 rounded-full shadow-lg backdrop-blur-md"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt2 size={28} />
          </button>
        </motion.div>
      )}
      <AnimatePresence>

        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <Navigation onClose={() => setIsSidebarOpen(false)} />
          </div>
        )}

      </AnimatePresence>




      {children}
    </div>
  );
}