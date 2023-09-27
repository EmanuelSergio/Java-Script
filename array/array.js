console.log(typeof Array, typeof new Array, typeof []);


let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'paulo'

console.log(aprovados[3]);
aprovados.push('abia') //forma mais correta de se adicionar no array 
console.log(aprovados.length);

aprovados[9] = 'rafael'

console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort() //organiza os elementos, coloca os elementos vazios para o final do array, retornando um novo array
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);

aprovados = ['bia', 'carlos', 'ana']

aprovados.splice()//serve pra add elementos ou remover ou add e remover ao mesmo tempo

aprovados.splice(1,2, 'elemente1', 'elemento2')//comecou a excluir a partir do idice 1 e excluiu dois indices e add dois elementos depois
console.log(aprovados);

aprovados.splice()