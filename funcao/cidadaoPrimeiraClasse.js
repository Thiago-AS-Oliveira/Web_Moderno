// Função em JavaScript é um conjunto de instruções 
// que realizam determinada tarefa ou calculam um valor


// Funções em JS são conhecidas como "First-Class Object/Citizens"
// (Objetos de Primeira Classe/Cidadão de primeira linha)
// e em alguns casos "Higher-order function"(Função de Alta Ordem) 
// Tudo que se pode fazer com um função é possivel fazer com um objeto, porque 
// função é um objeto do tipo Function


// Podemos criar funções de forma literal...

// utilizando a palavra "function" seguida pelo nome da função, parênteses "()" com os 
// parâmetros e por último chaves "{}" onde as declarações serão executadas.

function fun1() { }

// Armazenar em um variavel...

// atribuindo uma função anônima em uma variável ou constante
const fun2 = function() { }

// Armazenar em um array...

// criando de forma literal uma função anônima ou não, ou armazenando funções 
// existentes
const array = [function(a, b) {return a+b}, fun1, fun2]
// executamos utilizando os metodos de array e passando parâmetros se necessário
console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto ... 

// seja de maneira literal na construção do objeto
const obj = { ola: function() {console.log("Olá!")}}
obj.ola()

// ou de maneira dinâmica
obj.falar = function() { return 'Fala galera!'} 
console.log(obj.falar())

// Passar função como parâmetro...

// criando uma função obtendo uma outra função como parâmetro...
function run(fun) {
    fun()
}
// é possivel cria uma função diretamente ou passar uma já existente
run(function() { console.log('Executando...') })


// Uma função pode retornar/conter uma função


function soma(a, b) { // soma retornará uma função...
    return function (c){ 
        // essa função ao ser retornada irá imprimir no console a soma dos
        // parâmetros a, b e c
        console.log(a + b +c)
    }
} 

// executamos a primeira função passando os parâmetros,
// como o valor retornado é uma outra função, passamo seu parâmetro
// e suas declarações são executadas.
// Assim (3, 7) fazem parte da função principal e (5) da função dentro do bloco de soma
soma(3,7)(5)