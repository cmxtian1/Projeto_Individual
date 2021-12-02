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
    select fkfeed, feed.fkatleta, descricao,nomeAtleta, count(curtiu) as qtdcurtida 
    from curtidas join feed on fkfeed=idfeed 
    join atleta on feed.fkatleta=atleta.idatleta 
    group by fkfeed;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    curtirPost,
    listarCurtidas
}