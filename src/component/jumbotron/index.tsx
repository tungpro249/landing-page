"use client";
import { useState } from "react";
import Image from "next/image";
import baner from "@/assets/baner.png";
import baner2 from "@/assets/baner2.png";

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
    <div className="relative w-[80%] py-10 mx-auto">
      <div className="relative h-[620px] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-1/2 left-2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Next Button */}
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
