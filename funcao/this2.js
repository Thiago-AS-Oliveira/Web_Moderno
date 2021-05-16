// "bind" liga o contexto de execução de "this" a uma variável setada como parâmetro

const usuario = {
    nome: "Marcelo Alvez",
    cpf: "321.456.987-10",
    cel:"+5522987654321"
}

// aqui temos uma função que irá imprimir os dados abaixo
function imprimir_Dados() {
    console.log("Nome:",this.nome)
    console.log("CPF:",this.cpf)
    console.log("Cel:",this.cel)
    // console.log(this) // imprimirá o objeto global ou o objeto ligado com "bind"
}
// resultado inicialmente será undefined pois não existe nenhuma das propriedades 
// no contexto de execução atual,neste caso o Objeto global.
console.log("Fora de Contexto:")
imprimir_Dados()

// "bind" ligará o o contexto "this" da função com o objeto "usuario", que foi passado como 
// parâmetro, assim ele irá referenciar as propriedades do objeto.
const imprimirUsuario = imprimir_Dados.bind(usuario)
// os valores de usuario serão impressos normalmente no console
console.log("Dentro do Contexto:")
imprimirUsuario()

// outro exemplo:
let pessoa = {
    nome: 'Thiago',
    sobrenome: 'Antonio',
    
    nomeCompleto: function() {
        console.log(this.nome + " " + this.sobrenome)
    }
}
pessoa.nomeCompleto()

// Ao instanciar a função do objeto "pessoa", foi criado um novo objeto somente com 
// com o método "nomeCompleto", "nome" e "sobrenome" não existem, o que faz 
// o retorno da função ser undefined
let seuNome1 = pessoa.nomeCompleto
seuNome1()

// Ao utilizar "bind" o contexto da função será ligado ao objeto pessoa, acessando "nome" e "sobrenome"
let seuNome2 = pessoa.nomeCompleto.bind(pessoa)
seuNome2()