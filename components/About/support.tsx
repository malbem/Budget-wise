import React from 'react';

const Support: React.FC = () => {
  return ( 
    <section id="Contact-us">
      <div className="flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 m-0"> 
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-6 bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-left">
                  Entrar em contato
                </h1>
                <p className="text-lg sm:text-2xl font-medium mt-2 text-left">
                  Preencha o formulário para iniciar uma conversa
                </p>

                <div className="flex items-center mt-8">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    Patos de Minas
                    <br />
                    244 Rua de Deus
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <svg
                    fill="none"
                    stroke="currentColor" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    0 (800) 123 45 67
                  </div>
                </div>

                <div className="flex items-center mt-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    info@budgetwise.com
                  </div>
                </div>
              </div>

              <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Nome completo"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-black font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-black font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Numero
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Número de telefone"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-black font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="max-w-lg w-full bg-primary hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
