// Funções construtoras tem como objetivo criar objetos a partir de uma função.
// Para isso, declaramos uma função e instanciamos em uma variável ou constante.
// Funções construtoras permitem criar em um objeto, tudo que se pode 
// ser criado de maneira literal ou dinâmica, como métodos e atributos.


// por convenção são iniciadas com letras maiúsculas

function Celular (modelo, preco) { 
    // utiliza-se "this" para se referir as váriaveis no contexto atual
    // tornando elas acessíveis na instanciação...

    this.modelo = modelo
    this.preco = preco
    // memoria = "4bg" // por não ser declarada com this, seu valor não será instaciado 
}
// ... assim ao instanciar a função, as varíaveis se tornam metodos 
motorola = new Celular("Moto G", 1500) // neste processo a função se torna um novo objeto
console.log(motorola)
// console.log(motorola.memoria)
console.log(typeof Celular)// função
console.log(typeof motorola)// objeto


function Carro(velocidadeMaxima = 200, delta = 5) {
    // essa váriável só é acessivel nessa função
    let velocidadeAtual = 0

    // métodos acessiveis na instanciação 
    this.acelerar = function () {
        if(velocidadeAtual <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()// a cada acionamento da função os parametros serão somados
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
