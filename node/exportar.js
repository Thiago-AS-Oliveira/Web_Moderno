// module.exports por padrão é um objeto vazio que importa módulos
// console.log(module.exports)

// this e exports referenciam module.exports
// console.log(module.exports === this)
// console.log(module.exports === exports)

// todas as atribuções feitas com this e exports adicionam elementos em module.exports
this.alo = "Alô querido!"
exports.ola = "Olá amigos!"
module.exports.fala = "Fala galera!"
// console.log(module.exports)

// somente module.exports será exportado
// se outro elemento for atribuido em exports e this, module.exports não será modificado
// e nem this e exports serão exportados 
exports = { mudado: "Mudei"} // exports referencia um objeto e não mais para module.exports
// console.log(exports)
// console.log(module.exports)

// podemos atribuir outros elementos em module.exports
module.exports = "string"
// o recomendado, é sempre atribuir elementos no objeto original ou substituir
// por um objeto com os mesmo elementos

const func1 = () => "Função 1"
const func2 = () => "Função 2"
const array1 = [1, 2, 3, 4, 5]
module.exports = {func1, func2, array1}