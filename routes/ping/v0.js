/**
 * Send back API version (0.0.1).
 */
module.exports = (req, res, next) => {
    res.send({version: '0.0.1'});
    return next()
};
