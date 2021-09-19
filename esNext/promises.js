// promisse é um objeto usado para processamento assíncrono. Um Promise (de "promessa")
// representa um valor que pode estar disponível agora, no futuro ou nunca.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A promise 1 foi resolvida')
    }, 2000)
})
//.then trata o valor caso a função seja executada normalmente
promise1.then(resultado => console.log(resultado.concat('!!!')))

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('A promise 2 foi rejeitada')
    }, 8000)
})

//catch trata o resultado de erro caso ocorra algum problema
promise2
    .then(resultado => console.log(resultado.concat('!!!')))
    .catch(erro => console.log(erro.concat('!!!')))

// tratar mais de uma promisse ao meso tempo

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A promise 3 foi resolvida')
    }, 10000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A promise 4 foi resolvida')
    }, 12000)
})
// se todos forem resolvidos caira no then, se um for rejeitado caira no catch
Promise.all([promise3, promise4])// all executa todas a promisses
    .then(([resultado1, resultado2]) => {
        console.log(resultado1.concat('!!!!'))
        console.log(resultado2.concat('!!!!'))
    })
    .catch(erro => console.log(erro.concat('!!!!')))