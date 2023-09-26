//cadeia de prototipos (prototype chain)
Object.prototype.atributo0 = '0' // não é recomendado sobrescrever o pai de todos da herança
const avo = {atributo1: 'A'}
const pai = { __proto__: avo, atributo2: 'B', atributo3:'3'}
const filho = {__proto__: pai, atributo3: 'C'}

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax;
        }

    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:342 //shadowing (sombreamento)
}

const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)

console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());


