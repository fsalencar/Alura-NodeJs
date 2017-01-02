'use strict';

//HEAD
    let app = require('./config/express')();
//    let rotasProdutos = require('./app/routes/produtos')(app);
app.listen(process.env.PORT ||3000, function() {
    console.log("Servidor on!");
});
