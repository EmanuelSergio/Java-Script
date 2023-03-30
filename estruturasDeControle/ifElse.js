const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('aprovado');
    }else{
        console.log('reprovado');
    }
    
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('epa')