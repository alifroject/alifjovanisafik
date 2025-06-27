"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export const FlutterHeroSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-12 space-y-16 md:py-20 md:space-y-24">
      {/* First row: Flutter text + image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        {/* Flutter Text */}
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-blue-600 font-bold text-4xl sm:text-5xl md:text-7xl">
            Flutter
          </h1>
        </motion.div>

        {/* Flutter Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Image
            src="/flutter.png"
            alt="Flutter Hero"
            className="h-[160px] sm:h-[180px] md:h-[250px] w-auto object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[87px]"
          />
        </motion.div>
      </div>

      {/* Second row: Firebase image + text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Firebase Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Image
            src="/firebase.png"
            alt="Firebase Hero"
            className="h-[160px] sm:h-[180px] md:h-[250px] w-auto object-contain rounded-[30px] sm:rounded-[40px] md:rounded-[60px]"
          />
        </motion.div>

        {/* Firebase Text */}
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-red-600 font-bold text-4xl sm:text-5xl md:text-7xl">
            Firebase
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
