"use client" 
 
import React, { useState, useEffect } from "react";

interface CarouselProps {  
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative cursor-pointer "> 
      <img
        className="rounded w-full max-h-64 "
        src={images[currentIndex]}
        alt="Carousel"
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 ">
        {images.map((_,index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full border border-black dark:border-black dark:border-opacity-30 border-opacity-30 ${
              index === currentIndex
                ? " bg-black bg-opacity-80 dark:border-opacity-100 border-opacity-100 dark:bg-black dark:bg-opacity-80"
                : "bg-black dark:bg-black dark:bg-opacity-50 bg-opacity-50"
            }`}
          ></span>
        ))}
      </div>

      <button
        type="button"
        className="  absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevious}
      >
        <span className=" border text-black inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5  dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className=" absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNext}
      >
        <span className=" border text-black inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5  dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
