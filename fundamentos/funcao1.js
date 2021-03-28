// Função é um conjunto de instruções que executa uma ou mais tarefas em seu código

// declaramos funçoes passando a palavra reservada "function", logo após
// passamos o nome, entre parentesês podemos ou não declarar os parâmetros(entrada)
// logo após abrimos o bloco e definímos os métodos

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)

    // essa função não vai retornar um valor para ser tratado durante a execução do código
}
// invocamos funções passando o nome da função e os parenteses, caso necessário
// os paramêtros(entrada) também
imprimirSoma(20, 45)
// caso falte algum valor de entrada, será atribuido undefined,
// isso pode gerar alguns  bugs, nesse caso será feita a soma do número com undefined
imprimirSoma(20) // resultado NaN
imprimirSoma()
// Caso passe mais valores que o definido, todos serão ignorados
imprimirSoma(2, 5, 4, 8, 9)// soma somente de 2 e 5


// Função com retorno

function soma(a, b = 1) {// javascript permite setar valores padrão em parâmetros
    return a + b // a palavra reservada return retorna o valor
}
// esse valor retornado pode ser tratado de diferentes maneiras
const valorSomado = soma(5, 5)
console.log(valorSomado)
console.log(soma(2, 5))

// como o segundo parâmetro foi setado, não será necessário declará-lo
// caso o primeiro parâmetro seja válido, a função será executada normalmente

console.log(soma(2))
console.log(soma())// caso o primeiro valor não seja válido retornará NaN