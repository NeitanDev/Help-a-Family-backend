const express = require('express');
const routes = express.Router();

const OrganizacoesContoller = require('./controllers/OrganizacoesContoller');
const FamiliasController = require('./controllers/FamiliasController');
const LoginController = require('./controllers/LoginController');
const HistoricoController = require('./controllers/HistoricoController');


routes.get('/list/familia', FamiliasController.list);
routes.post('/create/familia', FamiliasController.create);

routes.get('/list/organizacao', OrganizacoesContoller.list);
routes.post('/create/organizacao', OrganizacoesContoller.create);

routes.post('/login/org', LoginController.loginOrg);
routes.post('/login/family', LoginController.loginFamily);

routes.post('/create/:id_familia/historico', HistoricoController.createHelp);
routes.get('/historico/familyList', HistoricoController.familyList);
routes.get('/historico/orgList', HistoricoController.orgList);

module.exports = routes;