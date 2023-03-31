//estrategia para gerar valor padrao

function soma1(a,b,c) {
    a=a||1
    b=b||1
    c=c||1
    return a + b + c    //o 0 retorna falso e, fica no valor de 1
}

console.log(soma1(5), soma1(2,2,3), soma1(0,0,0));

function soma2(a,b,c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1 //vai ver se dentro de arguments existe o indice 1, se nao ele cria ele com valor 1
    c = isNaN(c) ? 1:c //se nao for um nº ele pega um valor padrao e, se for ele pega o valor passado
    return a + b + c
}

console.log(soma2(5,3,'t'));

function soma3(a = 1, b = 1, c = 1) {
    return a + b+ c
}

console.log(soma3());
console.log(soma3('t'));

