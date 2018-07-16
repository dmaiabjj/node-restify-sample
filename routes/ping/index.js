const config    = require('../../config');
const restify = require('restify');

/**
 * @swagger
 * /ping:
 *   get:
 *     description: Ping the server and get back current API version.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: ping successful
 */
module.exports = (server) => {
    server.get(
        config.basePath('/ping'),
        restify.plugins.conditionalHandler([
        { version: '0.0.1', handler: require('./v0') },
        { version: config.VERSION, handler: require('./v1') }
    ]));
};
