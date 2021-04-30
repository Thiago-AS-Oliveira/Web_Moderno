// switch é uma estrutura condicional que permite executar blocos de código 
// de acordo com cada opção ("case") especificada.
// switch não faz uma comparação lógica
// sua expressão e baseada em valores pré definidos

const resultado = function(nota) {
    // sua sintaxe é consiste em ...
    switch(Math.floor(nota)) { // expressão

        // "case" que é uma opção pré definida para executar um bloco caso tal condição seja atingida 
        case 10: case 9: // podemos especificar o mesmo bloco para mais de um case
                // bloco de código
            console.log('Aprovado com louvor, Parabéns!!!')
            break // responsável pelo fim da execução do bloco
            // caso não seja declarado, todos os blocos serão executados até
            // encontrar o próximo "break" ou sair do switch
        case 8: case 7:
            console.log('Aprovado, Parabéns!!!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // código pré definida para executar caso nenhuma condição seja atingida 
            console.log('Nota inválida')
    }
}

resultado("ola")
resultado(8.5)
resultado(4)
resultado(2)
resultado(-1)//numero não declarado na função
resultado(11)//numero não declarado na função