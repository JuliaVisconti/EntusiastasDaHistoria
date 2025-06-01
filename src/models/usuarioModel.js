var database = require("../database/config")

function cadastrar(nome, email, apelido, telefone, senha, periodo) {
    var instrucaoSql = `
        INSERT INTO Usuario (nome, apelido, telefone, email, senha, periodo) VALUES ('${nome}', '${email}', '${apelido}', '${telefone}', '${senha}', '${periodo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    autenticar
};