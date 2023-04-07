function Carro(velocidadeMaxima = 200, delta = 5){
   //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
 
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()

console.log(uno.getVelocidadeAtual());

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()

console.log(Ferrari.getVelocidadeAtual());