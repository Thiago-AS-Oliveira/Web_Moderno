// concat tem como objetivo concatenar/adicionar arrays e novos elementos para arrays

const filhas = ['Ualeska', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
// sua sintaxe é simples, em um array a função é declarada, e como parâmetro
// podem ser declarados elementos, ou arrays
//  todos armazena o array filhas concatenando o array filhos e o elemento "Fulano" 
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)
// os 2 primeiros arrays não foram alterados
console.log(filhas)
console.log(filhos)

// é possivel adicionar multiplos parâmetros, inclusive adicionar arrays dentro de arrays
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))