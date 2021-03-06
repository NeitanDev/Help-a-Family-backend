const express = require('express');
const routes = express.Router();

const OrganizacoesContoller = require('./controllers/OrganizacoesContoller');
const FamiliasController = require('./controllers/FamiliasController');
const LoginController = require('./controllers/LoginController');
const HistoricoController = require('./controllers/HistoricoController');
const MapController = require('./controllers/MapController')


routes.get('/list/familia', FamiliasController.list); ///rota que não vai ser usada na aplicação
routes.post('/create/familia', FamiliasController.create);

routes.get('/list/organizacao', OrganizacoesContoller.list); ///rota que não vai ser usada na aplicação
routes.post('/create/organizacao', OrganizacoesContoller.create);

routes.post('/login/org', LoginController.loginOrg);
routes.post('/login/family', LoginController.loginFamily);

routes.post('/create/:id_familia/historico/:id_organizacao', HistoricoController.createHelp);
routes.get('/historico/familyList', HistoricoController.familyList);
routes.get('/historico/orgList/:id_org', HistoricoController.orgList);

routes.get('/map/familyList', MapController.listFamilias);

module.exports = routes;