const express = require('express');
const routes = express.Router();

const OrganizacoesContoller = require('./controllers/OrganizacoesContoller');
const FamiliasController = require('./controllers/FamiliasController');

routes.post('/create/familia', FamiliasController.create);

routes.post('/create/organizacao', OrganizacoesContoller.create);

module.exports = routes;