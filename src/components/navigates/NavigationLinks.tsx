'use client';

import { useRouter } from 'next/navigation'; // ✅ correct for App Router
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const NavigationLinks = ({ onClose }: { onClose: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const router = useRouter(); // ✅ standard router

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const links = [
    { name: 'Site', href: '/site' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <ul className="flex flex-col gap-20 max-md:gap-16 max-sm:gap-10">
      {links.map((link) => (
        <motion.li
          key={link.name}
          className="relative cursor-pointer"
          animate={{
            x:
              activeLink === link.name
                ? (mousePosition.x - window.innerWidth / 2) * 0.03
                : 0,
            y:
              activeLink === link.name
                ? (mousePosition.y - window.innerHeight / 2) * 0.03
                : 0
          }}
          onMouseEnter={() => setActiveLink(link.name)}
          onMouseLeave={() => setActiveLink(null)}
          onClick={() => {
            onClose();
            router.push(link.href); // ✅ native Next.js navigation
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
        >
          <span className="text-[40px] font-medium">{link.name}</span>
        </motion.li>
      ))}
    </ul>
  );
};
