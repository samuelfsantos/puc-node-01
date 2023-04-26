const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
server.use(bodyParser.json());
// versionamento
const v1 = require('./src/routes/produto.route.js');
server.use('/api/v1/', v1);

server.listen(3000, () => {
    console.log('Servidor está funcionando..')
});