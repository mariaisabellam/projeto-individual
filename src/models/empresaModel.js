var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM artista WHERE idArtista = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idArtista, nomeArtista, generoMusical, estilo FROM artista`;

  return database.executar(instrucaoSql);
}

function buscarPorGenero(generoMusical) {
  var instrucaoSql = `SELECT * FROM resultado WHERE generoMusical = '${generoMusical}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nomeArtista, generoMusical) {
  var instrucaoSql = `INSERT INTO artista (nomeArtista, generoMusical) VALUES ('${nomeArtista}', '${generoMusical}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorGenero, buscarPorId, cadastrar, listar };
