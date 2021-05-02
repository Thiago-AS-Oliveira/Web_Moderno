// "for" é uma estrutura de repetição assim como "while" e "do while"
// "for" é utilizado quanto temos uma quantidade de repetições determinadas
// sua sintaxe é formada por 3 expressões dentro de parenteses separadas por ponto e virgula
// e o bloco de código executado em seguida

// for(incialização(declaração de variável) ; condição; expressão final(incremento)) {
//      código...
// }
// caso a condição seja omitida, o resultado sempre será verdadeiro



// declaração de um contador em sequência feito com "while"
let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// o mesmo contador feito com "for"

// na 1º expressão declaramos uma variável, em seguida definimos uma condicional e por último,
// incrementamos a variavel 
for(let i = 1; i <= 10; i++) {
    // para cada iteração o código será executado,
    // até a condicional se tornar falsa
    console.log(`contador 2 = ${i}`)
} 

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] 
// enquanto "i" for menor que o número de elementos do array...
for(let i = 0; i < notas.length; i++) { 
    // execute...
    console.log(`nota = ${notas[i]}`)
}

// é recomendado utilizar "let" para iniciar uma variável em "for"
// por possuir escopo de bloco, caso seja inicializada com "var",
// a variável estará acessivel no escopo global e bugs podem ocorrer  