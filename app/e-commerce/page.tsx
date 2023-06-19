
import HomeEcommerce from '@/components/Ecommerce';  
import Header from '@/components/Ecommerce/Header'; 
import Footer from '@/components/Footer'; 
   
import React from 'react';
    
const Ecommerce: React.FC = () => { 
    return <>  
        <Header />
        <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
            <HomeEcommerce/>
        </section> 
        <Footer />

    </>;
}

export default Ecommerce; 
