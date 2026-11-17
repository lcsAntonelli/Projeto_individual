CREATE DATABASE almaencanto;
USE almaencanto;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE autor (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

create table musicas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(300),
	fk_autor INT,
	FOREIGN KEY (fk_autor) REFERENCES autor(id)
);

SELECT * FROM usuario;