const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));

console.log(Object.values(pessoa));

console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {

    console.log(`${e[0]}: ${e[1]}`);

})

Object.entries(pessoa).forEach(([chave, valor]) => {

    console.log(`${chave}: ${valor}`);

})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //se for false, ele não aparecera na lista de chaves, porem, poderei acessar ainda
    writeble: false,
    value: '01/01/2017'
})

pessoa.dataNascimento = '01/01/2019';//funcionou como um freezer, mas apenas para esse atributo
console.log(pessoa.dataNascimento);

console.log(Object.keys(pessoa));

//Object.assign 
const dest = { a:1} 
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) //vai concatenar os objetos e substituir o que ja existia

console.log(obj);

