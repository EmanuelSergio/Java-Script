//coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'moveis de gramado'
produto.preco = 220

console.log(produto);

delete produto.preco

console.log(produto);

carro = {

nome: 'A4',
valor: 89000,
proprietario:{
    nome:'Gustavo Lima',
    idade:45,
    endereco:{
        logradouro:'Fortaleza',
        numero:124
    }
},

condutores:[{
    nome: 'Junior',
    idade: 19
},{
    nome:'Ana',
    idade: 42
}],

calcularValorSeguro: function(){

}


}

carro.proprietario.endereco.numero = 100203
carro['proprietario']['endereco']['logradouro'] = 'AVENIDA BRASIL'

console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro);

console.log(carro.condutores);
//console.log(carro.condutores.lenght);

