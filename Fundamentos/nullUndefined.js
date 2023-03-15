let valor// não incializada
console.log(valor);

valor = null

console.log(valor); //ausência de valor 
//console.log(valor.toString());

const produto = {}
console.log(produto.preco); //undefined o preco não esta definido

console.log(produto);

produto.preco = 3.5

console.log(produto);

produto.preco = undefined //evitar atribuir undefined

console.log(!!produto.preco);
console.log(produto);

produto.preco = null
console.log(!!produto.preco);

console.log(produto);



