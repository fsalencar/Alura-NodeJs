'use strict';

module.exports = function(app) {
  let listaProdutos = function(req, res) {
      let connection = app.infra.connectionFactory();
      let produtosDAO = new app.infra.produtosDAO(connection);
      produtosDAO.lista(function(err,result) {
            res.format({
              html: function(){
                    res.render('produtos/lista',{lista:result});
              },
              json:function(){
                res.json(result)
              }

            });
            res.render('produtos/lista',{lista:result});
        });
        connection.end();
    };

    app.get('/produtos',listaProdutos);

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form',{errosValidacao:{},produto:{}});
    });
    app.post('/produtos',function(req,res){

      let produto = req.body;

        req.assert('titulo', 'Titulo do livro é obrigatório!').notEmpty();
        req.assert('preco','Formato de preço Inválido!').isFloat();
        req.assert('descricao', 'Insira algo na descrição para facilitar o entendimento do livro!').notEmpty();

      var errosJson = req.validationErrors();
      if (errosJson) {
                      res.format({
                        html: function(){
                                res.status(400).render('produtos/form',{errosValidacao:errosJson,produto:produto});
                              },
                        json:function(){
                              res.status(400).json(errosJson)
                              }

                      });

          return;
      }

      let connection = app.infra.connectionFactory();
      let produtosDAO = new app.infra.produtosDAO(connection);
      produtosDAO.salva(produto,function(err,result){
        console.log(err);
      res.redirect('/produtos');
      });
    });
  }
