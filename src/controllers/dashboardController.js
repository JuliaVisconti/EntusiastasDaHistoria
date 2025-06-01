const gerenteModel = require("../models/dashboardModel");

function totalUsuarioSite(req, res) {

    gerenteModel.totalUsuarioSite()
        .then((resultado) => {
            res.json({
                lista: resultado
            })
        })
        .catch((erro) => {
            console.error("Erro na captura da kpi de total :", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function submeterResposta(req, res) {
    let idQuestao = req.body.idQuestaoServer;
    let pontuacao = req.body.pontuacaoServer;
    let idUsuario = req.body.idUsuarioServer;

    gerenteModel.submeterResposta(idQuestao, pontuacao, idUsuario)
        .then((resultado) => {
            res.json({
                lista: resultado
            })
        })
        .catch((erro) => {
            console.error("Erro na captura da kpi de total :", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function mediaAcertos(req, res) {

    gerenteModel.mediaAcertos()
        .then((resultado) => {
            res.json({
                lista: resultado
            })
        })
        .catch((erro) => {
            console.error("Erro na captura da kpi de total :", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function mediaErros(req, res) {

    gerenteModel.mediaErros()
        .then((resultado) => {
            res.json({
                lista: resultado
            })
        })
        .catch((erro) => {
            console.error("Erro na captura da kpi de total :", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function carregarRanking(req, res) {

    gerenteModel.carregarRanking()
        .then((resultado) => {
            res.json({
                lista: resultado
            })
        })
        .catch((erro) => {
            console.error("Erro na captura da kpi de total :", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoRespostas(req, res) {

    gerenteModel.graficoRespostas()
        .then((resultado) => {
            res.json({
                lista: resultado
            })
        })
        .catch((erro) => {
            console.error("Erro na captura da kpi de total :", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    totalUsuarioSite,
    submeterResposta,
    mediaAcertos,
    mediaErros,
    carregarRanking,
    graficoRespostas
}