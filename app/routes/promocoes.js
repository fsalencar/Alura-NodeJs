'use strict'

module.exports = function(app){
      app.get("/promocoes/form",function(req,res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.produtosDAO(connection);
        produtosDAO.lista(function(err,result){
          res.render('promocoes/form',{lista:result});
        });
        connection.end();
      });

      app.post("/promocoes",function(req,res){
        let promocao = req.body;
        console.log(promocao);
        res.redirect('/promocoes/form');
      });
};
