const express = require('express');
const routes = require('./routes');
const http = require('http');

require('./database/index');

const app = express();
const server = http.Server(app);

app.use(express.json());
app.use(routes);

server.listen(3333);