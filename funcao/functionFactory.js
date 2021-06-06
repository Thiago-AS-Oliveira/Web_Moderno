// functions factory criam objetos a partir de uma função

function criarProduto(nome, preco, desconto) {
    // a função retorna um objeto com os parâmetros sendo utilizados como atributos  
    return {
        nome: nome,
        preco: preco,
        desconto: desconto
    }
}
let tvSamsung = criarProduto('Tv Samsung', 3000, "10%")
let noteAcer = criarProduto('Notebook Acer', 2500, "5%")

console.log(tvSamsung)
console.log(noteAcer)