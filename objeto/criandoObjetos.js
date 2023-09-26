//usando a notação literal

const obj1 = {}
console.log(obj1);

//Object em JS

console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//funções contrutoras

function Produto(nome, preco, desconto){
    this.nome = nome;
    this.getPrecoComDesconto = ()=>{
        return preco * (1-desconto)
    }   

}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 3000, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

