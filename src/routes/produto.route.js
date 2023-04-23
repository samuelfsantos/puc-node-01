module.exports = (app) => {
    const produtos = require('../controllers/produto.controller.js');

    // Recupera todos os Produtos
    app.get('/produtos', produtos.findAll);

    // Cria um novo Produto
    app.post('/produtos', produtos.create);

    // Retrieve a single Note with noteId
    //app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}