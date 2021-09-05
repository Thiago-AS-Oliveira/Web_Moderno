// é possivel ler e criar arquivos com node

// será utilizado o módulo core "file system" do node
// o módulo é importado com a sigla "fs"
const fs = require("fs")

// para acessar o arquivo, foi criada a const "caminho" que concatena"__dirname"
// e "arquivo.json"
// obs: "__dirname" representa o diretório atual, idependente de onde o arquivo esteja sendo executado
const caminho = __dirname + "/arquivo.json" 

// lendo arquivos de forma sincrona 
// será utilizado readFileSync que pode receber 2 params, o path(caminho) e opções,
// que podem ser condificação, flag e signal, neste caso a codificação que é utf-8
const conteudo = fs.readFileSync(caminho, 'utf-8' )
console.log(conteudo)

// lendo arquivos de forma assincrona 
// utilizando readFile que recebe o caminho, o encoding e uma callback 
// que retorna o localhost e a porta
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // a callback recebe 2 params, erro e os dados do arquivo  
    const config = JSON.parse(conteudo) // arquivo foi convertido para objeto 
    console.log(`${config.db.host}: ${config.db.port}`)
})

// é posível ler arquivos json diretamente com require
// automáticamente os arquivos serão convertido para objeto
const config = require("./arquivo.json")
console.log("config:",config.db)

// é possível acessar também a pastas, para isso é usado o método
// "readdir" que recebe 2 params o path(caminho) um callback que 
// também recebe 2 params o de erro e os dados da pasta
fs.readdir(__dirname,(err, arquivos) => {
    console.log("Conteudo da pasta:")
    console.log(arquivos) // será retornado um array com os arquivos
})