//const Familias = require('../models/Familias');
const connection = require('../database/index');

module.exports = {
    async listFamilias(req, res) {
        const familys = await connection.query("SELECT familias.id, nome, sobrenome, qtd_membros,longitude, latitude,mensagem FROM familias, fam_localizacoes WHERE fam_localizacoes.id_familia= familias.id ORDER BY familias.id;",
            { type: connection.QueryTypes.SELECT });

        return res.json(familys);
    }
};