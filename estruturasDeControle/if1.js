function soBoaNota(nota) {
    if (nota >= 7) {
        console.log('parabens pela nota ' +nota);
    }
}

soBoaNota(8)

function seForVerdade(valor) {
    if (valor) {
        console.log('verdade '+valor);
    }

}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
