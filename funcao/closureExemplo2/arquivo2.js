// declaramos outra constante valor
const valor = 300

// importamos as funções e armazenamos na constante abaixo
const arquivo1 = require("./arquivo1")

// instanciamos a função "imprimir"
const funcaoImprimir = arquivo1.imprimir
// ao executar a função, o valor que será imprimido no console será o valor declarado em "arquivo1"
// devido ao closure em javascript
funcaoImprimir()

// para imprimir "valor" de "arquivo1" temos que declarar outra função...
function imprimir() {
    console.log(`O valor do final é ${valor}`)
}
imprimir()

// ...ou definir em "arquivo1" uma função pensada para imprimir algum valor no escopo atual
const imprimirValor = arquivo1.imprimirValor

// essa função declarada no "arquivo1"  imprime o valor da constante no escopo atual 
// se ela for passada como parâmetro
imprimirValor(valor)