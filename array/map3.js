
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        
        newArray.push(callback(this[index], index, this))


    }

return newArray

}

const carrinho = [

    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
    ]
    
    
    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = e => e.preco
    
    const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
    console.log(resultado);
    
                                                                         
    
    