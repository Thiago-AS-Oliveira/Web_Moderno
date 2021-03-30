const funcs = []

for(let i = 0; i < 10; i++) {
    // esse for vai atribuir um elemento por vez dentro do array através de push
    funcs.push(function() { // cada elemento dentro de funcs será essa função que imprime o valor de "i"
        console.log(i)
    })
}

// como a variável foi declarada em let, cada elemento será adcionado
//  de maneira independete como um bloco separado, respeitando o seu respectivo escopo
//  e atribuindo seu valor
funcs[2]()
funcs[8]()