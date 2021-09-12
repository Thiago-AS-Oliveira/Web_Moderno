// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj)) //retorna um array com os valores de um objeto 
console.log(Object.entries(obj)) // retorna um array com arrays de chave e valor

// Melhoria na Notação Literal de objetos

const nome = 'Persival'
const pessoa = {
    // atribuição de uma constante no objeto de forma simples, sem precisar 
    // atribuir nome: nome
    nome,
    // cria função de forma dinâmica, sem precisar declarar a palavra function
    ola() {
        return 'Alo Querido!'
    }
}
console.log(pessoa.nome)//aponta para a constante nome 
console.log(pessoa.ola())

// Class
// class cria novos objetos a partir de uma classe

class Animal { gato() { return 'Miau!'}}
class Cachorro extends Animal { // extends define que cachorro é filha de animal
    falar () {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
console.log(new Cachorro().gato())// gato é uma herança da classe Animal