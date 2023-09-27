/**Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function media(n1,n2,n3){

notas = [n1,n2,n3]
let tot = 0
for (let index = 0; index < notas.length; index++) {
     tot += notas[index]
     

}

if(tot/3<5){
    return console.log('reprovado com média ' +tot/notas.length);
}else if(tot/3>=5 && tot <=30){
    return console.log('aprovado com média: ' +tot/notas.length);
}

}

media(1,8,10)

