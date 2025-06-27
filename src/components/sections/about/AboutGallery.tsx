'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

const items = [
  { id: 1, title: 'Elevate Your Energy', description: 'An enthusiastic student driven by passion and purpose.', image: '/me1.jpg' },
  { id: 2, title: 'Coffee Inspires Vibes', description: 'Studying in the AI era provides access to powerful and innovative tools.', image: '/me3.jpg' },
  { id: 3, title: 'Capture with a Smile', description: 'Pursuing knowledge is a meaningful and fulfilling journey.', image: '/me4.jpg' },
  { id: 4, title: 'The Sky Is Beautiful to See', description: 'Looking at the sky brings a sense of calm and peace.', image: '/me5.jpg' },
  { id: 5, title: 'Complex Tree', description: 'Studying while embracing complexity is a valuable approach to learning.', image: '/me6.jpg' },
  { id: 6, title: 'Waving Leaves', description: 'Getting surrounded by nice people is my favorite thing.', image: '/me7.jpg' },
];

export default function AboutGallery() {
  const [selected, setSelected] = useState<null | typeof items[0]>(null);

  return (
    <div className="px-6 py-12 w-full max-w-7xl mx-auto">

      {/* Responsive Grid (only affects md and below) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => {
          let positionClass = 'md:relative'; // prevent positioning on larger screens
          let initial = {};
          let animate = {};
          let transition = {
            type: 'spring',
            stiffness: 70,
            damping: 18,
            delay: item.id * 0.1,
          };

          // Only apply layout animation for md and below (affects performance above md)
          if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            switch (item.id) {
              case 1:
                initial = { opacity: 0, x: -80 };
                animate = { opacity: 1, x: 0 };
                break;
              case 2:
                initial = { opacity: 0, scale: 0.95 };
                animate = { opacity: 1, scale: 1 };
                break;
              case 3:
                initial = { opacity: 0, x: 80 };
                animate = { opacity: 1, x: 0 };
                break;
              case 4:
                initial = { opacity: 0, y: 80 };
                animate = { opacity: 1, y: 0 };
                break;
              case 5:
                initial = { opacity: 0, y: -80 };
                animate = { opacity: 1, y: 0 };
                break;
            }
          }

          return (
            <motion.div
              key={item.id}
              className={`overflow-hidden cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out ${positionClass}`}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true }}
              transition={transition}
              onClick={() => setSelected(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover w-full h-48 md:h-60"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl text-black mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal for image preview */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-xl">
            {selected && (
              <>
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="p-6">
                  <Dialog.Title className="text-2xl text-black font-bold mb-2">{selected.title}</Dialog.Title>
                  <p className="text-gray-700">{selected.description}</p>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Text section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center mb-4">
            <span className="text-blue-500 text-xl mr-2">•</span>
            <h4 className="text-2xl text-black font-semibold">Inspiration Behind the Journey</h4>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            As a Computer Science student passionate about AI and web development, each step in this project reflects more than just coding — it captures growth, curiosity, and purpose. This café app idea came from real-world needs and the desire to build something meaningful, blending technology with daily life experiences.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <span className="text-blue-500 text-xl mr-2">•</span>
            <h4 className="text-2xl text-black font-semibold">Capturing Emotions Through Lens</h4>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Every image in this gallery is part of my academic and creative journey — from late-night debugging to peaceful moments outdoors. They reflect the balance between logic and emotion, between code and creativity. This collection represents how I see the world while building in it.
          </p>
        </div>
      </div>
    </div>
  );
}
