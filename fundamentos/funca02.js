// Armazenando uma função em uma variável ou constante

// podemos armazenar uma função comum com nome ou uma função anônima(sem nome)
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// podemos armazenar também uma função arrow
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))
// Arrow function é uma maneira dinâmica e reduzida de declarar funções utilizando "=>"
// existem 2 maneiras de declará-las a primeira feita logo acima utilizando chaves
// e com retorno implícito, sem as chaves

const subtracao = (a, b) => a - b // dessa maneira não é necessária a palavra "return"
console.log(subtracao(5, 4))
// sem as chaves será executada apenas uma sentença de código
// caso seja necessário criar funções mais complexas será preciso as chaves a palavra "return" 

// caso tenha um único parâmetro não é necessário utilizar parênteses

const imprimir = a => console.log(a)

imprimir("Impressionante!")