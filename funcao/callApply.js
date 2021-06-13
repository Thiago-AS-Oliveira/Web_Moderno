// call e apply tem como objetivo mudar ou ligar o valor de this a um determinado 
// escopo(contexto) de execução, assim como bind,
// com a diferença de que call aceita uma lista de parâmetros 
// e apply aceita um único array de parâmetros.

// criamos uma função que irá receber um parâmetro, esse será a porcentagem de desconto
function produto(desconto) {
    let valorFinal = this.preco - this.preco * desconto // calculamos o valor final 
    // retornaremos uma template string com o nome do produto, preço, desconto e valor final 
    return `Produto: ${this.nome}
Preço: ${this.preco}
Desconto: ${desconto * 100}%
Valor final: ${valorFinal}`
}

const motoG = {
    nome: 'Moto G',
    preco: 1500,
}

// agora executamos a função ligando o contexto do objeto "motoG" utilizando os 2 métodos
// neste exemplo utilizamos um único parâmetro porém é possivel utilizar múltiplos

// com call, primeiro passamos o objeto(escopo de execução) e depois os parâmetros
console.log(produto.call(motoG, 0.1))
console.log()
// com apply, também passamos o objeto e depois os parâmetros, porém dentro de um array.
//  não é possivel executar a função com os parâmetros fora de um array
console.log(produto.apply(motoG, [0.1]))

const RedmiNote10 = {nome: "Redmi Note 10", preco: 1700}

// também é possivel executar os dois métodos sem os parâmetros,
// porém, se os parâmetros forem fundamentais, alguns bugs podem surgir
// neste caso, sem a definção do  parâmetro,desconto assumirá o valor undefined, então
//  "Desconto" e "Valor Final" retornam NaN, pois farão operações em cima de um valor undefined

console.log(produto.call(RedmiNote10))
console.log()
console.log(produto.apply(RedmiNote10))