const Router = require("express")
const router = new Router

const NotificationController = require("../controllers/notificationController")

//  http://localhost:5200/mail/sendGreetingNotification
router.use("/sendGreetingNotification", NotificationController.sendGreetingNotification)

module.exports = router