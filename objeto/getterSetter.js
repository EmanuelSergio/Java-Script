const sequencia = {
    _valor: 1, //convenção -> pretendida acessar apenas internamente
    get valor(){ return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900 //ignorou por conta da nossa condição
console.log(sequencia.valor, sequencia.valor);

