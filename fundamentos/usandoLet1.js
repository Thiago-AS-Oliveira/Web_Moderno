// Let possui 3 escopos, escopo global e de função, como var, e também escopo de bloco
// Const também possui os mesmos escopos
// Diferente de var, let não permite ser redeclarada porém permite a reatribução de valores

var numero = 1 // se substituir var por letm, também não causará erros 

{
    // por possuir escopo de bloco a variável declarada com let fica restrita ao bloco
    // e não sobreescreve a primeira declarada com var, que está no escopo global 
    let numero = 2
    console.log("dentro :", numero)
}
// Assim é possivel ter mais de uma varável com o mesmo nome
console.log("fora :" ,numero)

// caso procure uma variavel não disponivel no escopo atual
//  javascript busca em escopos externos
// já o contrário não é possivel
let letra = "A"
{
    // letra = "B"
    console.log(letra)
    let interno = "interno"
}
// console.log(interno)// erro

