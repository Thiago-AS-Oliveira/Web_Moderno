// Em JavaScript parâmetros e retornos são opcionais,
// se passarmos mais de um Paramêtro ou não passarmos nenhum,
// o código será executado normalmente, a saida(retorno) de uma função,
// definida pela palavra "return", também é opcional, o valor declarado após "return"
// é disponibilizado para acesso pelo escopo em que a função foi declarada,
// todo o restante da função não. Caso seja omitido, o valor de saída é declarado como undefined.
// "return" para a execução do bloco de código da função.

function area(largura, altura) {
    const area = largura * altura
    if(area >20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))// execução normal
// execução normal, porém como os parâmetros foram omitidos, o resultado será "NaN"
console.log(area(2)) // parãmetros omitidos são interpretados como undefined
console.log(area())
// calculará só os parametos declarados, no caso "2" e "3"
console.log(area(2, 3, 17, 22, 40))
// por ser maior que 20, será executado o bloco de if e undefined será retornado
console.log(area(5, 5))
