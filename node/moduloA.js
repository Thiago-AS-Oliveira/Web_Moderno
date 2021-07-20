// Em node, um arquivo representa um módulo
// um módulo tem códigos internos, por padrão esses códigos serão acessíveis
// somente nesse módulo, para ser acessível fora do módulo é necessário exportá-los

// podemos exportar arquivos utilizando this, exports e module.exports

this.ola = "Fala Pessoal!"
exports.bemVindo = "Bem vindo ao Node!"
module.exports.ateLogo = "Até ao próximao exemplo!"