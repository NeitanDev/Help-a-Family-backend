const express = require('express');
const routes = express.Router();

const OrganizacoesContoller = require('./controllers/OrganizacoesContoller');
const FamiliasController = require('./controllers/FamiliasController');


routes.get('/list/familia', FamiliasController.list);
routes.post('/create/familia', FamiliasController.create);

routes.get('/list/organizacao', OrganizacoesContoller.list);
routes.post('/create/organizacao', OrganizacoesContoller.create);

module.exports = routes;