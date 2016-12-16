'use strict';

let app = require('./config/express')(),
    rotasProdutos = require('./app/routes/produtos')(app);

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor on!");
});
