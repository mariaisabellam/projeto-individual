var database = require("../database/config");

function listarArtistas(){
    return database.executar(
        `SELECT a.artista, COUNT(*) AS total
        FROM resposta_usuario r
        JOIN alternativa AS a 
        ON r.fkAlternativa = a.id_alternativa
        WHERE a.artista IS NOT NULL
        GROUP BY a.artista`
    );

}
function listarGeneros(){
    return database.executar(
        `SELECT a.genero, COUNT(*) AS total
        FROM resposta_usuario r
        JOIN alternativa a ON r.fkAlternativa = a.id_alternativa
        WHERE a.genero IS NOT NULL
        GROUP BY a.genero`
    );

}
function listarDecadas(){
    return database.executar(
        `SELECT a.decada, COUNT(*) AS total
        FROM resposta_usuario r
        JOIN alternativa a ON r.fkAlternativa = a.id_alternativa
        WHERE a.decada IS NOT NULL
        GROUP BY a.decada`
    );

}
function salvarResultado(idUsuario, pontuacao) {
    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, pontuacao) VALUES
        (${idUsuario}, ${pontuacao});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado,
    listarArtistas,
    listarGeneros,
    listarDecadas
};