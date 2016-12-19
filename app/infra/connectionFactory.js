//colocar as credenciais do banco em variaveis de ambiente ou arquivos de configuração
let mysql = require('mysql');
//FACTORY METHOD
module.exports = function(){
  return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'LipeOwna0000',
        database: 'topper'
    });
}
