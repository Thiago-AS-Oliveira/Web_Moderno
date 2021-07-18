const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
// todos bolsistas ?

// a callback em map retorna um array somente com os atributos "bolsista",
// e a callback em reduce faz um teste lógico utilizando && onde a cada iteração,
// uma comparação será feita para saber se todos os alunos são bolsistas 
// resultado assumirá o valor do elemento anterior  e bolsista assumirá o valor do elemento atual
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log("Todos os alunos são bolsistas ?")
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// algum bolsista ?

// map e reduce tem as mesmas funções como no exemplo acima, com a diferença 
// que será utilizado o operador || para saber se tem pelo menos algum algum aluno bolsista, 
const algunBolsista = (resultado, bolsista) => resultado || bolsista
console.log("Existem alunos Bolsistas ?")
console.log(alunos.map(a => a.bolsista).reduce(algunBolsista)) 