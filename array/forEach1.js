// a função forEach percorre um array, elemento por elemento
// executando uma função callback para cada um desses elementos

const aprovados = ['Flavio', 'Junior', 'Nathalia', 'Carla', 'Marcos']
console.log("Aprovados turma A:")
aprovados.forEach(function(nome){ console.log(nome)})

// forEach retorna 3 valores na seguinte ordem: elemento, índice e array
// ex: array.forEach(elemento, índice, array)
// caso não queira trabalhar com indice ou o array, não é necessário declara-los 

const array1 = [12, 34]
array1.forEach(function(elemento, indice, array) {
console.log()
console.log("elemento:",elemento) 
console.log("índice:", indice)
console.log("array:", array)
})

const aprovados2 = ['Agatha', 'Guilherme', 'Aline', 'Marcele', 'Roberto']

//  para cada elemento neste array será executada uma função que irá imprimir no console
// o indice do elemento + 1 e o elemento
console.log("Aprovados turma B:")
// é possivel utilizar arrow functions
aprovados2.forEach((nome, indice) => console.log(`${indice + 1}: ${nome}`))


//também é possivel utilizar funções armazenadas em variáveis ou constantes
console.log('Aprovados turma C:')
const aprovados3 = ['Manuel', 'Leonardo', 'Leandra', 'Ana']
const exibirAprovados = nome => console.log(nome)
aprovados3.forEach(exibirAprovados)
