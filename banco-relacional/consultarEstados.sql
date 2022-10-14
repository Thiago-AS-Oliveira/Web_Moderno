-- selecionando todos as colunas
select * from estados

-- filtrando colunas específicas

select nome, sigla from estados
select sigla, populacao, regiao from estados

-- criando label para coluna
select sigla, nome as "Estado" from estados

-- filtrando linhas 

-- estados da regiao sul
select sigla, nome from estados
where regiao = "Sul"

-- estados com população maior que 10 milhoes

select nome, regiao, populacao from estados
where populacao >= 10

-- ordenando de maneira crescente

select nome, regiao, populacao from estados
where populacao >= 10
-- com ou sem "asc" ordena em ordem crescente, numerica ou alfabeticamente
order by populacao 

-- ordenando de maneira decrescente
select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc