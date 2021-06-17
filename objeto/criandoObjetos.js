// Objeto em javascript é uma função 
console.log(typeof Object) 

// Podemos criar objetos de diferentes maneiras

// Ao instanciar a função "Object" com "new" criamos um novo objeto 
console.log(typeof new Object)
const obj1 = new Object
obj1.nome = "Objeto1"
console.log(obj1)

// Usando notação literal
const obj2 = {nome: "objeto2"}
console.log(obj2)


// Usando funções construtoras
function produto( name, preco, desc) {
    this.nome = name
    this.precoFinal = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto("Notebook", 2998.99, 0.25 )
console.log(p1)
console.log(p2)

// utilizando Factory Function

function funcionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        salarioMes: () => {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = funcionario("João", 4500, 5)
const f2 = funcionario("Paula", 1500, 1)
console.log(f1)
console.log(f2)

// Utilizando Object.create
const filha = Object.create(null)
console.log(filha)
filha.nome = "Ana"
console.log(filha)

// // Uma função famosa que cria um Objeto...
// const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
// console.log(fromJSON.info)