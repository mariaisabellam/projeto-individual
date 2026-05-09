var quizModel = require("../models/quizModel");

function salvarResposta(req, res) {
    var idUsuario = req.body.idUsuario;
    var artista   = req.body.artista   || null;
    var genero    = req.body.genero    || null;

    if (!idUsuario) {
        return res.status(400).send("ID do usuário não informado");
    }

    quizModel.salvarResposta(idUsuario, artista, genero)
        .then(() => res.json({ mensagem: "Resposta salva com sucesso" }))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Dashboard 

function listarArtistas(req, res) {
    quizModel.listarArtistas()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function listarGeneros(req, res) {
    quizModel.listarGeneros()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function listarInteracoesPorHora(req, res) {
    quizModel.listarInteracoesPorHora()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function listarUsuariosPorHora(req, res) {
    quizModel.listarUsuariosPorHora()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function listarTotais(req, res) {
    quizModel.listarTotais()
        .then(resultado => res.json(resultado[0]))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

module.exports = {
    salvarResposta,
    listarArtistas,
    listarGeneros,
    listarInteracoesPorHora,
    listarUsuariosPorHora,
    listarTotais
};