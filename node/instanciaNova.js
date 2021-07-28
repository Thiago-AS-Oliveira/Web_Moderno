// utilizando uma função construtora, sempre será criado um novo objeto a cada require 
module.exports = () => {
    return {
        valor: 1,
        incremento() {
        this.valor++
        }
    }
}