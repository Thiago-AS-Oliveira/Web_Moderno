const primeiroElemento = array => array[0]
const primeiraLetra = letra => letra[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise((resolve) => {
    resolve(['Ana', 'Carlos', 'Thiago', 'Nathalia'])
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(letra => console.log(letra))