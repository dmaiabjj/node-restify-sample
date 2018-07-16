const packageJson = require('./package.json');
const API_ROOT = '/api';

module.exports = {
    LOG_LEVEL: process.env['LOG_LEVEL'] || 'debug',
    PORT: process.env['PORT'] || 3000,
    VERSION: process.env['API_VERSION'] || packageJson.version,

    basePath: (path) => {
        return API_ROOT.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
    }
};
