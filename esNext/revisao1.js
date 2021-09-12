// let e const
//let tem escopo de bloco
{
    var a = 'var'
    let b = 'let'
    console.log(b)
}
console.log(a)
// console.log(b)// b não sera encotrada

// Template string 
const produto = 'iPad'
// esse recurso permite mesclar outros tipos de dados
console.log(`${produto}, é caro!`)
// também permite mais de uma linha 
console.log(`Escrevi em 
mais de
uma linha!`)

// Destructuring

// permite desestruturar(dividir) um dado
// String
const [l, e, ...tras] = 'Letras'
console.log(l, e, tras)
console.log(tras)

// Array
const [x, y, z] = [1, 2, 3]
console.log( x, z)

//Objeto
const {idade: i, nome} = {nome:'Persival', idade:11}
console.log(i, nome)