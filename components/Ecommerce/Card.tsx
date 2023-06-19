"use client" 

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; 
 
interface CardProps {
  imagem: string;
  name: string;
  descricao: string;
  avaliacao: number;
  preco: number;
  href: string;
}

const Card: React.FC<CardProps> = ({ imagem, descricao, avaliacao, preco, href, name }) => {
  const [hovered, setHovered] = useState(false);

  const renderStars = (avaliacao: number) => {
    const fullStars = Math.floor(avaliacao);
    const halfStar = avaliacao % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={index}
            aria-hidden="true"
            className="w-5 h-5 text-[#FFFF00]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            key="half"
            aria-hidden="true"
            className="w-5 h-5 text-[#FFFF00]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Half Star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}

        {[...Array(5 - Math.ceil(avaliacao))].map((_, index) => (
          <svg
            key={index}
            aria-hidden="true"
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Empty Star</title>
            <path
              fillRule="evenodd"
              d="M10 14.583l3.76 2.285a1 1 0 001.458-1.055L13.53 11.89l3.73-2.122a1 1 0 00-.552-1.822l-4.24-.356L10 2.69 8.589 6.79a1 1 0 01-.974.685l-4.24.356a1 1 0 00-.552 1.823l3.73 2.122-1.688 4.922a1 1 0 001.457 1.054L10 14.582z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </>
    );
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href={href}>
      <div
        className={`!z-[9999] w-full max-w-sm bg-white border border-[#5f5f5f] rounded-lg shadow dark:bg-[#1a202c] dark:border-[#1c212c] transition-transform duration-300 ${hovered ? "hover:scale-[1.03] hover:opacity-90" : ""
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center">
          <img className="rounded-[50px] p-8 w-full h-50 object-contain" src={imagem} alt="product image" />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <h5 className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white">{descricao}</h5>
          <div className="flex items-center mt-2.5 mb-5">
            {renderStars(avaliacao)}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {avaliacao}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">R${preco}</span>
            {hovered && (
              <FaPlus className="w-6 h-6 text-primary cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
