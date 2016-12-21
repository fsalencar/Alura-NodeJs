'use strict';

//let connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, res) {
      let connection = app.infra.connectionFactory();
      let produtosBanco = app.infra.produtosBanco;
        //aplicar camada de persistência
        produtosBanco.lista(connection,function(err,result) {
            res.render('produtos/lista',{lista:result});
        });

        connection.end();
    });

  //  app.get('produtos/remove',function(){
  //  produtosBanco.carrega(connection,id,callback);
//  });
}
