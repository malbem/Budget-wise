import React from 'react';


const AboutTitle: React.FC = () => {
  return <>
    <header>
      <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-16" style={{ padding: '50px' }}>
        <div className="flex flex-col items-center pt-[150px] ">
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
    </header>
  </>;
};

export default AboutTitle;
