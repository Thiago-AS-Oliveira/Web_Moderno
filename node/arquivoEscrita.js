// Também é possivel criar arquivos com node
const fs = require("fs")

const produto = {
    nome: "Celular",
    preco: 1300.00,
    desconto: 0.15,
}

// será utilizado o método "writeFile" 
//  sintaxe: fs.writeFile(file, data,[options], callback)

// foi passado o arquivo criado utilizando "__dirname" + o nome do arquivo, o objeto
// produto sendo convertido para JSON e uma callback que imprime um erro se algo der errado ou
// um string se der tudo certo
fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), err => {
    console.log(err || "Arquivo Gerado")
})