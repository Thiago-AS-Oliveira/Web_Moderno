// criamos um array com elementos json
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// função que converte json para objeto
const paraObjeto = json => JSON.parse(json) 
// função que retorna o preço de cada json convertido para objeto
const apenasPreco = produto => produto.preco 

// primeiro transformamos os elementos json em objetos logo em seguida extraimos somente os preços
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)