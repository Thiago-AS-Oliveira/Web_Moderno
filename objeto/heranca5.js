console.log(typeof String)
console.log(typeof Array)
console.log((typeof Object))
// toda função tem um atributo ".prototype"

// criando um método que inverte uma string
String.prototype.reverse = function() {
    // split quebra uma string em um array com cada letra separada
    // reverse é uma função de array que reverte a ordem do array
    // join junta todos os elementos  em uma unica string, 
    // é preciso as aspas em split para separar ambas a letras e em join 
    // para formar uma palavra completa
    return this.split('').reverse().join('') 
}

console.log('Hello Devs !'.reverse())

// criamos um método no prototype de array para retornar o primeiro elemento de um array
Array.prototype.first = function() {
    return this[0]
}

console.log([5, 32, 6 , 8].first())
console.log(['d', 'e', 'u', 't'].first())
// cuidado ao criar novas funções no .prototype das funções nativas

// não sobreescreva ou altere funçoes padrões da API 
String.prototype.toString = function() { // toString é uma função padrão de JS
        return 'Deu Problema'
}

console.log("Eu avisei!".reverse())