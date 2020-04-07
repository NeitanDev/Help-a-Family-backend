const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Organizacoes = require('../models/Organizacoes');

const connection = new Sequelize(dbConfig);

Organizacoes.init(connection);

module.exports = connection;