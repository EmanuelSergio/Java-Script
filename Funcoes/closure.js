//closure é o escopo criado quando uma funcao é declarada
//esse escopo permite a funcao acessar e manipular variaveis externas à funcao

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return  x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());
