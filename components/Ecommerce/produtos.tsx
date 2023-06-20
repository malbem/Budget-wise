const produtos = [];

for (let i = 1; i <= 200; i++) {
 let avaliacao =1;
  if(i <=25){

    avaliacao =2;
  }
  else if(i <=50){
    avaliacao =3;

   
  }else if(i < 75){
    avaliacao =4;

  }else if(i <= 100){
    avaliacao =5;

  }

  const produto = {
    id: i,
    href: "pages/ecommerce",
    imagem: "/images/produtos/produto_01.png",
    name: `Produto-${i}`,
    category: `Categoria-${i}`,
    descricao: "Nada descrição",
    avaliacao: avaliacao,
    preco: 0.1 + i 
  };

  produtos.push(produto);
}

export default produtos;
