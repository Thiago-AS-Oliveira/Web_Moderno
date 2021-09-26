const fs = require('fs')
const caminho = __dirname + '/dados.txt'

const lerArquivo = caminho => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))