var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    if (idUsuario == undefined || pontuacao == undefined) {
        res.status(400).send("Dados do usuário undefined");
    }
    quizModel.salvarResultado(idUsuario, pontuacao)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }

function listarArtistas(req, res) {
    quizModel.listarArtistas().then(resultado => {
        res.json(resultado)
    })
}
function listarDecadas(req, res) {
    quizModel.listarDecadas().then(resultado => {
        res.json(resultado)
    })
}
function listarGeneros(req, res) {
    quizModel.listarGeneros().then(resultado => {
        res.json(resultado)
    })
}

module.exports = {
    salvarResultado,
    listarArtistas,
    listarDecadas,
    listarGeneros
};