// Object.create() cria um novo objeto, utilizando um outro objeto existente como protótipo
// para criar um objeto com protótipo, basta declarar um objeto protótipo como primeiro parâmetro

const pai = {nome: "Carlos", corCabelo: 'preto'}

const filha1 = Object.create(pai) // filha1 foi criado com pai sendo seu protótipo
console.log("Objeto filha1:",filha1)
filha1.nome = "Ana"
console.log("nome:",filha1.nome) // nome criado dinâmicamente
console.log("Cor do cabelo:",filha1.corCabelo) // atributo herdado de pai

// o segundo parâmetro é um objeto que define as propriedades do objeto, este é opcional
const filha2 = Object.create(pai, {
    // essa sintaxe é similar a de Object.defineProperty
    olhos: {value: "castanhos"},
    nome: {value: 'Bia', writable: false, enumerable: true } 
})

console.log("nome:",filha2.nome)
console.log(filha2.olhos)
// por ter sido bloquedo para modificações, o atributo abaixo continua com o valor setado na sua criação
filha2.nome = "Carla" 
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}.`)

// ambos retornarão as chaves pois foram definidos
// não é possivel acessar atributos que não estejam enumerados(writable: true)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))//se o atributo "writable" estivesse false,a chave não seria listada 

for (let key in filha2) {// para cada chave em filha 2...
    filha2.hasOwnProperty(key) ? //verifique se a propriedade pertence ao objeto...
    // se sim imprima no console "key"...
    console.log(key) : console.log(`Por herança ${key}.`) 
    // se não imprima no console Por herança ${key}
}

// Object.create(null): ao passar null como parâmetro, o objeto criado não possui protótipo/pai
const objetoSemPrototipo = Object.create(null)
console.log("Objeto sem protótipo:", objetoSemPrototipo)
console.log(objetoSemPrototipo.__proto__)// undefined, nem mesmo Object.prototype é seu protótipo