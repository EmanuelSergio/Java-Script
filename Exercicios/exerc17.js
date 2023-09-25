/**Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

       const aumento = function(salarioAtual, planoAumento){
        var novoSalario;
        switch (planoAumento) {
            case 'A':
             novoSalario = salarioAtual+(salarioAtual*0.1)  
            return console.log(`aumento total de ${novoSalario}`);
            case 'B':
            novoSalario = salarioAtual+(salarioAtual*0.15)  
            return console.log(`aumento total de ${novoSalario}`);    
            case 'C':
            novoSalario = salarioAtual+(salarioAtual*0.2)  
            return console.log(`aumento total de ${novoSalario}`);           
            default:
                return console.log('insira informação valida');;
        }


       }

       aumento(1000, 'C')

       