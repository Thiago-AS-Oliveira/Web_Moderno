// JavaScript fornece três operadores lógicos
// "!" NÃO(NOT); "||" OU(OR); "&&" E(And);

// Os operadores lógicos fazem comparações(testes) retornando os valores "true" ou "false"
// São importantes, pois influenciam na tomada de decisão de um código
// Por exemplo, se o resultado da comparação for verdadeiro, seu código executa um bloco,
// se for falso,  executa uma mensagem de erro e etc.

// Neste exemplo você irá comprar uma TV de 50 polegadas e irá tomar sorvete caso dois
// trabalhos seus sejam executados com sucesso, se apenas um tiver sucesso, será comprada
// uma TV de 32 polegadas e seu sorvete ainda estará de pé, se nenhum der certo,
// você não comprará nada e irá ficar saudável

function compras (trabalho1, trabalho2) {
    // No caso de OU "||", se a condição de algum dos valores comparados 
    // for verdadeira o resultado será "true" só sera "false" se os 2 valores tiverem a condição falsa
    const comprarSorvete = (trabalho1 || trabalho2) 

    // Com E "&&", o resultado só será "true" caso todos os valores tenham a condição verdadeira
    // qualquer outra combinação será "false" independente se algum dos valores for verdadeiro
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor

    // O operador NÃO(!) inverte os valores
    // Aplicado a um operador de comparação como o de igualdade é feito uma inversão lógica
    // Abaixo faz a comparação de que se "trabalho1" NÂO for igual a "trabalho2", 
    // "comprarTV32" será true, o mesmo vale para outros operadores de comparação
    const comprarTv32 = trabalho1 != trabalho2 

    // Aplicado a diretamente a um valor bolleano, "true" se torna "false" e 
    // "false" se torna "true"
    const manterSaudavel = !comprarSorvete // se comprarSorvete for false, manterSaudavel será true

    return { 
        comprarSorvete, 
        comprarTv50, 
        comprarTv32, 
        manterSaudavel}
}

console.log("Os 2 trabalhos tiveram sucesso.",compras(true, true))
console.log("Apenas o primeiro  trabalho teve sucesso.",compras(true, false))
console.log("Apenas o segundo trabalho teve sucesso.",compras(false, true))
console.log("Nenhum dos trabalhos tiveram sucesso.",compras(false, false))