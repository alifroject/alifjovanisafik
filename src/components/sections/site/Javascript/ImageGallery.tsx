"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; // ⬅️ Add this at the top

// Dynamically import the image sliding component
const ImagesSliding = dynamic(() => import("./ImagesSliding"), { ssr: false });

export const ImageGallery: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedGallery, setSelectedGallery] = React.useState<string>("");

  const handleOpen = (galleryName: string) => {
    setSelectedGallery(galleryName);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedGallery("");
  };

  return (
    <section className="flex flex-col h-[50vh] justify-center items-center px-4 py-8 w-full bg-zinc-300 md:min-h-screen">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 md:mb-10 text-center">
        This is what I have experienced
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full max-w-4xl text-black">
        <button
          onClick={() => handleOpen("Rest Full API")}
          className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:bg-zinc-200 transition text-sm md:text-base"
        >
          Rest Full API with JavaScript
        </button>

        <button
          onClick={() => handleOpen("Webhook API")}
          className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:bg-zinc-200 transition text-sm md:text-base"
        >
          Webhook API with JavaScript & TypeScript
        </button>
      </div>

      {/* Modal with animation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
              key={selectedGallery}
              className="bg-white rounded-lg p-4 md:p-6 w-[90%] md:max-w-3xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={handleClose}
                className="absolute top-2 left-2 z-50 p-2 rounded-full bg-white hover:bg-blue-100 transition shadow"
              >
                <ArrowLeftIcon className="w-7 h-7 text-gray-700 hover:text-blue-600" />
              </button>

              {/* FIX: Tambahkan wrapper dengan tinggi minimum */}
              <div className="min-h-[400px] flex justify-center items-center">
                <ImagesSliding galleryName={selectedGallery} />
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
