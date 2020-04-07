const { Model, DataTypes } = require('sequelize');

class Organizacoes extends Model {
    static init(connection) {
        super.init({
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            telefone: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }
};

module.exports = Organizacoes;