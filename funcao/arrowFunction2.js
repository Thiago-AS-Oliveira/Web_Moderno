function Pessoa() {
    this.idade = 0

    // utiilizando uma arrow function, o contexto de this permanece o mesmo independente
    // do contexto de execução em que foi chamado, assim quando executamos "setInterval",
    // o contexto permanece em Pessoa e não 
    // será necessário utilizar "bind" ou armazenar o contexto em uma constante como feito no 
    // arquivo "this4.js"
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa