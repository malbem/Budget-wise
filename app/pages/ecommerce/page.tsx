import React from "react";
import Footer from "@/components/Footer";
import HomeEcommerce from "@/components/Ecommerce";
import Header from "@/components/Ecommerce/Header";
import EcommerceFilter from "@/components/Ecommerce/EcommerceFilter";


const ecommerce: React.FC = () => {

    return <>

        <Header />
        <EcommerceFilter/>
        <Footer />

    </>

}


export default ecommerce