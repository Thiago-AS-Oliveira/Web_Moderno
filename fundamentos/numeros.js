// Javascript permite declarar números sem especificar o tipo numérico

const peso1 = 1.0 // número inteiro
const peso2 = Number('2.0') //cria um numero e pode converter uma string em um valor númerico

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // verifica se um número é inteiro
console.log(Number.isInteger(peso2)) 

const avaliação1 = 7.802
const avaliação2 = 8.143

// Podemos fazer operações aritiméticoas utilizando as  variáveis

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)

// JavaScript fornece funções  para trablahar e manipular numeros
console.log(media)
console.log(media.toFixed(2)) // define um número de casas decimais
console.log(media.toString()) // converte um number para uma string // passando o numero 2 converte para binário
console.log(typeof media)
console.log(typeof Number)//"Number" com N maiúsculo é uma função