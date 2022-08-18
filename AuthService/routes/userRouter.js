const Router = require("express")
const router = new Router
const UserController = require("../controllers/userController");
const AuthMiddleware = require("../middlewares/authMiddleware")

//  http://localhost:5000/notes/user/setName
router.post("/setName", AuthMiddleware, UserController.setName)

// http://localhost:5000/notes/user/updatePassword
router.post("/updatePassword", AuthMiddleware, UserController.updatePassword)

//  http://localhost:5000/notes/user/delete/:userId
router.delete("/delete/:userId", AuthMiddleware, UserController.deleteUser)


module.exports = router