
var quizModel = require("../models/quizModel");

function buscarPorId(req, res) {
  var id = req.query.id;

  if (id == undefined) {
     res.status(400).send("Seu id está undefined!");
  } else {
      quizModel.buscarPorId(id)
        .then(
            function (resultadoQuiz) {
                console.log(`\nResultados encontrados: ${resultadoQuiz.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoQuiz)}`); // transforma JSON em String

                    if(resultadoQuiz.length > 0) {
                        res.json(resultadoQuiz)
                    }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

function cadastrar(req, res){
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var totalAcertos = req.body.totalAcertosServer;
    var totalErros = req.body.totalErrosServer;

    if (fkUsuario == undefined) {
        res.status(400).send("Seu Usuario está undefined!");
    } else if (totalAcertos == undefined) {
        res.status(400).send("O totalAcertos está undefined!");
    } else if (totalErros == undefined) {
        res.status(400).send("O totalErros está undefined!");
    } else {
        quizModel.cadastrar(fkUsuario, totalAcertos, totalErros)
        .then(
                function (resultado) {
                    res.json(resultado);
                }
        ) .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                    res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

module.exports = {
    buscarPorId,
    cadastrar
}

   
