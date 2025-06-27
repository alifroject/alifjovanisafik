'use client';
import React, { useRef, useState } from 'react';

export interface LanguageCardProps {
  name: string;
  image1: string;
  image2?: string; // Optional second image
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ name, image1, image2 }) => {
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
      className="relative p-6 bg-gradient-to-tr from-white via-blue-50 to-white rounded-2xl shadow-xl border border-gray-100 w-full h-56 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.03] flex flex-col items-center justify-center group"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <img
          src={image1}
          alt={`${name} logo 1`}
          className="w-10 h-10 object-contain drop-shadow-md"
        />
        {image2 && (
          <img
            src={image2}
            alt={`${name} logo 2`}
            className="w-10 h-10 object-contain drop-shadow-md"
          />
        )}
      </div>

      <h3
        style={{
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#1f2937',
          textAlign: 'center',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#1f2937')}
      >
        {name}
      </h3>

      {hover && (
        <div
          className="absolute w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-sm flex flex-col justify-center items-center rounded-xl pointer-events-none transition-opacity duration-300 shadow-lg z-50"
          style={{
            transform: `translate(${coords.x - 80}px, ${coords.y - 80}px)`,
          }}
        >
          <div className="flex gap-2 items-center justify-center mb-2">
            <img
              src={image1}
              alt={`${name} icon 1`}
              className="w-8 h-8 object-contain"
            />
            {image2 && (
              <img
                src={image2}
                alt={`${name} icon 2`}
                className="w-8 h-8 object-contain"
              />
            )}
          </div>
          <span className="font-semibold font-sans text-white">Click here</span>
        </div>
      )}

    </div>
  );
};
