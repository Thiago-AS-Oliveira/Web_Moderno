console.log(7 / 0) // números divididos por 0 retornam o valor infinity
console.log(7 / 0.001) // quanto mais nos aproximamos de 0, maior o número que resulta da divisão
console.log("10" / 2)// uma string que contenha um valor númerico valido pode ser dividida,
console.log("10" * 2)// multiplicada
console.log("10" - 2)// e subtraida
console.log("10" + 2)// só não pode ser somada, o number é convertido em uma string e concatenado a primeira
console.log(typeof("10" + 2))
console.log("string" * 2)// caso a string não seja reconhecida como um número é retornado um NaN
// NaN = Not a Number

console.log(0.1 + 0.7)// algumas operações com ponto flutuante geram uma imprecisão

// Não conseguimos manipular um número de maneira literal
// console.log(10.toString()) // erro
// Utilizando parenteses é possivel
console.log((10).toString())
console.log((9.85234).toFixed(2))