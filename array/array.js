// Em JavaScript, Array é um objeto especial
// Array é uma estrutura indexada, em outras palavras,
// assim como um objeto tem pares de nome e valor, array tem índice e elementos
// seus índices não são visiveis como os nomes de elementos de um objeto
// porém são acessiveis.

// A sintaxe básica de um array é formada por colchetes ([]) com cada elemento 
// separado por virgula. Em JavaScript é possivel criar arrays como tipos diferentes de dados,
// se possível não faça isso, pois gera arrays poluídos 
console.log(typeof Array, typeof new Array, typeof [])

// podemos criar arrays instanciando a função Array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
// podemos criar arrays de maneira literal, o que é mais indicado
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
// podemos acessar elementos através dos seus índices, para isso
// passamos o nome do array e o indice entre os colchetes, sempre começando de 0
console.log('Aprovado:', aprovados[0])
console.log('Aprovado:', aprovados[1])
console.log('Aprovado:', aprovados[2])
// ao tentar acessar um elemento que não existem em um array, seu retorno é undefined
console.log('Aprovado:', aprovados[3])// undefined

// também podemos adicionar ou substituir elementos utilizando índices
// neste caso o índice 3 que não está setado é definido com um elemento
aprovados[3] = 'Paulo'
// com a função push, adicionamos elementos como último elemento de um array 
aprovados.push('Flavia')
// a função lenght retorna o numero de elementos de um array
console.log(aprovados.length)
console.log(aprovados)

// se adicionarmos um elemento em um índice distante do ultimo elemento do array
// criaremos espaços vazios entre um elemento e outro

// criamos um elemento no indice 9 criando 4 espaços vazios
aprovados[9] = 'Marcela'

console.log(aprovados.length)
console.log(aprovados)

// a função sort ordena o array por ordem alfabética
aprovados.sort()
console.log(aprovados)

// se excluirmos um elemento, o array não será reordenado, o seu espaço correspondente, 
// ficará vazio
delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])//undefined

// splice remove e adiciona elementos a um Array
aprovados = ['Bia', 'Carlos', 'Ana']
// para utilizar a função splice passamos primeiro o indice para que a partir dele 
// a função comece a operar, depois passamos o número de elementos que serão excluidos
// e por último os elementos que serão adicionados  
aprovados.splice(1, 1)
console.log(aprovados)

//adicionando
// caso não queira excluir nenhum elemento, basta utilizar 0
aprovados.splice(1, 0, 'Elemento1', 'Elemento 2')// remove e adiciona elementos a um Array
console.log(aprovados)

// /* 
// Assim como um objeto, um array pode ser alterado quando associado a uma constante,
// somente a constante não podera associar outro array.
// */