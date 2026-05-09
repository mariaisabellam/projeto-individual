var resultadoModel = require("../models/resultadoModel");

function buscarPorGenero(req, res) {
  var generoMusical = req.query.generoMusical;

  resultadoModel.buscarPorGenero(generoMusical).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  resultadoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  resultadoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var generoMusical = req.body.generoMusical;
  var nomeArtista = req.body.nomeArtista;

  resultadoModel.buscarPorGenero(generoMusical).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `o generoMusical ${generoMusical} já existe` });
    } else {
      resultadoModel.cadastrar(nomeArtista, generoMusical).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorGenero,
  buscarPorId,
  cadastrar,
  listar,
};
