USE dbProjeto;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);
 

CREATE TABLE pergunta (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
questao VARCHAR(100)
);

CREATE TABLE resposta (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
respostaPergunta VARCHAR (100),
fkPergunta INT,
CONSTRAINT chFkPergunta FOREIGN KEY (fkPergunta) REFERENCES pergunta (idPergunta)
);

CREATE TABLE Usuario (
idArtista INT PRIMARY KEY AUTO_INCREMENT,
nomeArtista VARCHAR(45),
generoMusical VARCHAR (45),
estilo VARCHAR(45)
);

CREATE TABLE resultado (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkResposta INT,
fkArtista INT,
fkUsuario INT
CONSTRAINT chFkResposta FOREIGN KEY (fkResposta) REFERENCES resposta (idResposta),
CONSTRAINT chFkArtista FOREIGN KEY (fkArtista) REFERENCES artista (idArtista),
CONSTRAINT chFkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);


