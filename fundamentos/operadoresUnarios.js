// Um operador unário é uma operação com apenas um operando
// dois exemplos de operadores são o de decrementação "--"
// e o de incrementação "++", ambos podem ser utilizados antes ou depois
// do operando

let num1 = 1
let num2 = 2

// operador postfix (operando seguido do operador)
num1++ // num1 = num1 + 1
console.log("postfix: ",num1)
num1-- // num1 = num1 - 1
console.log("postfix: ",num1)

// operador prefix (operador seguido do operando)
++num1 // num1 = num1 + 1
console.log("prefix: ",num1)
--num1 // num1 = num1 - 1
console.log("prefix: ",num1)


// Existe uma diferença entre os operadores postfix e prefix fazem seu código ter comportamentos
// diferentes de acordo com a maneira em que utilizados.  
// prefix faz operação e depois a leitura do valor, já postfix faz primeiro a leitura 
// depois a operação

// neste caso o valor de "num1" foi incrementado primeiro e depois lido, sendo comparado ao valor de 
// "num2", que foi lido e depois foi decrementado
console.log(++num1 === num2--)

// se executarmos a comparação após essas operações o resultado será false
console.log(num1 === num2)




