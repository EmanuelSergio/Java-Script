function criarProduto(nome, preco){
return{
    nome,
    preco,
    desconto: 0.1
}

}

console.log(criarProduto('carro', 300000));
console.log(criarProduto('Notebook', 3000));
console.log(criarProduto('Moto', 2000));