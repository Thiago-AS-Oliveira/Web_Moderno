// undefined é setado por parão caso um valor não seja incializado

let valor // não inicializada
console.log(valor)// retorna undefined

// undefined é diferente de null

valor = null // ausencia de valor
console.log(valor)
// para zerar o valor de uma variável é recomendado utilizar null ao invés de undefined

const produto = {}
 
console.log(produto.preco)// retorna undefined
// console.log(produto.preco.a) // gera um erro pois tenta acessar uma propriedade de algo undefined
console.log(produto)

produto.preco = undefined // avite atribuir undefined
console.log(produto)
console.log(!!produto.preco)

produto.preco = null // sem preço
console.log(produto)
console.log(!!produto.preco)