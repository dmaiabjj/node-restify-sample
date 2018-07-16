const MODULE_ID = 'api:main';

const config = require('./config');
const logger = require('./utils').logger(MODULE_ID);
const restify = require('restify');

logger.info('Initializing server');

// Init Server
const server = restify.createServer({
    log: logger
});

server.pre(function (req, res, next) {
    req.log.debug('%s %s', req.method, req.url);
    next();
});

// Add Routes
require('./routes')(server);

// Serve
server.listen(config.PORT);
logger.info('Server ready. Listening on PORT %s', config.PORT);

// Add Docs
require('./utils').swaggerPage(server);

module.exports = server;
