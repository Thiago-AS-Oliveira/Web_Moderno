const a = 1
const b = 2
const c = 3

// podemos criar objetos aninhando variáveis...

// da maneira tradicional
const obj1 = {a: a, b: b, c: c}
// da maneira pós ES6, onde é possivel atribuir somente o valor caso
// o nome do atributo seja igual ao valor atribuido
const obj2 = {a, b, c} // a: a, b: b, c: c
console.log('obj1:', obj1)
console.log('obj2:', obj2)

const atr = "Preço"
const preco = 7.89
const obj3 = {}
// é possivel também atribuir váriaveis de maneira dinâmica 

// atr armazena uma string, utilizamos a mesma sintaxe para criar chaves de atributos com strings
// passamos o nome da constante dentro de  colchetes "[]"
// e atribuimos o a constante preco
obj3[atr] = preco  // seria o equivalente a criar obj3["Preço"] = 7.89
console.log('obj3:',obj3)

// de maneira literal 
const obj4 = {[atr]: preco} // seria o equivalente a criar {["Preço"]: 7.89}
console.log('obj4:', obj4)

// podemos criar metodos de duas maneiras
const obj5 = {
    // de maneira tradicional
    funcao1: function() { // criando um nome e atribuindo uma função
        //...
    },
    // ou da maneira mais recente
    funcao2() { //criando somente o metódo sem a necessidade de criar um nome e atribuir uma função 
        //...
    } 
}

console.log('obj5:', obj5)