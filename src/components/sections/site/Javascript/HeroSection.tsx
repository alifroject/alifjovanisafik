"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-10 md:py-20 space-y-16 md:space-y-24">
      {/* First row: JS text + image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* JS Text */}
        <motion.div
          className="w-full md:w-1/2 text-center px-2 md:px-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-yellow-400 font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
            JAVASCRIPT
          </h1>

        </motion.div>

        {/* JS Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center px-2 md:px-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="/javascript-logo.png"
            alt="JavaScript Hero"
            className="h-[140px] sm:h-[180px] md:h-[250px] w-auto object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[87px]"
          />
        </motion.div>
      </div>

      {/* Second row: TS text + image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* TS Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center px-2 md:px-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="/typescript.png"
            alt="TypeScript Hero"
            className="h-[140px] sm:h-[180px] md:h-[250px] w-auto object-contain rounded-[30px] sm:rounded-[40px] md:rounded-[60px]"
          />
        </motion.div>

        {/* TS Text */}
        <motion.div
          className="w-full md:w-1/2 text-center px-2 md:px-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-blue-500 font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
            TYPESCRIPT
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
