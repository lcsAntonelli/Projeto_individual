var musicaModel = require("../models/musicaModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    let autor = req.body.autorServer;
    var idGenero = req.body.idGeneroServer;
    var idUsuario = req.body.idUsuarioServer;

    if (nome == undefined || nome == "") {
        res.status(400).send("O nome da música está vazio!");
    } else if (String(nome).length > 300) {
        res.status(400).send("O nome da música passou de 300 caracteres!");
    } else if (idGenero <= 0) {
        res.status(400).send("Gênero inválido!");
    } else if (idUsuario <= 0) {
        res.status(400).send("Usuário inválido!");
    } else {
        musicaModel.cadastrar(String(nome).trim(), String(autor), Number(idGenero), Number(idUsuario))
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar a música! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function contar(req, res) {
    var idUsuario = req.params.idUsuario;


    musicaModel.contar(Number(idUsuario))
        .then(function (resultado) {
            res.json(resultado[0]);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao contar as músicas! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

function listarGeneros(req, res) {
    musicaModel.listarGeneros()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao listar os gêneros! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function porGenero(req, res) {
    var idUsuario = req.params.idUsuario;

    musicaModel.porGenero(Number(idUsuario))
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar músicas por gênero! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

module.exports = {
    cadastrar,
    contar,
    listarGeneros,
    porGenero
};
