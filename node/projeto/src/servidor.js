const express = require('express')

const app = express()
const porta = 3030
const bancoDeDados = require('./bancoDeDados')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.listaProd())
})

app.get('/produto/:id', (req, res) => {
    res.send(bancoDeDados.produto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.cadProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res) => {
    const produto = bancoDeDados.cadProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produto/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => console.log("Servidor on-line: http://localhost:3030"))