function esperarPor(tempo = 2000) { // padrão 2 segundos
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Executando Promisse...")
            resolve()
        }, tempo)
    })
}

// a função será executada a cada periodo de tempo determinado
// esperarPor(2000)
//     .then(esperarPor)
//     .then(esperarPor)
//     .then(esperarPor)
//     .then(esperarPor)

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10),
        5000)
    })
}

async function executar() {
    let valor = await retornarValor()
    // com async/await a função "esperarPor" será executada primeiro para depois pular a
    // próxima sentença, executando o código de forma síncrona  
    await esperarPor(1000)
    console.log(`executando Async/Await ${valor}`)

    await esperarPor(2000)
    console.log(`executando Async/Await ${valor + 1}`)
    
    await esperarPor(3000)
    console.log(`executando Async/Await ${valor + 2}`)
}
// sem async/await,o console.log será executado primeiro, pois as funções 
// serão executadas após um tempo determinado, sendo assim um código assíncrono

executar()
