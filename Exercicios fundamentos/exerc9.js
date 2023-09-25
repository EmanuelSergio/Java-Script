/**Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 */

function avaliacao(nota){

var num = nota.toString()[1];

if(nota < 38){
    return console.log('aluno reprovado');
}else if(nota == 38){
    nota = 40
    return console.log(`aluno aprovado pelo conselho, nota: ${nota}`);
    
}else if(num == 3 || num == 4 || num == 8 || num == 9){
  var tot =  (nota - num) + (Math.ceil(num / 5) * 5);

    return console.log(tot);
}else{
    console.log('aluno atingiu nota máxima');
}

}

avaliacao(100)
