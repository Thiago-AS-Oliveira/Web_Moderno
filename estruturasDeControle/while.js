// "while", traduzindo para o portuguẽs é "enquanto",
// é uma estrutura de repetição que executa um bloco de código 
// enquanto uma condição for verdadeira

// "while" e "do while" são mais indicados em situações que a quantidade de repetições 
// é indeterminada 

let num = 0

while(num < 5) {// enquanto num for menor que 5
    // execute o bloco de código
    num++
    console.log("numero:", num)
}

// quando a expressão for falsa, o código sai da repetição e continua sua execução

// função que retorna um número inteiro de maneira aleatória
function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // enquanto opcao for diferente de -1...
    opcao = aleatorio(-1, 10) // atribua um numero  aleatório entre -1 e 10...
    console.log(`A opção escolhida foi ${opcao}.`) // e imprima
}

// se a expressão de while for falsa logo de cara, o bloco não será executado

let num2 = 4

// nessa repetição o bloco não será executado, pois num2 não é menor que 3
// assim  o código ignora essa declaração
while(num2 < 3) { 
    console.log(num2++)
}

console.log('Até a próxima!')