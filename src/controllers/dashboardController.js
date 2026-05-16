var dashboardModel = require("../models/dashboardModel");

function buscarPorId(req, res) {
    var id = req.query.id;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        dashboardModel.buscarPorId(id)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        res.json(resultado)
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function listarTotalUsuarios(req, res) {
  dashboardModel.listarTotalUsuarios()
  .then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarTotalInteracoesQuiz(req, res) {
    dashboardModel.listarTotalInteracoesQuiz()
    .then((resultado) => {
      res.status(200).json(resultado);
    });
    
}

function listarRanking(req, res) {
   dashboardModel.listarRanking()
    .then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarMediaGeral(req, res) {
   dashboardModel.listarMediaGeral()
    .then((resultado) => {
    res.status(200).json(resultado)
  });
        
}

function listarMediaUsuario(req, res) {
    var fkUsuario = req.params.fkUsuario;
    dashboardModel.listarMediaUsuario(fkUsuario)
    .then((resultado) => {
        res.status(200).json(resultado)
    });
}

function listarAcertos(req, res) {
    var fkUsuario = req.params.fkUsuario;
    dashboardModel.listarAcertos(fkUsuario)
    .then((resultado) => {
        res.status(200).json(resultado)
    })
}

function listarErros(req, res) {
    var fkUsuario = req.params.fkUsuario;
    dashboardModel.listarErros(fkUsuario)
    .then((resultado) => {
        res.status(200).json(resultado);
    })
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
