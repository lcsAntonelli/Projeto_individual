var empresaModel = require("../models/empresaModel");

function buscarPorCodigoIndetificacao(req, res) {
  var codigoIdentificacao = req.query.codigoIdentificacao;

  empresaModel.buscarPorCodigoIndetificacao(codigoIdentificacao).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var codigoIdentificacao = req.body.codigoIdentificacao;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCodigoIndetificacao(codigoIdentificacao).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o codigoIdentificacao ${codigoIdentificacao} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, codigoIdentificacao).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCodigoIndetificacao,
  buscarPorId,
  cadastrar,
  listar,
};
