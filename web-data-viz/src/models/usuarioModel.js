var database = require("../database/config")

function cadastrar(nome, email, apelido, telefone, senha) {
    var instrucaoSql = `
        INSERT INTO Usuario (nome, apelido, telefone, email, senha) VALUES ('${nome}', '${email}', '${apelido}', '${telefone}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email) {
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE email = '${email}';
    `;
    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    autenticar
};