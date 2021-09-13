// set é um conjunto que não aceita repetição e não é indexado 

const times = new Set()
times.add('Vasco') // para adicionar elementos é utilizado .add()
times.add('São Paulo')
times.add('Flamengo').add('Palmeiras').add('Corinthians').add('Botafogo')
times.add('Flamengo') // ignorado

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))// cuidado com as letras minusculas e maiusculas
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Persival', 'Josias', 'Josivaldo', 'Persival']
console.log(nomes)
const nomesSet = new Set(nomes) // ao ser criado, foram ignorados os elementos repetidos
console.log(nomesSet)