const { Model, DataTypes } = require('sequelize');

class Org_localizacoes extends Model {
    static init(connection) {
        super.init({
            longitude: DataTypes.DECIMAL,
            latitude: DataTypes.DECIMAL,
            endereco: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: connection,
        })
    }
};

module.exports = Org_localizacoes;