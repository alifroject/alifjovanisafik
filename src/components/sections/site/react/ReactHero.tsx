"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const ReactHeroSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-0 space-y-12">
      {/* First row: JS text + image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        {/* JS Text */}
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-blue-400 font-bold text-4xl md:text-7xl">
            REACT
          </h1>
        </motion.div>

        {/* JS Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="/react.png"
            alt="React Hero"
            className="h-[250px] md:h-[350px] w-auto object-cover rounded-[50px] md:rounded-[87px]"
          />
        </motion.div>
      </div>

      {/* Second row: TS text + image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* TS Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            src="/nextjs.png"
            alt="next js Hero"
            className="h-[180px] md:h-[250px] w-auto object-contain rounded-[40px] md:rounded-[60px]"
          />
        </motion.div>

        {/* TS Text */}
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-black font-bold text-4xl md:text-7xl">
            Next.js
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
