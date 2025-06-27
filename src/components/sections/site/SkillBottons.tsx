'use client';
import React, { useState } from "react";
import { DocumentationContent } from "../site/childrens/Documentation";
import Link from "next/link";
import { LanguageCard } from "../site/childrens/LanguageCards";
import { motion, AnimatePresence } from "framer-motion";

export const SkillCategories: React.FC = () => {
  const [selected, setSelected] = useState<"skill" | "doc" | null>(null);

  const languages = [
    {
      name: "JavaScript + TypeScript",
      image1: "/javascript-logo.png",
      image2: "/typescript.png",
    },
    {
      name: "Python + Pytorch",
      image1: "/python.png",
      image2: "/pytorch.png",
    },
    {
      name: "React + Next.js",
      image1: "/react.png",
      image2: "/next.png",
    },
    {
      name: "Flutter + Firebase",
      image1: "/flutter.png",
      image2: "/firebase.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex gap-10 justify-center max-sm:flex-col max-sm:items-center">
        <AnimatedWaterButton
          label="EXPERIENCE"
          active={selected === "skill"}
          onClick={() => setSelected("skill")}
        />
        <AnimatedWaterButton
          label="CERTIFICATES"
          active={selected === "doc"}
          onClick={() => setSelected("doc")}
        />
      </div>

      <AnimatePresence mode="wait">
        {selected === "skill" && (
          <motion.div
            key="skill"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mt-8 w-full max-w-3xl mx-auto"
          >
            {languages.map((lang, index) => (
              <Link
                key={index}
                href={`/site/${lang.name.toLowerCase().replace(/[\s+]+/g, "-")}`}
                className="w-full"
              >
                <LanguageCard name={lang.name} image1={lang.image1} image2={lang.image2} />
              </Link>
            ))}
          </motion.div>
        )}

        {selected === "doc" && (
          <motion.div
            key="doc"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-3xl mx-auto mt-8"
          >
            <DocumentationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AnimatedWaterButton = ({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`group relative w-[250px] py-4 px-5 text-xl font-semibold border border-black rounded-[30px] overflow-hidden text-black transition-all duration-300 ${
        active ? "ring-4 ring-[#6CC3CD]" : ""
      }`}
    >
      <span className="absolute left-0 bottom-0 w-full h-full bg-[#6CC3CD] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-out rounded-[30px] z-0" />
      <span className="relative z-10 group-hover:animate-bounce transition-colors duration-300 w-full flex justify-center items-center">
        {label}
      </span>
    </motion.button>
  );
};
