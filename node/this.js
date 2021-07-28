// fora do contexto de função, this aponta para module.exports
console.log('fora de uma função')
console.log('global:', this === global)
console.log('module:',this === module)

console.log('module.exports:', this === module.exports)
console.log('exports:',this === exports)


// dentro de uma função this aponta para global ou para o objeto em que a função está declarada
function logThis() {
    console.log('Dentro de uma função')
    console.log('exports:',this === exports)
    console.log('module.exports:',this === module.exports)
    console.log('global:',this === global)
}

const obj = {
    logThisObj() {
        console.log('Dentro de uma função em um objeto')
        console.log('exports:',this === exports)
        console.log('module.exports:',this === module.exports)
        console.log('global:',this === global)
        console.log('Objeto:', this === obj)
    }
}

logThis()
obj.logThisObj()