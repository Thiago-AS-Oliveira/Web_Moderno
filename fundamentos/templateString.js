// Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.

const nome = "Rebbeca"
const concatencao = "Olá " + nome + "!"
const template = `Olá ${nome}!` 

console.log(nome)
console.log(concatencao)
console.log(template)


const quebraDeLinha = `
linha1
linha2
linha3 
`
console.log(quebraDeLinha)

// é possivel adicionar algumas expressões utilizando ${}

const up = texto => texto.toUpperCase()
const uppercase = `Ei... ${up("cuidado")}!!!`
console.log(uppercase)