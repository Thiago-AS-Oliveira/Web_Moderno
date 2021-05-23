// "Arrow function" é uma maneira mais reduzida de criar funções,

// função declarada normalmente
let dobro = function(a) {
    return 2 * a
}
console.log(dobro(3))

// criamos uma arrow function substituindo a palavara reservada "function" e passando 
// o simbolo de mais e maior que (=>) entre os parametros e o bloco.
// Elas sempre serão anônimas, caso queira reutilizá-las, terão que ser armazenadas em variáveis.

let triplo = (b) => {
    return 3 * b
}
console.log(triplo(2))

// funções arrow tem o retorno implícito,
// caso tenha somente uma linha e as chaves"{}" sejam omitidas.
let quadruplo = c => 4 * c
console.log(quadruplo(2))

// È possivel omitir os parênteses na declaração caso tenha somente um parâmetro
let cumprimento = periodo => console.log(`Bom ${periodo}!`)
cumprimento("Dia") 
// podemos utilizar um único underline (_)
let ola = _ => 'Olá!' // quer dizer que possui um único parãmetro, porém
// ele pode ser omitido ao invocar a função
console.log(ola())

// o mais comum é utilizar os parênteses vazios
let hello = () => 'Olá!'

console.log(hello())