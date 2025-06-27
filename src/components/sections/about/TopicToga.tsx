'use client';

import { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import React from 'react';

export default function TopicToga() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 48) setDirection(-1);
        if (prev <= -48) setDirection(1);
        return prev + direction * 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <main className="flex items-center justify-center  to-blue-100 p-6">
      <div className="relative w-full max-w-4xl flex items-center justify-center h-64">
        {/* Vertical line */}
        <div className="absolute w-1 h-32 bg-blue-300 rounded-full left-1/2 transform -translate-x-1/2" />

        {/* Moving Icon */}
        <div
          style={{ transform: `translate(-50%, ${position}px)` }}
          className="absolute left-1/2 transition-transform duration-75
            bg-white p-5 rounded-full shadow-xl border-4 border-blue-300 
            hover:border-red-500 group"
        >
          <GraduationCap className="w-12 h-12 text-blue-600 group-hover:text-red-500 transition-colors duration-300" />
        </div>
      </div>
    </main>
  );
}
