// criando um segundo forEach para entedermos melhor como funciona
// a função original

// adicionamos a função no protype de Array,
// como parâmetro essa função recebe uma função callback 
Array.prototype.forEach2 = function(callback) {
    // percorremos o array com o laço "for"
    for(let indice = 0; indice < this.length; indice++) {
        // e executamos essa função callback passando trẽs parâmetros
        // o primeiro parâmetro é o elemento, sendo ele acessado com colchetes e o indice atual,
        // como acessamos elementos de um array normalmente, o segundo é o próprio indice
        // e o terceiro é o array
        callback(this[indice], indice, this) // = (array[índice], índice, array)
    }
}

const aprovados = ['Agatha', 'Guilherme', 'Aline', 'Marcele', 'Roberto']

console.log("Aprovados turma A:")
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}: ${nome}`) // resultado semelhante ao do forEach original
})