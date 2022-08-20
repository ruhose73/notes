const MailService = require("../services/mailService");
class NotificationController {

    async sendGreetingNotification(req, res, next) {
        try {
            const title = "Новое уведомление";
            const subtitle = "Спасибо за регистрацию"
            const {user, link} = req.body
            
            console.log(user, link, subtitle);
            await MailService.newNotification(user, link, title, subtitle);
            return res.json("Сообщение отправлено");
        } catch (e) {
            return res.status(500);
        }
    }
}

module.exports = new NotificationController();
