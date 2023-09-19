const pessoa = {
    saudacao: 'boa noite',
    falar(){
        console.log(this.saudacao); //this esta se referindo a saudacao
    }
}

pessoa.falar()
const falar = pessoa.falar;
falar()

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

console.log(falarDePessoa);