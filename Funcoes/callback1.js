const fabricantes = ['mercedes', 'audi' ,'fiat']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}
console.log();
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a);
})
console.log();
fabricantes.forEach(fabricantes => console.log(fabricantes))

