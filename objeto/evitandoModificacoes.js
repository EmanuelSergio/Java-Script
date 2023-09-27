//Object.preventsExtensions => vai prevenir que o objeto seja extendido, impedindo de adicionar novos atributos 
//posso excluir, mas aumentar a quantidade de atributos não, mas permite alterar o valor dos atributos

const produto = Object.preventExtensions({
    nome: 'qualquer', preco:12331, tag:'promocao'
})

console.log('extensivel: ', Object.isExtensible(produto)); //connfirmando que não é extensivel

produto.nome = 'borracha'
produto.descricao = 'borracha branca escolar'
delete produto.tag
console.log(produto);

//Object.seal = selar => n consigo add novos atributos nem excluir
//mas consigo modificar os valores
const pessoa = {nome:'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'gustavo'
delete pessoa.nome
pessoa.idade = 23

console.log(pessoa);

