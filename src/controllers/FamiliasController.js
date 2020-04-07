const Familias = require('../models/Familias');
const Fam_localizacoes = require('../models/Fam_localizacoes');

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
            longitude,
            latitude,
            endereco,
            number,
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

        const { id } = familia;

        const fam_local = await Fam_localizacoes.create({
            id_familia: id,
            longitude,
            latitude,
            endereco,
            number,
        });

        return res.json({ familia, fam_local });
    }
}