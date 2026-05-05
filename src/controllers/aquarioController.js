// var aquarioModel = require("../models/aquarioModel");

// function buscarAquariosPorEmpresa(req, res) {
//   var idUsuario = req.params.idUsuario;

//   aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
//     if (resultado.length > 0) {
//       res.status(200).json(resultado);
//     } else {
//       res.status(204).json([]);
//     }
//   }).catch(function (erro) {
//     console.log(erro);
//     console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
//     res.status(500).json(erro.sqlMessage);
//   });
// }


// function cadastrar(req, res) {
//   var descricao = req.body.descricao;
//   var idUsuario = req.body.idUsuario;

//   if (descricao == undefined) {
//     res.status(400).send("descricao está undefined!");
//   } else if (idUsuario == undefined) {
//     res.status(400).send("idUsuario está undefined!");
//   } else {


//     aquarioModel.cadastrar(descricao, idUsuario)
//       .then((resultado) => {
//         res.status(201).json(resultado);
//       }
//       ).catch((erro) => {
//         console.log(erro);
//         console.log(
//           "\nHouve um erro ao realizar o cadastro! Erro: ",
//           erro.sqlMessage
//         );
//         res.status(500).json(erro.sqlMessage);
//       });
//   }
// }

// module.exports = {
//   buscarAquariosPorEmpresa,
//   cadastrar
// }

var resultadoModel = require("../models/aquarioModel");

function buscarResultado(req, res) {
    var idUsuario = req.params.idUsuario;

    resultadoModel.buscarResultadoPorUsuario(idUsuario)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var perfilFinal = req.body.perfilFinal;

    resultadoModel.salvarResultado(idUsuario, perfilFinal)
        .then(resposta => {
            res.json(resposta);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    buscarResultado,
    salvar
};