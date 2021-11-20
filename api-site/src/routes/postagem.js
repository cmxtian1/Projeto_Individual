var express = require("express");
var router = express.Router();

var postagemController = require("../controllers/postagemController");

router.get("/", function (req, res) {
    postagemController.testar(req, res);
});

router.get("/listar", function (req, res) {
    postagemController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    postagemController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    postagemController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    postagemController.publicar(req, res);
});

router.delete("/postagem/deletar/:idFeed", function (req, res) {
    postagemController.deletar(req, res);
});

router.put("/postagem/editar/:idFeed", function (req, res) {
    postagemController.editar(req, res);
});

module.exports = router;