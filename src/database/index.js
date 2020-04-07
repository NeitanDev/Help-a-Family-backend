const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Organizacoes = require('../models/Organizacoes');
const Familias = require('../models/Familias');

const connection = new Sequelize(dbConfig);

Organizacoes.init(connection);
Familias.init(connection);

module.exports = connection;