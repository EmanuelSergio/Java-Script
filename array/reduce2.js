const alunos = [
    {nome: 'joao', nota: 7.3, bolsista:false},
    {nome: 'Pedro', nota: 9.1, bolsista:true},
    {nome: 'Carlos', nota: 2.3, bolsista:true},
    {nome: 'Amanda', nota: 7.9, bolsista:false}
 ]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
let alunoBolsa = alunos.map(a => a.bolsista).reduce(todosBolsistas)

console.log(alunoBolsa);

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas));