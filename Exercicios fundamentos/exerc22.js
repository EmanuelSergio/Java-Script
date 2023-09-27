/** Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function anuidade(mes, valor){

    if(mes == 1){
        return console.log(valor);
    }else{
        
        var s = mes - 1
        var tot1 = (1+(5/100))
        var tot = valor*(Math.pow(tot1, s))
        return console.log(tot.toFixed(1));
    }

}

anuidade(2, 1000)
