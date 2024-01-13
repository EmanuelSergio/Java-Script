 const alunos = [
    {nome: 'joao', nota: 7.3, bolsista:false},
    {nome: 'Pedro', nota: 9.1, bolsista:true},
    {nome: 'Carlos', nota: 2.3, bolsista:true},
    {nome: 'Amanda', nota: 7.9, bolsista:false}
 ]


 //pega o indice 0 e uso como acomulador
 //e vai acomulando com o segundo indice 

 const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
 })

 console.log(resultado);