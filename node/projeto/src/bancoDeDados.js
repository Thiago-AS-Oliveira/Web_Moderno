const ids = {
    _id : 1,
    get id() { return this._id++}
}

const produtos = {}

function cadProduto(prod) {
    if(!prod.id) {
        prod.id = ids.id
    }
    produtos[prod.id] = prod
    return prod
}

function produto(chave) {
    return produtos[chave] || {}
}

function listaProd () {
    return Object.values(produtos)
}

function excluirProduto(id) {
    // const produto = produto[id]
    delete produtos[id]
}

module.exports = {cadProduto, produto, listaProd, excluirProduto}