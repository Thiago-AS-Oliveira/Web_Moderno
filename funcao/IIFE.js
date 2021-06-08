//IIFE (Immediately Invoked Function Expression)
//IIFE é uma função auto executada ou função imediata
// funçoes imediatas executam imediatamente após sua declaração
// seu principal objetivo é evitar o escopo global(node) ou window(browser)
// dificultando a alteração de variáveis e funções 

// sua sintaxe mais comum é declarando uma função envolvida entre "()" seguida de mais um par de "()" 
// que executa a função imediatamente
// no bloco da função seu código é declarado normalmente
(function() {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
