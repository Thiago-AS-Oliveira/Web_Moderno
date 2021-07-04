// Object.preventExtensions impede a adição de novos elementos ao objeto dinâmicamente
// porem permite a exclusão e modificação de valores
console.log('Object.preventExtensions')

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(produto)
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome  = "Borracha" // nome é modificavel
delete produto.tag // tag será deletada
produto.descrição = "Borracha escolar branca"// este atributo não será criado 
console.log(produto)

// Object.seal sela o objeto e impede a adição e remoção de elementos ao objeto
// porem permite a modificação de valores
console.log('Object.seal')
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não será criado
delete pessoa.nome// não será modificado
pessoa.idade = 29 // será modificado
console.log(pessoa)

// Object.freeze = selado + valores constantes
// impede a adição e remoção de elementos e impede a alteração de valores

console.log("Object.freeze")
const carro = {modelo: "Corolla", cor: "Preto"}
Object.freeze(carro)
console.log(carro)
carro.modelo = "Civic"
console.log(carro)