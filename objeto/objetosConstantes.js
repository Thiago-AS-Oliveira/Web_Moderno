// uma constante armazena dados, neste caso um objeto
// não é possivel a atribuir um novo dado, porém é possivel alterar
// o objeto atribuido na constante
const casa =  {
    morador: "João"
}
console.log(casa)
casa.morador = "Pedro" //alterando um dado do objeto atribuido
casa.cachorro = "Chorão"
console.log(casa)


//tentando atribuir um novo objeto
//casa = {morador: "Ana"}// erro

//Utilizando freeze, o objeto fica "congelado", ou seja,não poderar ser modificado
Object.freeze(casa) 

casa.morador = "Flavio"
casa.morador2 = "Ana"
console.log(casa.morador)
console.log(casa)

// também é possivel criar um objeto já "congelado"
const casaPropria = Object.freeze({morador: "Marcelo"})
casaPropria.morador = "Ricardo"
console.log(casaPropria)