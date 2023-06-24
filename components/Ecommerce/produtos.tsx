const produtos = [];

for (let i = 1; i <= 99999; i++) {
  let avaliacao = 1;
  
  if(i <=25){
    avaliacao = 1;
  } 
  else if(i <=75){
    avaliacao = 2;
  }
  else if(i <=100){
    avaliacao = 3;
  }
  else if(i <=125){
    avaliacao = 4;
  }
  else if(i <=150){
    avaliacao = 5;
  }


  const produto = {
    id: i,
    href: "pages/ecommerce",
    imagem: "/images/produtos/produto_01.png",
    name: `Produto-${i}`,
    category: `Categoria-${i}`,
    descricao: "Nada descrição",
    avaliacao: avaliacao,
    preco: 1 + i
  };

  produtos.push(produto);
}

export default produtos;
