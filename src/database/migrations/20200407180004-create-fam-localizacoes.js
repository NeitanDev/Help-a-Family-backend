'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fam_localizacoes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_familia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'familias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fam_localizacoes');
  }
};
