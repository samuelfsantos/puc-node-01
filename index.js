const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
// versionamento
const v1 = require('./src/routes/produto.route.js');
server.use('/api/v1/', v1);

server.listen(3000, () => {
    console.log('Servidor está funcionando..')
});