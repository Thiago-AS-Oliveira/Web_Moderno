const resultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } 
    else { // "else" é o bloco que será executado caso a condição não seja válida 
        console.log('Reprovado!')
    }
}

resultado(6.9)
resultado(4)
resultado(8)
resultado(7.1)
// por ser fracamente tipada, JS permite que dados diferentes possam ser comparados
// abaixo a string será comparada com o valor numérico
resultado("Não fez a prova")//resultado falso, cuidado!!! 