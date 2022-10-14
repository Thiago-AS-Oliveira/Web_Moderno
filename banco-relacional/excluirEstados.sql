-- para apagar colunas será necessário utilizar update

-- assim como em update, 'where' tbm é necessário para atualizar linhas específicas,
-- sem esse comando será deletada a tabela inteira
delete from estados
where sigla = 'JL'

-- também é possivel escluir utilizando uma regra específica
delete from estados
where id >= 1000


select * from estados