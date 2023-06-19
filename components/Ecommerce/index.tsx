import React from "react";
import produtos from "./produtos";
import Card from "./Card";
import Carousel from "./carousel";

const HomeEcommerce: React.FC = () => {
  const images = [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400/ff0000",
    "https://via.placeholder.com/800x400/00ff00",
    "https://via.placeholder.com/800x400/0000ff",
  ];


  return (<>


    <div className="container mx-auto py-8">
      <div className=" pb-[100px]">
        <h1 className="text-3xl font-bold text-center mb-8">Bem-vindo(a)</h1>
        <Carousel images={images} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
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
