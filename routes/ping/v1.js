/**
 * Send back API version (1.0.0).
 */
module.exports = (req, res, next) => {
    res.send({version: '1.0.0'});
    return next()
};
