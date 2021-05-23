// função anônima é uma função sem nome
// caso queira reutilizá-la, declare em uma variável ou constante
 
const soma = function (x, y) {
    return x + y
}

const divisao = function (x, y) {
    return x / y
}

// função que recebe uma das funções acima como parâmetro
const imprimirResultado = function (a, b, operacao = soma) { // soma é o padrão
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // como o terceiro parâmetro foi omitido, soma foi executada 
imprimirResultado(10, 5, divisao)
// passando uma função diretamente entre os parâmetros
imprimirResultado(15, 5, function (x, y) {
    return x - y
})
// passsando uma arrow function
imprimirResultado(3, 2, (x, y) => x * y)

// função anônima em um objeto
const pessoa = {
    falar: function () {
        console.log('Fala comigo')
    }
}

pessoa.falar()