const escola = 'coder'

console.log(escola.charAt(4))
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));

console.log(escola.substring(1));//vai imprimir da primera letra pra frente
console.log(escola.substring(0, 3))

console.log('escola '+escola+'!');
console.log(escola.replace(/\w/g, 'p')) 

console.log('ana, maria, pedro'.split(',')); //separa os elementos dentro da string e o que diz onde separar é a virgula nesse caso
