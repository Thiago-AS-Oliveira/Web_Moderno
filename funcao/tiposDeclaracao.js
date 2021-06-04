// existem 3 maneiras de declarar funções
console.log(soma(4, 3))

//function declaration
// declarando uma função diretamente
function soma(x, y) {
    return x + y
}// pode ser acionada antes de ser declarada

//function expression
// atribuindo uma função anônima em uma variável ou constante, sejam ela comum ou arrow 
const sub = function (x, y) {
    return x - y
}// só pode ser acionada após ser declarada
console.log(sub(4, 3))

//named function expression
// atribuindo uma função nomeada em uma constante ou variável
const mult = function mult(x, y) {
    return x * y
}// só pode ser acionada após ser declarada
console.log(mult(4, 3))