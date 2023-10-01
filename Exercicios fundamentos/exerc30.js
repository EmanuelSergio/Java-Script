/**Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

const nums = [11,12,13,14,51,16,71,81,91,10]

function cont(array){

    let maior = array[0]
    let menor = array[0]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    

    if(maior < array[index]){
        maior = array[index]
    }

    if (menor >= array[index]) {
        menor = array[index]
    }

}

return console.log(`o menor numero é ${menor} o maior numero é ${maior}`);

}

cont(nums)