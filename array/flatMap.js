const escola = [
    { 
        nome: 'turma1',
        alunos: [
            {nome: 'Gustavo', nota: 8.1}, 
            {nome: 'Ana', nota: 9.3}
        ]
    }, 
    {
        nome: 'turma2',
        alunos: [
            {nome: 'Rebeca', nota: 8.9}, 
            {nome: 'Roberto', nota: 7.3}
        ]
    }
]
// notaAluno retorna a nota de cada aluno 
const notaAluno = aluno => aluno.nota
// notasTurma acessa o array Alunos e faz um Map utilizando a função notaAluno
const notasTurma = turma => turma.alunos.map(notaAluno)

// utilizando notasTurma, Map retorna um novo array com as notas de cada turma, 
// separadas em subarrays
const notas1 = escola.map(notasTurma)
console.log(notas1)
// flatMap será criada para unificar de forma dinamica todos o elementos em um array
// meio que achatando o array

// a função é adicionada no prototype de Array,
// recebe uma callback como parâmetro,
Array.prototype.flatMap = function(callback) {
    // executa a função concat, utilizando apply para definir o array vazio como 
    // contexto de execução, e o this(array).map executando a callback que
    // retorna os valores do array para serem concatenados 

    return Array.prototype.concat.apply([], this.map(callback))
    // o valor acima é semelhante a [].concat(array[0], array[1])
}

const notas2 = escola.flatMap(notasTurma)
console.log(notas2)