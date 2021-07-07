// Classes também possuem o conceito de herança em JavaScript, que é baseado em protótipos

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// utilizamos "exetends" para definir que uma classe é filha de outra
// neste caso a classe "Pai" é filha de "Avo", em outras palavras "Avo" é protótipo de "Pai"
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // "super" é utilizada para acessar propriedades do protótipo(classe pai)
        // "Pai" herdou o sobrenome de "Avo"
        super(sobrenome)
        this.profissao = profissao
    }
}
// "Pai" é protótipo de "Filho"
class Filho extends Pai {
    constructor() {
        // "Filho" herda sobrenome e profissao de "Pai e Avô"
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)