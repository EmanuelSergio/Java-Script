// const pessoa aponta para um endereço de memoria -> 123 -> {...} e no endereço que está o objeto
const pessoa = {
    nome: 'João'
}

pessoa.nome = 'Pedro'

console.log(pessoa);

//pessoa vai receber um novo objeto <- 456 outro endereço de memoria -> {...}, mas esse objeto ja está em uso 
//poís a const não muda 
//pessoa = { nome: 'Ana'}

//metodo que congela o objeto pessoa
//não consigo mais mexer nele, nem add atributo e nem deletar, tornei o objeto constante
//antes desse freeze eu poderia mudar
Object.freeze(pessoa)

pessoa.nome='ana julia'

console.log(pessoa.nome);

pessoa.end = 'rua abc'
delete pessoa.nome
console.log(pessoa);

//como criar um objeto ja constante:

const pessoaConstante = Object.freeze({nome:'joão'})

console.log(pessoaConstante);