'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historico', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_organizacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'organizacoes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_familia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'familias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('historico');
  }
};
