// utilizamos require para acessar módulos

// podemos acessar pelo caminho absoluto ou pelo caminho relativo

// o caminho absoluto é o caminho completo, sempre partindo do diretório raiz do sistema
// ex: /home/usario/Documentos/projeto/arquivo
// esse caminho pode sempre variar, por isso é sempre recomendado utilizar o caminho relativo
// no processo de desenvolvimento

// caminho relativo é um caminho parcial, é um caminho que parte da pasta raiz do arquivo
// ex: ./pastaA/pastaB/arquivo

// neste caso é preciso sair da pasta deste aquivo para acessar o arquivo desejado
// "../" é utilizada para sair de uma pasta

// a sintaxe é simples, basta executar a função passando em uma string o caminho até o arquivo

const moduloA = require('../../moduloA') // aqui require volta 2 pastas e encontra moduloA
console.log(moduloA.ola)

// por padrão require aponta para a pasta "node_modules"
// caso queira importar arquivos que se encontram nesta pasta basta declararar
// somente o nome da pasta, require sempre busca o arquivo "index.js" em todas as pastas
// caso utilize outro nome para seus módulos, será necessário declará-lo no parâmetro
const arquivoC = require("./pastaC")
console.log(arquivoC.ola2)

const saudacao = require("saudacao")
console.log(saudacao.saudacao)

// Além dos módulos de terceiros na pasta "node_modules" e de módulos criados por você
// require permite importar módulos internos do node os modulos core

const http = require('http')
http.createServer((req, res) => {
    res.write("Olá pessoal")
    res.end() 
}).listen(8080)
