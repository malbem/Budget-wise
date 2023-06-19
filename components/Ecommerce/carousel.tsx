"use client"
import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <img className="rounded w-full max-h-52" src={images[currentIndex]} alt="Carousel" />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 ">
        <button
          className="text-black bg-white dark:bg-black dark:text-white font-bold backdrop-blur-sm px-3 py-[1px] rounded-l"
          onClick={goToPrevious}
        >
          {"<"}
        </button>

        {images.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? " border  bg-black bg-opacity-80 dark:bg-white dark:bg-opacity-80" : "bg-black dark:bg-white dark:bg-opacity-50 bg-opacity-50"
            }`}
          ></span>
        ))}

        <button
          className="text-black dark:text-white bg-white dark:bg-black font-bold backdrop-blur-sm px-3 py-[1px] rounded-r"
          onClick={goToNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
