const AuthService = require("../services/authService");
const { validationResult } = require("express-validator");
const ApiStatus = require("../handlers/apiStatus");
const path = require("path");

class AuthController {

    //  http://localhost:5000/notes/auth/register
    async register(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Ошибка при валидации"));
            }
            const { email, password } = req.body;
            const userData = await AuthService.registration(email, password);
            res.cookie("accessToken", userData.token, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: false,
            });
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/auth/login
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await AuthService.login(email, password);
            res.cookie("accessToken", userData.token, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: false,
            });
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/auth/activate/:link
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            const link = await AuthService.activate(activationLink);
            if (!link) {
                return res.sendFile(
                    path.join(__dirname, "../public", "activate.html")
                );
            }
            return res.sendFile(
                path.join(__dirname, "../public", "activationError.html")
            );

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();