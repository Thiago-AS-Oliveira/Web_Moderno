-- atualizando um dado especifico
update estados 
set nome = 'Maranhão'
where sigla = 'MA' 
-- where é necessário para alterar linhas especificas, sem ele será alterado  todos os dados da tabela
select nome from estados where sigla = 'MA'

update estados 
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'
select nome, sigla, populacao from estados where sigla = 'PR'
