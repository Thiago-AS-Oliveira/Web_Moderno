function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Erro detectado!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Teste', 1)
    .then(valor => console.log(valor))
    .catch(err => console.log(`Erro:${err}`))