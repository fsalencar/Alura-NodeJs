'use strict'

module.exports = function(){
        this.lista = function(connection,callback){
            connection.query('select * from livros',callback);
            console.log("Topper")
            }
            return this;
}
