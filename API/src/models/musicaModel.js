var database = require("../database/config");
var mysql = require("mysql2");

// mysql.escape() protege textos (ex.: nome de música com apóstrofo: Deus d'Amor)

function cadastrar(nome, autor,fkGenero, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO musicas (nome, autor, fk_genero, fk_usuario)
        VALUES (${mysql.escape(nome)}, ${mysql.escape(autor)}, ${fkGenero}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contar(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS total FROM musicas WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarGeneros() {
    var instrucaoSql = `SELECT id, tipo FROM genero ORDER BY tipo;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Gráfico: quantas músicas o usuário tem em cada gênero
function porGenero(idUsuario) {
    var instrucaoSql = `SELECT g.tipo AS genero, COUNT(m.id) AS total FROM musicas m
        JOIN genero g ON g.id = m.fk_genero
        WHERE m.fk_usuario = ${idUsuario}
        GROUP BY g.id, g.tipo
        ORDER BY total DESC, g.tipo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    contar,
    listarGeneros,
    porGenero
};
