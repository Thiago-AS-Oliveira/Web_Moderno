// String é uma cadeia de caracteres
// JavaScript permite criar strings com aspas duplas: ""
const escola = "Cod3r"
// aspas simples: ''
const aluno = 'Thiago'
//  e crases: ``, essas são as template strings
const cidade = `Nova Friburgo`

console.log(escola.charAt(4))// retorna o caractere correspondente ao indice passado no parâmetro,
//  a partir de 0. 
console.log(escola.charAt(5))// caso o indice passado não exista, o valor retornado será vazio
console.log(escola.charCodeAt(2))// retorna o valor correspondente ao caractere na tabela unicode ou ask
console.log(escola.indexOf("r")) // retorna o indice correspondente ao caractere, caso o mesmo esteja na string

console.log(escola.substring(1))// retorna os caracteres a partir do indice passado no parâmetro
console.log(escola.substring(0, 3))// retorna os caracteres a partir do primeiro indice passado 
// no parâmetro até o ultimo indice antes do ultimo parâmetro


// podemos concatenar strings
console.log(aluno.concat(" é aluno da ").concat(escola, "!"))
// podemos concatenar utilizando "+"
console.log("Ele mora em "+ cidade + ".")
console.log(escola.replace(3, "e"))// substitui o caractere do primeiro parametro por o do segundo
// caso não seja um digito será necessário colocar o valor entre aspas

console.log("arroz, feijão, batata".split(",")) // retorna um array com sub strings