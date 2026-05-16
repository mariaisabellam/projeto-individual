var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscar/:id", function (req, res) {
    dashboardController.buscarPorId(req, res);
});
router.get("/listarAcertos", function (req, res) {
    dashboardController.listarAcertos(req, res);
});

router.get("/listarErros", function (req, res) {
    dashboardController.listarErros(req, res);
});

router.get("/listarRanking", function (req, res) {
    dashboardController.listarRanking(req, res);
});

router.get("/listarMediaGeral", function (req, res) {
    dashboardController.listarMediaGeral(req, res);
});

router.get("/listarMediaUsuario", function (req, res) {
    dashboardController.listarMediaUsuario(req, res);
});

module.exports = router;