const Router = require("express");
const router = new Router();
const AuthController = require("../controllers/authController");
const { body } = require("express-validator");

//  http://localhost:5000/ecosystem/auth/register
router.post(
    "/register",
    body("email").isEmail(),
    body("password").isLength({ min: 8, max: 24 }),
    AuthController.register
);

//  http://localhost:5000/notes/auth/login
router.post("/login",
    body("email").isEmail(),
    body("password").isLength({ min: 8, max: 24 }),
    AuthController.login);

//  http://localhost:5000/notes/auth/activate/:link
router.get("/activate/:link", AuthController.activate);

module.exports = router;