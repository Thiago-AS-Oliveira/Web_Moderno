// Herança em orientação a objetos compartilha recursos de um objeto pai para um objeto filho
// e assim por diante em uma ordem de hierarquia 

// JavaScript tem um modelo de herança baseado em protótipos

// Um objeto em javascript tem referência para seu protótipo/objeto pai, que possui 
// propriedades que podem ser acessadas, e assim por diante de acordo com o 
// tamanho da cadeia de herança

// Utilizando o atributto "__proto__" acessamos propriedades dos objetos 
// mais altos na cadeia de herança, caso não exista no objeto acessado
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log("Protòtipo de ferrari:",ferrari.__proto__) // objeto vazio
console.log("Protòtipo de volvo:",volvo.__proto__) // objeto vazio
// o protótipo/Objeto pai padrão de objetos, é Object.prototype 
// ou seja, por padrão Object.prototype estará atribuido a__proto__ 
console.log(ferrari.__proto__ === Object.prototype) 
console.log(volvo.__proto__ === Object.prototype)

// Object.prototype é o Objeto mais alto na cadeia, Object é uma função,
// quando criamos um objeto literal ou ultizando a palavra "Object"
// estamos instanciando a função, logo seu objeto "prototype" é o mais alto na cadeia
// seu protótipo é null pois não existe nenhum Objeto acima 
console.log(Object.prototype.__proto__)


// o atributo/Objeto prototype só existe em funções
// não e possivel acessá-lo em um objeto
function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)