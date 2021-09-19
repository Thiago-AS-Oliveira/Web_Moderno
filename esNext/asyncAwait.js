// Async/Await executa o codigo assincrono de maneira mais sincrona
// Recurso do ES8
// Objetivo de simplificar o uso de promises...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try { 
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}
// para "await" ser utilizada a função tem que estar marcada com "async"
// await espera uma linha executar pra executar outra
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return[].concat(ta, tb, tc)
}// retorna um objeto AsyncFuction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))