// O laço de repetição for...in permite iterar sobre as propriedades 
// enumeradas de um objeto de acordo com a ordem em que foram inseridos.
// seu uso é mais idicado em objetos

// for in em um array acessa o indice e o valor

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let indice in notas) { // para cada "indice" no array "notas"
    // execute...
    console.log(indice, notas[indice])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// for in em um objeto acessa o atributo e o valor

for(let atributo in pessoa) { //para cada "atributo" no objeto "pessoa"
    // execute...
    console.log(`${atributo} = ${pessoa[atributo]}`)
}