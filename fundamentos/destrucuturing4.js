// Utilizando destructuring como parâmetro de uma função
// Utilizando arrray

function rand([min = 0, max = 1000]) {
    // trocando os valores utilizando destructuring, caso o valor "min" for maior que o valor "max"
    if(min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return(Math.floor(valor))
}
               // min, max
console.log(rand([30, 50])) // diferente de um objeto o valor setado é proporcional a posição no array
console.log(rand([50, 30]))// os valores serão invertidos,por causa do if declarado na função
console.log(rand([]))// valor padrão
console.log(rand([900])) // valor minimo
console.log(rand([ , 50])) // valor máximo
// console.log(rand())// por estar vazio, reotornará erro
