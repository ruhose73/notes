module.exports = class AuthDto {
    id;
    email;
    name;

    constructor(user) {
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
    }
};