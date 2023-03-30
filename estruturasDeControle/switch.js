const imprimirResultado = function(nota){
    switch (Math.floor(nota)) {
        case 10:
            console.log('toppppp');
            break;
    case 9:
            console.log('top');
            break
    case 8: case 7: case 6:
        console.log('hummmm');
        break;
        default:
            console.log('cade a nota');
            break;
    }
}

imprimirResultado()