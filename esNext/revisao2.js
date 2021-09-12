// Arrow Function
// função anonima, tem que ser atribuida a uma constante ou variavel
// 1 parametro não é obrigado a usar parenteses, caso tenha mais de um é necessario
// ao abrir um bloco é obrigatório declarar return

const soma = (a, b) => a + b // em uma linha tem retorno implicito
console.log(soma(1, 2))

const soma2 = (a, b) => { return a + b }
console.log(soma2(3, 2))

// Arrow function (this)
//  this aponta para module.exports diferente de uma function normal

const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros default
// valor padrão caso não passem um parametro valido para função
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Cachorro')
log(undefined)
log(null)

// operador rest/spread

// o operador spread transforma um array em diversos parâmetros para uma função
// Ou seja, podemos invocar uma função que espera vários parâmetros utilizando o Spread
const somaSpread = (a, b, c) => console.log('somaSpread:', a + b + c)
const numeros = [1, 2, 3]
const numeros2 = [4, 5, 6]
somaSpread(...numeros)
somaSpread(...numeros2)
// spread também pode compor arrays
const todosNums = [...numeros, ...numeros2]
console.log(todosNums)

// o operador rest permite transformar um número indeterminado de parâmetros em um array
// e ele apenas funciona dentro de uma função, sendo ele um dos argumentos da função

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4))