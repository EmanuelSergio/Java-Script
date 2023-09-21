class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`);
    }

}

const p1 = new Pessoa('Joao')
p1.falar()

const pessoa = nome =>{
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = pessoa('joaozinho')
p2.falar()