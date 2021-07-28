// o objeto global em um navegador é "window" 
// em node é "global"

// para adicionar atributos é utilizada a maneira comum de objetos
globalThis.meuApp = {
    saudacao() {
        return "Olá pessoas"
    },
    nome: "App Global"
}

// desta maneira qualquer arquivo que tenha acesso a este script poderá acessar o atributo
// "meuApp"

// não é muito recomendado utiilizar o escopo global assim 