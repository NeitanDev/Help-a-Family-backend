const Familias = require('../models/Familias');
const Fam_localizacoes = require('../models/Fam_localizacoes');
const connection = require('../database/index');

module.exports = {

    async list(req, res) {
        const family = await connection.query("SELECT id ,nome, sobrenome, qtd_membros, mensagem, telefone, whatsapp, longitude, latitude, endereco, number FROM familias, fam_localizacoes WHERE fam_localizacoes.id_familia= familias.id ORDER BY familias.id",
            { type: connection.QueryTypes.SELECT });

        return res.json(family);
    },

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