const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({hello:"word"});
});

app.listen(3333);