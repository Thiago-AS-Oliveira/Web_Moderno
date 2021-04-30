// utilizando "if" não é necessário utilizar chaves "{}"
// porém sem as chaves só sera executada uma sentença de código


function teste1(num) {
    if(num > 7) // é necessario colocar chaves '{}' para executar multiplas sentenças 
    console.log(num)//somente essa linha está relacionada ao if

    console.log('Final')// como não esta relacionada a estrutura if, esta sentença será executada 
    // idependente se a condição for verdadeira ou não
}

teste1(6)// só será executado no console, "final"
teste1(8)

function teste2(num) {
    // não utilizer ';' com estruturas de controle
    if(num > 7); {// nesse caso, o bloco if terminou no ";" 
        // e entre as chaves está um outro bloco
        console.log(num)
    }
}
// ao executar a função, ambos os números serão imprimidos
teste2(6)
teste2(8)