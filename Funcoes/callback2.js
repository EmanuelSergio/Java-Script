const notas = [7.7,1.5,7.9,9.8,8.9]

//sem callback    

const notasBaixas = []

for (let i in notas){
    if(notas[i] < 8){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

//com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 9)

console.log(notasBaixas3);

const notaBaixa = notas => notas < 7;
const notaBaixa4 = notas.filter(notaBaixa)

console.log(notaBaixa4);
