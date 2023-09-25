/**) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function util(dia) {
    
    switch (dia) {
        case 1: 
            return console.log('domingo');
        default:
            break;
    }

}

util(1)