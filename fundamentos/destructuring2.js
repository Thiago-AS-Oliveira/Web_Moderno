// Para extrairmos elementos de um array utilizamos os colchetes "[]"

// Utilizamos const seguido do operador e o nome da variável e passamos o array
const [a] = [10]// dessa maneira  foi criada a constante "a" extraindo o primeiro valor do array
console.log(a)

// No contexro de array, o operador destructuring acessa cada elemento proprocionalmente.
// Em resumo, se o elemento a ser acessado estiver no indice 3, será necessário declarar
// espaços vazios nos indices anteriores

const [, , ,n3] = [0, 1, 2, 3]//  será criada somente a constante n3 os outros indices serão ignorados
console.log(n3)

const [num1, , num3, , num5, num6 = 0] = [10, 7, 9, 8]
console.log(num1, num3, num5, num6)

// o mesmo vale em estruturas aninhadas

const [, [, nota]] = [[, 8, 9], [9, 6, 8]]
console.log(nota)

const [, array1, object2,] = [12, [2, 4, 5], {nome: "Carlos"}]
console.log(array1, object2)