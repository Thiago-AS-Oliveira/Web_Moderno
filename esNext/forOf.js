// for of percorre os valores, diferente de for in que percorre o indice
for (letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// for in
for (let indice in assuntosEcma) {
    console.log(indice)
}
// for of
for (let valores of assuntosEcma) {
    console.log(valores)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}
// cada parametro acessa chave e valor separados
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}