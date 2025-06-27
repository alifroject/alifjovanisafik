import * as React from "react";
import { useRef, useState } from "react";
import { Download } from "lucide-react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";

export const CertificateFrame: React.FC = () => {
    const overlayText = `JavaScript (JS) is a dynamic, interpreted programming language primarily used to add interactivity and functionality to websites. It's supported by all modern browsers and is essential for front-end web development. TypeScript (TS), on the other hand, is a superset of JavaScript developed by Microsoft that adds static typing and other features to improve code quality and scalability. While JavaScript runs directly in browsers, TypeScript must be compiled into JavaScript. TS helps catch errors during development, making it popular in large projects where maintainability and team collaboration are crucial.`;

    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, {
        damping: 20,
        stiffness: 100,
        mass: 0.5,
    });

    const iconY = useTransform(smoothScrollY, [0, 100], [0, -8], { clamp: false });
    const textY = useTransform(smoothScrollY, [0, 100], [0, -4], { clamp: false });

    const iconRotate = useSpring(isHovered ? -10 : 0, {
        stiffness: 300,
        damping: 15,
    });

    return (
        <section
            ref={containerRef}
            className="flex flex-col items-center justify-center px-4 py-12 md:py-16 w-full bg-gray-100 md:min-h-screen"
        >
            <div className="relative w-full max-w-[750px]">
                {/* Download Button */}
                <motion.div
                    className="absolute md:top-[-40px] right-4 z-10 bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 cursor-default"
                    style={{ y: iconY, rotate: iconRotate }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    title="Certificate Icon"
                >
                    <Download className="w-6 h-6 md:w-[100px] md:h-[100px]" />
                </motion.div>


                {/* Text Box Instead of Image */}
                <motion.div
                    className="bg-white border-[10px] border-yellow-400 shadow-lg rounded-3xl overflow-auto relative p-6 max-h-[700px]"
                    style={{ y: textY }}
                >
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                        {overlayText}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
