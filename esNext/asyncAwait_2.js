function gerarNumeros(min, max, numerosRepetidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosRepetidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(quantidadeNums, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(quantidadeNums).fill()) { // O método fill() preenche elementos especificados em uma matriz com um valor estático
            numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    } catch(err) {
        if (tentativas > 5) {
            throw "Lamentável"
        } else  {
            return gerarMegaSena(quantidadeNums, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
    
// gerarNumeros(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)