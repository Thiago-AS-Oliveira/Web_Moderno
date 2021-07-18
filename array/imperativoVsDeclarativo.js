const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2},
]

// Imperativo 
// Cria um codigo mais explicito, porem menos reutilizavel
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1)

// Declarativo 
// Cria um codigo menos explicito e mais reutilizavel, mais funcional
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2)