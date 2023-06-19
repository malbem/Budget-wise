import React from "react";
import produtos from "./produtos";
import Card from "./Card";
import Carousel from "./carousel";
import EcommerceFilter from "./EcommerceFilter";


const HomeEcommerce: React.FC = () => {
  const images = [
    "images/carousel/promocao-01.png",
    "images/carousel/promocao-02.png",
    "images/carousel/promocao-03.png",
    "images/carousel/promocao-04.png",
    "images/carousel/promocao-05.png",

  ];


  return (<>


    <div className="container mx-auto py-8">
      <div className=" pb-[100px]">
        <Carousel images={images} />
      </div>
     
    </div>
  </>
  );
};

export default HomeEcommerce;
