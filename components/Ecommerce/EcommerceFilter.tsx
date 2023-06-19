
"use client"
import React, { useState } from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import Card from "./Card";
import produtos from "./produtos";
import Modal from "../Modal";
 
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imagem: string;
  descricao: string;
  avaliacao: number;
  href: string;
}

const products: Product[] = produtos.map((produto) => ({
  id: produto.id,
  name: produto.name,
  category: produto.category,
  price: produto.preco,
  imagem: produto.imagem,
  descricao: produto.descricao,
  avaliacao: produto.avaliacao,
  href: produto.href,
}));

const productsPerPage = 1;

const EcommerceFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const filterProducts = (): Product[] => {
    const filteredByCategory = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

    const filteredByPrice = filteredByCategory.filter((product) => {
      if (!minPrice && !maxPrice) return true;

      const price = product.price;
      const min = minPrice ? parseFloat(minPrice) : Number.MIN_VALUE;
      const max = maxPrice ? parseFloat(maxPrice) : Number.MAX_VALUE;

      return price >= min && price <= max;
    });

    const filteredByStars = selectedStars
      ? filteredByPrice.filter((product) => product.avaliacao === selectedStars)
      : filteredByPrice;

    return filteredByStars;
  };

  const handleCategoryClick = () => {
    setShowModal(true);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const handleStarsClick = (stars: number) => {
    setSelectedStars(stars);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filterProducts().slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="text-2xl font-bold">Lista de produtos</h1>
      <div className="flex">
        <div className="w-1/4 pr-7 px-5 rounded-lg">
          <div className="pb-5">
            <h2 className="text-xl pt-5 pb-3 opacity-70 font-bold">Categorias</h2>
            <ul className="cursor-pointer">
              <li
                className={selectedCategory === "" ? "font-bold" : ""}
                onClick={() => setSelectedCategory("")}
              >
                Todas
              </li>
              {categories.slice(0, 10).map((category) => (
                <li
                  key={category}
                  className={selectedCategory === category ? "font-bold" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}

              {categories.length > 10 && (
                <li className=" cursor-pointer" onClick={handleCategoryClick}>
                  <span className="font-bold pb-5">Mais categorias</span>
                  <FaPlus className="inline-block w-4 h-4 ml-1 mb-1" />
                </li>
              )}
            </ul>
          </div>
          <hr />
          <div className="pb-5">
            <h2 className="text-xl pt-7 font-bold opacity-70 pb-3">Faixa de preço</h2>
            <div className="flex border-collapse ">
              <p className="border p-2 rounded-s-lg">R$</p>
              <input
                type="text"
                placeholder="Mínimo"
                className="w-1/2 p-1 border rounded-e-lg text-black"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <p className="break-keep border p-2 rounded-s-lg">R$</p>

              <input
                type="text"
                placeholder="Máximo"
                className="w-1/2 p-1 border rounded-e-lg text-black"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>

          <hr />

          <div className="pb-5">
            <h2 className="text-xl pt-7 font-bold opacity-70 pb-3">Filtrar por estrelas</h2>
            <ul className="cursor-pointer">
              <li
                className={selectedStars === 0 ? "font-bold" : ""}
                onClick={() => handleStarsClick(0)}
              >
                Todas
              </li>
              <div>
                <div className="flex cursor-pointer pt-2 space-x-2">
                  <li
                    className={selectedStars >= 1 ? "font-bold text-[#FFFF00]" : ""}
                    onClick={() => handleStarsClick(1)}
                  >
                    <FaStar className="inline-block w-4 h-4 mr-1" />
                  </li>
                  <li
                    className={selectedStars >= 2 ? "font-bold text-[#FFFF00]" : ""}
                    onClick={() => handleStarsClick(2)}
                  >
                    <FaStar className="inline-block w-4 h-4 mr-1" />
                  </li>
                  <li
                    className={selectedStars >= 3 ? "font-bold text-[#FFFF00]" : ""}
                    onClick={() => handleStarsClick(3)}
                  >
                    <FaStar className="inline-block w-4 h-4 mr-1" />
                  </li>
                  <li
                    className={selectedStars >= 4 ? "font-bold text-[#FFFF00]" : ""}
                    onClick={() => handleStarsClick(4)}
                  >
                    <FaStar className="inline-block w-4 h-4 mr-1" />
                  </li>
                  <li
                    className={selectedStars === 5 ? "font-bold text-[#FFFF00]" : ""}
                    onClick={() => handleStarsClick(5)}
                  >
                    <FaStar className="inline-block w-4 h-4 mr-1" />
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <hr />
        </div>
        <div className="w-3/4">
          <h2 className="font-bold opacity-70">Produtos filtrados</h2>
          {displayedProducts.length > 0 ? (
            <div className="border-2 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
              {displayedProducts.map((product) => (
                <Card
                  key={product.id}
                  imagem={product.imagem}
                  name={product.name}
                  descricao={product.descricao}
                  avaliacao={product.avaliacao}
                  preco={product.price}
                  href={product.href}
                />
              ))}
            </div>
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
          {filterProducts().length > productsPerPage && (
            <div className="flex justify-center mt-5">
              {Array.from({ length: Math.ceil(filterProducts().length / productsPerPage) }, (_, index) => (
                <button
                  key={index + 1}
                  className={`mx-1 px-3 py-1 rounded-lg ${currentPage === index + 1 ? " bg-black dark:bg-white  text-white dark:text-black" : " "
                    }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcommerceFilter;
