-- "alter" permite alterar campos de uma tabela
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome,cnpj)
VALUES
    ('Bradesco', 97400987000173),
    ('Vale', 28982987000106),
    ('Cielo', 73754885000198);

-- "desc" descreve o conteúdo da tabela
DESC empresas;

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);