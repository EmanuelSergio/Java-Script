/**) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function util(dia) {
    
    switch (dia) {
        case 1: 
            return console.log('domingo');
        case 2:
            return console.log('segunda');       
        case 3: 
            return console.log('terça');
        case 4:
            return console.log('quarta');
        case 5: 
            return console.log('quinta');
        case 6:
            return console.log('sexta');
        case 7: 
            return console.log('sabado');
        default:
            console.log('insira um dia');
            break;
    }

}

util(3)