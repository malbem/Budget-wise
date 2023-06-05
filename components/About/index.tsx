import React from 'react';
import AboutImg from './images/About.svg';

const AboutTitle: React.FC = () => {
  return <>
    <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-16" style={{ padding: '50px' }}>
      <div className="flex flex-col items-center">
        <img src="./images/About.svg" className="h-125 w-125 mb-4" alt="Imagem sobre" />
        <h1 className="text-purple-500 text-center md:text-left text-4xl whitespace-nowrap mb-4">
          O CAMINHO CERTO PARA ENCONTRAR <span className="font-bold">O ORÇAMENTO IDEAL!</span>
        </h1>
        <p className="text-2xl text-center">ECONOMIZE TEMPO E DINHEIRO COM A MELHOR PLATAFORMA</p>
      </div>
    </div>
    <div className="text-center my-8 pt-[12rem] pb-[12rem]">
      <div className="inline-block rounded-lg p-4">
        <h1 className="text-6xl font-bold mb-4">Quem Somos</h1>
        <p className="text-xl px-4 max-w-[750px] pt-[35px] opacity-70">
          Bem-vindo à Budget Wise! Nós estamos aqui para ajudar você a encontrar o melhor orçamento para o projeto que você precisa.
          Em nosso site, você pode criar uma conta e solicitar orçamentos personalizados. Nós trabalhamos com a melhor rede de fornecedores
          e prestadores de serviços, para que você possa encontrar a melhor oferta para sua empresa. Entre em contato conosco se precisar
          de ajuda em qualquer etapa do processo. Obrigado por escolher nosso site de orçamentos!
        </p>
      </div>
    </div>
  </>;
};

export default AboutTitle;
