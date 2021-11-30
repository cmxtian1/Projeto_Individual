
var curtidaModel = require("../models/curtidaModel");

function curtirPost(req, res) {
    var idFeed = req.body.idPost;
    var idAtleta = req.params.idAtleta;

    if (idFeed == undefined) {
        res.status(400).send('Erro');
    }

    curtidaModel.curtirPost(idFeed,idAtleta).then(function (res){
        res.status(200).send('Tudo certo');
    }).catch(function(erro) {
        console.log(erro);
        res.status(500).send("Erro (erro de servidor)", erro);
    })

    res.send('Tudo certo')
}

function listarCurtidas(req, res) {

    curtidaModel.listarCurtidas().then(function (resultado){
        res.status(200).json(resultado);
    }).catch(function(erro) {
        console.log(erro);
        res.status(500).send("Erro (erro de servidor)", erro);
    });
}

module.exports = {
    curtirPost,
    listarCurtidas
}