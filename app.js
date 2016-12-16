'use strict';

<<<<<<< HEAD
app.listen(process.env.PORT || 3000,function(){
=======
let app = require('./config/express')(),
    rotasProdutos = require('./app/routes/produtos')(app);

app.listen(process.env.PORT || 3000, function() {
>>>>>>> abc3eaa332c2bcc56dd567976c5d635979143f5a
    console.log("Servidor on!");
});
