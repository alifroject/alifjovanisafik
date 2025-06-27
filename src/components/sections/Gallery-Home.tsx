'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const imagesLeft = [
    "/flutter.png",
    "/firebase.png",
    "/javascript-logo.png",
    "/python.png",
    "/pytorch.png",

];

const imagesRight = [
    "/flutter.png",

    "/javascript-logo.png",
    "/react.png",
    "/typescript.png",
];

export const GallerySection = () => {

    const renderColumn = (images: string[], reverse: boolean = false) => (
        <motion.div
            className={`flex flex-col gap-6 ${reverse ? 'items-end' : 'items-start'
                }`}
            animate={{ y: reverse ? [0, -300, 0] : [0, 300, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
            {[...images, ...images].map((src, i) => (
                <div
                    key={i}
                    className="w-36 h-52 rounded-xl overflow-hidden border-2 border-black bg-white shadow-md"
                >
                    <Image
                        src={src}
                        alt={`img-${i}`}
                        className="object-cover w-full h-full"
                    />
                </div>
            ))}
        </motion.div>
    );

    return (
        <section className="w-full py-24 bg-neutral-100 relative overflow-hidden min-h-[700px]"
            style={{
                clipPath: 'ellipse(70% 100% at 50% 100%)',
            }}
        >



            <div className="relative w-full max-w-7xl mx-auto px-4 flex justify-between items-center gap-8">
                {/* Left Gallery */}
                <div className="absolute left-0 pl-2 top-0 bottom-0 flex items-center">
                    {renderColumn(imagesLeft)}
                </div>

                {/* Center Text */}
                <div className="relative z-10 mx-auto max-w-md w-full 
  flex justify-center items-center min-h-[400px]">

                    <div className="text-center 
    bg-white/80 backdrop-blur-md rounded-xl shadow-lg px-6 py-8 
    transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            Built by Passion, Powered by Purpose
                        </h2>

                        <p className="text-gray-700">
                            Discover how every line of code and every project shapes my journey. Let this space reflect growth, creativity, and real impact.
                        </p>

                    </div>
                </div>


                {/* Right Gallery */}
                <div className="absolute right-0 pr-2 top-0 bottom-0 flex items-center">
                    {renderColumn(imagesRight, true)}
                </div>
            </div>
        </section>

    );
};
