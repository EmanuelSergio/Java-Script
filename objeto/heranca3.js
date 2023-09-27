const pai = {nome:'pedro', corCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value:'Bia', writable:false, enumerable:true} //writable = congelado // enumerable = vai aparecer como key também
})

console.log(filha2.nome);
filha2.nome = 'Carla' //não é possível alterar
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key):console.log('por herança'); //aqui está falando que o nome foi listado na filha 2, mas a corCabelo 
                                                //não esta listada mas veio por herança
}

