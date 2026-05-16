var quizModel = require("../models/quizModel");

function salvarResposta(req, res) {
    var idUsuario = req.body.idUsuario;

    if (!idUsuario) {
        return res.status(400).send("ID do usuário não informado");
    }

    quizModel.salvarResposta(idUsuario, artista, genero)
        .then(() => res.json({ mensagem: 
            "Resposta salva com sucesso" 
        }))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    salvarResposta,
};


function autenticar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
   

    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {

        quizModel.autenticar(idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].id,            
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Usuario ou inválido(s)");
                    } 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o quiz! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}