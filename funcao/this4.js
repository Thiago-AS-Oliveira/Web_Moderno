function Pessoa() {
    this.idade = 0

    const self = this
    // ao utilizar  "setInterval" o contexto de this muda, então "idade" não é acessada,
    // resultando em NaN, pois a variável não é incializada.
    // "setInterval" executa um contexto separado da função que o invocou, por isso "this" não é o mesmo
    setInterval(function() { 
        // armazenando this na constante self o contexto de "Pessoa" é ligado a função
        // assim executando a soma normalmente
        self.idade++
        console.log(self.idade)
    }
    /*.bind(this)*/,// podemos utilizar tbm "bind"
    1000)
}

new Pessoa