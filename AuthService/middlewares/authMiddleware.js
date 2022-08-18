const ApiError = require("../handlers/apiStatus");
const TokenService = require("../services/tokenService");

module.exports = function (req, res, next) {

    try {
        if (req.cookies.accessToken != null) {
            const accessToken = req.cookies.accessToken;
            const userData = TokenService.validateAcessToken(accessToken)
            if (!userData) {
                return next(ApiError.UnauthorizedError());
            }
            req.user = userData
            next()
        } else {
            const accessToken = req.headers.authorization != null ? req.headers.authorization.split(' ')[1] : null
            const userData = TokenService.validateAcessToken(accessToken)
            if (!userData) {
                return next(ApiError.UnauthorizedError());
            }
            req.user = userData;
            next();
        }

    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}