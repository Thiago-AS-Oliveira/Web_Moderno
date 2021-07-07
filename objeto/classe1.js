// Classes são maneiras mais simples de criar objetos e lidar com heranças em javascript 

class Lancamento {
    // para criar atributos utilizamos a palavra constructor, como uma função
    // podemos passar parâmetros que serão utilizados como atributos ou criar atributos 
    // com valores predefinidos, sejam eles definidos nos parâmetros 
    // ou diretamente em constructor
    // só pode existir um constructor por classe

    // se valor não for definido na crição do objeto seu valor será 0, como feito abaixo
    constructor(chave = 'Genéreico', value = 0) {

        // criaremos objetos com os valores de receitas e dividas
        this.nome = chave
        this.valor = value
        // this.valorFixo = "Valor Fixo" // valor fixo predefinido
    }
}

class CicloFinanceiro {
    constructor(mounth, year) {
        // criamos um objeto com os anos e meses das despesas e um array com as receitas de cada mês
        this.mes = mounth
        this.ano = year
        this.receita = []
    }
    // declaramos métodos diretamente no corpo da classe

    addLancamentos(...lancamentos) {  
        // utilizando rest/spread adcionaremos todos os objetos criados 
        //  a partir da classe Lancamento no array "receita"

        // para cada elemento no array lancametos criado com rest
        // adicione cada elemento no array "receita"
        lancamentos.forEach(lanca => this.receita.push(lanca))
    }

    sumario() {
        // o método sumario faz o calculo total da renda
        let valorConsolidado = 0 
        this.receita.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// e instanciamos cada classe com a palavra new, criando novos objetos
const salario = new Lancamento('Salario', 1500) // passando os parâmetros definidos em constructor
const contaluz = new Lancamento('Luz', -600)
const internet = new Lancamento('Internet', -89,90)

const contas = new CicloFinanceiro(6, 2020)
// executando a função addLancamentos e passando cada objeto como parâmetro
contas.addLancamentos(salario, contaluz, internet)

console.log("Valor liquido:",contas.sumario()) // resultado 811