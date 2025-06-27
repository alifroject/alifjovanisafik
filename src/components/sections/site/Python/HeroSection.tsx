"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();

  // Transform scroll position to horizontal movement
  const pythonX = useTransform(scrollY, [0, 300], [0, -150]);
  const pytorchX = useTransform(scrollY, [0, 300], [0, 150]);

  // Smooth animation using spring
  const smoothPythonX = useSpring(pythonX, { stiffness: 100, damping: 20 });
  const smoothPytorchX = useSpring(pytorchX, { stiffness: 100, damping: 20 });

  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden px-4">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
        {/* Python */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ x: smoothPythonX }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left"
        >
          <img
            src="/python.png"
            alt="Python Logo"
            className="w-28 h-28 md:w-40 md:h-40"
          />
          <span className="text-4xl md:text-7xl font-extrabold text-blue-400">
            Python
          </span>
        </motion.div>

        {/* PyTorch */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          style={{ x: smoothPytorchX }}
          className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6 text-center md:text-right"
        >
          <span className="text-4xl md:text-7xl font-extrabold text-orange-500">
            PyTorch
          </span>
          <img
            src="/pytorch.png"
            alt="PyTorch Logo"
            className="w-28 h-28 md:w-40 md:h-40"
          />
        </motion.div>
      </div>
    </section>
  );
};
