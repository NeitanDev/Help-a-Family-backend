const { Model, DataTypes } = require('sequelize');

class Historico extends Model {
    static init(connection) {
        super.init({
            id_organizacao: DataTypes.INTEGER,
            id_familia: DataTypes.INTEGER,
            data: DataTypes.DATE,
        }, {
            sequelize: connection,
            tableName: 'historico'
        })
    }
};

module.exports = Historico;