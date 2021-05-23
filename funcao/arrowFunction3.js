// função que compara o contexto de execução
let comparacao = function(param) {
    console.log(this === param)
}
comparacao(global) // true

const obj = {}
comparacao = comparacao.bind(obj) // this indexado ao escopo de obj
comparacao(global)//false
comparacao(obj)//true

// função arrow
let comparacaoArrow = param => console.log(this === param)
// em uma arrow function, this é a associado ao contexto em que a função foi escrita
// não pode ser associado a outros contextos 

comparacaoArrow(global)// false 
comparacaoArrow(module.exports)//true

// mesmo utilizando bind, this não será associado  
comparacaoArrow = comparacaoArrow.bind(obj)
comparacaoArrow(obj)//false
comparacaoArrow(module.exports)//true
