"use client";
import { useState } from "react";
import Image from "next/image";
import baner from "./../../public/baner.png";
import baner2 from "./../../public/baner2.png";

const images = [baner, baner2];

export function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0); // State để theo dõi slide hiện tại

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((item, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={item}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
}
