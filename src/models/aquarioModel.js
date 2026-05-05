
/* function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
} */

var database = require("../database/config");

function buscarResultadoPorUsuario(idUsuario) {

    var instrucaoSql = `
        SELECT perfilFinal FROM resultado WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarResultado(idUsuario, perfilFinal) {

    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, perfilFinal)
        VALUES (${idUsuario}, '${perfilFinal}');
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarResultadoPorUsuario,
    salvarResultado
};