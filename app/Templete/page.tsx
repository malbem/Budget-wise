
import Footer from '@/components/Footer'; 
import React from 'react';
  
{/* Altere o nome da page */}
const Templete: React.FC = () => {
    return <>  
         
        <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
            Sua page pode ficar aqui, no entando arrume todos componentes abaixo do section!
        </section>
        <Footer />
  
    </>;
}
{/* Altere o nome com o mesmo do de cima */}
export default Templete;     
 
