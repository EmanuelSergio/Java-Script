function gerarInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

 do{
    opcao = gerarInteiroAleatorio(-1,10)
    console.log('opcao escolhida foi '+opcao );
}while (opcao != -1)

console.log('acabou');

