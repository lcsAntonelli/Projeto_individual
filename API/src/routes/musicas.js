var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
});

router.get("/total/:idUsuario", function (req, res) {
    musicaController.contar(req, res);
});

router.get("/generos", function (req, res) {
    musicaController.listarGeneros(req, res);
});

router.get("/por-genero/:idUsuario", function (req, res) {
    musicaController.porGenero(req, res);
});

module.exports = router;
