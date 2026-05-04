var database = require("../database/config");


function salvarResultado(idUsuario, pontuacao) {
    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, pontuacao) VALUES
        (${idUsuario}, ${pontuacao});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado
};