/** Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const nums = [1,2,3,4,5,6,7,8,9,10]

function par(vetor) {
    
    var qtdimpar = 0
    var qtdpar = 0

    for (let index = 0; index < vetor.length; index++) {
        const element = vetor[index];
        if (element % 2 == 0) {
             console.log(`o ${element} é par`);
             
             qtdpar++
             
        }else{
             console.log(`o ${element} é impar`);
             
             qtdimpar++
        }
    }

    return console.log(`${qtdpar} são par e ${qtdimpar} são impar`);

}

par(nums)

