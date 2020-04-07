const express = require('express');
const routes = express.Router();

const OrganizacoesContoller = require('./controllers/OrganizacoesContoller');

routes.post('/create/organizacao', OrganizacoesContoller.create);

module.exports = routes;