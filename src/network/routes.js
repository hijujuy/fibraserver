const auth = require('../routes/auth');
const usuario = require('../routes/usuario');

const routes = function(server) {
    server.use('/api/auth', auth)
    server.use('/api/usuario', usuario)
    
}

module.exports = routes