-- consultando cidades e empresas utilizando a tabela intermediaria
SELECT e.nome Empresa, c.nome Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id AND c.id = eu.cidade_id 
and sede;
