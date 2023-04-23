const Produtos = require('../models/produto.model.js');

// Recupera todos os Produtos da lista
exports.findAll = (req, res) => {
    res.json(Produtos)
};

// Cria e Salva novo Produto
exports.create = (req, res) => {
    // Validate request
    if(!req.body.descricao) {
        return res.status(400).send({
            message: "A 'descrição' do produto não pode estar vazia!"
        });
    }
    if(!req.body.valor) {
        return res.status(400).send({
            message: "O 'valor' do produto não pode estar vazio!"
        });
    }
    if(!req.body.descricao) {
        return res.status(400).send({
            message: "A 'marca' do produto não pode estar vazia!"
        });
    }
    // Cria um novo Produto
    const ultimoId = Produtos.reduce(
        (max, prod) => (prod.id > max ? prod.id : max), Produtos[0].id
      );
    const produto = {
        id: ultimoId + 1,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    };
    // Salva o produto na lista
    Produtos.push(produto);
    // Retorna msg de sucesso
    return res.send({
        message: "Produto criado com sucesso!"
    });
};