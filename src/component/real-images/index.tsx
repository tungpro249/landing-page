"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import baner from "@/assets/baner.png";
import baner2 from "@/assets/baner2.png";

export function RealImages() {
  const items = [baner, baner2, baner, baner2, baner, baner2];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000); // auto 3s
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="min-w-full">
            <Image src={item} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2">Prev</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2">Next</button>
    </div>
  );
}
