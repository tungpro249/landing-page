"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import suatulanh from "./../../public/sua-tu-lanh.jpg";
import suatulanh2 from "./../../public/sua-dieu-hoa.jpg";
import suatulanh3 from "./../../public/sua-tu-lanh-3.jpg";

export function RealImages() {
  const items = [suatulanh, suatulanh2, suatulanh3];
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
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden my-4" id="real-images">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full h-[400px] relative">
            <Image
              src={item}
              alt={`Slide ${index}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
