// class Celular {
//     constructor(modelo, preco, cor) {
//         this.modelo = modelo
//         this.preco = preco
//         this.cor = cor
//     }

//     descricao() {
//         return `O modelo ${this.modelo} é um ótimo custo benefício`
//     }
// }

// Transformar class em uma  function factory

function Celular(modelo, preco, cor) {
    this.modelo = modelo
    this.preco = preco
    this.cor = cor

    this.descricao = function() {
        return `O modelo ${this.modelo} é um ótimo custo benefício`
    }
}

const redmiNote10 = new Celular('Redmi Note 10', `R$ ${1500}`, "grafite")

console.log(redmiNote10.modelo)
console.log(redmiNote10.cor)
console.log(redmiNote10.descricao())
console.log(redmiNote10.preco)