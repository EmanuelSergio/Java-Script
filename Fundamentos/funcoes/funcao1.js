//funcao sem retorno

function imprimirSoma(a, b) {
    
    console.log(a +b);

}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,5,10,5,6)//vai ler só os dois primeiros
imprimirSoma()

//funcao com retorno

function soma(a,b = 1) {
    return a +b
}

console.log(soma(2,2));
console.log(soma(2));//utiliza o valor padrao
console.log(soma());