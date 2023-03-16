const pessoa = {
nome: 'ana',
idade: 5,
endereco: {
    logradouro: 'rua jose...',
    numero: 222
}
}

const { nome, idade } = pessoa //estou extraindo os atributos do objeto pessoa

console.log(nome, idade);

const {nome: e, idade: i} = pessoa
console.log(e ,i);

const { sobrenome, bemHumorada= true} = pessoa //estou extraindo coisas que não existe
console.log(sobrenome, bemHumorada);            // porém estou atribuindo um valor padrao já

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);

/*const { conta: {ag, num}}= pessoa // não existe
console.log(ag, num);*/ 

