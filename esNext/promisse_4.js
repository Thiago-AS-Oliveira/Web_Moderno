function gerarNumeros(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeros(1, 60, 2000),
        gerarNumeros(8, 18, 1000),
        gerarNumeros(100, 200, 500),
        gerarNumeros(1, 60, 4000),
        gerarNumeros(50, 100, 1000),
    ])
}

gerarVariosNumeros()
    .then(numeros => numeros.forEach(numero => console.log(numero)))