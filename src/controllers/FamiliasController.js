const Familias = require('../models/Familias');

module.exports = {
    async create(req, res) {
        const {
            chave,
            senha,
            nome,
            sobrenome,
            qtd_membros,
            mensagem,
            telefone,
            whatsapp,
        } = req.body;

        const familia = await Familias.create({
            chave,
            senha,
            nome,
            sobrenome,
            qtd_membros,
            mensagem,
            telefone,
            whatsapp,
        });

        return res.json(familia);
    }
}