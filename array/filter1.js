// filter faz uma filtragem de elementos, utilizando uma callback que realiza
// testes lógicos,  e retorna os elemetos em um novo array
// por conta da filtragem o array final pode ser menor que o array filtrado

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

// esta função, retorna todos os elementos que tenham preço menor ou igual a 30
console.log(produtos.filter(function(p){
    return p.preco <= 30
}))

// retornaremos os elementos de frageis e que tenham preço maior ou igual a 500
const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500
console.log("produtos filtrados")
console.log(produtos.filter(caro).filter(fragil))

const eletronicos = [
    {categoria: "notebook", modelo: "Lenovo IdeaPad s145", preco: 3000},
    {categoria: "notebook", modelo: "Acer Aspire 5", preco: 3500},
    {categoria: "notebook", modelo: "Dell Inspiron 15", preco: 4000},
    {categoria: "celular", modelo: "Redmi Note 10", preco: 1500},
    {categoria: "celular", modelo: "Galaxy s20", preco: 2500},
    {categoria: "celular", modelo: "MotoG 8", preco: 1500},
]
// criamos um array utilizando um teste lógico em que a 
// categoria é notebook e outro em que a categoria é celular 
// e filtramos para criar dois arrays para cada categoria
const notebooks = eletronicos.filter(produto => produto.categoria == "notebook")
const celulares = eletronicos.filter(produto => produto.categoria == "celular")

console.log("notebooks")
console.log(notebooks)
console.log("celulares")
console.log(celulares)