/**) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

const verifica = function(num){

    if(num%3){
        return false
    }else{
        return true
    }

}



console.log(verifica(15));
