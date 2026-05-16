var database = require("../database/config");

// Salva UMA resposta (artista e/ou gênero da alternativa escolhida)
function salvarResposta(idUsuario, artista, genero) {
    return database.executar(`
        INSERT INTO resposta_usuario (fkUsuario, artista, genero, data_resposta)
        VALUES (
        ${idUsuario}, 
        ${artista}, 
        ${genero},
    `);
}
