function imprimirNome(obj) {
    console.log(obj.name.toUpperCase() + '!!!');
}

function tratarErroLancar(erro) {
  //  throw new Error('......')
  //throw 10
  //throw true
 //throw 'mensagem'
 throw{
    nome: erro.name,
    msg : erro.mensagem,
    date: new Date


 }
}

const obj = {nome: 'roberto'}

try {
    imprimirNome(obj)
    
} catch (e) {
    
    tratarErroLancar(e)
    
}finally{
    console.log('final');
}
