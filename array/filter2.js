// criando uma versão própria de filter

// adicionamos a função no prototype de Array
Array.prototype.filter2 = function(callback) {// a função recebe uma callback como parâmetro
    const newArray = [] // um novo array é criado
    for (let i = 0; i < this.length; i++) { // o array será percorrido com o laço for
        // a estrutura if será utilizada para fazer um teste lógico
        if(callback(this[i], i, this)) { // se a callback retornar true...
            newArray.push(this[i]) // adicione o elemento no array
        }
    }
    // e por ultimo, o array será retornado
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter2(function(p){
    return false
}))

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500

console.log(produtos.filter2(caro).filter2(fragil))