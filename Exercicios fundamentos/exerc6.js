/**) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos */

function simples(capital, taxa, tempo){
    var tot =  capital+(tempo *  (capital*(taxa/100))) //taxa por dia
    return tot
}

console.log(simples(100, 10, 2));

function composto(capital, taxa, tempo){ //M = C ( 1+i)t
var tot1 = (1+(taxa/100))
var tot = capital*(Math.pow(tot1, tempo))
return tot
}

console.log(composto(100,10,30));

