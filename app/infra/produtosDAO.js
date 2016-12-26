'use strict'

function ProdutosDAO(connection){
    this.connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this.connection.query('SELECT * FROM livros',callback);
    }

ProdutosDAO.prototype.salva = function(produto,callback){
      this.connection.query('INSERT INTO livros SET ?',produto,callback)
      console.log(produto);
        }

module.exports = function(){
  return ProdutosDAO;
}
