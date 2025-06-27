"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface ImageSectionProps {
  imageUrl: string;
  altText: string;
  className?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  imageUrl,
  altText,
  className = "",
}) => {
  return (
    <section className={`relative w-full h-[1215px] max-[1000px]:h-auto ${className}`}>
      {/* Desktop view (≥1000px) */}
      <div className="flex max-[1000px]:hidden justify-center items-center h-full">
        <div className="relative h-[800px] w-[1752px] max-md:w-[90%]">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={imageUrl}
            className="object-contain h-full w-full"
            alt={altText}
          />
          <motion.img
            src="/python_pytorch2.png"
            alt="Sub Image"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              absolute top-[-7%] left-[18.2%] w-[63.5%] h-[109%] p-11 object-contain
              max-md:top-[-6%] max-md:left-[18%] max-md:w-[64%] max-md:h-[106%] max-md:p-6
            "
          />
        </div>
      </div>

      {/* View < 1000px: Text layout */}
      <div className="hidden max-[1000px]:flex flex-col gap-10 px-4 py-10 text-[16px] leading-relaxed font-medium font-sans mx-2">
        {/* First Row: Python */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">Python</h2>
          </div>
          <div className="sm:w-1/2 text-justify text-gray-700">
            <p>
              Python is a highly readable and versatile programming language,
              celebrated for its intuitive syntax and powerful libraries.
              It&apos;s widely used in web development, data analysis, and especially
              in AI and machine learning, where its simplicity accelerates innovation.
            </p>
          </div>
        </motion.div>

        {/* Second Row: PyTorch */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-6 sm:flex-row-reverse"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="sm:w-1/2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-red-600">PyTorch</h2>
          </div>
          <div className="sm:w-1/2 text-justify text-gray-700">
            <p>
              PyTorch, developed by Meta, is a leading deep learning framework
              known for its flexibility and dynamic computation graph. It empowers
              researchers and developers to build, train, and deploy neural networks
              with ease—particularly in areas like computer vision and natural language processing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
