// a maneira mais comum de exportar elementos é atribuindo um novo objeto em
// module.exports, este objeto pode conter diferentes dados 

const boaTarde = "Boa tarde!"
module.exports = {
    bomDia: "Bom Dia!",
    boaTarde,
    boaNoite: function() {return "Boa noite!"}
}