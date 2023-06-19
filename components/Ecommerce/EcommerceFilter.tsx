"use client"

import React, { useState } from "react";
 
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Product 1", category: "Category A", price: 10 },
  { id: 2, name: "Product 2", category: "Category B", price: 20 },
  { id: 3, name: "Product 3", category: "Category A", price: 15 },
  { id: 4, name: "Product 4", category: "Category C", price: 25 },
];

const EcommerceFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([0, 0]);

  const categories = Array.from(new Set(products.map((product) => product.category)));
  const priceRange = [0, 100];

  const filterProducts = (): Product[] => {
    return products.filter(
      (product) =>
        (selectedCategory === "" || product.category === selectedCategory) &&
        (selectedPriceRange[0] === 0 || product.price >= selectedPriceRange[0]) &&
        (selectedPriceRange[1] === 0 || product.price <= selectedPriceRange[1])
    );
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className="flex">
        <div className="w-1/4">
          <h2>Category</h2>
          <ul>
            <li
              className={selectedCategory === "" ? "font-bold" : ""}
              onClick={() => setSelectedCategory("")}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "font-bold" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <h2>Price Range</h2>
          <input
            type="range"
            min={priceRange[0]}
            max={priceRange[1]}
            value={selectedPriceRange[0]}
            onChange={(e) =>
              setSelectedPriceRange([parseInt(e.target.value), selectedPriceRange[1]])
            }
          />
          <input
            type="range"
            min={priceRange[0]}
            max={priceRange[1]}
            value={selectedPriceRange[1]}
            onChange={(e) =>
              setSelectedPriceRange([selectedPriceRange[0], parseInt(e.target.value)])
            }
          />
        </div>
        <div className="w-1/2">
          <h2>Filtered Products</h2>
          <ul>
            {filterProducts().map((product) => (
              <li key={product.id}>
                {product.name} - Category: {product.category} - Price: ${product.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFilter;
