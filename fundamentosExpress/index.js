const express = require("express")
const app = express()

const saudacao = require("./saudacaoMid")
const { salvar, obter } = require("./api/usuario")
const produtoApi = require("./api/produto")
produtoApi(app, "Chorão e Jorginho")

app.post("/usuario", salvar)
app.get("/usuario", obter)

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(saudacao("TH"))

app.get("/clientes/relatorio", (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post("/corpo", (req, res) => {
    // let corpo = ""
    // req.on("data", function(parte) {
    //     corpo += parte
    // })

    // req.on("end", function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get("/clientes/:id", (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.use("/ch", (req, res, next) => {
    console.log("chama?")
    next()
})

app.get("/ch", (req, res, next) => {
    res.json({
        data: [
            { id: 3, nome: "chorao", position: 1 },
            { id: 2, nome: "tininha", position: 5 },
            { id: 4, nome: "laica", position: 2 },
            { id: 1, nome: "jorginho", position: 3 },
            { id: 5, nome: "tom", position: 2 },
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
    // res.json({
    //     nome: "Haylou gt1 pro",
    //     preco: 120.00,
    //     desconto: 0.12
    // })
    // res.send("Olá amigo")
})


app.use("/ch", (req, res) => {
    console.log("chamado")
})

app.listen(3000, () => console.log("Servidor Executando..."))