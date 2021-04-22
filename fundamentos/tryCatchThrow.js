// "try catch' é uma estrutura para tratamentos de possiveis erros.
// Basicamente sua aplicação pode tratar ou retornar um erro especifico,
// caso sua declaração possa de alguma maneira ocasionar um erro.
// Ao declarar algum trecho de código que possa gerar um problema "try", tenta executar 
// e caso o bloco apresente um erro "catch" retorna algo definido no seu código 

// sintaxe:
// try { marca o bloco a ser testado
    // trecho de código que pode gerar 
    // algum erro
// } catch (variavel-que-possui-o-erro-identificado) {
    //  bloco de tratamento do erro 
// }

function imprimirUsuario(obj) {
    const dados = obj
    try {
        console.log(dados.nome.toUpperCase())
    } catch(err) {
        console.log("Localizamos um erro: usuario invalido")
    } finally { // temos o bloco finally que executa a declaração independente do ocorrido acima
        console.log("Fim")
    }

}
const usuarioComErro = {name: "Thiago"}// está escrito name e não nome
const usuario = {nome: "Thiago"}
imprimirUsuario(usuario)
imprimirUsuario(usuarioComErro)


// existe a declaração "throw" que pode gerar uma exceção declarada pelo desenvolvedor

function funcaoInvalida(err) {
    throw "Localizamos um erro: usuário invalido"
}

function imprimirUsuario2(obj) {
    const dados = obj
    try {
        console.log(dados.nome.toUpperCase())
    } catch(err) {
        funcaoInvalida()
    }

}

imprimirUsuario2(usuario)
imprimirUsuario2(usuarioComErro)