const funcs = []

for(let  i =0; i < 10; i++){

    funcs.push(function() {
        console.log(i);//vai lembrar o valor de 'i' naquele momento pois possui escopo de bloco
    })
    
    } 
    
    funcs[2]()
    funcs[8]()
