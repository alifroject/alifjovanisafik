'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
const SimplePage = () => {
  const [, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black px-6 m-0 p-0">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-6">
        {/* Text */}
        <div className="w-full md:w-[30%]">
          <h2 className="text-2xl font-bold mb-4">Undergraduate Student</h2>
          <p className="text-base leading-relaxed">
            I&apos;m currently an undergraduate student majoring in Computer Science and Information Systems. My academic journey focuses on developing practical tech solutions through coding, systems design, and data-driven thinking. This project reflects my learning, creativity, and commitment to building real-world applications.
          </p>
        </div>


        {/* Image & Globe */}
        <div className="w-full md:w-[70%] h-[90vh] relative overflow-hidden  shadow-lg">

          <Image
            src="/Me.jpg"
            alt="Visual Representation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SimplePage;
