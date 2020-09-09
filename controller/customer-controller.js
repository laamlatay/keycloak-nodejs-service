var express = require('express');
var router = express.Router();

const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get('/anonymous', function(req, res){
    res.send("Hello Anonymous");
});
router.get('/agent', keycloak.protect('agent'),function(req, res){
    res.send("Hello Agent");
});

router.get('/supervisor', keycloak.protect('supervisor'),function(req, res){
    res.send("Hello Supervisor");
});

router.get('/admin',keycloak.protect('administrator'), function(req, res){
    res.send("Hello Admin");
});

module.exports = router;
