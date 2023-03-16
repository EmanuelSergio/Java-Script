//armazenando uma funcao em uma variavel

const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(2,3)

//armazenando uma função arrow em uma variavel 

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,5));

//retorno implícito

const subtracao = (a,b) => a - b //parece lambda

console.log(subtracao(10,5));

const imprimir2 = a => console.log(a);

imprimir2('salve')

