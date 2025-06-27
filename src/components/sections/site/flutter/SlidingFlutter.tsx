"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
const phoneSlides = [
  {
    image: "/due1.png",
    description: "Displays the homepage with a coffee shop menu.",
  },
  {
    image: "/due2.png",
    description: "Allows users to edit their personal information.",
  },
  {
    image: "/due3.jpg",
    description: "Shows a café menu including food items.",
  },
  {
    image: "/due11.jpg",
    description: "Tracks user location and distance to the café.",
  },
  {
    image: "/due5.png",
    description: "Displays the cart; access requires proximity to the café.",
  },
  {
    image: "/due6.png",
    description: "Demonstrates payment using Xendit.",
  },
  {
    image: "/due7.png",
    description: "Displays payment status.",
  },
  {
    image: "/due8.png",
    description: "Tracks ongoing orders.",
  },
  {
    image: "/due9.jpg",
    description: "Shows order history.",
  },
  {
    image: "/due10.jpg",
    description: "Filters order history by date.",
  },
];


const getSlidesWithClones = () => {
  const first = phoneSlides[0];
  const last = phoneSlides[phoneSlides.length - 1];
  return [last, ...phoneSlides, first];
};

export const SlidingPhoneShowcase: React.FC = () => {
  const slidesWithClones = getSlidesWithClones();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const totalSlides = phoneSlides.length;

  const goToSlide = (index: number) => {
    if (isLocked) return;
    setIsLocked(true);
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleNext = () => goToSlide(currentIndex + 1);
  const handlePrev = () => goToSlide(currentIndex - 1);

  const handleTransitionEnd = () => {
    setIsLocked(false);
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-12 max-w-7xl mx-auto">

        {/* Description (mobile: top) */}
        <div className="text-center md:text-left max-w-md mb-6 md:mb-0">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-4">
            My school project
          </h2>
          <p className="text-sm bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 px-4 py-2 rounded-md mb-4 flex items-start gap-2">
            <span className="mt-0.5">⚠️</span>
            <span>This project is intended for educational purposes only and not for real business use.</span>
          </p>

          <p className="text-gray-600 text-sm md:text-lg transition-opacity duration-500 ease-in-out">
            {phoneSlides[(currentIndex - 1 + totalSlides) % totalSlides].description}
          </p>
        </div>

        {/* Buttons & Phone Image */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={isLocked}
            className={`text-blue-800 bg-white rounded-full shadow-md p-3 transition ${isLocked ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"
              }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Sliding Phone */}
          <div className="relative overflow-hidden w-[280px] h-[560px] md:w-[430px] md:h-[880px]">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
                }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slidesWithClones.map((slide, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-[280px] h-[560px] md:w-[430px] md:h-[880px]"
                >
                  <div className="absolute top-[9.2%] left-[12%] w-[76%] h-[81.5%] z-0 rounded-[2rem] overflow-hidden">
                    <Image src={slide.image} alt={`Slide ${index}`} fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <Image src="/iphone.jpg" alt="iPhone Frame" fill className="object-cover" priority />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isLocked}
            className={`text-blue-800 bg-white rounded-full shadow-md p-3 transition ${isLocked ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"
              }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>

  );
};

export default SlidingPhoneShowcase;
