// Cadeia de Protótipos (prototype chain) 

// busca de atributos por ordem de herança
// atribuiremos a ordem de herança abaixo utilizando  __proto__

Object.prototype.altura = "1.80" // não é recomendado fazer isso, pode influenciar em todo o código
const avo = {cabelo: "Crespo" }
const pai = {__proto__: avo, olhos: 'Castanhos', time:'Vasco'}
const filho = {__proto__: pai, time: 'Flamengo'}
// a propriedade que não existir em filho será procurada em pai
// e se não existir será procurada em avo

console.log(filho.cabelo) // herdado do avo
console.log(filho.olhos) // herdado do pai
// o valor retornado sempre será da primeira propriedade encontrada
// caso existam mais de uma com o mesmo nome  
console.log(filho.time) // propriedade de filho, a propriedade de pai foi sombreada

//por não existir em nenhum dos objetos na cadeia, este valor foi procurado em Object.prototype
console.log(filho.altura)

// neste exemplo criamos um objeto com propriedades que serão herdadas 
// pelos objetos ferrari e volvo
const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 // essa propriedade irá sombrear velMaxima do objeto carro
}

const volvo = {
    modelo: 'V40',
    status() {
        // assim como "this" se refere ao objeto atual de execução,
        // "super" se refere ao protótipo/objeto atual de execução

        // no exemplo abaixo, super se refere a função status no
        //  contexto de execução do objeto carro
        return `${this.modelo}: ${super.status()}` // = return `V40: ${volvo.status()}`
    }
}

// criamos uma relação de herança utilizando "setPrototypeOf"
// primeiro passando um objeto como filho e depois um como protótipo/pai 
Object.setPrototypeOf(ferrari, carro) // carro é protótipo de ferrari
Object.setPrototypeOf(volvo, carro) // carro é protótipo de volvo
console.log(ferrari)
console.log(volvo)

volvo.acelerar(100) // executando a função herdada de carro
console.log(volvo.status())// executando a função de volvo que sombreou a função status de carro

ferrari.acelerar(300) // executando a função herdada de carro
console.log("F40:",ferrari.status()) // executando a função herdada de carro