// Objetos em JavaScript são uma coleção de propriedades
// Assim como objetos reais, objetos em JS podem conter multiplos metodos(funções)
// e propriedades(dados)
// Suas propriedades são separadas em "chave: valor"
// sempre separando cada propriedade por  virgula","

// criamos objetos utilizando chaves "{}""
const prod1 = {}
// podemos atribruir dados dinamicamente com a notação ponto
prod1.nome = "Celular TH"
prod1.preco = "2100.00"

// podemos utlizar strings como identificadores atribuindo entre colchetes "[]"
prod1["Desconto Exclusivo"] = 0.40 // evite atributos com espaço

console.log(prod1)

// podemos criar objetos atribuindo dados diretamente 
const prod2 = {
    nome: "Camisa regata", 
    preco: 74.99,
    // podemos aninhar objetos
    tipo: {
        estampada: 79.99,
    }
}

console.log(prod2)