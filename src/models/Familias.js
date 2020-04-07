const { Model, DataTypes } = require('sequelize');

class Familias extends Model {
    static init(connection) {
        super.init({
            chave: DataTypes.STRING,
            senha: DataTypes.STRING,
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            qtd_membros: DataTypes.INTEGER,
            mensagem: DataTypes.STRING,
            telefone: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }
};

module.exports = Familias;