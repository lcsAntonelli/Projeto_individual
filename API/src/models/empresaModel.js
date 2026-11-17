var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM ministerio WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, nome, codigoIdentificacao FROM ministerio`;

  return database.executar(instrucaoSql);
}

function buscarPorCodigoIdentificacao(codigoIdentificacao) {
  var instrucaoSql = `SELECT * FROM ministerio WHERE codigoIdentificacao = '${codigoIdentificacao}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome) {
  var instrucaoSql = `INSERT INTO ministerio (nome) VALUES ('${nome}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, buscarPorCodigoIdentificacao, cadastrar, listar };
