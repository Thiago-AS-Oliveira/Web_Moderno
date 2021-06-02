const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// criando um novo array somente com as notas menores que 7.0 sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(`notas1: ${notasBaixas1}`)

// criando o mesmo array de cima com uma função callback

// função comum
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(`notas2: ${notasBaixas2}`)

// arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(`notas3: ${notasBaixas3}`)