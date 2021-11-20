var database = require("../database/config")


function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM atleta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM atleta WHERE email = '${email}' AND senha = SHA2('${senha}',224);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, dtnasc, graduacao, email, senha, telefone, academia) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtnasc, graduacao, email, senha, telefone, academia);
    var instrucao = `
        INSERT INTO atleta (nomeAtleta, dtnasc, graduacao, email, senha, telefone, academia) VALUES ('${nome}', '${dtnasc}', '${graduacao}', '${email}', SHA2('${senha}',224), '${telefone}', '${academia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function post(nome){
    var instrucao = `
    select nome from atleta where idatleta = 3 ;
    `
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    post,
};