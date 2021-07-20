// para importar dados de outros módulos require() é utilizado,
// é utilizado um acesso pelo caminho relativo para acessar um arquivo local

// caso o arquivo seja em formato js, não é necessário declarar a extensão(arquivo.js)
// todos os outros formatos precisam(arquivo.py, arquivo.c, etc.) 
const moduloA = require("./moduloA")
const moduloB = require("./moduloB")

// com o a requisição feita, arquivos que foram exportados estão acessíveis em um objeto
// e podem ser manipulados como elementos de um objeto
console.log(moduloA)
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB)
console.log(moduloB.bomDia)
console.log(moduloB.boaTarde)
console.log(moduloB.boaNoite())