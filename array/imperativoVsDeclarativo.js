const alunos = [
    {nome: 'joao', nota: 7.9},
    {nome: 'maria', nota:9.2}
]

//imperativo = tenho pouco reeuso = leva-se em conta o COMO deve ser feito, maneiras expeciais
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length);

//declarativo = muito mais flexivel por conta que posso usar em varios locais as variaveis 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);