import React from 'react'; 
import Team from './team'; 
import Support from './support';
import Header from '../NavLadding';
          
                            
const AboutTitle: React.FC = () => {
  return <>
  <Header/>
    <section >
       <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-16 p-[50px] ">
        <div className="flex flex-col items-center">
          <img src="./images/About.png" className="h-125 w-125 mb-4" alt="Imagem sobre" />
          <div className="text-center md:text-left text-4xl whitespace-normal mb-4">
            <h1 className="text-purple-500">
                O CAMINHO CERTO PARA ENCONTRAR{' '}
              <span className="font-bold text-yellow">O ORÇAMENTO IDEAL!</span>
            </h1>
          </div>
          
          <p className="pt-8 text-2xl text-center text-primary">
            <span className="p-3">
              ECONOMIZE TEMPO E DINHEIRO COM A MELHOR PLATAFORMA
          </span>
          </p>
        </div>
      </div>
    </section>
    <section id='About'>
       <div className="text-center my-8 pt-[12rem] pb-[2rem]" >
          <div className="inline-block rounded-lg p-10  border border-dashed">
          <h1 className="text-6xl font-bold mb-4">Quem Somos</h1>
          <p className=" text-left text-xl px-4 max-w-[750px] pt-[35px] opacity-70">
            Bem-vindo à Budget Wise! Nós estamos aqui para ajudar você a encontrar o melhor orçamento para o projeto que você precisa.
            Em nosso site, você pode criar uma conta e solicitar orçamentos personalizados. Nós trabalhamos com a melhor rede de fornecedores
            e prestadores de serviços, para que você possa encontrar a melhor oferta para sua empresa. Entre em contato conosco se precisar
            de ajuda em qualquer etapa do processo. Obrigado por escolher nosso site de orçamentos!
          </p>
        </div>
      </div>
    </section>
    <Team />
   
    <section className=" justify-center items-center pb-[70px]">
      <div className="max-w-6xl mx-auto">
        <div className="border border-dashed p-10 rounded-lg">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 text-center">Os clientes dizem</h2>
          <div className="p-8">
            <div className="mb-4">
              <p className="text-lg sm:text-xl mb-3 opacity-70">
                <span className="text-xl sm:text-2xl mr-2">
                  &#8220;Minha experiência na Budget Wise foi incrível! Encontrei exatamente o que precisava para meu projeto, com orçamentos personalizados e uma ampla rede de fornecedores. A equipe de suporte foi excepcional, me auxiliando em todas as etapas. Recomendo a Budget Wise a todos que buscam qualidade e economia. &#8221;
                </span>
              </p>
            </div>
            <h3 className="pt-5 text-lg sm:text-xl font-semibold mb-2 text-center sm:text-right">Gustavo Guanabara</h3>
            <h4 className="text-base sm:text-lg font-normal text-center sm:text-right opacity-70">CLIENTE DA EMPRESA</h4>
          </div> 
        </div>
      </div>
    </section>
    <Support /> 
  </>
};
 
export default AboutTitle;
