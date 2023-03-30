Number.prototype.entre = function entre(inicio, fim) {
    return this >= inicio && this <= fim

}

const imprimirResultado = function (nota) {
   if (nota.entre(9, 10)) {
        console.log('quadro de honra');
   } else if(nota.entre(7, 8.99)){
       console.log('aprovado');

   }else{
    console.log('reprovado');
   }

}

imprimirResultado(9)