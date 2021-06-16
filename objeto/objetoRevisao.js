// Objeto em geral é definido em uma coleção dinâmica de pares chave/valor

const objeto = {
    // chave: valor
    produto: "nome do produto",
    preco: "preço do produto"
}

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Genastazia'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    Modelo: 'A4',
    Valor: 50.000,
    proprietario: {
        Nome: 'Raul',
        endereco:{
        logradouro: "Rua ABC",
        numero: 123}
    },
    condutores: [{
        nome:'Junior',
        idade: 19
    }, {
        nome:'Ana',
        idade: 42
    }]
}

console.log(carro)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av.Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)