'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: 60, transition: { duration: 0.4 } },
};

type SectionProps = {
    linkTo: string;
    imageSrc: string;
    description: string;
    titleLine1: string;
    titleLine2: string;
};

const Section = ({ linkTo, imageSrc, description, titleLine1, titleLine2 }: SectionProps) => {
    const [hovered, setHovered] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [screenWidth, setScreenWidth] = useState(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const xTransform = useTransform(mouseX, [0, 300], [-10, 10]);
    const yTransform = useTransform(mouseY, [0, 300], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPos({ x, y });
        mouseX.set(x);
        mouseY.set(y);
    };

    React.useEffect(() => {
        const updateWidth = () => setScreenWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <Link href={linkTo}>
            <motion.div
                className="relative my-10 px-6 cursor-pointer"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.3, once: false }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="flex justify-between items-center gap-8 max-sm:flex-col max-sm:text-center">
                    <motion.p
                        className="text-sm text-black"
                        style={{
                            x: hovered ? xTransform : 0,
                            y: hovered ? yTransform : 0,
                        }}
                    >
                        {description}
                    </motion.p>
                    <motion.h2
                        className="text-4xl text-black leading-snug text-center"
                        style={{
                            x: hovered ? xTransform : 0,
                            y: hovered ? yTransform : 0,
                        }}
                    >
                        <span>{titleLine1}</span>
                        <br />
                        <span>{titleLine2}</span>
                    </motion.h2>
                </div>
                <hr className="mt-6 h-px bg-black border-none" />

                {hovered && (
                    <motion.div
                        className="absolute pointer-events-none z-50"
                        style={{
                            x: pos.x - (screenWidth < 768 ? 150 : 220),
                            y: pos.y - (screenWidth < 768 ? 170 : 260),
                        }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    >
                        <div className={`relative rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-white ${screenWidth < 768 ? 'w-72 h-44' : 'w-[400px] h-[300px]'}`}>
                            <img
                                src={imageSrc}
                                alt="Preview"
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black/60 text-white text-[18px] px-3 py-1 rounded-md shadow-md">
                                    Click Here
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </Link>
    );
};

export const Sections = () => {
    return (
        <article className="bg-white px-4 py-10 max-w-4xl mx-auto">
            <Section
                linkTo="/site/javascript-typescript"
                imageSrc="/javascript-logo.png"
                description="Getting started with JavaScript and TypeScript basics."
                titleLine1="JAVASCRIPT"
                titleLine2="TYPESCRIPT"
            />
            <Section
                linkTo="/site/python-pytorch"
                imageSrc="/python.png"
                description="Learning the fundamentals of Python and PyTorch."
                titleLine1="PYTHON"
                titleLine2="PYTORCH"
            />
            <Section
                linkTo="/site/react-next.js"
                imageSrc="/react.png"
                description="Exploring frontend development using React and Next.js."
                titleLine1="REACT"
                titleLine2="NEXT.JS"
            />
            <Section
                linkTo="/site/flutter-firebase"
                imageSrc="/flutter.png"
                description="Building simple mobile apps with Flutter and Firebase."
                titleLine1="FLUTTER"
                titleLine2="FIREBASE"
            />
        </article>
    );

};
