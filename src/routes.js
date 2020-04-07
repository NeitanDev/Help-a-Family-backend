const express = require('express');
const routes = express.Router();

const OrganizacoesContoller = require('./controllers/OrganizacoesContoller');
const FamiliasController = require('./controllers/FamiliasController');
const Fam_localizacoesController = require('./controllers/Fam_localizacoesController');
const Org_localizacoesController = require('./controllers/Org_localizacoesController');

routes.post('/create/familia', FamiliasController.create);

routes.post('/create/organizacao', OrganizacoesContoller.create);

routes.post('/create/fam_localizacao', Fam_localizacoesController.create);

routes.post('/create/org_localizacao', Org_localizacoesController.create);

module.exports = routes;