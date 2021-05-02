// "do while" é uma estrutura de repetição que executa um bloco de código 
// até que a condição seja falsa

function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 1

do { // execute o código...
    opcao = aleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} // enquanto...
while (opcao != -1)

// esse laço de repetição possui a expressão ao final da estrutura
// o que permite que o código seja executado ao menos uma vez antes da expressão ser avaliada
// isso pode gerar alguns bugs dependendo do seu uso

let num = 6
// pela sua sintaxe o bloco será executado mesmo com "num" sendo maior que 5
do {
    // execute o bloco de código
    num++
    console.log("numero:", num)
} // enquanto
while(num < 5) // resultado 7, pois o bloco foi executado antes da verificação

console.log('Até a próxima!')