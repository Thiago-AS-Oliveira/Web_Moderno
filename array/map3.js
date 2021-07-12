// criando um segundo map
// como no exemplo do segundo forEach, atribuimos a função no prototype de Array
// passamos uma callback como parâmetro
Array.prototype.map2 = function(callback) {
    // assim como map cria um novo array, faremos o mesmo dentro da função
    const newArray = []
    // percorremos o array original com o "for"
    for(let i = 0; i < this.length; i++) {
        // adicionamos cada elemento no array criado, executando a callback,
        // declarando cada parâmetro na ordem do exemplo de forEach2 
        newArray.push(callback(this[i], i, this)) // = (array[índice], índice, array)
    }
    // e por último, retornamos o novo array
    return newArray
}

const nums = [1, 2, 3, 4, 5]
// executamos a função map2 como nos exemplos anteriores com map original
let resultado = nums.map2(function(e) {
    return e * 2
})
console.log(resultado)