const prod1 = {

    nome: '...',
    preco: 45

}

const prod2 = {
    nome:'...',
    preco: 2222
}

//Esquema acima pode acaber sendo muito trabalhoso 
//FORMA FACTORY:

function criarPessoa(){
    return{
        nome:'ana',
        sobrenome: 'carla'
    }
}

console.log(criarPessoa());