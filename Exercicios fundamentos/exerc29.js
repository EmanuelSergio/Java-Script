/**Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

const nums = [11,12,13,14,51,16,71,81,91,10]

function cont(vetor){

var dentro = 0
var fora = 0

for (let index = 0; index < vetor.length; index++) {
    const element = vetor[index];
    
    if(element >= 10 && element <= 20){
        dentro++
    }else{
        fora++
    }


}

return console.log(`${dentro} estão dentro e ${fora} estão fora`);

}

cont(nums)

