// Class permite criar objetos de maneira predefinida

class Celular {
    // para criar atributos utilizamos a palavra constructor
    constructor(modelo, preco, cor) { // passamos parâmetros que serão utilizados como atributos
        this.modelo = modelo
        this.preco = preco
        this.cor = cor
    }
// declaramos métodos diretamente no corpo da classe 
    descricao() {
        return `O modelo ${this.modelo} é um ótimo custo benefício`
    }
}

// para instanciar basta utilizar a palavra "new" passar o nome da classe e os parâmetros
const miNote10 = new Celular("MI Note 10", `R$ ${1500}`, "Grafite")

console.log(miNote10.modelo)
console.log(miNote10.preco)
console.log(miNote10.cor)
console.log(miNote10.descricao())
console.log()// espaço


// utilizando uma factory function, o this fica restrito a função
const criarPessoa = nome => {
    return {
        falar: () => {console.log(`Meu nome é ${nome}`)}
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()