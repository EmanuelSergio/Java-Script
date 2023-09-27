class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }

}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)//estou chamando o sobrenome da outra classe
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('silva')
    }
}

const filho = new Filho 
console.log(filho);