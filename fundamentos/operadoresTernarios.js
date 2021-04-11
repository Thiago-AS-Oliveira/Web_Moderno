// Operador Ternário(condicional) utiliza três operandos

// o primeiro é a condição que faz uma operação lógica que retorna true ou false,
// baseado nesta resposta temos o o segundo operando 
// que é o valor1, que é retornado caso a condição seja true e temos o 
// terceiro  que é retornado caso a condição seja false

// condição ? valor 1(true) : valor 2(false)

// No exemplo abaixo esta determinado que se a nota for maior ou igual a 7 retorne "aprovado"
// caso seja menor retorne "reprovado"
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

console.log(resultado(7.5))
console.log(resultado(6))