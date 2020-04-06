const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ hello: "word" });
});

module.exports = routes;