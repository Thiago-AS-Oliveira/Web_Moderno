function saudacao(nome) {
    return (req, res, next) => {
        console.log(`Olá ${nome}!`)
        next()
    }
} 

module.exports = saudacao