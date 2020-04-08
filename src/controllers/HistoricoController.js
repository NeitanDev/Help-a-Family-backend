const Familias = require('../models/Familias');
const Organizacoes = require('../models/Organizacoes');
const connection = require('../database/index');
const Historico = require('../models/Historico');

module.exports = {
    async createHelp(req, res) {
        const id_organizacao = req.headers.authorization;
        const { id_familia } = req.params;
        const data = new Date();
        const response = await Historico.create({
            id_familia,
            id_organizacao,
            data
        });

        return res.json(response);
    },
    async familyList(req, res) {
        const id_familia = req.headers.authorization;

        const ajudas = await connection.query(`SELECT organizacoes.nome, historico.data FROM organizacoes, historico WHERE id_organizacao = organizacoes.id AND id_familia = ${id_familia}`,
            { type: connection.QueryTypes.SELECT });

        return res.json(ajudas);
    },
    async orgList(req, res) {
        const id_org = req.headers.authorization;

        const ajudas = await connection.query(`SELECT familias.sobrenome, historico.data FROM familias, historico WHERE id_familia = familias.id AND id_organizacao = ${id_org}`,
            { type: connection.QueryTypes.SELECT });

        return res.json(ajudas);
    }
};