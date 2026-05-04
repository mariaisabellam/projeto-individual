var empresaModel = require("../models/empresaModel");

function buscarPorGenero(req, res) {
  var generoMusical = req.query.generoMusical;

  empresaModel.buscarPorGenero(generoMusical).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var generoMusical = req.body.generoMusical;
  var nomeArtista = req.body.nomeArtista;

  empresaModel.buscarPorGenero(generoMusical).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `o generoMusical ${generoMusical} já existe` });
    } else {
      empresaModel.cadastrar(nomeArtista, generoMusical).then((resultado) => {
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
