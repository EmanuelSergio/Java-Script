console.log(Math.ceil(6.1));//vai levar  o numero ao maximo, 7 nesse caso

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = bola2 outra forma de declarar no objeto
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('executando...');
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec()

