-- o filtro 'if not exists' criará a tabela se ela não existir, 'if' é uma condicional
-- 'not null' significa que o dado tem que ser preenchido
-- 'unsigned' é um atributo para definir apenas numeros inteiros
-- 'zerofill' é um atributto para prencher com zeros um número inteiro 
-- para que todos os números tenham o mesmo numero de caracteres. ex: 01 0010 010
CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
 );

CREATE TABLE IF NOT EXISTS teste (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
 );

-- drop exclui dados
-- nesse caso a tabela será excluida se ela existir
DROP TABLE IF EXISTS teste;