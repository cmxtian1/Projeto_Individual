var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController")

router.post("/curtirPost", function (req, res) {
    curtidaController.curtirPost(req, res)
});

router.get("/listarCurtidas", function (req, res) {
    curtidaController.listarCurtidas(req, res)
});

module.exports = router;