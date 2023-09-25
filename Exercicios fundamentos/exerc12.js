/**Faça um algoritmo que calcule o fatorial de um número */
     
function fat(num) {
    
    let tot = 1;
    for (let n = 1; n <= num; n++) {
        
        tot *= n
        
    }

    return tot;

}

console.log(fat(10));