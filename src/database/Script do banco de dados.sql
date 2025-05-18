
-- BANCO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
drop database Entusiastas_da_historia;

create database Entusiastas_da_historia;

use Entusiastas_da_historia;

select * from Usuario;

-- TABELAS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create table Usuario (
	id int primary key auto_increment,
	nome varchar(60),
    apelido varchar(80),
	telefone char(13),
	email varchar(60) unique,
	senha varchar(80)
	);
    
    SELECT * FROM Usuario WHERE email = 'julia@sptech.school';
    
create table Quiz (
	id int primary key auto_increment,
    perguntas int,
    periodo varchar(30));

create table Tentativa (
	id int primary key auto_increment,
    acertos int,
    erros int,
    nao_respondidos int,
    dataHora datetime,
    fkUsuario int,
    fkQuiz int,
    constraint usuarioTentativa FOREIGN KEY (fkUsuario) REFERENCES Usuario(id),
    constraint quizzTentativa FOREIGN KEY (fkQuiz) REFERENCES Quiz(id)
    );

