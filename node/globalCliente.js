// para acessar um o objeto "meuApp", basta importar o arquivo "global"

require('./global') 
// não foi necessário atribuir o require a nenhuma variável, afinal 
// nenhum valor foi retornado

// para utilizar o objeto "meuApp" basta declará-lo diretamente
console.log(meuApp.nome)
console.log(meuApp.saudacao())

// é possivel adicionar atributos e mudar o valor de algum atributo
// o que pode ser um problema, é possivel utilizar métodos para impedir alterações
// como o Object.freeze 
meuApp.nome = "Global App"
console.log(meuApp.nome)
meuApp.versao = "1.0.0"
console.log(meuApp.versao)

// evite modificar o escopo global