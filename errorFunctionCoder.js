function tratarErroELancar(erro) {
    throw new Error('*,,,*');
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')

    } catch(e) {
        tratarErroELancar()
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);