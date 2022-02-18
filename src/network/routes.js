const auth = require('../routes/auth');
const usuario = require('../routes/usuario');
const response = require('../network/reponse')

const routes = function(server) {
    server.use('/api/auth', auth)
    server.use('/api/usuario', usuario)
    server.use(response.error)
}

module.exports = routes