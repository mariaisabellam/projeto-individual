var database = require("../database/config")

function buscarPorId(id) {
  console.log("ACESSEI O USUARIO MODEL")
  var instrucaoSql =
    `SELECT fkUsuario, totalAcertos, totalErros FROM resposta_usuario WHERE fkUsuario = '${id}'`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarTotalUsuarios() {
  var instrucaoSql =
    `SELECT COUNT(id) AS total_usuarios
    FROM usuario`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarTotalInteracoesQuiz() {
  var instrucaoSql =
    `SELECT COUNT(*) AS total_interacoes
	  FROM resposta_usuario `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarRanking() {
  var instrucaoSql =
    `SELECT r.fkUsuario,
	  u.nome AS nome_usuario,
	  MAX(r.totalAcertos) AS maior_posicao,
    MAX(r.data_resposta) AS resposta_recente
    FROM resposta_usuario r
    JOIN usuario u ON 
    r.fkUsuario = u.id
    GROUP BY r.fkUsuario, u.nome
    ORDER BY maior_posicao DESC, resposta_recente DESC`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarMediaGeral() {
  var instrucaoSql =
    `SELECT ROUND(AVG(totalAcertos/ 10 * 100), 2) AS mediaAcertos_geral
		FROM resposta_usuario`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}

function listarMediaUsuario(fkUsuario) {
  var instrucaoSql =
    `SELECT fkUsuario,
	  ROUND(AVG(totalAcertos/10 * 100),0) AS mediaAcertos_usuario
		FROM resposta_usuario
    WHERE fkUsuario = '${fkUsuario}'
	  GROUP BY fkUsuario`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarAcertos(fkUsuario) {

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
        SELECT fkUsuario, totalAcertos 
        FROM resposta_usuario 
        WHERE fkUsuario = '${fkUsuario}' 
        ORDER BY id DESC 
        LIMIT 1`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarErros(fkUsuario) {
  var instrucaoSql = `
         SELECT fkUsuario, totalErros 
         FROM resposta_usuario 
         WHERE fkUsuario = '${fkUsuario}' 
         ORDER BY id DESC 
         LIMIT 1`;

  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPorId,
  listarTotalUsuarios,
  listarTotalInteracoesQuiz,
  listarRanking,
  listarMediaGeral,
  listarMediaUsuario,
  listarAcertos,
  listarErros
};