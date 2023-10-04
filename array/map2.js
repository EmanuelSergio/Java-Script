const carrinho = [

'{"nome": "borracha", "preco": 3.45}',
'{"nome": "caderno", "preco": 13.90}',
'{"nome": "kit de lapis", "preco": 41.22}',
'{"nome": "caneta", "preco": 7.50}'
]


const paraObjeto = json => JSON.parse(json)
const apenasPreco = e => e.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);

     

