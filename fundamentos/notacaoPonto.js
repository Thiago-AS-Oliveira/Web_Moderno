// Notação de ponto é um método utilizado para acessar propriedades de objetos

// console é um objeto e para acessarmos a propriedade "log", que é uma função,
// utilizamos a notação de ponto "."
console.log("Olá")

// O mesmo vale em outros objetos, sejam eles declarados no seu código,
// ou definidos por padrão na especificação da linguagem

console.log(Math.ceil(6.1))// accessando a função ceil
const obj = {Propriedade: "Genérica"}
console.log(obj.Propriedade)

// Podemos também criar propriedades dinâmicamente 
const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1)
console.log(obj1.nome)

function Obj(nome) {
    // utilizando "this." tornamos a variável acessivel fora da função
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
// acessamos também funções
obj2.exec()