let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

// O símbolo de Not, "!", em Js é utilizado como uma maneira simples e rápida de converter 
// outros dados em booleans 

console.log(!isAtivo)// uma "!" inverte o valor transformando em boolean
console.log(!!isAtivo)// duas retorna ao valor normal e converte em boolean
// isso ocorre pois a primeira inverção "!" é desfeita pela segunda "!"

// dados que se comportam como verdadeiros no contexto boolean
console.log("Dados verdadeiros...")
console.log(!!3) // numeros inteiros, negativos ou positivos
console.log(!!-1)
console.log(!!" ")// strings que contenham algum caractere, incluindo espaços
console.log(!![])// objetos e arrays, mesmo vazios
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))// qualquer atribução que tenha como valor um dado verdadeiro

// dados que se comportam como falsos no contexto boolean
console.log("Dados Falsos...")
console.log(!!0)// zero é um valor falso
console.log(!!"") // string vazia, sem mesmo um espaço
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false)) //qualquer atribuição que tenha como valor um dado falso