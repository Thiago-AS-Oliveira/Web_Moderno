const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappem')//adiciona elementos no final
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona elementos no começo
console.log(pilotos)

// splice adiciona e remove elementos 
// array.splice(indice, remover, elementos para adicionar...)

pilotos.splice(2, 0, 'Bottas', 'Massa')//adicionar
console.log(pilotos)

pilotos.splice(3, 1) //remover
console.log(pilotos)

// slice cria um novo array retirando elementos a partir de um array existente
// pegando os elementos a partindo do indice atribuído na função 
// EX: let  array2 = array1[indice]
const algunsPilotos1 = pilotos.slice(2)//  atribuí elementos a partir do indice 2 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
// atribuí do índice 1 até o ultimo antes do segundo índice passado como parâmetro
// [índice1, índice2, índice3], o quarto índice não foi atribuído
console.log(algunsPilotos2)