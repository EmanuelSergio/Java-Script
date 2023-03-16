const saudacao = 'opa' //contexto léxico 1

function exec () {
    
const saudacao = 'falaaa' //contexto léxico 2
    return saudacao
}

console.log(exec());

//objetos sao grupos aninhados de pares/nome valor

const cliente = {
nome: 'pedro',
idade: 32,
peso: 90,
endereco :{
    logradouro: 'rua muito legal',
    numero: 124
           }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

