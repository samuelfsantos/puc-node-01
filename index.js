const express = require('express');
const res = require('express/lib/response');
const server = express();
const filmes = require('./src/data/filmes.json');

server.get('/filmes', (req,res) => {
    return res.json(filmes)
});

server.listen(3000, () => {
    console.log('Servidor está funcionando..')
});