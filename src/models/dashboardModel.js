const database = require("../database/config");

function totalUsuarioSite() {

    let instrucaoSql = `SELECT COUNT(*) AS qtd FROM usuario;`

    return database.executar(instrucaoSql);
}

function submeterResposta(idQuestao, pontuacao, idUsuario) {

    let instrucaoSql = `INSERT INTO resposta (pontuacao, dataHora, fkQuestao, fkUsuario) VALUES (${pontuacao}, now(), ${idQuestao}, ${idUsuario});`;

    return database.executar(instrucaoSql);
}

function mediaAcertos() {

    let instrucaoSql = `SELECT ROUND((SUM(pontuacao) / COUNT(*)) * 100, 1) AS taxa FROM resposta;`;

    return database.executar(instrucaoSql);
}


function mediaErros() {

    let instrucaoSql = `SELECT ROUND((SUM(CASE WHEN pontuacao = 0 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 1) AS taxa FROM resposta;`;

    return database.executar(instrucaoSql);
}

function carregarRanking() {

    let instrucaoSql = `
        SELECT SUM(CASE WHEN periodo = "Pré-História" THEN 1 ELSE 0 END) AS qtdPreHistoria,
		    SUM(CASE WHEN periodo = "Idade Antiga" THEN 1 ELSE 0 END) AS qtdIdadeAntiga,
		    SUM(CASE WHEN periodo = "Idade Média" THEN 1 ELSE 0 END) AS qtdIdadeMedia,
		    SUM(CASE WHEN periodo = "Idade Moderna" THEN 1 ELSE 0 END) AS qtdIdadeModerna,
		    SUM(CASE WHEN periodo = "Idade Contemporânea" THEN 1 ELSE 0 END) AS qtdIdadeContemporanea FROM usuario;
    `;

    return database.executar(instrucaoSql);
}

function graficoRespostas() {

    let instrucaoSql = `SELECT * FROM graficoRespostas;`;

    return database.executar(instrucaoSql)
}

module.exports = {
    totalUsuarioSite,
    submeterResposta,
    mediaAcertos,
    mediaErros,
    carregarRanking,
    graficoRespostas
}