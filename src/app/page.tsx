'use client';
import { useEffect, useRef, useState } from "react";

import { Sections } from "../components/sections/Home-PageSections";
import { GallerySection } from "../components/sections/Gallery-Home";

import { Navigation } from "../components/navigates/Navigation"
import { Footer } from "../components/footers/Footer"
import { HiDownload } from "react-icons/hi";// 👈 Optional: you can use an icon lib
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTransitionStore } from '../components/store/transitionStore';


export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState<boolean>(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const show = useTransitionStore((s) => s.show);
  const hide = useTransitionStore((s) => s.hide);
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    show("Home");

    const timeout = setTimeout(() => {
      hide();
      setShowContent(true);
    }, 1200); // Wait longer for message animation

    return () => clearTimeout(timeout);
  }, [show, hide]);





  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const goingUp = scrollY < lastScrollY;
      if (goingUp !== isScrollingUp) {
        setIsScrollingUp(goingUp);
        directionRef.current = goingUp ? 1 : -1;
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollingUp]);

  useEffect(() => {
    let position = 0;
    let animationFrameId: number;

    const animate = () => {
      if (wrapperRef.current && contentRef.current) {
        position += directionRef.current * 1.2;

        const contentWidth = contentRef.current.offsetWidth / 2;
        if (position <= -contentWidth) {
          position = 0;
        } else if (position >= 0) {
          position = -contentWidth;
        }

        contentRef.current.style.transform = `translateX(${position}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      const goingUp = scrollY < lastScrollY;

      if (goingUp !== isScrollingUp) {
        setIsScrollingUp(goingUp);
        directionRef.current = goingUp ? 1 : -1;
      }

      // Toggle menu button based on scroll direction
      if (scrollY > 100 && !goingUp) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollingUp]);



  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"]
  });

  // Gallery section lifts up as you scroll
  const galleryY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // Footer stays fixed but fades in
  const footerOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  return (
    <>
      <motion.div
        className="min-h-screen bg-white"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >

        {showContent && (
          <div className="relative min-h-screen">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2000px] bg-no-repeat bg-cover pointer-events-none"
              style={{
                backgroundImage: "url('/Me2.jpg')",
                backgroundSize: "100%",
                backgroundPosition: "center top -480px",
              }}
            />


            {/* Infinite Marquee */}
            <div className="absolute md:top-0 top-[90px] left-0 h-full w-full md:w-1/2 z-10 flex items-start justify-start p-6 pointer-events-none">
              <div className="relative w-full h-full overflow-hidden" ref={wrapperRef}>
                <div
                  ref={contentRef}
                  className="absolute z-0 md:z-10 top-1/2 md:top-1/2 text-gray-700 bg-white border border-black text-[40px] md:text-[200px] md:border-none md:bg-transparent md:text-black -translate-y-1/2 flex whitespace-nowrap font-semibold px-4 will-change-transform"
                >
                  <span className="px-4">Welcome to Alif's Portfolio.</span>
                  <span className="px-4">Welcome to Alif's Portfolio.</span>
                </div>

              </div>
            </div>

            {/* Download Icon and Text */}
            <div className="absolute bottom-148 md:bottom-72 right-[190px] text-black text-sm md:text-xl z-20 max-w-xs md:max-w-md leading-relaxed text-left">
              <div className="absolute bottom-12 md:bottom-18 left-[0px] md:text-black z-20">
                <HiDownload size={32} className="-rotate-45" />
              </div>
              <p className="text-black text-[20px] md:text-[30px] md:text-black">
                CS Student
              </p>
            </div>
          </div>
        )}

        {showContent && (
          <div className="relative z-10">
            <Sections />
            <GallerySection />
          </div>
        )}
      </motion.div>
    </>
  );

}
