"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "@/assets/slider-test-image-1.webp";
import image2 from "@/assets/slider-test-image-2.webp";

const images = [image1, image2, image1, image2, image1]; 

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
      <div className="relative h-56 md:h-96 overflow-hidden rounded-2xl">
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
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
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
