function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const tv50polegadas = trabalho1 && trabalho2;
   // const tv30polegadas = !!(trabalho1 ^ trabalho2) 
   const tv30polegadas = trabalho1 != trabalho2
   const manterSaudavel = !comprarSorvete //unario

   return {comprarSorvete, tv50polegadas, tv30polegadas, manterSaudavel} //retorna a chave da const e seu valor ja
}

console.log(compras(false, false));
console.log(compras(false, true));
console.log(compras(true, true));

