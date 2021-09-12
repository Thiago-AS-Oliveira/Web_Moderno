// operador ... rest(juntar)/spread(espalhar)
// o operador rest permite transformar um número indeterminado de parâmetros em um array
// e ele apenas funciona dentro de uma função, sendo ele um dos argumentos da função
function imprimirArray(...params) {
    console.log(params)
}

imprimirArray(1,2,3, "Junior", "pão")

// usar spread com objeto
const funcionario = {nome: 'persival', salario:2500}
const clone = { ativo: true, ...funcionario} // espalhou uma copia do objeto acima 
console.log(clone)

// usar spread com array
const grupoA = ['Flavio', 'Maria', 'Guilherme']
const grupoFinal = ['Persival', 'Marcelo', ...grupoA]  // espalhou uma copia do array acima
console.log(grupoFinal)

// spread com uma função
const nums = [1,2,3]
function soma(a,b,c) {
    console.log(a + b + c)
}
soma(...nums) // espalhou a copia do array como os parâmetros da função