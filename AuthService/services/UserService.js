const User = require("../models/User");
const ApiStatus = require("../handlers/apiStatus")
const UserDTO = require("../dto/userDTO");
const bcryptjs = require("bcryptjs");

class UserService {

    async setName(userId, name) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw ApiStatus.badRequest("Пользователь не был найден");
        }
        user.name = name;
        await user.save();
        const userDTO = new UserDTO(user);
        return userDTO;
    }

    async updatePassword(userId, oldPassword, newPassword) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw ApiStatus.badRequest("Пользователь не был найден");
        }
        const isPassEquals = await bcryptjs.compare(oldPassword, user.password);
        if (!isPassEquals) {
            throw ApiStatus.badRequest("Неверные данные");
        }
        const hashedPassword = await bcryptjs.hash(newPassword, 5);
        user.password = hashedPassword;
        await user.save();
        return null
    }

    async deleteUser(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw ApiStatus.badRequest("Пользователь не был найден");
        }
        await User.destroy({ where: { id: userId } });
        return null
    }
}


module.exports = new UserService();