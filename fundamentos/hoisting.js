// Var possui o efeito de hoisting(elevação), isso faz com que 
// as variáveis declaradas sejam elevadas para o topo do documento (dai o nome hoisting)

// A variável "a" só será declarada abaixo, do "log" porém não irá gerar erro
// Somente a variável será elevada, como tivesse sido declarada sem um valor 
// Caso tenha algum valor atribuido, esse mesmo só estará disponível a partir da linha em que foi atribuido
// Caso a varável não seja declarada ou seja declarada com let e const o  resultado será um erro

// Obs: Não tem nenhum motivo para utilizar o conceito de hoisting na prática

console.log("a: ", a)// o resultado será undefined
var a = 2
console.log("a: ", a)

// let não possui hoisting
// console.log("b: ", b)// erro
let b = 1
console.log("b: ", b)