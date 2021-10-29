const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Usuário Cadastrado</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Usuário Alterado</h1>')
})

app.listen(3003)