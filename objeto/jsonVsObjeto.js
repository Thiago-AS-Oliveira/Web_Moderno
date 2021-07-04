// JSON e Objeto não são o mesmo tipo
// JSON é um formato textual para troca de dados entre sistemas
// é muito utiilizando em diferente linguagens para interação entre elas

// transformando um objeto em json 
const obj = {a: 1,b: 2,c: 3, soma() {return a + b + c}} 
console.log(JSON.stringify(obj))
// a função soma não foi transformada pois Json é somente um formato textual,
// não executa nenhuma função

// a função parse transforma um json em um objeto

// todo nome de um atributo json precisa ter aspas duplas
// um valor numérico não precisa de aspas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
// strings precisam de aspas duplas, json também aceita booleans, objetos e arrays
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

// atributos json inválidos
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) 
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))