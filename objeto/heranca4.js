function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
// O prototype pertençe a função contrutora.

// criamos propriedades no objeto "prototype", ambas serão acessiveis 
// nos objetos criados a partir da função
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Olá meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = "Rafael"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // defininfo o objeto "prototype" de MeuObjeto com protótipo
obj3.nome = "OBJ3"
obj3.falar()

// Resumindo
/* 
*A partir de uma função construtora, o objeto recebe como padrão o prototype dessa função 
e não Object.prototype
*O prototype da função construtora é === Function.prototype
*O prototype de Function.prototype é ===  Object.prototype
*Object.prototype é === null
*/