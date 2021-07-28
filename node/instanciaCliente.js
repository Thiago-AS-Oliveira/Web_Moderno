// ao importar um módulo, node o armazena em cache, ou seja, todos o módulos
// importados serão de instância única, isso pode gerar alguns bugs...

// caso seja necessário criar novas instâncias, todas serão exatamente iguais e sofrerão 
// as mesmas alterações

// ex:
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// um valor instanciado de "contadorA" sofrerá incrementos e "contadorB" também sofrerá alterações
contadorA.incremento()
contadorA.incremento()
console.log("contadorA:", contadorA.valor)
console.log("contadorB:", contadorA.valor)

// é possível driblar esse cache utilizando uma função construtora, que sempre retorna
// um novo objeto, assim as alterações serão feitas somente em um módulo, 
// os demais seguem com o objeto original

// para executar a função retornando o objeto no require é necessário declarar os parenteses
const contadorC = require('./instanciaNova')()  
const contadorD = require('./instanciaNova')()

// ao incrementar "contadorC" somente seu valor foi alterado, o valor de "contadorD"
// permanece o padrão da função importada
contadorC.incremento()
contadorC.incremento()
contadorC.incremento()
console.log("contadorC:", contadorC.valor)
console.log("contadorD:", contadorD.valor)