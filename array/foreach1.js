const aprovados = ['Daniel', 'Marcelo', 'thiago', 'fernando']

aprovados.forEach(function(nome, indice){
    console.log(indice + 1, nome);
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados)

const reprovados = ['Roberto', 'gustavo', 'janaina', 'vitor']

reprovados.forEach(function(nome, id){
    console.log(`${nome} indice: ${id + 1}`);
})

