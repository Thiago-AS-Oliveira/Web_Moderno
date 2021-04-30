// "if" é uma estrutura condicional que executa um bloco de código 
// caso, alguma condicão seja verdadeira
// utilizamos os operadores lógicos, relacionais e boleans para definir as condições

// aqui, por exemplo...
function soBoaNoticia(nota) {
    if(nota >= 7) { // console.log será executada se a nota for maior ou igual a 7
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(9)
soBoaNoticia(6.9)// não mostrará

function verdadeiro(valor) {
    if(valor) { // console.log será executada se o valor for veradeiro
        console.log('É verdade... ' + valor)
    }
}

verdadeiro(null)//falso
verdadeiro(1)
verdadeiro(0)//falso
verdadeiro(-1.5)
verdadeiro(NaN)//falso
verdadeiro("Verdadeira")