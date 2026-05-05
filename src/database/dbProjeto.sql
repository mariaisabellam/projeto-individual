USE dbProjeto;

CREATE TABLE usuario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  email VARCHAR(45),
  senha VARCHAR(45)
);

INSERT INTO usuario (nome, email, senha) VALUES 
('Maria Isabella', 'admin@gmail.com', 'Admin123!'); -- esse usuario, por ser o primeiro, apenas ele terá acesso a dashboard

CREATE TABLE pergunta (
  id_pergunta INT PRIMARY KEY AUTO_INCREMENT,
  questao VARCHAR(100)
);

 

CREATE TABLE alternativa (
  id_alternativa INT PRIMARY KEY AUTO_INCREMENT,
  texto VARCHAR(100),
  artista VARCHAR(45),
  genero VARCHAR(45),
  decada VARCHAR(45),
  fkPergunta INT,
  FOREIGN KEY (fkPergunta) REFERENCES pergunta (id_pergunta)
);

CREATE TABLE resposta_usuario (
  id_resposta INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  fkPergunta INT,
  fkAlternativa INT,
  FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
  FOREIGN KEY (fkPergunta) REFERENCES pergunta (id_pergunta),
  FOREIGN KEY (fkAlternativa) REFERENCES alternativa (id_alternativa)
);

CREATE TABLE resultado (
  id_resultado INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  perfilFinal VARCHAR(45),
  FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);


SELECT * FROM usuario;

INSERT INTO pergunta (questao) VALUES
('Qual artista você prefere?'),
('Qual gênero você gosta mais?'),
('Qual década você prefere?');

INSERT INTO alternativa (artista, genero, decada, fkPergunta) VALUES
('Lana Del Rey', 'Indie', '2010', 1),
('Olivia Rodrigo', 'Pop', '2020', 1),
('Sabrina Carpenter', 'Pop', '2010', 1),
(NULL, 'Pop', NULL, 2),
(NULL, 'Rock', NULL, 2),
(NULL, 'Indie', NULL, 2),
(NULL, NULL,'Anos 80', 3),
(NULL, NULL, '2000', 3),
(NULL, NULL, '2010', 3);

INSERT INTO resposta_usuario (fkUsuario, fkPergunta, fkAlternativa)
VALUES 
(2, 1, 3),
(2, 1, 2);



