var numero = 1
{
    var numero = 2
    console.log("dentro :",numero)
}
console.log("fora :",numero)

// Por não possuir escopo de bloco em var, a  segunda variável numero que foi redeclarada 
// dentro do bloco substituiu a primeira variável no objeto global 