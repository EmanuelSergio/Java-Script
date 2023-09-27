console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
     return this.split('').reverse().join('')
}

console.log('Emanuel Sergio Girardi'.reverse());

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first());

String.prototype.toString = function () //não mexa nesssas funções que já estão determinadas, ira substituir
{
    return 'lascou tudo'
}

console.log('emanuel'.reverse());


