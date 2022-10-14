insert into estados (id, nome , sigla, regiao, populacao)
values(1000, 'Novo', 'Nv', 'Sul', 2.54)

-- ao não passar o id,será predefinido automaticamente um id continuando
-- do ultimo id, nesse caso os estados vão até o número 33 e pulam para 1000 com a
-- inserção acima portanto  a icrementação continuará de 1000
insert into estados (nome , sigla, regiao, populacao)
values('Jorginholandia', 'JL', 'Sudeste', 3)

select * from estados