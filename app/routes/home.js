'use strict'

module.exports = function(app) {
  app.get('/',function (req,res){
    let connection = app.infra.connectionFactory();
    let produtosDAO = new app.infra.produtosDAO(connection);
    produtosDAO.lista(function(err,result){
        res.render('home/index',{livros:result});
    });
    connection.end();
  });
};
