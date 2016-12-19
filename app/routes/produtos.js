'use strict';

let connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, res) {
      let connection = connectionFactory();

        //aplicar camada de persistência
        connection.query('select * from livros', function(err, result) {
            res.render('produtos/lista', {lista: result});
        });

        connection.end();
    });
}
