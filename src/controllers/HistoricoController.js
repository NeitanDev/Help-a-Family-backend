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
    async historyFamily() {

    }
};