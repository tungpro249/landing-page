"use client";

import { useEffect, useRef, useState } from "react";

export function RealImages() {
  const items = [
    "https://res.cloudinary.com/df0psnigh/image/upload/v1744212142/sua-dieu-hoa-am-tran-2_i3ljw1.jpg",
    "https://res.cloudinary.com/df0psnigh/image/upload/v1744212141/tu-lanh-lon_mizris.jpg",
    "https://res.cloudinary.com/df0psnigh/image/upload/v1744212141/sua-long-tu-lanh_ltf2sf.jpg",
    "https://res.cloudinary.com/df0psnigh/image/upload/v1744212139/sua-dieu-hoa-am-tran_tj2y7a.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden my-4"
      id="real-images"
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={item}
              alt={`Slide ${index}`}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
