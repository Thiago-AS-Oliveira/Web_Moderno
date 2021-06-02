// "callback" é uma função passada como parâmetro para outra função
// funções "callback" são funções passadas para serem executadas após um certo evento acontecer

// temos um objeto que representa um modelo de celular
let celular = {modelo: "fonophone 5.0", preco: 1500}
let notebook = {modelo: "Notebook LV350", preco:2500}

// temos uma função que calcula um desconto
function desconto(produto, porcentagem) {
    let descontado = produto.preco - produto.preco * porcentagem / 100
    return descontado
}

// Criamos uma função para imprimir os detalhes da compra do produto,passamos como parâmetros 
// o objeto "celular", um valor de desconto e uma função, que será a função callback.

// Cada vez que a função "compra" for executada, a função "desconto" será chamada de volta(callback)
// para ser executada também, este é o conceito de callback

function compra(produto, porcentagem, callback) {
    let nome = produto.modelo // atribuimos o valor de "modelo"
    let preco = callback(produto, porcentagem) // atribuimos o valor retornado na função "desconto"
    console.log(
`Produto: ${nome}
Preço: R$${preco}
Frete: R$15,00`)
}
// invocamos a função passando o objeto, o valor de desconto e a função
compra(celular, 10, desconto)
console.log()
compra(notebook, 25, desconto)
console.log()

// aqui veremos um exemplo mais simples

const fabricantes = ['Bmw', 'Mercedes', 'Audi']

// para cada elemento do array será imprimido o indice do elemento somando 1 e o elemento
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// a função será executada como callback pela função "forEach"
fabricantes.forEach(imprimir)

// podemos passar uma função diretamente
fabricantes.forEach(function (fabricante , n) {
    console.log(`${n + 1}º)${fabricante}`)
})

// e também uma arrow function
fabricantes.forEach((fabricante , i) => console.log(`${i+ 1}º:${fabricante}`))