// map é utilizado para transformar um array em outro, modificando valores sem alterar o original

const nums = [1, 2, 3, 4, 5]
console.log("array original:",nums)

//for com propósito
// criaremos uma função que retorna os valores multiplicados
let resultado = nums.map(function(elemento) {
    return elemento * 2
})
console.log("array pós-map:",resultado)

// é possivel encadear funções map
const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
// a função replace vai trocar o ponto pela virgula
const dinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

// transformando o array nums em um array com valores em reais
resultado = nums.map(soma10).map(triplo).map(dinheiro)

console.log(resultado) 