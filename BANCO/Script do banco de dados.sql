
-- BANCO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create database Entusiastas_da_historia;

use Entusiastas_da_historia;

-- TABELAS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create table Usuario (
	id int primary key auto_increment,
	nome varchar(60),
	telefone char(13),
	email varchar(60),
	estado char(2),
	ocupacao varchar(60),
	dataNascimento date );

create table Tentativa (
	id int primary key auto_increment,
    acertos int,
    erros int,
    nao_respondidos int,
    dataHora datetime,
    fkUsuario int,
    fkQuiz int);

create table Quiz (
	id int primary key auto_increment,
    perguntas int,
    periodo varchar(30));