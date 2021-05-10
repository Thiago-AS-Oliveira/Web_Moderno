// Em JavaScript funções possuem o objeto "arguments", um objeto Array 
// responsável pelo armazenamento de parâmetros de uma função

function imprimirParams() {
    return arguments
}
console.log(imprimirParams())
// os parâmetros passados na execução da função serão armazenados como em um array
console.log(imprimirParams(2, 3, 4))

// utilizando o objeto "arguments" podemos criar funções sem declarar nenhum valor de entrada
// e executá-las declarando esses valores de entrada

function args() {
    for(indice in arguments) { // para cada indice dentro de "arguments"
        console.log(arguments[indice]) // imprima no console seu elemento correspondente
    }
}
args(2, 3, 4,28, "PSE")


function soma() {
        let soma = 0
        for (i in arguments) { // para cada elemento em "arguments"...
                soma += arguments[i] // some cada elemento na variável "soma"...
            }
    return soma // e retorne soma
 }

 console.log(soma())
 console.log(soma(1))
 console.log(soma(4,5,1))

 console.log(soma(2,4,'são')) // em caso de strings, ocorre uma concatenação
 console.log(soma('A'+'B'+'C'))
