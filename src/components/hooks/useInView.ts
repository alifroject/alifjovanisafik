'use client';
import { useEffect, useRef, useState } from 'react';

export const useInView = (offset = 0) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: `0px 0px ${offset}px 0px`,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [offset]);

  return { ref, isIntersecting };
};
