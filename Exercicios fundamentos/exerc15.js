/**Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 */

const compraCarro = function(modelo){

    switch (modelo) {
        case 'hatch':
            return console.log('compra efetuada com sucesso');
        case 'sedan':
            return console.log('tem certeza de deseja comprar esse carro?');            
        case 'mercedes':
            return console.log('não trabalhamos com esse tipo de carro');
        default:
            return console.log('informe algum modelo');
            break;
    }


}

compraCarro('sedan')