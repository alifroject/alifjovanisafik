"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  imageUrl: string;
  link?: string; // optional external link
}

const steps: Step[] = [
  {
    title: "Step 1: Importing Libraries",
    description:
      "This section imports all necessary libraries: torch and timm for loading and running the pretrained model, PIL for image processing, requests for fetching label names, and Colab-specific tools to handle file uploads.",
    imageUrl: "/torch1.png",
  },
  {
    title: "Step 2: Load Pretrained Model",
    description:
      "We load a pretrained MobileNetV3-Large model from the TIMM library, which has been trained on the ImageNet dataset. The .eval() method puts the model into inference mode so it can make predictions.",
    imageUrl: "/torch2.png",

  },
  {
    title: "Step 3: Load Class Labels",
    description:
      "This part fetches 1,000 human-readable ImageNet class labels from GitHub, allowing us to map model outputs to meaningful category names like “banana” or “airplane”.",
    imageUrl: "/torch3.png",
    link: "https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt",
  },
  {
    title: "Step 4:  Upload Image",
    description:
      "Using Google Colab’s upload interface, this code allows you to select and upload an image file, then opens and converts it to RGB format for compatibility with the model.",
    imageUrl: "/torch4.png",
  },
  {
    title: "Step 5:  Preprocess the Image",
    description:
      "Here we apply the same preprocessing steps the model expects — such as resizing, normalization, and tensor conversion — and add a batch dimension so the model can process the input.",
    imageUrl: "/torch5.png",
  },
  {
    title: "Step 6:  Predict with the Model",
    description:
      "We perform inference using the model without calculating gradients to save memory, then apply the softmax function to convert raw scores into probabilities for each class.",
    imageUrl: "/torch6.png",
  },
  {
    title: "Step 7:  Display Top-5 Predictions",
    description:
      "This final part selects the five most likely classes predicted by the model and prints each label with its corresponding probability, giving an easy-to-understand output of the model's top guesses.",
    imageUrl: "/torch7.png",
  },
];
const slides = [
  {
    image: "/torch8.png",
    description: "Running the code and uploading the image",
    size: "w-[80%] h-[60%]",
  },
  {
    image: "/torch9.png",
    description: "Choose image named unknown_image",
    size: "w-[70%] h-[50%]",
  },
  {
    image: "/torch10.png",
    description: "Showing top 5 predictions of the image",
    size: "w-[90%] h-[70%]",
  },
  {
    image: "/unknown_image.jpg",
    description: "The image is an eagle",
    size: "w-[75%] h-[55%]",
  },
];

export default function ImageClassificationPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll listener to track center index
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const slideWidth = window.innerWidth;
      const index = Math.round(scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800  space-y-20 scroll-smooth">
      {/* Title and Intro */}
      <motion.section
        className="max-w-6xl mx-auto m-5 text-center px-4 md:px-6 py-16 bg-gradient-to-b from-white to-blue-50   space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: false }}
        >
          Image Classification with MobileNetV3
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base md:text-xl text-gray-800 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
        >
          This project uses the{' '}
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-700 font-semibold">timm</code>{' '}
          library with PyTorch to load a pretrained MobileNetV3 model. Upload your own images and see the top 5 predicted classes in real time.
        </motion.p>

        {/* Sub-description */}
        <motion.p
          className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false }}
        >
          An excellent starting point for fast experimentation with modern vision models using state-of-the-art tools.
        </motion.p>

        {/* Image + Hover Overlay */}
        <motion.div
          className="relative group max-w-sm md:max-w-md mx-auto mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
        >
          <img
            src="/urlClassfication.png"
            alt="MobileNetV3 Preview"
            className="w-full rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300"
          />
          <a
            href="https://huggingface.co/spaces/Alifjo123/image-classifier-cnn"
            className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <span className="bg-white text-blue-800 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition">
              Try this model →
            </span>
          </a>
        </motion.div>

        {/* Center Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          viewport={{ once: false }}
        >
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition duration-300">
            Click the Image
          </button>
        </motion.div>

        {/* Warning Text */}
        <motion.p
          className="text-xs md:text-sm text-gray-500 italic mt-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: false }}
        >
          ⚠️ Note: This model is a prototype and may not always produce accurate predictions.
          For improved precision, additional training with more data is recommended.
        </motion.p>
      </motion.section>



      {/* Steps */}
     <section className="space-y-20 md:space-y-28 px-4 md:px-8">
  {steps.map((step, index) => {
    const isEven = index % 2 === 0;
    const motionDirection = isEven ? { x: -100 } : { x: 100 };

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, ...motionDirection }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // ← Animate every time
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={step.imageUrl}
            alt={step.title}
            className="rounded-xl shadow-md object-cover w-full max-h-[300px] md:max-h-[400px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-3 md:space-y-5 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800">
            {step.title}
          </h2>

          {step.link ? (
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-blue-600 hover:underline inline-block"
            >
              {step.description}
            </a>
          ) : (
            <p className="text-base md:text-lg text-gray-700">
              {step.description}
            </p>
          )}
        </div>
      </motion.div>
    );
  })}
</section>

      <section className="w-screen h-screen relative overflow-hidden bg-black text-white">
        <h2 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-bold text-white z-10 text-center drop-shadow-lg">
          Related Concepts Showcase
        </h2>

        <div
          id="fullSlider"
          ref={sliderRef}
          className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {slides.map((item, i) => (
            <div
              key={i}
              className={`w-screen h-screen flex items-center justify-center snap-center flex-shrink-0 transition-transform duration-700
          ${i === activeIndex ? "scale-100 opacity-100 z-10" : "scale-90 opacity-50"}
        `}
            >
              <div className="bg-gray-900 border border-white/20 shadow-2xl rounded-2xl p-6 w-[80%] max-w-[700px] h-[75%] flex flex-col items-center justify-between transition-all duration-500">
                <div className="w-full h-[70%] flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={`Slide ${i}`}
                    className="object-contain w-full h-full rounded-xl transition-all duration-500"
                  />
                </div>
                <div className="mt-4 text-center px-4">
                  <p className="text-base md:text-lg text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-6">
          <button
            onClick={() => {
              if (sliderRef.current)
                sliderRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
            }}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-4 py-3 rounded-full shadow-xl transition duration-300 hover:scale-110"
          >
            ◀
          </button>
          <button
            onClick={() => {
              if (sliderRef.current)
                sliderRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
            }}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-4 py-3 rounded-full shadow-xl transition duration-300 hover:scale-110"
          >
            ▶
          </button>
        </div>
      </section>

    </div>
  );
}
