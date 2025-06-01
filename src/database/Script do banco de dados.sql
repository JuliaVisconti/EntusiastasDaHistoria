
-- BANCO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- drop database Entusiastas_da_historia;

create database Entusiastas_da_historia;

use Entusiastas_da_historia;

-- select * from Usuario;

-- TABELAS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create table Usuario (
	id int primary key auto_increment,
	nome varchar(60),
    apelido varchar(80),
	telefone char(13),
	email varchar(60) unique,
	senha varchar(80),
    periodo varchar(45)
	);
        
create table Questao (
	id int primary key auto_increment,
    descricao varchar(90),
    resposta char(1));

create table Resposta (
	id int primary key auto_increment,
    pontuacao int,
    dataHora datetime,
    fkUsuario int,
    fkQuestao int,
    constraint usuarioTentativa FOREIGN KEY (fkUsuario) REFERENCES Usuario(id),
    constraint questaoTentativa FOREIGN KEY (fkQuestao) REFERENCES Questao(id)
    );

INSERT INTO questao (descricao, resposta) VALUES
("O que marca o fim da Pré-História?", "D"),
("Durante o Paleolítico, os humanos:", "C"),
("Uma conquista crucial do período Paleolítico foi:", "B"),
("A principal característica do Neolítico foi:", "C"),
("A Idade dos Metais ficou marcada pela(o):", "A"),
("A Idade Média começou com:", "C"),
("O sistema social e econômico dominante na Idade Média era:", "D"),
("No sistema feudal, os servos:", "C"),
("O que caracterizou a Baixa Idade Média?", "C"),
("A Peste Negra causou:", "B"),
("Um dos marcos iniciais da Idade Moderna foi:", "D"),
("O Renascimento destacou-se por valorizar:", "A"),
("A Reforma Protestante foi iniciada por:", "D"),
("O absolutismo é caracterizado pelo:", "C"),
("O mercantilismo defendia:", "B"),
("A Revolução Francesa foi motivada por:", "D"),
("A Revolução Industrial teve início na:", "A"),
("A Primeira Guerra Mundial terminou com:", "C"),
("A Guerra Fria foi marcada por:", "D"),
("A globalização é caracterizada por:", "A");

SELECT * FROM questao;

INSERT INTO usuario VALUES
(DEFAULT, 'Julia', 'juju', '11987654321', 'juvisconti@sptech.school', 'Urubu#100', null)


CREATE VIEW graficoRespostas AS (
	SELECT
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 1 THEN 1 ELSE 0 END) AS acertoQ1, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 1 THEN 1 ELSE 0 END) AS erroQ1, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 2 THEN 1 ELSE 0 END) AS acertoQ2, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 2 THEN 1 ELSE 0 END) AS erroQ2, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 3 THEN 1 ELSE 0 END) AS acertoQ3, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 3 THEN 1 ELSE 0 END) AS erroQ3, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 4 THEN 1 ELSE 0 END) AS acertoQ4, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 4 THEN 1 ELSE 0 END) AS erroQ4, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 5 THEN 1 ELSE 0 END) AS acertoQ5, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 5 THEN 1 ELSE 0 END) AS erroQ5, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 6 THEN 1 ELSE 0 END) AS acertoQ6, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 6 THEN 1 ELSE 0 END) AS erroQ6, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 7 THEN 1 ELSE 0 END) AS acertoQ7, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 7 THEN 1 ELSE 0 END) AS erroQ7, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 8 THEN 1 ELSE 0 END) AS acertoQ8, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 8 THEN 1 ELSE 0 END) AS erroQ8, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 9 THEN 1 ELSE 0 END) AS acertoQ9, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 9 THEN 1 ELSE 0 END) AS erroQ9, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 10 THEN 1 ELSE 0 END) AS acertoQ10, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 10 THEN 1 ELSE 0 END) AS erroQ10, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 11 THEN 1 ELSE 0 END) AS acertoQ11, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 11 THEN 1 ELSE 0 END) AS erroQ11, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 12 THEN 1 ELSE 0 END) AS acertoQ12, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 12 THEN 1 ELSE 0 END) AS erroQ12, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 13 THEN 1 ELSE 0 END) AS acertoQ13, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 13 THEN 1 ELSE 0 END) AS erroQ13, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 14 THEN 1 ELSE 0 END) AS acertoQ14, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 14 THEN 1 ELSE 0 END) AS erroQ14, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 15 THEN 1 ELSE 0 END) AS acertoQ15, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 15 THEN 1 ELSE 0 END) AS erroQ15, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 16 THEN 1 ELSE 0 END) AS acertoQ16, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 16 THEN 1 ELSE 0 END) AS erroQ16, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 17 THEN 1 ELSE 0 END) AS acertoQ17, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 17 THEN 1 ELSE 0 END) AS erroQ17, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 18 THEN 1 ELSE 0 END) AS acertoQ18, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 18 THEN 1 ELSE 0 END) AS erroQ18, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 19 THEN 1 ELSE 0 END) AS acertoQ19, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 19 THEN 1 ELSE 0 END) AS erroQ19, 
		SUM(CASE WHEN pontuacao = 1 AND fkQuestao = 20 THEN 1 ELSE 0 END) AS acertoQ20, SUM(CASE WHEN pontuacao = 0 AND fkQuestao = 20 THEN 1 ELSE 0 END) AS erroQ20
    FROM resposta
);