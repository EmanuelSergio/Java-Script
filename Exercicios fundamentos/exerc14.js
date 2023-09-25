/**Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
 */


const condicao = function(fruta){

switch (fruta) {
    case 'maçã':
        return console.log('não vendemos essa fruta aqui');
    case 'kiwi':
        return console.log('estamos sem kiwi');
    case 'melancia':
        return console.log('aqui esta, 3 reais o KG');
    default:
        return console.log('escrava algo');
        break;
}



}


condicao('melancia')