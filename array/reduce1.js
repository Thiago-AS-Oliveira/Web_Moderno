// a função reduce tem como objetivo transformar um array em um unico elemento
// seja ele uma, string, um number, um outro array ou qualquer outro tipo

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// a callback recebe quatro parâmetros 
// 1. acumulador que é um valor opcional, como seu nome sugere ele acumula um valor inicial que 
// pode ser declarado, caso não seja, seu valor será o de índice 0, esse valor será acumulado 
// com o valor atual a cada loop, esse valor inicial deve ser declarado como segundo 
// parâmetro de reduce e não como o da callback 
// 2. valor atual que é simplesmente o elemento atual da iteração
// 3. o index do elemento atual
// 4. o array

console.log(alunos.map(a => a.nota))
// a callback em map, retorna um novo array somente com as notas,
// logo depois a callback em reduce soma todas as notas retornando um único valor
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    // a cada loop o valor atual será somado ao valor de acumulador
    console.log("valor acumulado:", acumulador,"/ valor atual:", atual)
    return acumulador + atual
},0) // aqui passamos o valor de 0 como valor incial

console.log(resultado)

const letras = ["T","H","I","A","G","O"]
// reduce irá concatenar todas as letras em uma única string
const nome = letras.reduce((letra, letraAtual) => {
    console.log(letra, letraAtual)
    return letra + letraAtual
})
console.log(nome)