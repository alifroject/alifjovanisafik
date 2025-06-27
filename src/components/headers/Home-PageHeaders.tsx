'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Navigation } from '../navigates/Navigation'; // 🧠 Make sure this is correct
import { AnimatePresence } from "framer-motion";
export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = header.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      header.style.setProperty('--x', `${x}px`);
      header.style.setProperty('--y', `${y}px`);
    };

    header.addEventListener('mousemove', handleMouseMove);
    return () => header.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const Word = ({
    text,
    href,
    className = '',
  }: {
    text: string;
    href?: string;
    className?: string;
  }) => {
    const span = (
      <span className={`inline-block hover:text-gray-500 cursor-pointer ${className}`}>
        {text}
      </span>
    );

    return href ? (
      <Link href={href} passHref>
        <div className="no-underline">{span}</div>
      </Link>
    ) : (
      span
    );
  };

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [menuOpen]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);



  return (
    <div
      ref={headerRef}
      className="top-0 left-0 w-full px-4 py-6 z-50 font-[family-name:var(--font-geist-sans)] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1), transparent 60%)`,
          mixBlendMode: 'overlay',
        }}
      />

      <div className="flex justify-between items-center max-w-7xl mx-auto relative z-10 flex-wrap gap-y-2">
        {/* Logo Words */}
        <div className="flex gap-1 md:gap-2 flex-wrap">
          {['@Alif', 'Jovani', 'Safik'].map((word, i) => (
            <Word
              key={i}
              text={word}
              href="/"
              className="text-black text-base md:text-2xl tracking-wide px-2 md:px-3 py-1 md:py-2 bg-white rounded-md"
            />
          ))}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {[
            { label: 'Site', href: '/site' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map((item, index) => (
            <Word
              key={index}
              text={item.label}
              href={item.href}
              className="text-black text-base md:text-lg"
            />
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-200"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="block h-0.5 w-6 bg-black"></span>
            <span className="block h-0.5 w-6 bg-black"></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Navigation onClose={() => setMenuOpen(false)} />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
