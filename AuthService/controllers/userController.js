const UserService = require("../services/UserService");
const ApiStatus = require("../handlers/apiStatus");

class UserController {

    //  http://localhost:5000/notes/user/setName
    async setName(req, res, next) {
        try {
            const { userId, name } = req.body;
            const newName = await UserService.setName(userId, name);
            return res.json(newName);
        } catch (e) {
            next(e);
        }
    }

    // http://localhost:5000/notes/user/updatePassword
    async updatePassword(req, res, next) {
        try {
            const { userId, oldPassword, newPassword } = req.body;
            await UserService.updatePassword(userId, oldPassword, newPassword);
            return next(ApiStatus.accepted("Пароль изменен"));
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/notes/user/delete/:userId
    async deleteUser(req, res, next) {
        try {
            const userId = req.params.userId;
            await UserService.deleteUser(userId);
            res.clearCookie("accessToken");
            return next(ApiStatus.accepted("Пользователь удален"));
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();