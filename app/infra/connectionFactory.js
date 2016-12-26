'use strict'

//colocar as credenciais do banco em variaveis de ambiente ou arquivos de configuração
let mysql = require('mysql');
//FACTORY METHOD
function createDbConnection(){
  return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'toppergg',
        database: 'topper'
    });
}

module.exports = function(){
  return createDbConnection;
}
