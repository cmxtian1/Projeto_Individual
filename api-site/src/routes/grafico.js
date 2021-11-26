var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");


router.get("/analytics", function (req, res) {
    graficoController.analytics(req, res);
});

module.exports = router;