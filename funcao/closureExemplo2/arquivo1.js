// neste outro exemplo declaramos uma constante e uma função que imprime o valor da constante
const valor = 5000

function imprimir() {
    console.log(`O valor do final é ${valor}`)
}


// função criada para imprimir o valor em outro escopo(driblar closure)
function imprimirValor (valorForadeClosure) {
    console.log(`O valor do final é ${valorForadeClosure}`)
}

// exportaremos as funções para serem executadas  no arquivo2
module.exports = {imprimirValor, imprimir}