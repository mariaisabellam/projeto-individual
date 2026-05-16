var database = require("../database/config");

function buscarPorId(id) {
     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente")
     var instrucaoSql = `
        SELECT * FROM resposta_usuario WHERE id = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(fkUsuario, totalAcertos, totalErros) {
  var instrucaoSql = `INSERT INTO resposta_usuario (fkUsuario, totalAcertos, totalErros) VALUES 
  ('${fkUsuario}','${totalAcertos}', '${totalErros}')`;

  return database.executar(instrucaoSql);
}
module.exports = {  
    buscarPorId, 
    cadastrar
};

