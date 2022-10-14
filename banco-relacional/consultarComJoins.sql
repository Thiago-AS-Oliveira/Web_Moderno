SELECT * FROM prefeitos;
SELECT * FROM cidades;

SELECT * FROM cidades c INNER JOIN prefeitos p on c.id = p.cidade_id;
-- retornando a interseção mais todos os dados da primeira tabela 
-- vc pode utilizar "outer" opcionalmente, sem ele o resultado é o mesmo
SELECT * FROM cidades c LEFT OUTER JOIN prefeitos p on c.id = p.cidade_id;
-- retornando a interseção mais todos os dados da segunda tabela 
SELECT * FROM cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;
-- alguns bancos suportam a consulta "full join", que retorna todos os campos das tabelas,
-- mysql não suporta essa consulta, para isso vc pode utillizar "union"
SELECT * FROM cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id
UNION 
SELECT * FROM cidades c LEFT OUTER JOIN prefeitos p on c.id = p.cidade_id;
-- ao utilizar "union all" vc cria duplicações pois ele retorna as duas consultas
