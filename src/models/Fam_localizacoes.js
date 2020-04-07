const { Model, DataTypes } = require('sequelize');

class Fam_localizacoes extends Model {
    static init(connection) {
        super.init({
            longitude: DataTypes.DECIMAL,
            latitude: DataTypes.DECIMAL,
            endereco: DataTypes.STRING,
            number: DataTypes.INTEGER,
            id_familia: DataTypes.INTEGER,
        }, {
            sequelize: connection,
        })
    }
};

module.exports = Fam_localizacoes;