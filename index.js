const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
server.use(bodyParser.json());

require('./src/routes/produto.route.js')(server);

server.listen(3000, () => {
    console.log('Servidor está funcionando..')
});