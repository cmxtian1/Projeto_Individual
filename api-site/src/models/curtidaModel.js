var database = require("../database/config")

var contador = 0

console.log(contador);

function curtirPost(idFeed, idAtleta) {

    contador++;

    var instrucao = `
        insert into curtidas values ('${idFeed}', '${idAtleta}', '1'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listarCurtidas() {

    var instrucao = `
    select fkfeed, count(curtiu) from curtidas group by fkfeed;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    curtirPost,
    listarCurtidas
}