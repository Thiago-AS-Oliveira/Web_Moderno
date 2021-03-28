// variáveis declaradas com var possuem dois escopos 
// Var permite que variáveis sejam redeclaradas

// Escopo global
// tudo que for declarado fora de uma função é classificado como global 
// e estará disponivel para acesso e modificação em qualquer trecho do seu código

{
    {
        {
            var sera = "Será ???"
        }
    }
}

console.log(sera)

// Escopo de função
// tudo que for declarado dentro de uma função só poderá ser acessado e alterado dentro da mesma

function teste() {
    var sera2 = "Será 2 ???"
    console.log(sera2)
    //  podemos retornar o valor mas somente isso
    // return sera2
}
// var teste2 = teste()
teste()
// console.log(sera2)// gera um erro pois no escopo global a variavel não existe