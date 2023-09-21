function Pessoa(nome){
this.nome = nome; //se eu deixar esse this iria funcionar, porem não teria como alterar o nome depois

this.falar = function(){
    console.log(`Meu nome é ${this.nome}`);
}

}

const p1 = new Pessoa('carlos');
p1.falar()

