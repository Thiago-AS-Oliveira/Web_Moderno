// é possivel baixar bibliotecas e arquivos de terceiros com node
// utilizando o "npm" que é a sigla de node package manager(gerenciador de pacotes do node)

// foi instalada diretamente na pasta do curso a biblioteca lodash
// foi criada uma pasta com o nome "node_modules" onde arquivos e bibliotecas baixadas pelo npm
// são instaladas, neste caso a biblioteca lodash


// o acesso para essa biblioteca é feito também com require
// é utilizado diretamente o nome da pasta lodash e não um caminho relativo
// isso é possível porque require procura dentro de node_modules e ao encontrar a pasta lodash
// ele busca um arquivo index em que o arquivo lodash estará sendo exportado
// o mesmo vale para todos as outras bibliotecas

const _ = require("lodash") 
// será excutada a função setInterval que a cada 2 segundos imprime no console a
// função random de lodash
setInterval(() => console.log(_.random(1, 500)), 2000)

// logo após foi instalada uma dependencia chamada "nodemon" de forma global
// esta dependencia não é exclusiva do projeto deste curso e pode ser acessada 
// por outros projetos, isso é possível porque nodemon foi instalada no computador

// nodemon é uma ferramenta utilizada para monitorar as alterações no arquivo e
// sempre que necessário, reiniciar, é bastante util para desenvolvimento

// para executar o arquivo com nodemon basta acessar a pasta e executar 
// o comando "nodemon arquivo.js"
// as teclas ctrl+c param a execução
// ao salvar cada alteração no arquivo ou digitar "rs" no terminal o código é reiniciado