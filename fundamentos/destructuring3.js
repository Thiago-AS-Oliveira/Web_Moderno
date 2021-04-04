// Utilizando destructuring como parâmetro de uma função
// utilizando objeto

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// Utilizando um objeto como parâmetro o operador destructuring seleciona os valores setados no
// operador na declaração da função

const obj = {min: 40, max: 60}
console.log(rand(obj))
console.log(rand({}))// caso passe algum objeto vazio, será atribuido o valor definido como padrão
// console.log(rand())// caso não passe algum objeto será retornado como erro

// mais um exemplo

const cliente = {nome: "Carlos", cpf:"123.654.789.10"}
function imprimirDados({nome, cpf}) {
    console.log(`Nome: ${nome} CPF: ${cpf}`)
}

imprimirDados(cliente)

