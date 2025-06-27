"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
    galleryName: string;
}

const imageMap: Record<string, string[]> = {
    "Rest Full API": [
        "/restful.png",
        "/restfull2.png",
        "/http_metho.png",
        "/POST.png",
        "/GET.png",
        "/PUT.png",
        "/DELETE.png",
    ],
    "Webhook API": [
        "/webhook1.png",
        "/webhook2.png",
        "/webhook3.png",
        "/webhook4.png",
        "/webhook5.png",
        "/webhook6.png",
    ],
};

const ImagesSliding: React.FC<Props> = ({ galleryName }) => {
    const images = imageMap[galleryName] || [];
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setIsLoading(true);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsLoading(true);
    };

    if (images.length === 0) {
        return (
            <p className="text-center text-gray-600">
                No images available for this gallery.
            </p>
        );
    }

    return (
        <div className="relative w-full max-w-5xl mx-auto bg-gradient-to-tr from-blue-100 to-white p-4 rounded-lg shadow-lg">
            {/* Gambar utama */}
            <div className="relative h-[300px] md:h-[450px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        className="absolute w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, x: direction > 0 ? 150 : -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -150 : 150 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <motion.img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            className={`max-h-full max-w-full object-contain mx-auto transition-opacity duration-300 ${
                                isLoading ? "opacity-0" : "opacity-100"
                            }`}
                            onLoad={() => setIsLoading(false)}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Spinner loader */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

            {/* Tombol panah bawah gambar */}
            <div className="mt-4 flex justify-center items-center gap-4">
                <button
                    onClick={handlePrev}
                    className="bg-blue-600 hover:bg-blue-700 p-2 md:p-3 rounded-full shadow-lg transition"
                >
                    <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700 p-2 md:p-3 rounded-full shadow-lg transition"
                >
                    <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
            </div>

            {/* Footer info */}
            <div className="mt-2 text-center text-gray-700 text-sm font-medium drop-shadow-sm">
                Image {currentIndex + 1} out {images.length}
            </div>
        </div>
    );
};

export default ImagesSliding;
