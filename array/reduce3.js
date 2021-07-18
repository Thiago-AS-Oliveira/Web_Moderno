// criando uma função similiar a reduce 

// a função será criada no prototype de Array 
// a função recebe 2 parâmetros, uma função callback, e um valor inicial
Array.prototype.reduce2 = function(callback, valorIncial) {
    // é criada uma variável que irá receber o valor acumulado
    let acumulador
    if(valorIncial) {
        // se valorInicial for declarado
        // acumulador será iniciado com este valor 
        acumulador = valorIncial
        // o contador começa as iterações a partir de indice 0(primeiro elemento)   
        for ( let i = 0; i < this.length; i++) {
            // o acumulador recebe o valor retornado da callback
            // e a callback recebe como primeiro parâmetro o acumulador, o elemento atual da 
            // iteração, o indice e o array, para serem utilizados na lógica da função
            acumulador = callback(acumulador, this[i], i , this)
        }
        // e por ultimo o valor de acumulador é retornado
        return acumulador
    } else {
        // se não for declarado, acumulador toma como valor inicial o primeiro elemento
        // que é o indice 0 e as iterações começam a partir do indice 1(segundo elemento), 
        // os mesmos processos serão executados como no laço acima
        acumulador = this[0]
        for ( let i = 1; i < this.length; i++) {
            acumulador = callback(acumulador, this[i], i , this)
        }
        return acumulador
    }
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3]
console.log(nums.reduce2(soma)) // sem valor inicial
console.log(nums.reduce2(soma, 6))// com um valor inicial

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    return acumulador + atual
})

console.log(resultado)