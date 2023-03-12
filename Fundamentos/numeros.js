const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //verificando se é um valor inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 6.871
const avaliacao2 = 9.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)); //arredonda casas decimais
console.log(media.toString()); //transforma numero em string (apenas aqui)

console.log(typeof media);//tipo
console.log(typeof Number);//funcao


