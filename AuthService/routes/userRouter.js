const Router = require("express")
const router = new Router

//  http://localhost:5000/notes/auth/activate/:link
router.get("/delete/:userid", AuthController.activate)

module.exports = router