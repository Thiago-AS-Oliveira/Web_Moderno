// Escopo léxico é o local onde sua função foi declarada.

// Closure é quando uma função "lembra" do seu escopo léxico,
// mesmo quando essa mesma função é executada fora desse escopo.
// Em outras plavras, closure é quando sua função lembra do local onde foi declarada,
// assim permitindo acessar dados e varíáveis nesse mesmo local,
// mesmo sendo executada em outro local.

// vamos aos exemplos

// "x" foi declarada no escopo global
const x = "Global"

// a função "globalX" imprime o valor de x no escopo global
function globalX() {
    console.log(x)
}
globalX() // resultado "Global"

function localX() {
    // a função "localX" imprime o valor de x no seu escopo...
    const x = "Local"
    console.log(x) // resultado "Local"
    // ... porém "globalX" mesmo sendo executada no escopo de "localX"
    // imprimirá o valor de x no escopo global, pois foi declarada acessando 
    // o valor de x no escopo global
    globalX()// resultado "Global"
}

localX()// imprimirá "Local" e "Global"