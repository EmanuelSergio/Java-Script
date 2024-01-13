//utilizado para filtrar listas, é apenas necessario chamar uma callback para utilizar

const produtos = [
    {nome: 'Nootebook', preco: 2500, fragil: true},
    {nome: 'Ipad pro', preco: 4500, fragil: true},
    {nome: 'Copo de video', preco: 25, fragil: true},
    {nome: 'Copo de plástico', preco: 20, fragil: false}
]

console.log( produtos.filter(function(p){ //forma de chamar e implementar direto (forma suja)
     return false
}) );

const caro = produto => produto.preco >= 500 //atribuir uma callback a variavel e implementar na chamado do filter 
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil));//forma limpa