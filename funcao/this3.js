// mais um exemplo
const jogador = {
    nome: "Paulo"
}

const rival = {
    nome: "Guilherme"
}

const seuNome = function () {
    console.log(this.nome)
}

const nome1 = seuNome.bind(jogador)
const nome2 = seuNome.bind(rival)

nome1()
nome2()