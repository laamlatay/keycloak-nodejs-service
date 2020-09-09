var express = require('express');
var app = express();

const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

app.get('/', function(req, res){
    res.send("Server is up!");
});
var customerController = require('./controller/customer-controller.js');
app.use('/customer', customerController);

app.listen(3000);
