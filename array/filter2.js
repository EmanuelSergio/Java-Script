Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }

    }

    return newArray

}

const produtos = [
    {nome: 'Nootebook', preco: 2500, fragil: true},
    {nome: 'Ipad pro', preco: 4500, fragil: true},
    {nome: 'Copo de video', preco: 25, fragil: true},
    {nome: 'Copo de plástico', preco: 20, fragil: false}
]

console.log( produtos.filter2(function(p){
     return false
}) );

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter2(caro).filter2(fragil));