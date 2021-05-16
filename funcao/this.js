// "this" é uma variável local utilizada para referenciar o escopo atual de execução de uma função.
// "this" sempre retornará o objeto onde é declarado...

// no escopo global, "this" se refere ao escopo/objeto global no node
// no navegador se refere a window
function thisGlobal() {
    console.log(this === global)
    console.log(this) // imprimi o objeto global/window
}
thisGlobal()

// em um escopo de algum objeto "this" se refere ao mesmo objeto
let usuario = { // neste caso "this" se refere ao objeto usuário
    nome: 'João',
    imprimirNome() {
            console.log(this.nome) // neste caso this tem a mesma finalidade de "usuario.nome"
            console.log(this === usuario)
            console.log(this) // imprime o objeto usuario 
        }
    }
usuario.imprimirNome()