// Map é uma estrutura de chave/valor, não é exatamente um objeto literal
// não aceita chave repetida 
// metodo 1
const tecnologias = new Map()
tecnologias.set('react', { frameworks: false })
tecnologias.set('angular', { frameworks: true })

console.log(tecnologias)
console.log(tecnologias.react)//undefined
console.log(tecnologias.get('react')) // para acessar um atributo é usado .get()
console.log(tecnologias.get('react').frameworks)

// metodo 2

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, "Objeto"],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))// se certifica se o atributo esta dentro ou não
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)// passa quantos elementos tem 

chavesVariadas.set(123, 'a')// chave não aceita repetição
chavesVariadas.set(123, 'b')// substitui o valor do atributo
chavesVariadas.set(456, 'b')// valor aceita repetição 
console.log(chavesVariadas)