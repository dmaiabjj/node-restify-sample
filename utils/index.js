const config = require('../config');
const bunyan = require('bunyan');
const swaggerJsdoc = require('restify-swagger-jsdoc');

module.exports = {
    logger: (module_id) => {
        return bunyan.createLogger({
            name: module_id,
            level: config.LOG_LEVEL
        })
    },
    swaggerPage: (server) => {
        return swaggerJsdoc.createSwaggerPage({
            title: 'API documentation', // Page title (required)
            version: config.VERSION,
            server: server,
            path: '/docs/swagger',
            host: 'localhost:3000',
            apis: [ `${__dirname}/../routes/ping/index.js` ],
            routePrefix: 'api'
        })
    }
};

