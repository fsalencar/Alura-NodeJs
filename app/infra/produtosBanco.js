'use strict'

module.exports = function(){
        this.lista = function(connection,callback){
            connection.query('select * from produtos',callback);
            }
            return this;
};
