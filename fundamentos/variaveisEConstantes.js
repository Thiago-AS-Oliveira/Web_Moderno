// Podemos criar variáveis com var e let
var a = 3
let b = 4

console.log(a, b)

var a = 30 // variáveis com var podem ser redeclaradas
b = 40 // let não permite redeclaração de valor, porém permite redeclar o valor

console.log(a, b)

// Podemos declarar constantes utilizando const 
// const não permite redeclaração de constantes e valor

const c = 5
// c = 7 // gera erro
// const c = 8 // gera erro

console.log(c)