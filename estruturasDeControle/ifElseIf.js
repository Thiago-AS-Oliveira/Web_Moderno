// função que retorna um número entre "inicio" e "fim"
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

// JAVASCRIPT permite encadear multiplos blocos if ... else se necessário
const resultado = function(nota) {
    if(nota.entre(9,10)) {
        console.log('Aprovado com Louvor, Parabéns!!!')
    }
    else if(nota.entre(7, 8.99)) {
        console.log('Aprovado, Parabéns!!!')
    }
    else if(nota.entre(4, 6.99)) {
        console.log('Recuperção')
    }
    else if (nota.entre(0,3.99)) {
        console.log('Reprovado')
    }
    else {
        console.log('Nota inválida')
    }

    console.log('fim')
}

resultado(10)
resultado(8.5)
resultado(4)
resultado(2)
resultado(-1)//numero não declarado na função
resultado(11)//numero não declarado na função2