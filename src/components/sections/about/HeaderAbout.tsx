'use client';

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export const HeaderAbout: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <motion.header
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 40 }}
      className="flex flex-col items-center text-left w-full px-6 md:px-12"
    >
      <h1 className="text-4xl md:text-6xl leading-snug text-black text-left mx-auto">
        <span className="block">I am ready for a real journey</span>
        <span className="block">See about me</span>
      </h1>

      <div className="w-full flex justify-center relative h-[140px] mt-4">
       

        <div className="absolute top-1/2 md:m[50%] w-full md:w-[50%] h-[1px] bg-black/50 z-0" />
      </div>
    </motion.header>
  );
};
