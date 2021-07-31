// se um módulo exportado retornar uma função é possivel declarar parâmetros
// isso permite trabalhar com funções de todas as maneiras que JavaScript permite
// seja criando uma função construtora, classe, factory, etc...

// o módulo importado possui uma função que recebe multiplos parâmetros
// a função é executada na requisição do módulo

const saudacoes = require("./passandoParams")("Thiago", "Nathalia", "Jorginho", "Chorão")

console.log(saudacoes)