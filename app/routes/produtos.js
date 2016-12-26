'use strict';

//let connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
  let listaProdutos = function(req, res) {
      let connection = app.infra.connectionFactory();
      let produtosDAO = new app.infra.produtosDAO(connection);
      produtosDAO.lista(function(err,result) {
            res.render('produtos/lista',{lista:result});
        });
        connection.end();
    };

    app.get('/produtos',listaProdutos);

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form')
    });
    app.post('/produtos/salva',function(req,res){

      let produto = req.body;
    //  console.log(produto);
      let connection = app.infra.connectionFactory();
      let produtosDAO = new app.infra.produtosDAO(connection);
      produtosDAO.salva(produto,function(err,result){
     res.redirect('/produtos');
    //    listaProdutos(req,res);
      });
    });
  }

//    app.get('produtos/remove',function(){
//    let connection = app.infra.connectionFactory();
//    let produtosBanco = app.infra.produtosDAO(connection);
//    let produto = produtosBanco.carrega(id,callback);
//      if(produto){
//        produtosBanco.remove(connection,produto,callback);
//      }
//  });
//}
