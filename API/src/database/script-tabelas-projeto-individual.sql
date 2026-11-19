
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

CREATE TABLE genero (
	id INT PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR(45)
);

CREATE TABLE musicas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(300),
	fk_autor INT,
	fk_genero INT,
	fk_usuario INT,
	FOREIGN KEY (fk_autor) REFERENCES autor(id),
	FOREIGN KEY (fk_genero) REFERENCES genero(id),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

ALTER TABLE musicas MODIFY COLUMN fk_autor VARCHAR(45);
ALTER TABLE musicas DROP CONSTRAINT musicas_ibfk_1;
ALTER TABLE musicas RENAME COLUMN fk_autor TO autor;
desc musicas;

INSERT INTO usuario (nome, email, senha) VALUES
	('Usuário Um',   'um@teste.com',   '123'),
	('Usuário Dois', 'dois@teste.com', '123');

INSERT INTO genero (tipo) VALUES
	('Louvor'),
	('Adoração'),
	('Hino');

INSERT INTO autor (nome) VALUES
	('Autor A'),
	('Autor B');

INSERT INTO musicas (nome, autor, fk_genero, fk_usuario) VALUES
	('Música 1', 1, 1, 1),
	('Música 2', 1, 1, 1),
	('Música 3', 2, 2, 1),
	('Música 4', 2, 2, 1),
	('Música 5', 1, 3, 1),
	('Música 6', 2, 1, 2),
	('Música 7', 1, 3, 2),
	('Música 8', 2, 3, 2);


SELECT COUNT(*) AS total_musicas
FROM musicas
WHERE fk_usuario = 1;

SELECT genero.tipo AS genero, COUNT(*) AS quantidade
FROM musicas
JOIN genero ON musicas.fk_genero = genero.id
WHERE musicas.fk_usuario = 1
GROUP BY genero.tipo;

SELECT * FROM musicas;
INSERT INTO genero (tipo) VALUES ('Teste');
INSERT INTO genero (tipo) VALUES 
('Pop'),
('Clássica'),
('Sacra'),
('Rock'),
('Pop Rock'),
('MPB'),
('Romântico'),
('Mariana');
select * from genero;