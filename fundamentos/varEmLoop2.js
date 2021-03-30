const funcs = []

for(var i = 0; i < 10; i++) {
    // esse for vai atribuir um elemento por vez dentro do array através de push
    funcs.push(function() { // cada elemento dentro de funcs será essa função que imprime o valor de "i"
        console.log(i)
    })
}

// todos os valores atribuidos a cada elemento resultarão em 10
// isso acontece pois, a variável continua sendo iterada e modificada em todos os trechos do código
// por não possuir escopo de bloco
funcs[2]()
funcs[8]()