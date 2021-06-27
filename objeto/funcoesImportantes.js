const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}
// a função Object algumas outras funções
console.log(Object.keys(pessoa))// função que retorna somente os nomes dos atributos
console.log(Object.values(pessoa)) // retorna somente os valores dos atributos

// retorna um array com os elementos do objeto, também como arrays
console.log(Object.entries(pessoa)) 

// podemos tratar esses elementos para diferentes finalidades
Object.entries(pessoa).forEach( ([chave, valor]) => { //cada elemento dentro do array será impresso no console
    console.log(`${chave}: ${valor}`)
})

// função que define uma propriedade
// primeiro passe o objeto a ser alterado, o nome da propriedade em string e depois um objeto
// com as características do atributo
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // define se é um atributo listavel/visivel dentro do objeto
    // idependente se está visivel ou não, o atributo continua acessivel
    writable: false, // define sé alteravel ou não
    value: '01/01/2018' // define o valor do atributo
})
console.log(pessoa)
  
pessoa.dataNascimento = '01/01/2017' // por writable, estar false, não é modificavel
console.log(pessoa)

// Object.assing (ECMAScript 2015)
// a função assing permite concatenar objetos 
const dest = { a: 1 }
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4} 
// o primeiro objeto receberá as propriedade dos objetos seguintes 
// o objeto dest receberá as propriedades de obj1 e obj2 
// se existirem duas propriedades de mesmo nome, o valor será sobrescrito pelo ultimo objeto
// no exemplo abaixo o valor de "a" em dest foi sobrescrito pelo valor de "a" em obj2
const obj3 = Object.assign(dest, obj1, obj2) 

// aqui armazenamos a concatenção em obj, porém "dest" támbem foi alterado
console.log(obj3)
console.log(dest)

Object.freeze(obj3)// função que impede a alteração de propriedades 
obj3.c = 123
console.log(obj3)