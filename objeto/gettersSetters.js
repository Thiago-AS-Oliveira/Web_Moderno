// getters e setters são metodos reservados das classes
// eles possuem a finalidade de encapsulamento, permitem a manipulação de dados
// sem alterar a estrutura básica do objeto

// criamos uma classe para construir objetos, neste caso modelos de celular
class Celular {
    constructor(modelo, armazenamento, memoria) {
        this.modelo = modelo
        this.armazenamento = armazenamento
        this.memoria = memoria
    }
    // um getter tem o objetivo de retornar dados
    // sua sintaxe utiliza a palavra reservada "get" seguida do seu método para retornar um valor
    get info() { // utilizando o método "info"  retornamos as informações do modelo
        return `
Modelo: ${this.modelo} 
Armazenamento: ${this.armazenamento}
Memória: ${this.memoria}`
    }
    // um setter tem o objetivo de alterar dados
    // sua sintaxe utiliza a palavra "set" seguida de um método para alterar  um valor
    set alterarMemoria(memoria2) { 
        // utilizando o metodo "alterarMemoria", alteramos o valor da 
        // memória do celular em questão
        this.memoria = memoria2
    }
}


const redmiNote10 = new Celular("Redmi Note 10", "128gb", "6gb")
console.log(redmiNote10.info)

redmiNote10.alterarMemoria = "4gb"
console.log(redmiNote10.info)
console.log()


// podemos utilizar o valor retornado de get diretamente para diferentes tratamentos 
class Desconto {
    constructor(preco) {
        this.preco = preco
    }
    get price() { // função que retorna o preco
        return this.preco
    }
    // faremos alterações no preço do produto utilizando o valor retornado pelo metodo abaixo
    set valorDesc(desc) {
        if(this.price >= 1000) {
            this.preco = this.preco - this.preco * desc
        }
    }
    alguma() {}
}

let notebook = new Desconto(1000)

console.log("Notebook:", notebook.price)
notebook.valorDesc = 0.2
console.log("Notebook:", notebook.price)