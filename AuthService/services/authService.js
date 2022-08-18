const User = require("../models/User");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const ApiStatus = require("../handlers/apiStatus")
const AuthDTO = require("../dto/authDTO");
const tokenService = require("./tokenService");
const mailService = require("./mailService");


class AuthService {

    async registration(email, password) {
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            throw ApiStatus.badRequest("Пользователь с таким email уже существует");
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4();
        const user = await User.create({
            email,
            password: hashedPassword,
            activationLink,
        });
        const userLink =
            process.env.API_URL + "/notes/auth/activate/" + activationLink;
        await mailService.sendActivationMail(email, userLink);
        const authDTO = new AuthDTO(user);
        const token = tokenService.generateToken({ ...authDTO });
        return { token, user: authDTO };
    }

    async login(email, password) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw ApiStatus.badRequest("Пользователь с таким email не был найден");
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiStatus.badRequest("Неверные данные");
        }
        const authDTO = new AuthDTO(user);
        const token = tokenService.generateToken({ ...authDTO });
        return { token, user: authDTO };
    }

    async activate(activationLink) {
        const user = await User.findOne({ where: { activationLink } });
        if (!user) {
            throw ApiStatus.badRequest("Неккоректная ссылка активации");
        }
        user.isActivated = true;
        user.activationLink = null;
        await user.save();
    }
}

module.exports = new AuthService();