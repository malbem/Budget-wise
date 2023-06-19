import React from 'react';
import Carinho from './carinho'; 
  
const Cart = () => {
    const subTotal = Carinho.reduce((total, produto) => total + produto.preco, 0);
 
    return (
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 scroll-m-1 scroll-smooth scroll- ">
            <div className="flex items-start justify-between">
                <h2 className="text-lg font-mediu" >Carrinho</h2>
            </div>

            <div className="mt-8">
                <div className="flow-root">
                    <div className="-my-6 divide-y">
                        <div className="max-h-96 overflow-y-auto pr-5">
                            {Carinho.map((produto) => (
                                <div className="flex py-6" key={produto.id}>
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                        <a href={produto.href}>
                                            <img src={produto.imagem} alt={produto.name} className="hover:scale-105 h-full w-full object-cover object-center" />
                                        </a>
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium ">
                                                <h3>
                                                    <a href={produto.href}>{produto.name}</a>
                                                </h3>
                                                <p className="ml-4 text-[#3dc83d] ">R${produto.preco}</p>
                                            </div>
                                            <p className="mt-1 text-sm opacity-80">{produto.descricao}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="opacity-60">Qtd 1</p>

                                            <div className="flex">
                                                <button type="button" className=" font-bold border p-1 px-2 rounded-xl hover:text-[#FF0000]">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t px-4 py-6 sm:px-6 ">
                <div className="flex justify-between text-base font-medium pt-2">
                    <p>Subtotal</p>
                    <p className="text-[#3dc83d] font-bold " >R${subTotal.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Frete e impostos calculados na finalização da compra.</p>
                <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#5A67D8]">
                        Checkout
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        ou
                        <button onClick={null} type="button" className="font-medium text-primary hover:opacity-70">
                            <a href="./e-commerce/">
                                Continue Comprando
                            </a>
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
