const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Organizacoes = require('../models/Organizacoes');
const Familias = require('../models/Familias');
const Fam_localizacoes = require('../models/Fam_localizacoes');
const Org_localizacoes = require('../models/Org_localizacoes');

const connection = new Sequelize(dbConfig);

Organizacoes.init(connection);
Familias.init(connection);
Fam_localizacoes.init(connection);
Org_localizacoes.init(connection);

module.exports = connection;