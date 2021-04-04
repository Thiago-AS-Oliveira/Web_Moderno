// O operador destructuring tem como objetivo desestuturar.(como seu nome sugere kkkk)
// Ou seja, extrair algun dados de uma estrutura.Seja ela um array ou um object
// Ele facilita o acesso de dados e na criação de variáveis com esses dados.
// É um recurso introduzido no ES2015

// Para ter acesso a alguma propriedade de um objeto utilizamos chaves "{}"
const cliente = {
    nome: "Paulo",
    idade: 25,
    endereco: {
       logradouro: "Av. Mário Q. Mário?",
       numero: 15
    }
}
// utilizamos const seguido do operador e suas chaves e passamos o objeto 
const {nome, idade} = cliente // as propriedades foram extraídas e transformadas em 2 novas constantes

console.log(nome, idade)
console.log(cliente)

// é possivel extrair as propriedades e mudar seus nomes
const {nome: _name, idade : age} = cliente
console.log(_name, age)

// caso a propriedade não exista, o retorno por padrão será undefined
// é possivel passar um valor padrão caso isso aconteça

const {sobrenome} = cliente
const {peso = "Não registrado"} = cliente

console.log(sobrenome)
console.log(peso)

// para acessar as propriedades do objeto "endereco" fazemos o seguinte
const {endereco: {logradouro, numero}} = cliente // as propriedades foram extraídas exceto endereco
console.log(logradouro, numero)

// caso passe somente "endereco" será criada somente a constante endereco com o seu valor atribuido
const {endereco} = cliente // nesse caso o objeto com as propriedades
console.log(endereco)