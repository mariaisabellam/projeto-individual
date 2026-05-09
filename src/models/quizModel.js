var database = require("../database/config");

// Salva UMA resposta (artista e/ou gênero da alternativa escolhida)
function salvarResposta(idUsuario, artista, genero) {
    return database.executar(`
        INSERT INTO resposta_usuario (fkUsuario, artista, genero, data_resposta)
        VALUES (
        ${idUsuario}, 
        ${artista ? `'${artista}'` : 'NULL'}, 
        ${genero ? `'${genero}'` : 'NULL'}, 
        NOW())
    `);
}

function listarArtistas() {
    return database.executar(`
        SELECT artista, COUNT(*) AS totalArtistas
        FROM resposta_usuario
        WHERE artista IS NOT NULL
        GROUP BY artista
        ORDER BY totalArtistas DESC
    `);
}

function listarGeneros() {
    return database.executar(`
        SELECT genero, COUNT(*) AS total
        FROM resposta_usuario
        WHERE genero IS NOT NULL
        GROUP BY genero
        ORDER BY total DESC
    `);
}

function listarInteracoesPorHora() {
    return database.executar(`
        SELECT HOUR(data_resposta) AS hora, COUNT(*) AS total
        FROM resposta_usuario
        WHERE DATE(data_resposta) = CURDATE()
        GROUP BY HOUR(data_resposta)
        ORDER BY hora
    `);
}

function listarUsuariosPorHora() {
    return database.executar(`
        SELECT HOUR(data_cadastro) AS hora, 
        COUNT(*) AS total
        FROM usuario
        WHERE DATE(data_cadastro) = CURDATE()
        GROUP BY HOUR(data_cadastro)
        ORDER BY hora
    `);
}

function listarTotais() {
    return database.executar(`
        SELECT
            (SELECT COUNT(*) FROM usuario) AS totalUsuarios,
            (SELECT COUNT(*) FROM resposta_usuario) AS totalInteracoes
    `);
}

module.exports = {
    salvarResposta,
    listarArtistas,
    listarGeneros,
    listarInteracoesPorHora,
    listarUsuariosPorHora,
    listarTotais
};