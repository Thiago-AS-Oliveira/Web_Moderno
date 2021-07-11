// simulamos um array utilizando objeto
const quaseArray = {0: 'Rafael', 1: 'Ana', 2:'Bia'}
console.log(quaseArray) 
// para acessar um atributo que possua um nome númerico  utiliziamos colchetes "[]",
// como acessamos o inidice de um array

// definimos uma função que retorna somente os valores, a função values retorna um um array 
// somente com os valores de um objetos
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])
console.log(quaseArray[1])
console.log(quaseArray[2])

const meuArray = ["Rafel","Ana","Bia"]
console.log(quaseArray.toString(), meuArray) // dois arrays similares