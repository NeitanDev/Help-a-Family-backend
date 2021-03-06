const Organizacoes = require('../models/Organizacoes');
const Org_localizacoes = require('../models/Org_localizacoes');
const connection = require('../database/index');

module.exports = {

    async list(req, res) {
        const organizations = await connection.query("SELECT nome, telefone, whatsapp, longitude, latitude, endereco, number FROM organizacoes, org_localizacoes WHERE org_localizacoes.id_organizacao= organizacoes.id ORDER BY organizacoes.id;",
            { type: connection.QueryTypes.SELECT });

        return res.json(organizations);
    },

    async create(req, res) {
        const {
            email,
            senha,
            nome,
            descricao,
            telefone,
            whatsapp,
            longitude,
            latitude,
            endereco,
            number,
        } = req.body;

        const organizacao = await Organizacoes.create({
            email,
            senha,
            nome,
            descricao,
            telefone,
            whatsapp,
        });

        const { id } = organizacao;

        const org_local = await Org_localizacoes.create({
            id_organizacao: id,
            longitude,
            latitude,
            endereco,
            number,
        });

        return res.json({ organizacao, org_local });
    },
};