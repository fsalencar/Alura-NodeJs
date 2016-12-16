module.exports = function(app) {
    app.get('/produtos', function(req, res) {

        //colocar as credenciais do banco em variaveis de ambiente ou arquivos de configuração
        let mysql = require('mysql'),
            connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'LipeOwna0000',
                database: 'topper'
            });

        //aplicar camada de persistência
        connection.query('select * from livros', function(err, result) {
            res.render('produtos/lista', {
                lista: result
            });
        });

        connection.end();
    });
}
