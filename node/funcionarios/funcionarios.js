// Primeiro foi criado o arquivo "package.json" que é o arquivo descritor do projeto
// nesse caso funcionários
// ele funciona não só como descritor, mas também como um arquivo de configuração do seu projeto
// ele é criado com o comando "npm init" no terminal, ao executar o comando
// é necessário especificar detalhes do projeto caso queira pular essa 
// parte execute o comando "npm init -y", a flag "-y" responde sim para todas a perguntas 

// Depois de ter iniciado o "package.json", foi instalada a biblioteca axios
// com o comando "npm i --save axios", a flag "--save" configura em "package" 
// que axios é uma depedência do projeto

// Junto com a pasta node_modules, foi baixado também "package-lock.json"
// esse arquivo impede que as bibliotecas sejam atualizadas, evitando possiveis
// bugs por conta das atualizações

// foi importada a biblioteca axios e uma url com um aquivo json foi armazenada numa const
// esse arquivo contem dados de 500 funcionários

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require("axios")

const chineses = fun => fun.pais === "China" // função que será executada filter
const mulheres = fun =>fun.genero === "F" // função que será executada em filter
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
} // função executada no reduce

// o arquivo json na url é retornado utilizando o método "get"
// todos os dados no json são acessados com uma função no método "then"
axios.get(url).then(response => {
    // funcionarios recebe todos os dados do aquivo json, estes dados 
    // foram retornados em um array
    const funcionarios = response.data
    // para obter os dados da funcionaria chinesa com o menor salário
    // será executado 2 filters e um  reduce 
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
} )