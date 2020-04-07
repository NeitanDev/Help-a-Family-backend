const Familias = require('../models/Familias');
const Organizacoes = require('../models/Organizacoes');
const connection = require('../database/index');

module.exports = {
    async loginOrg(req, res) {
        const { email, senha } = req.body;
        const response = await Organizacoes.findOne({
            attributes: ['id', 'nome'],
            where: {
                email,
                senha
            },
        });

        return res.json(response);
    },
    async loginFamily(req, res) {
        const { chave, senha } = req.body;
        const response = await Familias.findOne({
            attributes: ['id', 'Sobrenome'],
            where: {
                chave,
                senha
            },
        });

        return res.json(response);
    },
};