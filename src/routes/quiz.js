var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// quiz
router.post("/salvarResposta", function (req, res) {
    quizController.salvarResposta(req, res);
});

// dashboard
router.get("/artistas", function (req, res) {
    quizController.listarArtistas(req, res);
});

router.get("/generos", function (req, res) {
    quizController.listarGeneros(req, res);
});

router.get("/interacoes-por-hora", function (req, res) {
    quizController.listarInteracoesPorHora(req, res);
});

router.get("/usuarios-por-hora", function (req, res) {
    quizController.listarUsuariosPorHora(req, res);
});

router.get("/totais", function (req, res) {
    quizController.listarTotais(req, res);
});

module.exports = router;