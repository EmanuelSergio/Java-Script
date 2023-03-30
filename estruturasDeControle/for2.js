const notas = [5.5, 3.3, 7.9, 10, 8.9]
 
for( i in notas){
    console.log(i +" =" , notas[i]);
}

const pessoa ={
    nome: 'ana',
    sobrenome: 'carla',
    idade: 29
}

for (atributo in pessoa) {
    console.log(atributo +' = ' +pessoa[atributo]);
}