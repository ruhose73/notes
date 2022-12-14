const Router = require("express")
const router = new Router
const AuthRouter = require("./authRouter")
const UserRouter = require("./userRouter")

//  http://localhost:5000/notes/auth
router.use("/auth", AuthRouter)

//  http://localhost:5000/notes/user
router.use("/user", UserRouter)

module.exports = router