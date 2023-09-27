const pilotos = ['chumaquer', 'Senna', 'verstappen', 'mcqueen']

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Renato')
console.log(pilotos);

pilotos.shift()//remova o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Gustava lima')//adiciona na primeiro posição do array
console.log(pilotos);

//splice pode adicionar ou remover elementos do array


//adiciona
pilotos.splice(2,0,'ferrari', 'mercedes')//adicionando no elemento 1
console.log(pilotos);

//remove
pilotos.splice(1,1)//vai remover no indice 1 e, apenas um elemento
console.log(pilotos);


//vai criar um novo array a partir de outro
const algunsPilotos = pilotos.slice(2)//array a partir do indice 2

console.log(algunsPilotos);


const algunsPilotos2 = pilotos.slice(1, 4)//vai pegar entre o 1 ate o 4, mas o 4 não é pegado 
console.log(algunsPilotos2);

