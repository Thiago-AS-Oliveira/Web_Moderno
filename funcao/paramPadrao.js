// Podemos criar valores padrão para parâmetros de diferentes formas

// estratégia 1 para gerar valor padrão
function soma1(a, b, c) { // utilizando o operador "||"(OR)
    a = a || 1 
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(2, 3, 5)) 
// dessa maneira "0" será interpretado como false e "1" será o parâmetro padrão,
// o que pode acabar gerando um efeito colateral
console.log(soma1(0, 0, 0))

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    // utilizando um operador ternário
    a = a !== undefined ? a : 1 // se "a" for diferente de undefined "a = a", se não "a = 1"
    // se existir o indice "1" em arguments,atribua seu elemento em b, se não "b = 1"
    b = 1 in arguments ? b : 1 
    c = isNaN(c) ? 1 : c // se "c" for igual a NaN, atribua o valor "1" se não "c = c"
    return a + b + c

    // obs: esses métodos são bem confusos.
}

console.log(soma2(), soma2(3), soma2(2, 3, 5), 
// dessa maneira "0" não será interpretado como false
soma2(0, 0, 0)
)

// Método para gerar valor padrão a partir do es2015
function soma3(a = 1, b = 1, c = 1) { // atribuindo os valores diretamente na declaração dos parâmetros 
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(2, 3, 5), soma3(0, 0, 0)) 