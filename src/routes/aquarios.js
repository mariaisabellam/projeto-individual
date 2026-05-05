var express = require("express");
var router = express.Router();

router.get("/usuario/:idUsuario", function (req, res) {
    aquarioController.buscarResultado(req, res);
});

router.post("/salvar", function (req, res) {
    aquarioController.salvar(req, res);
});

module.exports = router;