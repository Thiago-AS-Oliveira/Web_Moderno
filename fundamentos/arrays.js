// Array um dado/variavel que pode conter mais de um valor
// É utilizado para armazenar multiplos valores em uma variavel
// É uma estrutura indexada, ou seja, contém índices associados partindo de 0

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)

// Acessamos elementos especificos utilizando seu indice entre [] após o nome da sua variável
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])

// Ao tentar acessar um valor não definido, javascript retornará undefined
console.log(valores[4])

// Podemos adicionar mais um elemento utilizando o mesmo método
valores[4] = 10
console.log(valores)

console.log(valores.length)// a função lenght retorna a quantidade de elementos em um array

// Em JavaScript é possivel criar arrays com diferentes tipos de dados, como strings e numbers 
// em um único array
valores.push("123", 45, {"n": 12})// a função push também adiciona elementos em um array
console.log(valores)

console.log(valores.pop())// função que exclui o ultimo elemento de um array
console.log(valores)
// Podemos támbem utilizar a função delete passando o indice do elemento a ser excluido
delete valores[5]
console.log(valores)

console.log(typeof valores) //um array em js é configurado como object