module.exports = class AuthDto {
    id;
    email;
    isActivated;

    constructor(user) {
        this.id = user.id;
        this.email = user.email;
        this.isActivated = user.isActivated;
    }
};