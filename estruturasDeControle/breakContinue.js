const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a palavra chave "break" encerra o loop ou switch em que foi declarado e desvia o 
// andamento do código para fora do loop
// "break" opera somente em for e while ou switch
for (indice in nums) {
    if (indice == 5) { // se "indice" for igual a 5 ...
        break // encerre o loop "for" e continue executando o restante do código 
    }
    // imprime cada elemento e seu índice
    console.log(`índice ${indice} = ${nums[indice]}`) // só ira até o índice 4 devido ao break
}

// a palavra chave "continue" interrompe o loop em que foi declarado e pula para o próximo loop
for (ind in nums) {
    if (ind == 5) { // se "ind" for igual a 5 ...
        continue // encerre o loop atual e pule para o pŕoximo
    }
    console.log(`ind ${ind} = ${nums[ind]}`) 
    // o loop será executado até o indice 4, será interrompido no índice 5 
    // e retornará a partir do índice 6
}

// "break" pode interromper algum loop declarado no através de um rótulo 

// ambos os "for" irão interar sobre o array nums

externo: for (a in nums) { // o rótulo "externo" foi associado ao primeiro for 
    for (b in nums) {
        if (a == 2 && b == 3) break externo // se "a" for igual a 2 e "b" igual a 3
        // break irá encerrar o for "externo" e consequentemente todo o bloco associado

        // para cada iteração do primeiro "for"
        //  o segundo também ira iterar e ambos serão imprimidos 
        console.log(`Par = ${a},${b}`)
    }
}