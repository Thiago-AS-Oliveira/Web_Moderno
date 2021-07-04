function Aula(nome, id) {
    this.nome = nome
    this.videoID = id
}

// sabemos que quando utilizamos uma função construtora para criar objetos,
// seu protótipo é o objeto ".prototype" desta mesma função

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)

console.log(aula1, aula2) // criando novos objetos utilizando new

//simulando o new

// como parâmetro a função irá receber a função construtora e uma lista de parâmetros
// utilizando o operador rest/spread "..."
function novo(func, ...params) { 
    // criamos um novo objeto
    const obj = {} 
    // definimos o objeto .prototype da função construtora como protótipo deste objeto
    obj.__proto__ = func.prototype 
    // executamos a função utilizando apply passando o "obj" como contexto de execução 
    // e "params" como array de parâmetros. 
    // Caso tenha duvidas sobre Apply, consulte callApply.js no capitulo de funções
    func.apply(obj, params)
    // retornamos obj
    return obj
}

// agora instanciamos o novo objeto utilizando a função "novo"
const aula3 = novo(Aula, 'Bem vindo ao capitulo 2.', 789)
const aula4 = novo(Aula, 'Até a próxima', 101112)

console.log(aula3, aula4)