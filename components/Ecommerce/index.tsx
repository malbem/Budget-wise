import React from "react";
import produtos from "./produtos";
import Card from "./Card";
import Carousel from "./carousel"; 

 
const HomeEcommerce: React.FC = () => {
  const images = [
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-01.png",

  ];


  return (<>

    
    <div className="container mx-auto py-8">
      <div className=" pb-[100px]">
        <Carousel images={images} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
            name={produto.name}
            descricao={produto.descricao}
            avaliacao={produto.avaliacao}
            preco={produto.preco}
            href={produto.href}
          />
        ))}
      </div>

    </div>
  </>
  );
};

export default HomeEcommerce;
