var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-service',
    bearerOnly: true,
    serverUrl: 'http://192.168.1.47:8080/auth',
    realm: 'Sikander',
    //realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArlEmbdK9hYi5+Lbi/TyDZoD4D09S8XfsNIVV1cyxhPZrvZ9dzKXnWCp6eG9BjyQn7uUyFqexm7ZMHb5aFeZqkrU6dUlE0IOklj6xFeKmSmjyrRPK54yOh0PN669FsRBH4QqmMbQgFIsGUcPVO3nWD6u8/+tRlyyA/mHVo2Y+ZgmDzupq/EaQJ9iA4pUtBhDJxjFQpCv+sDy3kPgM2xTjjZt/IZMHLiKaB3VH81ydgbULYHIOgzcmD3XgDgShJkvIvA+I7uMJRV81qD6zSC8uZRv7t5wJhzvU+RHzINPCxH1ir0k49Y1h33zfGcZBWXIctpnLA3/ssx7AXRJkcPMseQIDAQAB'
    credentials: {
        secret: 'abb46ea8-cea7-43a1-abf1-9f9373e3fa1e'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};
