// Variáveis e constantes possuem nome e valor 
// nome é o identificador da variável e valor é o dado atribuido 

// par nome/valor 

const saudacao = "Opa" // contexto léxico 1
// declarações fazem parte de um contexto/escopo

function exec() { 
    const saudacao = 'Falaaa'// contexto léxico 2
    return saudacao
// por estar em um contexto/escopo diferente 2 constantes ou variáveis
// de mesmo nome podem existir sem conflitos
}

console.log (saudacao)
console.log(exec())

// Objetos são grupos aninhados de pares nome /valor
const cliente = { //contexto 1 
    nome: "Pedro",
    idade: 32,
    peso: 90,
    beneficiarios: { //contexto 2
        // Por estar e um outro contexto, as mesmas chaves podem ser declaradas sem problemas
        nome: "Guilherme",
        idade: 10,
        peso: 35
    }
}

console.log(cliente)
console.log(cliente.beneficiarios)