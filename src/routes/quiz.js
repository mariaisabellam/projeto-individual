var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarResultado", function (req, res) {
    quizController.salvarResultado(req, res);
});

router.get("/artistas", function (req, res) {
    quizController.listarArtistas(req, res);
});
router.get("/generos", function (req, res) {
    quizController.listarGeneros(req, res);
});

router.get("/decadas", function (req, res) {
    quizController.listarDecadas(req, res);
});

module.exports = router;