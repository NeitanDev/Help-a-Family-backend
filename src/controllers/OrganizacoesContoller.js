const Organizacoes = require('../models/Organizacoes');

module.exports = {
    async create(req, res) {
        const {
            email,
            senha,
            nome,
            descricao,
            telefone,
            whatsapp,
        } = req.body;

        const organizacao = await Organizacoes.create({
            email,
            senha,
            nome,
            descricao,
            telefone,
            whatsapp,
        });

        return res.json(organizacao);
    },
};