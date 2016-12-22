'use strict';

//let connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, res) {
      let connection = app.infra.connectionFactory();
      let produtosBanco = app.infra.produtosBanco(connection);
        //aplicar camada de persistência
        produtosBanco.lista(function(err,result) {
            res.render('produtos/lista',{lista:result});
        });
        connection.end();
    });

    app.get('produtos/remove',function(){
    let connection = app.infra.connectionFactory();
    let produtosBanco = app.infra.produtosBanco(connection);
    let produto = produtosBanco.carrega(id,callback);
    if(produto){
      produtosBanco.remove(connection,produto,callback);
    }
  });
}
