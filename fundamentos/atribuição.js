// Um operador de atribuição atribui um valor da esquerda para a um identificador à direita
const a = 1
let b = 2
const c = {}
c.valor = 3 // "valor" é o identificador de uma propriedade em um object

// existem também operadores de atribuição compostos,
// esses consistem em atribuir um valor com operações matemáticas
// e também reduzem a escrita do código uma vez que não é necessário repetir a variável
let num = 2

num += 2 // siginifica num = num  + 2
console.log(num)

num -= 2 // num = num - 2 
console.log(num)

num *= 3 // num = num * 3 
console.log(num)

num /= 2 // num = num / 2 
console.log(num)

num %= 2 // num = num % 2 // operação modular
console.log(num)